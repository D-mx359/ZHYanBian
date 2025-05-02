var chartDom = document.getElementById('left1Chart');
var myChart1 = echarts.init(chartDom);
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
      data: ['交通通信', '生活', '食品烟酒', '文娱', '医疗保健', '居住'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '40%',
      data: [5.4,2.6,1.4,1.3,0.9,0.5]
    }
  ]
};
option && myChart1.setOption(option);
//****************************************************************************** */
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
      data: ['艺术表演团', '文化站', '公共图书馆', '博物馆', '广播电视台'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '40%',
      color:'yellow',
      data: [1,10,1,1,2]
    }
  ]
};
option && myChart2.setOption(option);