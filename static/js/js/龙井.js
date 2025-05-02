var chartDom = document.getElementById('left1Chart');
var myChart1 = echarts.init(chartDom);
var option;
const data1 = {
  name: '各种\n\n赞誉',
  children: [
      {
        name: '教育之乡'
      },
      {
        name: '歌舞之乡'
      },
      {
        name: '苹果梨之乡'
      },
      {
        name: '松茸之乡'
      },
      {
        name: '文化之乡'
      }
  ]
};
option = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  series: [
    {
      type: 'tree',
      id: 0,
      name: 'tree1',
      data: [data1],
      top: '2%',
      left: '15%',
      bottom: '2%',
      right: '25%',
      symbolSize: 8,
      edgeShape: 'polyline',
      edgeForkPosition: '63%',
      initialTreeDepth: 2,
      lineStyle: {
        width: 1
      },
      label: {
        // backgroundColor: '#fff',
        position: 'left',
        verticalAlign: 'middle',
        align: 'right',
        color:'#fff',
        fontSize:'15'
      },
      leaves: {
        label: {
          position: 'right',
          verticalAlign: 'middle',
          align: 'left',
          color:'#fff'
        }
      },
      emphasis: {
        focus: 'descendant'
      },
      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750
    }
  ]
};
option && myChart1.setOption(option);

var chartDom = document.getElementById('left2Chart');
var myChart2 = echarts.init(chartDom);
var option;
const colors = ['#07d5f9d7',  '#0565f6', '#07f1f9','#1ef1f8','#1ef1f8'];
// const bgColor = '#2E2733';
const bgColor = '';
const itemStyle = {
  star5: {
    color: colors[0]
  },
  star4: {
    color: colors[1]
  },
  star3: {
    color: colors[2]
  },
  star2: {
    color: colors[3]
  }
};
const data2 = [
  {
    name: '自然\n资源',
    label:{
      fontSize:8
    },
    itemStyle: {
      color: colors[0]
    },
    children: [
      {
        name: '动物\n资源',
        label:{
          fontSize:8
        },
        children: [
          {
            name:'5☆',
            children: [
              {
                name: '黑熊'
              },
              {
                name: '猞猁'
              },
              {
                name: '燕隼'
              },
              {
                name: '短耳鹗'
              },
              {
                name: '鹊鹞'
              },
              {
                name: '鸳鸯'
              }
            ]
          }
        ]
      },
      {
        name: '森林\n资源',
        label:{
          fontSize:8
        },
        children: [
          {
            name:'4☆',
            children: [
              {
                name: '赤松'
              }
            ]
          }
        ]
      },
      {
        name: '矿产\n资源',
        label:{
          fontSize:8
        },
        children: [
          {
            name:'3☆',
            children: [
              {
                name: '铅'
              },
              {
                name: '锌'
              },
              {
                name: '金'
              },
              {
                name: '镉'
              },
              {
                name: '铁'
              },
              {
                name: '钼'
              }
            ]
          }
        ]
      },
    ]
  },
];
for (let j = 0; j < data2.length; ++j) {
  let level1 = data2[j].children;
  for (let i = 0; i < level1.length; ++i) {
    let block = level1[i].children;
    let bookScore = [];
    let bookScoreId;
    for (let star = 0; star < block.length; ++star) {
      let style = (function (name) {
        switch (name) {
          case '5☆':
            bookScoreId = 0;
            return itemStyle.star5;
          case '4☆':
            bookScoreId = 1;
            return itemStyle.star4;
          case '3☆':
            bookScoreId = 2;
            return itemStyle.star3;
        }
      })(block[star].name);
      block[star].label = {
        color: style.color,
        downplay: {
          opacity: 0.5
        }
      };
      if (block[star].children) {
        style = {
          opacity: 1,
          color: style.color
        };
        block[star].children.forEach(function (book) {
          book.value = 1;
          book.itemStyle = style;
          book.label = {
            color: style.color
          };
          let value = 1;
          if (bookScoreId === 0 || bookScoreId === 3) {
            value = 5;
          }
          if (bookScore[bookScoreId]) {
            bookScore[bookScoreId].value += value;
          } else {
            bookScore[bookScoreId] = {
              color: colors[bookScoreId],
              value: value
            };
          }
        });
      }
    }
    level1[i].itemStyle = {
      color: data2[j].itemStyle.color
    };
  }
}
option = {
  backgroundColor: bgColor,
  color: colors,
  series: [
    {
      type: 'sunburst',
      center: ['40%', '48%'],
      data: data2,
      sort: function (a, b) {
        if (a.depth === 1) {
          return b.getValue() - a.getValue();
        } else {
          return a.dataIndex - b.dataIndex;
        }
      },
      label: {
        rotate: 'radial',
        color: bgColor
      },
      itemStyle: {
        borderColor: bgColor,
        borderWidth: 2
      },
      levels: [
        {},
        {
          r0: 0,
          r: 30,
          label: {
            rotate: 0,
            color:'#fff'
          }
        },
        {
          r0: 30,
          r: 65,
          label:{
            color:'#fff'
          }
        },
        {
          r0: 65,
          r: 85,
          itemStyle: {
            shadowBlur: 2,
            shadowColor: colors[1],
            color: 'transparent'
          },
          label: {
            rotate: 'tangential',
            fontSize: 15,
            color: colors[0]
          }
        },
        {
          r0: 85,
          r: 105,
          itemStyle: {
            shadowBlur: 80,
            shadowColor: colors[0]
          },
          label: {
            position: 'outside',
            textShadowBlur: 5,
            textShadowColor: '#333'
          },
          downplay: {
            label: {
              opacity: 0.5
            }
          }
        }
      ]
    }
  ]
};
option && myChart2.setOption(option);
//其中
var chartDom = document.getElementById('middle2Chart');
var myChart3 = echarts.init(chartDom);
var option;
const data = {
  name: '基础\n\n建设',
  children: [
      {
        name: '改造小街小巷44条'
      },
      {
        name: '新增城市停车位1943个'
      },
      {
        name: '新建改建各类管网50公里'
      },
      {
        name: '新建安置住房8092套'
      },
      {
        name: '新改建桥梁座'
      },
      {
        name: '建设水利项目64个'
      },
      {
        name: '新建堤防29.72公里'
      },
      {
        name: '新改建农村公路174公里'
      }
  ]
};
option = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  series: [
    {
      type: 'tree',
      id: 0,
      name: 'tree1',
      data: [data],
      top: '2%',
      left: '15%',
      bottom: '2%',
      right: '35%',
      symbolSize: 8,
      edgeShape: 'polyline',
      edgeForkPosition: '63%',
      initialTreeDepth: 2,
      lineStyle: {
        width: 1
      },
      label: {
        // backgroundColor: '#fff',
        position: 'left',
        verticalAlign: 'middle',
        align: 'right',
        color:'#fff',
        fontSize:'15'
      },
      leaves: {
        label: {
          position: 'right',
          verticalAlign: 'middle',
          align: 'left',
          color:'#fff'
        }
      },
      emphasis: {
        focus: 'descendant'
      },
      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750
    }
  ]
};
option && myChart3.setOption(option);

$(function(){
  var index=0;
  var f;
  dingshiqi();
  function dingshiqi(){
      f = setInterval(function(){
          if(index==$(".slide-img").length-1){
              index=0;
              $(".slide-img").css("opacity","0");
              $(".slide-img").eq(index).css("opacity","1");
              $(".btn").css("background-color","#ffffff");
              $(".btn").eq(index).css("background-color","#00ffff");
          }else{
              index++;
              $(".slide-img").css("opacity","0");
              $(".slide-img").eq(index).css("opacity","1");
              $(".btn").css("background-color","#ffffff");
              $(".btn").eq(index).css("background-color","#00ffff");
          }
      },4000)
  }
  $(".btn").click(function(){
      clearInterval(f);
      var indexx=$(this).index();
      index=indexx;
      $(".slide-img").css("opacity","0");
      $(".slide-img").eq(index).css("opacity","1");
      $(".btn").css("background-color","#ffffff");
      $(".btn").eq(index).css("background-color","#00ffff");
      dingshiqi();
  })
})
  
  