// var chartDom = document.getElementById('left2Chart');
// var myChart2 = echarts.init(chartDom);
// var option;

// option = {
//   tooltip: {
//     trigger: 'axis',
//     axisPointer: {
//       type: 'shadow'
//     }
//   },
//   textStyle:{
//     color:'white'
//   },
//   grid: {
//     left: '3%',
//     right: '4%',
//     bottom: '3%',
//     containLabel: true
//   },
//   xAxis: [
//     {
//       type: 'category',
//       data: ['兽类','鸟类','鱼类','两栖类'],
//       axisTick: {
//         alignWithLabel: true
//       },
//       axisLabel:{
//         interval: 0
//     },
//     }
//   ],
//   yAxis: [
//     {
//       type: 'value'
//     }
//   ],
//   series: [
//     {
//       type: 'bar',
//       barWidth: '40%',
//       data: [31,72,54,4]
//     }
//   ]
// };
// option && myChart2.setOption(option);
var chartDom = document.getElementById('left2Chart');
var myChart2 = echarts.init(chartDom);
var option;
const colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
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
    name: '保护\n动物',
    label:{
      fontSize:18
    },
    itemStyle: {
      color: colors[1]
    },
    children: [
      {
        name: '一级\n珍稀',
        label:{
          fontSize:20
        },
        children: [
          {
            name:'5☆',
            children: [
              {
                name: '东北虎'
              },
              {
                name: '金钱豹'
              },
              {
                name: '梅花鹿'
              },
              {
                name: '原麝'
              },
              {
                name: '紫貂'
              },
              {
                name: '金雕'
              },
              {
                name: '丹顶鹤'
              },
              {
                name: '白鹳'
              },
              {
                name: '黑鹳'
              }
            ]
          }
        ]
      },
      {
        name: '二级\n保护',
        label:{
          fontSize:20
        },
        children: [
          {
            name: '4☆',
            children: [
              {
                name: '黑熊'
              },
              {
                name:'棕熊'
              },
              {
                name:'马鹿'
              },
              {
                name:'香獐子'
              },
              {
                name:'猞猁'
              },
              {
                name:'黑琴鸡'
              },
              {
                name:'花尾榛鸡'
              },
              {
                name:'鸳鸯'
              },
              {
                name:'百灵'
              },
              {
                name:'鸿雁'
              },
              {
                name:'大天鹅'
              },
              {
                name:'啄木鸟'
              },
              {
                name:'猫头鹰'
              }
              
            ]
          }
        ]
      }
    ]
  },
  {
    name: '野生\n动物',
    label:{
      fontSize:18
    },
    itemStyle: {
      color: colors[2],
    },
    children: [
      {
        name: '兽类',
        label:{
          fontSize:20
        },
        children: [
          {
            name: '3☆',
            
            children: [
              {
                name: '狼'
              },
              {
                name: '貉'
              },
              {
                name: '狐狸'
              },
              {
                name: '豹猫'
              },
              {
                name: '野猪'
              },
              {
                name: '狍子'
              },
              {
                name: '獾子'
              },
              {
                name: '刺猬'
              },
              {
                name: '松鼠'
              },
              {
                name: '麝鼠'
              },
              {
                name: '黄鼬'
              }
            ]
          }
        ]
      },
      {
        name: '鸟类',
        label:{
          fontSize:20
        },
        children: [
          {
            name: '3☆',
            children: [
              {
                name: '白鹭'
              },
              {
                name: '苍鹭'
              },
              {
                name: '杜鹃'
              },
              {
                name: '蜡嘴'
              },
              {
                name: '夜鹰'
              },
              {
                name: '苍鹰'
              },
              {
                name: '雀鹰'
              }
            ]
          }
        ]
      },
      {
        name: '鱼',
        label:{
          fontSize:20
        },
        children: [
          {
            name: '3☆',
            children: [
              {
                name: '鲤鱼'
              },
              {
                name: '鲫鱼'
              },
              {
                name: '鲢鱼'
              },
              {
                name: '鳙鱼'
              },
              {
                name: '鲶鱼'
              },
              {
                name: '草鱼'
              },
            ]
          }
        ]
      },
      {
        name: '两栖类',
        label:{
          fontSize:20
        },
        children: [
          {
            name: '3☆',
            children: [
              {
                name: '蟾蜍'
              },
              {
                name: '青蛙'
              },
              {
                name:'雨蛙'
              },
              {
                name: '林蛙'
              }
            ]
          }
        ]
      }
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
          r: 60,
          label: {
            rotate: 0,
            color:'#fff'
          }
        },
        {
          r0: 60,
          r: 145,
          label:{
            color:'#ccc'
          }
        },
        {
          r0: 145,
          r: 170,
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
          r0: 170,
          r: 205,
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