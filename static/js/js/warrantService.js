/**
 * Created by codyy on 2018/3/18.
 */
// 设置时间
let setTime = function() {
    let res = getCurrentTime();
    $(".currentTime").text(res.currentTime);
    $(".currentDate").text(res.currentDate);
    $(".currentWeek").text(res.currentWeek);
};
setTime();

// 定时更新时间
let timing = function() {
    setInterval(function() {
        setTime();
    }, 1000);
};
timing();
const myChart2 = echarts.init(document.getElementById("movie"));
const myChart5 = echarts.init(document.getElementById("service"));
let areaName='china',baseAreaId='-1',areaCode='000000',manufacturerData=null,supplierData=null;

var chartDom = document.getElementById('AAAAA');
var myChart1 = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'axis',
    textStyle: {
        color: "#a0a8b9"
      },
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
//   legend: {},
legend: {
    textStyle: {
      color: 'white'  // 设置图例文字颜色为白色
    },
    data: ['AAAAA', 'AAAA', 'AAA', 'AA', 'A']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['延吉市','珲春市','图们市','敦化市','龙井市','和龙市','汪清县','安图县'],
    axisLabel: {
        color:'white'
    }
},
  series: [
    {
      name: 'AAAAA',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [0,0,0,2,0,3,0,3]
    },
    {
      name: 'AAAA',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [6,0,1,1,1,0,1,1]
    },
    {
      name: 'AAA',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [2,8,4,5,3,1,4,2]
    },
    {
      name: 'AA',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [0,1,2,4,0,0,0,0]
    },
    {
      name: 'A',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [0,0,1,0,0,0,0,0]
    }
  ]
};
option && myChart1.setOption(option);

let movie = function() {
    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "white"
          }
        }
      },
      textStyle: {
        color: "#a0a8b9"
      },
      grid: {
        left: "10%",
        bottom: "16%"
      },
      legend: {
        data: ["影院收入", "影院数"],
        textStyle: {
          color: "#929aad"
        },
        right: "2%",
        top: "0%"
      },
      xAxis: [
        {
          type: "category",
          name: "",
          data: ['延吉市','珲春市','图们市','敦化市','龙井市','和龙市','汪清县','安图县'],
          axisPointer: {
            type: "shadow"
          },
          axisLabel: {
            formatter: "{value}"
          },
          
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "收入/万元",
          min: 0,
          max: 1500,
          interval: 300,
          axisLabel: {
            formatter: "{value}"
          },
          splitLine: {
            lineStyle: {
              color: "#175497" // 设置辅助线为蓝色
            }
          }
        },
        {
          type: "value",
          name: "影院数/家",
          min: 0,
          max: 10,
          interval: 2,
          axisLabel: {
            formatter: "{value}"
          },
          splitLine: {
            lineStyle: {
              color: "#fe9c43" // 设置辅助线为橘色
            }
          }
        }
      ],
      series: [
        {
          name: "影院收入",
          type: "bar",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#0182e8"
              },
              {
                offset: 1,
                color: "#021b4d"
              }
            ]),
            barBorderRadius: 5
          },
          barWidth: "10px",
          data: [1332,298.6,0,302.3,20,41.2,1.8,21]
        },
        {
          name: "影院数",
          type: "line",
          itemStyle: {
            color: "#fe9c43"
          },
          yAxisIndex: 1,
          data: [5,4,0,7,1,1,1,1]
        },
      ]
    };
    myChart2.setOption(option);
  };
  movie();

  var chartDom = document.getElementById('buy');
  var myChart3 = echarts.init(chartDom);
  var option;
  
  option = {
    title: {
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '商品购买',
        type: 'pie',
        radius: '50%',
        center: ['57%', '55%'],
        label: {
            show: true,
            formatter: '{b}({d}%)'
          },
        data: [
          { value: 0.5227, name: '其它' },
          { value: 0.3306, name: '民俗食品' },
          { value: 0.1880, name: '纪念品' },
          { value: 0.0661, name: '人参' },
          { value: 0.0145, name: '鹿茸' },
          { value: 0.0041, name: '熊胆粉' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
    ]
  };
  
  option && myChart3.setOption(option);

  var app = {};

var chartDom = document.getElementById('TV');
var myChart4 = echarts.init(chartDom);
var option;

option = {
  legend: {
    textStyle:{
        color:'white'
    }
  },
  textStyle:{
    color:'white'
},
  tooltip: {},
  dataset: {
    source: [
      ['product', '播出时长', '制作时长'],
      ['新闻类', 4.930,1.707],
      ['专题类', 6.903,2.774],
      ['公益广告', 2.497,0.017],
      ['其它', 10.419,6.538]
    ]
  },
  xAxis: { 
    type: 'category' ,
    axisLabel:{
        color:'white'
    }
},
yAxis: [
    {
      type: "value",
      name: "收入/亿元",
      min: 0,
      max: 12,
      interval: 2,
      axisLabel: {
        formatter: "{value}",
        color:'white'
      },
      splitLine: {
        lineStyle: {
          color: "#175497" // 设置辅助线为蓝色
        }
      }
    }
],
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: 'bar' }, { type: 'bar' }]
};

option && myChart4.setOption(option);

var chartDom = document.getElementById('GB');
var myChart6 = echarts.init(chartDom);
var option;

option = {
  legend: {
    textStyle:{
        color:'white'
    }
  },
  textStyle:{
    color:'white'
},
  tooltip: {},
  dataset: {
    source: [
      ['product', '播出时长', '制作时长'],
      ['新闻类', 14.655,4.858],
      ['专题类', 23.578,10.020],
      ['公益广告', 1.300,0.017],
      ['其它', 38.265,12.882]
    ]
  },
  xAxis: { 
    type: 'category' ,
    axisLabel:{
        color:'white'
    }
},
yAxis: [
    {
      type: "value",
      name: "收入/亿元",
      min: 0,
      max: 40,
      interval: 8,
      axisLabel: {
        formatter: "{value}",
        color:'white'
      },
      splitLine: {
        lineStyle: {
          color: "#175497" // 设置辅助线为蓝色
        }
      }
    }
],
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: 'bar' }, { type: 'bar' }]
};

option && myChart6.setOption(option);

let BACK_ROOT='http://10.5.52.14/mockjsdata/197';
const myChart = echarts.init(document.getElementById("mapChart"));
    $.get('https://geo.datav.aliyun.com/areas_v3/bound/222400_full.json', result => {
    // 注册 echarts 地图
        echarts.registerMap('延边州', result);
            var option = {
            title: {
                text: '延边州地图',
                x: "center",
                textStyle : {
                    color: '#fff',
                }
            },
            geo: {
                map: '延边州',
                label: {
                    emphasis: {
                        show: true,
                        color:'#fff'
                    }
                },
                roam: false,
                itemStyle: {
                 normal: {
                     areaColor: '#00186E',
                     borderColor: '#195BB9',
                     borderWidth: 1,
                 },
                 emphasis: {
                     areaColor: '#2B91B7'
                 }
                }
            },
            series: [{
                type: 'effectScatter',
                coordinateSystem: 'geo',
                rippleEffect: {
                brushType: 'stroke'
                },
                symbolSize: function(val, params) {
                    return 8;
                },
            data: [
                {name:'延吉市'},
                {name:'珲春市'},
                {name:'安图县'},
                {name:'敦化市'},
                {name:'汪清县'},
                {name:'和龙市'},
                {name:'图们市'},
                {name:'龙井市'}
            ],
            }]
        };
        myChart.setOption(option);
        myChart.on('click', function(params){
            var cityName = params.name;
            switch(cityName){
                case '延吉市':
                  yanji()
                  function yanji() {
                    fetch('yanji')
                        .then(response => {
                                window.location.href = response.url;
                        })
                    }
                    break;
                case '珲春市':
                  hunchun()
                  function hunchun() {
                    fetch('hunchun')
                        .then(response => {
                                window.location.href = response.url;
                        })
                    }
                    break;
                case '安图县':
                  antu()
                  function antu() {
                    fetch('antu')
                        .then(response => {
                                window.location.href = response.url;
                        })
                    }
                    break;
                case '敦化市':
                  dunhua()
                  function dunhua() {
                    fetch('dunhua')
                        .then(response => {
                                window.location.href = response.url;
                        })
                    }
                    break;
                case '汪清县':
                  wangqing()
                  function wangqing() {
                    fetch('wangqing')
                        .then(response => {
                                window.location.href = response.url;
                        })
                    }
                    break;
                case '和龙市':
                  helong()
                  function helong() {
                    fetch('helong')
                        .then(response => {
                                window.location.href = response.url;
                        })
                    }
                    break;
                case '图们市':
                  tumen()
                  function tumen() {
                    fetch('tumen')
                        .then(response => {
                                window.location.href = response.url;
                        })
                    }
                    break;
                case '龙井市':
                  longjing()
                  function longjing() {
                    fetch('longjing')
                        .then(response => {
                                window.location.href = response.url;
                        })
                    }
                    break;
            }
        });
    })
    let service = function() {
        let option = {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          graphic:{
            type: 'text',
            left: 'center', // 相对父元素居中
            top: 'middle',  // 相对父元素居中
            style: {
                fill: 'white',
                text: '体验感',
                fontSize: '28',
            }
          },
      
          series: [
            {
              name: "",
              type: "pie",
              hoverAnimation: true,
              radius: ["50%", "70%"],
              avoidLabelOverlap: false,
              label: {
                formatter:'{a|{d}%}\n{b}',
                show: true,
                position: "outside",
                color:'#15a7f1',
                verticalAlign:'top',
                rich:{
                  a:{
                    color: 'white',
                    lineHeight: 22,
                    align: 'left',
                  },
      
                }
              },
              labelLine: {
                show: true,
                length:20,
                length2:50,
                lineStyle:{
                  color:'#15a7f1',
                }
              },
              data: [
                {
                  value: 1066,
                  name: "满意",
                  itemStyle:{
                    color:'#162959'
                  }
                },
                { value: 36, name: "不满意",
                  itemStyle:{
                    color:'#23548b'
                  }
                }
              ]
            }
          ]
        };
        myChart5.setOption(option);
      }; 
      service();