var chartDom = document.getElementById('left2Chart');
var myChart2 = echarts.init(chartDom);
var option;
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#fff'
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
      data: ['黄芪','党参','穿龙\n\n薯蓣','龙胆草','五味子','细辛','其他'],
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
      max: 7500,
      interval: 1500,
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
      max: 2500,
      interval: 500,
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
        1950,2420,3800,540,7120,1350,6000
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
      data: [600,1110,2300,30,300,50,1300]
    }
  ]
};
option && myChart2.setOption(option);