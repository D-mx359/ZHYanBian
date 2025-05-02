var chartDom = document.getElementById('left1Chart');
var myChart1 = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}公顷 ({d}%)'
  },
  legend: {
    textStyle:{
      color:'white'
    },
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      textStyle:{
        color:'white'
      },
      data: [
        { value: 1486, name: '红松' },
        { value: 529, name: '云杉' },
        { value: 15752, name: '落叶松' },
        { value: 22, name: '胡桃秋' },
        { value: 123, name: '椴树' },
        { value: 57509, name: '柞树' },
        { value: 710, name: '白桦' }
      ]
    }
  ]
};

option && myChart1.setOption(option);
var chartDom = document.getElementById('middle2Chart');
var myChart3 = echarts.init(chartDom);
var option;
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: 'white'
      }
    }
  },
  textStyle:{
    color:'white'
  },
  legend: {
    data: ['面积/公顷', '采集量/吨'],
  },
  xAxis: [
    {
      type: 'category',
      data: ['越桔','山葡萄公顷','蓝靛果忍冬','软枣猕猴桃','山核桃','榛子','红松'],
      axisPointer: {
        type: 'shadow',
      },
      axisLabel: {
        textStyle:{
        color:'white'
      },
      interval:0
      },
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '面积/公顷',
      min: 0,
      max: 66000,
      interval: 11000,
      axisLabel: {
        textStyle:{
        color:'white'
      },
      formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: '采集量/吨',
      min: 0,
      max: 1200,
      interval: 200,
      axisLabel: {
        textStyle:{
          color:'white'
        },
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: '面积',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' 公顷';
        }
      },
      data: [
        2000,19570,500,4590,38160,24380,64250
      ]
    },
    {
      name: '采集量',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + ' 吨';
        }
      },
      data: [150,354,10,89.5,1000,107,1036]
    }
  ]
};
option && myChart3.setOption(option);
//其中
// var chartDom = document.getElementById('left2Chart');
// var myChart2 = echarts.init(chartDom);
// var option;
// option = {
//   tooltip: {
//     trigger: 'axis',
//     axisPointer: {
//       type: 'cross',
//       crossStyle: {
//         color: '#fff'
//       }
//     }
//   },
//   textStyle:{
//     color:'white'
//   },
//   legend: {
//     data: ['面积/公顷', '采集量/吨'],
//   },
//   xAxis: [
//     {
//       type: 'category',
//       data: ['黄芪','党参','穿龙\n\n薯蓣','龙胆草','五味子','细辛','其他'],
//       axisPointer: {
//         type: 'shadow',
//       },
//       axisLabel: {
//         textStyle:{
//         color:'white'
//       },
//       interval:0
//       },
//     }
//   ],
//   yAxis: [
//     {
//       type: 'value',
//       name: '面积/公顷',
//       min: 0,
//       max: 7500,
//       interval: 1500,
//       axisLabel: {
//         textStyle:{
//         color:'white'
//       },
//       formatter: '{value}'
//       }
//     },
//     {
//       type: 'value',
//       name: '采集量/吨',
//       min: 0,
//       max: 2500,
//       interval: 500,
//       axisLabel: {
//         textStyle:{
//           color:'white'
//         },
//         formatter: '{value}'
//       }
//     }
//   ],
//   series: [
//     {
//       name: '面积',
//       type: 'bar',
//       tooltip: {
//         valueFormatter: function (value) {
//           return value + ' 公顷';
//         }
//       },
//       data: [
//         1950,2420,3800,540,7120,1350,6000
//       ]
//     },
//     {
//       name: '采集量',
//       type: 'line',
//       yAxisIndex: 1,
//       tooltip: {
//         valueFormatter: function (value) {
//           return value + ' 吨';
//         }
//       },
//       data: [600,1110,2300,30,300,50,1300]
//     }
//   ]
// };
// option && myChart2.setOption(option);
var chartDom = document.getElementById('left2Chart');
var myChart2 = echarts.init(chartDom);
var option;
const colors = ['#07d5f9d7', '#07f1f9', '#0565f6', '#1ef1f8', '#1ef1f8'];
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
const data = [
  {
    name: '药用\n植物',
    label:{
      fontSize:8
    },
    itemStyle: {
      color: colors[1]
    },
    children: [
      {
        name: '名贵\n药材',
        label:{
          fontSize:8
        },
        children: [
          {
            name:'5☆',
            children: [
              {
                name: '人参'
              },
              {
                name: '西洋参'
              },
              {
                name: '细辛'
              },
              {
                name: '桔梗'
              },
              {
                name: '淫羊霍'
              },
              {
                name: '党参'
              }
            ]
          }
        ]
      },
      {
        name: '野生\n药用',
        label:{
          fontSize:8
        },
        children: [
          {
            name: '4☆',
            children: [
              {
                name: '黄芪'
              },
              {
                name:'穿龙薯蓣'
              },
              {
                name:'天麻'
              },
              {
                name:'贝母'
              },
              {
                name:'红景天'
              },
              {
                name:'水参'
              }
              
            ]
          }
        ]
      }
    ]
  },
  {
    name: '可食用\n资源',
    label:{
      fontSize:8
    },
    itemStyle: {
      color: colors[2],
    },
    children: [
      {
        name: '山野菜',
        label:{
          fontSize:8
        },
        children: [
          {
            name: '3☆',
            
            children: [
              {
                name: '薇菜'
              },
              {
                name: '蕨菜'
              },
              {
                name: '猴腿'
              },
              {
                name: '刺嫩芽'
              },
              {
                name: '刺五加'
              }
            ]
          }
        ]
      },
      {
        name: '野生菌',
        label:{
          fontSize:8
        },
        children: [
          {
            name: '3☆',
            children: [
              {
                name: '黑木耳'
              },
              {
                name: '松茸'
              },
              {
                name: '榛蘑'
              },
              {
                name: '元蘑'
              },
              {
                name: '平菇'
              }
            ]
          }
        ]
      },
    ]
  }
];
for (let j = 0; j < data.length; ++j) {
  let level1 = data[j].children;
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
      color: data[j].itemStyle.color
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
      data: data,
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
            shadowColor: colors[2],
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
  