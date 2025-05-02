var chartDom = document.getElementById('left2Chart');
var myChart2 = echarts.init(chartDom);
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
option && myChart2.setOption(option);