var chartDom = document.getElementById('left1Chart');
var myChart1 = echarts.init(chartDom);
var option;
option = {
  legend: {
    data: ['耕地总面积', '旱地耕田面积', '水田面积']
  },
  series: [
    {
      type: 'funnel',
      left: '5%',
      top: 60,
      bottom: 70,
      width: '90%',
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
        { value: 90, name: '耕地总面积63998公顷' },
        { value: 60, name: '旱地耕田面积59676公顷' },
        { value: 30, name: '水田\n4322公顷' }
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
      data: ['能源矿产','金属矿产','非金属矿产','水气矿产','初步探明储量'],
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
      data: [3,11,26,2,29]
    }
  ]
};
option && myChart2.setOption(option);
//其中
var chartDom = document.getElementById('middle2Chart');
var myChart3 = echarts.init(chartDom);
var option;

const data = {
  name: '自然\n\n资源',
  children: [
    {
      name: '林木资源',
      children: [
        {
          name: '汪清林业局'
        },
        {
          name: '天桥岭林业局'
        },
        {
          name: '大兴沟林业局'
        }
      ]
    },
    {
      name: '林下资源',
      children: [
        {
          name: '中药材'
        },
        {
          name: '山野菜'
        },
        {
          name: '食用菌'
        },
        {
          name: '野生坚果'
        }
      ]
    },
    {
      name: '水电资源\n(三大水系)',
      children: [
        {
          name: '嘎呀河'
        },
        {
          name: '绥芬河'
        },
        {
          name: '珲春河'
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
