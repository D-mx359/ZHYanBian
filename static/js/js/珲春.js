var chartDom = document.getElementById('left1Chart');
var myChart1 = echarts.init(chartDom);
var option;
// const data1 = {
//   name: '经济\n\n动物',
//   children: [
//     {
//       name: '药用动物',
//       children: [
//         {
//           name: ''
//         },
//         {
//           name: ''
//         },
//         {
//           name: ''
//         },
//         {
//           name: ''
//         },
//         {
//           name: ''
//         }
//       ]
//     },
//     {
//       name: '毛皮动物',
//       children: [
//         {
//           name: '紫貂'
//         },
//         {
//           name: '水獭'
//         },
//         {
//           name: '猞猁'
//         },
//         {
//           name: '灰鼠'
//         },
//         {
//           name: '貉'
//         }
//       ]
//     }
//   ]
// };
// option = {
//   tooltip: {
//     trigger: 'item',
//     triggerOn: 'mousemove'
//   },
//   series: [
//     {
//       type: 'tree',
//       id: 0,
//       name: 'tree1',
//       data: [data1],
//       top: '2%',
//       left: '12%',
//       bottom: '2%',
//       right: '18%',
//       symbolSize: 8,
//       edgeShape: 'polyline',
//       edgeForkPosition: '63%',
//       initialTreeDepth: 2,
//       lineStyle: {
//         width: 1
//       },
//       label: {
//         // backgroundColor: '#fff',
//         position: 'left',
//         verticalAlign: 'middle',
//         align: 'right',
//         color:'#fff',
//         fontSize:'15'
//       },
//       leaves: {
//         label: {
//           position: 'right',
//           verticalAlign: 'middle',
//           align: 'left',
//           color:'#fff'
//         }
//       },
//       emphasis: {
//         focus: 'descendant'
//       },
//       expandAndCollapse: true,
//       animationDuration: 550,
//       animationDurationUpdate: 750
//     }
//   ]
// };

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
    name: '经济\n动物',
    label:{
      fontSize:15
    },
    itemStyle: {
      color: colors[0]
    },
    children: [
      {
        name: '药用\n动物',
        label:{
          fontSize:15
        },
        children: [
          {
            name:'5☆',
            children: [
              {
                name: '梅花鹿'
              },
              {
                name: '马鹿'
              },
              {
                name: '熊'
              },
              {
                name: '麝'
              },
              {
                name: '刺猬'
              }
            ]
          }
        ]
      },
      {
        name: '毛皮\n动物',
        label:{
          fontSize:15
        },
        children: [
          {
            name:'4☆',
            children: [
              {
                name: '紫貂'
              },
              {
                name: '水獭'
              },
              {
                name: '猞猁'
              },
              {
                 name: '灰鼠'
              },
              {
                name: '貉'
              }
            ]
          }
        ]
      }
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
          r: 40,
          label: {
            rotate: 0,
            color:'#fff'
          }
        },
        {
          r0: 40,
          r: 85,
          label:{
            color:'#fff'
          }
        },
        {
          r0: 85,
          r: 105,
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
          r0: 105,
          r: 115,
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

option && myChart1.setOption(option);

var chartDom = document.getElementById('left2Chart');
var myChart2 = echarts.init(chartDom);
var option;
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  textStyle:{
    color:'white'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['黄金','铜','铁','钨','红柱石'],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel:{
        interval: 0
    },
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      type: 'bar',
      barWidth: '40%',
      data: [120,12,54.7,11.4,101.2]
    }
  ]
};
option && myChart2.setOption(option);
//其中
var chartDom = document.getElementById('middle2Chart');
var myChart3 = echarts.init(chartDom);
var option;

const data = {
  name: '经济\n\n植物',
  children: [
    {
      name: '药用植物',
      children: [
        {
          name: '山参'
        },
        {
          name: '五味子'
        },
        {
          name: '细辛'
        },
        {
          name: '黄芪'
        }
      ]
    },
    {
      name: '食用植物',
      children: [
        {
          name: '蕨菜'
        },
        {
          name: '薇菜'
        },
        {
          name: '黄花菜'
        },
        {
          name: '明叶菜'
        }
      ]
    },
    {
      name: '野生食用菌',
      children: [
        {
          name: '猴头'
        },
        {
          name: '松茸'
        },
        {
          name: '木耳'
        },
        {
          name: '肉蘑'
        }
      ]
    },
    {
      name: '山野果',
      children: [
        {
          name: '山梨'
        },
        {
          name: '核桃'
        },
        {
          name: '山葡萄'
        },
        {
          name: '猕猴桃'
        }
      ]
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
      left: '12%',
      bottom: '2%',
      right: '18%',
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
        fontSize:'12'
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
  