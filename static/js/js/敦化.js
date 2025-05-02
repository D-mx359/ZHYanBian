var chartDom = document.getElementById('left1Chart');
var myChart1 = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}万公顷 ({d}%)'
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
        { value: 0.19, name: '园地' },
        { value: 93.92, name: '林地' },
        { value: 0.29, name: '草地' },
        { value: 16.67, name: '耕地' },
        { value: 2.41, name: '城镇交通' },
        { value: 1.46, name: '水利' },
        { value: 0.35, name: '其它' }
      ]
    }
  ]
};

option && myChart1.setOption(option);

var chartDom = document.getElementById('middle2Chart');
var myChart3 = echarts.init(chartDom);
var option;

const data1 = [
  [
    ['金属', 15340.1, 1534010000, '金属'],
    ['煤炭', 1233, 123300000, '煤炭'],
    ['硅藻土',326 , 32600000, '硅藻土'],
    ['磷（伴生）',2972 , 297200000, '磷（伴生）'],
    ['石墨', 15, 1500000, '石墨'],
    ['橄榄宝石', 453.3, 45330000, '橄榄宝石']
    
  ]
];
option = {
  title: {
    left: '5%',
    top: '3%'
  },
  grid: {
    left: '8%',
    top: '10%'
  },
  xAxis: {
    type: 'category',
    data: ['金属', '煤炭', '硅藻土', '磷（伴生）', '石墨', '橄榄宝石'],
    splitLine: {
      lineStyle: {
        type: 'dashed',
      }
    },
    axisLabel: {
      color: 'white' // 设置横坐标属性值的颜色为红色
    }
  },
  yAxis: {
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    },
    scale: true,
    axisLabel: {
      color: 'white' // 设置纵坐标属性值的颜色为蓝色
    }
  },
  series: [
    {
      name: '1990',
      data: data1[0],
      type: 'scatter',
      symbolSize: function (data) {
        return Math.sqrt(data[2]) / 5e2;
      },
      emphasis: {
        focus: 'series',
        label: {
          show: true,
          formatter: function (param) {
            return param.data[3];
          },
          position: 'top'
        }
      },
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(120, 36, 50, 0.5)',
        shadowOffsetY: 5,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
          {
            offset: 0,
            color: 'rgb(251, 118, 123)'
          },
          {
            offset: 1,
            color: 'rgb(204, 46, 72)'
          }
        ])
      }
    },
    {
      name: '2015',
      data: data1[1],
      type: 'scatter',
      symbolSize: function (data) {
        return Math.sqrt(data[2]) / 5e2;
      },
      emphasis: {
        focus: 'series',
        label: {
          show: true,
          formatter: function (param) {
            return param.data[3];
          },
          position: 'top'
        }
      },
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(25, 100, 150, 0.5)',
        shadowOffsetY: 5,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
          {
            offset: 0,
            color: 'rgb(129, 227, 238)'
          },
          {
            offset: 1,
            color: 'rgb(25, 183, 207)'
          }
        ])
      }
    }
  ]
};
option && myChart3.setOption(option);
//其中
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
      data: ['兽类','鸟类','鱼类','两栖类'],
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
      data: [31,72,54,4]
    }
  ]
};
option && myChart2.setOption(option);

var chartDom = document.getElementById('right1Chart');
var myChart4 = echarts.init(chartDom);
var option;

const data = {
  name: '野生动物\n资源',
  children: [
    {
      name: '兽类\n(31种)',
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
          name: '麝鼠'
        }
      ]
    },
    {
      name: '鸟类(72种)',
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
          name: '夜鹰'
        },
        {
          name: '环颈雉'
        }
      ]
    },
    {
      name: '鱼类(54种)',
      children: [
        {
          name: '鲤鱼'
        },
        {
          name: '鲫鱼'
        },
        {
          name: '鳙鱼'
        },
        {
          name: '鲶鱼'
        },
        {
          name: '细鳞鱼'
        }
      ]
    },
    
    {
      name: '两栖类(4种)',
      children: [
        {
          name: '蟾蜍'
        },
        {
          name: '雨蛙'
        },
        {
          name: '青蛙'
        },
        {
          name: '林蛙'
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
      top: '0%',
      left: '20%',
      bottom: '0%',
      right: '20%',
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
        fontSize:'14'
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
option && myChart4.setOption(option);
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
  