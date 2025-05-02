var chartDom = document.getElementById('left1Chart');
var myChart1 = echarts.init(chartDom);
var option;
const data1 = {
  name: '经济\n\n动物',
  children: [
    {
      name: '药用动物',
      children: [
        {
          name: '梅花鹿'
        },
        {
          name: '马鹿'
        },
        {
          name: '熊'
        },
        {
          name: '麝'
        },
        {
          name: '刺猬'
        }
      ]
    },
    {
      name: '毛皮动物',
      children: [
        {
          name: '紫貂'
        },
        {
          name: '水獭'
        },
        {
          name: '猞猁'
        },
        {
          name: '灰鼠'
        },
        {
          name: '貉'
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
      data: [data1],
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
      data: ['黄金','铜','铁','钨','红柱石'],
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
      data: [120,12,54.7,11.4,101.2]
    }
  ]
};
option && myChart2.setOption(option);
//其中
var chartDom = document.getElementById('middle2Chart');
var myChart3 = echarts.init(chartDom);
var option;

const data = {
  name: '经济\n\n植物',
  children: [
    {
      name: '药用植物',
      children: [
        {
          name: '山参'
        },
        {
          name: '五味子'
        },
        {
          name: '细辛'
        },
        {
          name: '黄芪'
        }
      ]
    },
    {
      name: '食用植物',
      children: [
        {
          name: '蕨菜'
        },
        {
          name: '薇菜'
        },
        {
          name: '黄花菜'
        },
        {
          name: '明叶菜'
        }
      ]
    },
    {
      name: '野生食用菌',
      children: [
        {
          name: '猴头'
        },
        {
          name: '松茸'
        },
        {
          name: '木耳'
        },
        {
          name: '肉蘑'
        }
      ]
    },
    {
      name: '山野果',
      children: [
        {
          name: '山梨'
        },
        {
          name: '核桃'
        },
        {
          name: '山葡萄'
        },
        {
          name: '猕猴桃'
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
        fontSize:'12'
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
