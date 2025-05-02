var chartDom = document.getElementById('left2Chart');
var myChart3 = echarts.init(chartDom);
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
      data: ['金属', '煤炭', '硅藻土', '磷（伴生）', '石墨', '橄榄宝石'],
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
      data: [15340.1,1233,326,2972,15,453.3]
    }
  ]
};
option && myChart3.setOption(option);