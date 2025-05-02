var chartDom = document.getElementById('left1Chart');
var myChart1 = echarts.init(chartDom);
var option;
option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}'
  },
  legend: {
    data: ['林地','耕地','草地','城镇','水域','交通','园地','其他'],
    textStyle:{
      color:'white'
    }
  },
  series: [
    {
      type: 'funnel',
      left: '10%',
      top: 60,
      bottom: 60,
      width: '80%',
      min: 0,
      max: 100,
      minSize: '0%',
      maxSize: '100%',
      sort: 'ascending',
      gap: 2,
      label: {
        show: true,
        position: 'inside'
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20
        }
      },
      data: [
        { value: 12.5, name: '城镇供水9.82万立方米' },
        { value: 25, name: '林牧渔畜供水67.36万立方米'},
        { value: 37.5, name:  '生态供水77万立方米'},
        { value: 50, name: '地下水442.73万立方米' },
        { value: 62.5, name: '居民生活供水量501.33万立方米'},
        { value: 75, name:  '农业灌溉供水量1563万立方米'},
        { value: 87.5, name: '工业供水量3034.48万立方米' },
        { value: 100, name: '地表4810.36万立方米' }
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
    trigger: 'item',
    formatter: '{b}: {c}公顷'
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
        { value: 24930.13, name: '国有林场' },
        { value: 10920.73, name: '乡村集体' },
        { value: 2970.47, name: '团体' }
      ]
    }
  ]
};
option && myChart2.setOption(option);
//其中
var chartDom = document.getElementById('middle2Chart');
var myChart3 = echarts.init(chartDom);
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
  formatter: function(params) {
    var result = params[0].name + '<br/>';
    params.forEach(function (item) {
      result += item.seriesName + ': ' + item.value;
      if (item.seriesName === '面积') {
        result += ' 公顷';
      } else if (item.seriesName === '占比') {
        result += ' %';
      }
      result += '<br/>';
    });
    return result;
  },
  textStyle:{
    color:'white'
  },
  legend: {
    data: ['面积/公顷', '占比%'],
  },
  xAxis: [
    {
      type: 'category',
      data: ['耕地','草地','城镇','水域','交通','园地','其他'],
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
      max: 11000,
      interval: 1100,
      axisLabel: {
        textStyle:{
        color:'white'
      },
      formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: '占比%',
      min: 0,
      max: 10,
      interval: 1,
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
        10937.67,4836.75,3027.44,1974.27,839.25,181.63
      ]
    },
    {
      name: '占比',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + ' %';
        }
      },
      data: [9.6,4.2,3.1,2.7,1.7,0.7,0.2]
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
