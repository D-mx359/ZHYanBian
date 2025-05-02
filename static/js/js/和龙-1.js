var chartDom = document.getElementById('left2Chart');  
var myChart2 = echarts.init(chartDom);  
var option;

option = {
  legend: {
    top: 'top',
    textStyle: {
      color: 'white',  // 设置图例中汉字的颜色为蓝色
      fontSize: 12     // 设置图例中汉字的字体大小为12px
    }
  },
  series: [
    {
      type: 'pie',
      radius: [50, 250],
      center: ['45%', '45%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      label: {
        fontSize: 14, // 设置数据中汉字的字体大小为14px
        color: 'white', // 设置数据中汉字的颜色为绿色
      },
      data: [
        { value: 15273.5,name: '林下草地'},
        { value: 10911.4, name: '疏林草地' },
        { value: 7560.4, name: '灌丛草地' },
        { value: 364, name: '沼泽草地' },
        { value: 4550.9, name: '草甸草地' }
      ]
    }
  ]
};

option && myChart2.setOption(option);