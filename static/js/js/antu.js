var chartDom = document.getElementById('left1Chart');
var myChart1 = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}公顷 ({d}%)'
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
        { value: 1486, name: '红松' },
        { value: 529, name: '云杉' },
        { value: 15752, name: '落叶松' },
        { value: 22, name: '胡桃秋' },
        { value: 123, name: '椴树' },
        { value: 57509, name: '柞树' },
        { value: 710, name: '白桦' }
      ]
    }
  ]
};

option && myChart1.setOption(option);
var chartDom = document.getElementById('middle2Chart');
var myChart3 = echarts.init(chartDom);
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
option && myChart3.setOption(option);
//其中
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
var counter = 1;
        setInterval(function(){
            document.getElementById('radio' + counter).checked=true;
            counter++;
            if(counter >4){
                counter=1;
            }
        },5000);
