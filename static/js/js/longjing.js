var chartDom = document.getElementById('left1Chart');
var myChart1 = echarts.init(chartDom);
var option;
const data1 = {
  name: '各种\n\n赞誉',
  children: [
      {
        name: '教育之乡'
      },
      {
        name: '歌舞之乡'
      },
      {
        name: '苹果梨之乡'
      },
      {
        name: '松茸之乡'
      },
      {
        name: '文化之乡'
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
      data: [data1],
      top: '2%',
      left: '15%',
      bottom: '2%',
      right: '25%',
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
option && myChart1.setOption(option);

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
//其中
var chartDom = document.getElementById('middle2Chart');
var myChart3 = echarts.init(chartDom);
var option;
const data = {
  name: '基础\n\n建设',
  children: [
      {
        name: '改造小街小巷44条'
      },
      {
        name: '新增城市停车位1943个'
      },
      {
        name: '新建改建各类管网50公里'
      },
      {
        name: '新建安置住房8092套'
      },
      {
        name: '新改建桥梁座'
      },
      {
        name: '建设水利项目64个'
      },
      {
        name: '新建堤防29.72公里'
      },
      {
        name: '新改建农村公路174公里'
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
      left: '15%',
      bottom: '2%',
      right: '35%',
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
