var chartDom = document.getElementById('left1Chart');
var myChart1 = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}万公顷 ({d}%)'
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
        { value: 0.19, name: '园地' },
        { value: 93.92, name: '林地' },
        { value: 0.29, name: '草地' },
        { value: 16.67, name: '耕地' },
        { value: 2.41, name: '城镇交通' },
        { value: 1.46, name: '水利' },
        { value: 0.35, name: '其它' }
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
//其中
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
      data: ['兽类','鸟类','鱼类','两栖类'],
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
      data: [31,72,54,4]
    }
  ]
};
option && myChart2.setOption(option);

var chartDom = document.getElementById('right1Chart');
var myChart4 = echarts.init(chartDom);
var option;

const data = {
  name: '野生动物\n资源',
  children: [
    {
      name: '兽类\n(31种)',
      children: [
        {
          name: '狼'
        },
        {
          name: '貉'
        },
        {
          name: '狐狸'
        },
        {
          name: '豹猫'
        },
        {
          name: '麝鼠'
        }
      ]
    },
    {
      name: '鸟类(72种)',
      children: [
        {
          name: '白鹭'
        },
        {
          name: '苍鹭'
        },
        {
          name: '杜鹃'
        },
        {
          name: '夜鹰'
        },
        {
          name: '环颈雉'
        }
      ]
    },
    {
      name: '鱼类(54种)',
      children: [
        {
          name: '鲤鱼'
        },
        {
          name: '鲫鱼'
        },
        {
          name: '鳙鱼'
        },
        {
          name: '鲶鱼'
        },
        {
          name: '细鳞鱼'
        }
      ]
    },
    
    {
      name: '两栖类(4种)',
      children: [
        {
          name: '蟾蜍'
        },
        {
          name: '雨蛙'
        },
        {
          name: '青蛙'
        },
        {
          name: '林蛙'
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
      top: '0%',
      left: '20%',
      bottom: '0%',
      right: '20%',
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
        fontSize:'14'
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
option && myChart4.setOption(option);

var counter = 1;
        setInterval(function(){
            document.getElementById('radio' + counter).checked=true;
            counter++;
            if(counter >4){
                counter=1;
            }
        },5000);
