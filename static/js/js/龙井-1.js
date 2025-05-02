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