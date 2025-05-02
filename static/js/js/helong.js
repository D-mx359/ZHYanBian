var chartDom = document.getElementById('left1Chart');
var myChart1 = echarts.init(chartDom);
var option;
option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}种'
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
        { value: 8, name: '金属矿产' },
        { value: 11, name: '非金属' },
        { value: 2, name: '能源矿产' },
        { value: 1, name: '水气矿产' }
      ]
    }
  ]
};
option && myChart1.setOption(option);

var chartDom = document.getElementById('left2Chart');
var myChart2 = echarts.init(chartDom);
var option;
const colors = ['#5470C6', '#91CC75'];
option = {
  color: colors,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    right: '20%'
  },
  legend: {
    data: ['科数',  '种数'],
    textStyle: {
      color: '#fff' // 设置图例文字颜色为白色
    }
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      // prettier-ignore
      data: ['鸟类', '兽类', '鱼类'],
      axisLabel: {
        color: '#fff' // 设置x轴文字颜色为白色
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '科数',
      position: 'left',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[0]
        }
      },
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: '种数',
      position: 'right',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[1]
        }
      },
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: '科数',
      type: 'bar',
      data: [
        50,20,10
      ]
    },
    {
      name: '种数',
      type: 'bar',
      yAxisIndex: 1,
      data: [300,100,20]
    }
  ]
};
option && myChart2.setOption(option);
//其中
var chartDom = document.getElementById('middle2Chart');
var myChart3 = echarts.init(chartDom);
var option;

const data = {
  name: '土地\n\n资源',
  children: [
    {
      name: '农用地\n479017.13公顷',
      children: [
        {
          name: '耕地\n(37176.37公顷)'
        },
        {
          name: '园地\n(2250.04公顷)'
        },
        {
          name: '林地\n(437021.61公顷)'
        },
        {
          name: '牧草地\n(573.69公顷)'
        },
        {
          name: '其它\n(1995.42公顷)'
        }
      ]
    },
    {
      name: '建设用地\n7439.26公顷'
    },
    {
      name: '未利用\n20405.17公顷'
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

var counter = 1;
        setInterval(function(){
            document.getElementById('radio' + counter).checked=true;
            counter++;
            if(counter >4){
                counter=1;
            }
        },5000);
