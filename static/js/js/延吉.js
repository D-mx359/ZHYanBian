var chartDom = document.getElementById('left1Chart');
var myChart1 = echarts.init(chartDom);
var option;
option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}万 ({d}%)'
  },
  legend: {
    textStyle:{
        color:'white'
    },
    data: [
      '城镇',
      '乡村'
    ]
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '35%'],
      label: {
        position: 'inner',
        fontSize: 10
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 48.85, name: '城镇' },
        { value: 7.47, name: '乡村', selected: true }
      ]
    },
    {
      type: 'pie',
      radius: ['55%', '70%'],
      labelLine: {
        length: 5
      },
      label: {
        formatter: '{b|{b}:}\n{per|{d}%}  ',
        backgroundColor: '#F6F8FC',
        borderColor: '#8C8D8E',
        borderWidth: 0,
        borderRadius: 3,
        rich: {
          a: {
            color: '#6E7079',
            lineHeight: 20,
            align: 'center'
          },
          hr: {
            borderColor: '#8C8D8E',
            width: '100%',
            borderWidth: 1,
            height: 10
          },
          b: {
            color: '#4C5058',
            fontSize: 15,
            fontWeight: 'bold',
            lineHeight: 20,
            align:screenLeft,
          },
          per: {
            color: '#fff',
            backgroundColor: '#4C5058',
            padding: [4, 5],
            borderRadius: 4
          }
        }
      },
      data: [
        { value: 54.5, name: '朝鲜族' },
        { value: 45.5, name: '其他' }
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
option && myChart2.setOption(option);

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
  
  