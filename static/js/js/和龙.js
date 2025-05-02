var chartDom = document.getElementById('left1Chart');
var myChart1 = echarts.init(chartDom);
var option;
option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}种'
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
        { value: 8, name: '金属矿产' },
        { value: 11, name: '非金属' },
        { value: 2, name: '能源矿产' },
        { value: 1, name: '水气矿产' }
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
      data: ['林下草地', '疏林草地', '灌丛草地', '沼泽草地', '草甸草地'],
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
      data: [15273.5,10911.4,7560.4,364,4550.9]
    }
  ]
};
option && myChart2.setOption(option);

//其中
var chartDom = document.getElementById('middle2Chart');
var myChart3 = echarts.init(chartDom);
var option;

const data = {
  name: '土地\n\n资源',
  children: [
    {
      name: '农用地\n479017.13公顷',
      children: [
        {
          name: '耕地\n(37176.37公顷)'
        },
        {
          name: '园地\n(2250.04公顷)'
        },
        {
          name: '林地\n(437021.61公顷)'
        },
        {
          name: '牧草地\n(573.69公顷)'
        },
        {
          name: '其它\n(1995.42公顷)'
        }
      ]
    },
    {
      name: '建设用地\n7439.26公顷'
    },
    {
      name: '未利用\n20405.17公顷'
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

$(function(){
  var index=0;
  var f;
  dingshiqi();
  function dingshiqi(){
      f = setInterval(function(){
          if(index==$(".slide-img").length-1){
              index=0;
              $(".slide-img").css("opacity","0");
              $(".slide-img").eq(index).css("opacity","1");
              $(".btn").css("background-color","#ffffff");
              $(".btn").eq(index).css("background-color","#00ffff");
          }else{
              index++;
              $(".slide-img").css("opacity","0");
              $(".slide-img").eq(index).css("opacity","1");
              $(".btn").css("background-color","#ffffff");
              $(".btn").eq(index).css("background-color","#00ffff");
          }
      },4000)
  }
  $(".btn").click(function(){
      clearInterval(f);
      var indexx=$(this).index();
      index=indexx;
      $(".slide-img").css("opacity","0");
      $(".slide-img").eq(index).css("opacity","1");
      $(".btn").css("background-color","#ffffff");
      $(".btn").eq(index).css("background-color","#00ffff");
      dingshiqi();
  })
})
  
  