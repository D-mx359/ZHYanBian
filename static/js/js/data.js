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
const myChart1 = echarts.init(document.getElementById("distributeByTypeChart"));
const myChart2 = echarts.init(document.getElementById("faultAnalysisChart"));
const myChart3 = echarts.init(document.getElementById("mapChart"));
const myChart4 = echarts.init(document.getElementById("situationAnalysisChart"));
const myChart7 = echarts.init(document.getElementById("nationalAnalysisChart"));
const myChart5 = echarts.init(document.getElementById("distributeByStatusChart"));
const myChart6 = echarts.init(document.getElementById("distributeByServerChart"));
// 按装备类型分布
let distributeByTypeChart = function() {
  var years = ['2021', '2022', '2023']
//饼状图数据
var data = {
  '2021': [
    {value: 0.5981, name: '自驾车', itemStyle:{color:'#906eff'}},
    {value: 0.126, name: '公路客运', itemStyle:{color:'#28befe'}},
    {value: 0.0136, name: '其它', itemStyle:{color:'#16e1e9'}},
    {value: 0.2143, name: '铁路客运', itemStyle:{color:'#10dd93'}},
    {value: 0.048, name: '民航客运', itemStyle:{color:'#f6bb64'}}
  ],
  '2022': [
    {value: 0.6982, name: '自驾车', itemStyle:{color:'#906eff'}},
    {value: 0.0496, name: '公路客运', itemStyle:{color:'#28befe'}},
    {value: 0.0455, name: '其它', itemStyle:{color:'#16e1e9'}},
    {value: 0.1798, name: '铁路客运', itemStyle:{color:'#10dd93'}},
    {value: 0.0269, name: '民航客运', itemStyle:{color:'#f6bb64'}}
  ],
  '2023': [
    {value: 0.391, name: '自驾车', itemStyle:{color:'#906eff'}},
    {value: 0.264, name: '公路客运', itemStyle:{color:'#28befe'}},
    {value: 0.055, name: '其它', itemStyle:{color:'#16e1e9'}},
    {value: 0.269, name: '铁路客运', itemStyle:{color:'#10dd93'}},
    {value: 0.021, name: '民航客运', itemStyle:{color:'#f6bb64'}}
  ]
}
var option = {
  baseOption: {
    timeline: {
      axisType: 'value',
      autoPlay: true,
      playInterval: 1000,
      data: years,
    },
    series: [{
      type: "pie",
      hoverAnimation: true,
      radius: ["40%", "60%"],
      center: ['55%', '45%'],
      label: {
        show: true,
        formatter: '{b}({d}%)',
        fontSize:12
      },
    }]
  },
  options: []
}
// 根据数据填充option
years.forEach(function(year) {
  option.options.push({
    series: [{
      data: data[year]
    }]
  })
})
// 使用option设置echarts实例
myChart1.setOption(option),
// 监听timelinechanged事件
myChart1.on('timelinechanged', function(params) {
  var yearIndex = params.currentIndex;
  myChart1.setOption({
    series: [{
      data: data[years[yearIndex]]
    }]
  })
})
}
distributeByTypeChart();

// 近五年收入
let faultAnalysisChart = function() {
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
      data: ["旅游收入", "客流量"],
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
        data: ["2019", "2020", "2021", "2022", "2023"],
        axisPointer: {
          type: "shadow"
        },
        axisLabel: {
          formatter: "{value}年"
        },
        
      }
    ],
    yAxis: [
      {
        type: "value",
        name: "收入/亿元",
        min: 50,
        max: 600,
        interval: 100,
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
        name: "人数/万人次",
        min: 700,
        max: 2800,
        interval: 350,
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
        name: "旅游收入",
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
        data: [404.99,473.03,98.07,138.10,555.34]
      },
      {
        name: "客流量",
        type: "line",
        itemStyle: {
          color: "#fe9c43"
        },
        yAxisIndex: 1,
        data: [2143.9,2432.6,791.07,1467.7,2751.38]
      },
    ]
  };
  myChart2.setOption(option);
};
faultAnalysisChart();

//map
let mapChart = function() {
    var geoCoordMap = {
         '上海': [121.4648,31.2891],
         '延边州':[129.5089,42.8912],
         '东莞': [113.8953,22.901],
         '东营': [118.7073,37.5513],
         '中山': [113.4229,22.478],
         '临汾': [111.4783,36.1615],
         '临沂': [118.3118,35.2936],
         '丹东': [124.541,40.4242],
         '丽水': [119.5642,28.1854],
         '牡丹江市':[129.3758,44.3305],
         '黑河市':[127.3116,50.1424],
         '佳木斯市':[130.1908,46.4800],
         '乌鲁木齐': [87.9236,43.5883],
         '佛山': [112.8955,23.1097],
         '保定': [115.0488,39.0948],
         '兰州': [103.5901,36.3043],
         '包头': [110.3467,41.4899],
         '北京': [116.4551,40.2539],
         '北海': [109.314,21.6211],
         '南京': [118.8062,31.9208],
         '南宁': [108.479,23.1152],
         '南昌': [116.0046,28.6633],
         '南通': [121.1023,32.1625],
         '厦门': [118.1689,24.6478],
         '台州': [121.1353,28.6688],
         '合肥': [117.29,32.0581],
         '呼和浩特': [111.4124,40.4901],
         '咸阳': [108.4131,34.8706],
         '哈尔滨': [127.9688,45.368],
         '唐山': [118.4766,39.6826],
         '嘉兴': [120.9155,30.6354],
         '大同': [113.7854,39.8035],
         '大连': [122.2229,39.4409],
         '天津': [117.4219,39.4189],
         '太原': [112.3352,37.9413],
         '威海': [121.9482,37.1393],
         '宁波': [121.5967,29.6466],
         '宝鸡': [107.1826,34.3433],
         '宿迁': [118.5535,33.7775],
         '常州': [119.4543,31.5582],
         '广州': [113.5107,23.2196],
         '廊坊': [116.521,39.0509],
         '延安': [109.1052,36.4252],
         '张家口': [115.1477,40.8527],
         '徐州': [117.5208,34.3268],
         '德州': [116.6858,37.2107],
         '惠州': [114.6204,23.1647],
         '成都': [103.9526,30.7617],
         '扬州': [119.4653,32.8162],
         '承德': [117.5757,41.4075],
         '拉萨': [91.1865,30.1465],
         '无锡': [120.3442,31.5527],
         '日照': [119.2786,35.5023],
         '昆明': [102.9199,25.4663],
         '杭州': [119.5313,29.8773],
         '枣庄': [117.323,34.8926],
         '柳州': [109.3799,24.9774],
         '株洲': [113.5327,27.0319],
         '武汉': [114.3896,30.6628],
         '汕头': [117.1692,23.3405],
         '江门': [112.6318,22.1484],
         '沈阳': [123.1238,42.1216],
         '沧州': [116.8286,38.2104],
         '河源': [114.917,23.9722],
         '泉州': [118.3228,25.1147],
         '泰安': [117.0264,36.0516],
         '泰州': [120.0586,32.5525],
         '济南': [117.1582,36.8701],
         '济宁': [116.8286,35.3375],
         '海口': [110.3893,19.8516],
         '淄博': [118.0371,36.6064],
         '淮安': [118.927,33.4039],
         '深圳': [114.5435,22.5439],
         '清远': [112.9175,24.3292],
         '温州': [120.498,27.8119],
         '渭南': [109.7864,35.0299],
         '湖州': [119.8608,30.7782],
         '湘潭': [112.5439,27.7075],
         '滨州': [117.8174,37.4963],
         '潍坊': [119.0918,36.524],
         '烟台': [120.7397,37.5128],
         '玉溪': [101.9312,23.8898],
         '珠海': [113.7305,22.1155],
         '盐城': [120.2234,33.5577],
         '盘锦': [121.9482,41.0449],
         '石家庄': [114.4995,38.1006],
         '福州': [119.4543,25.9222],
         '秦皇岛': [119.2126,40.0232],
         '绍兴': [120.564,29.7565],
         '聊城': [115.9167,36.4032],
         '肇庆': [112.1265,23.5822],
         '舟山': [122.2559,30.2234],
         '苏州': [120.6519,31.3989],
         '莱芜': [117.6526,36.2714],
         '菏泽': [115.6201,35.2057],
         '营口': [122.4316,40.4297],
         '葫芦岛': [120.1575,40.578],
         '衡水': [115.8838,37.7161],
         '衢州': [118.6853,28.8666],
         '西宁': [101.4038,36.8207],
         '西安': [109.1162,34.2004],
         '贵阳': [106.6992,26.7682],
         '连云港': [119.1248,34.552],
         '邢台': [114.8071,37.2821],
         '邯郸': [114.4775,36.535],
         '郑州': [113.4668,34.6234],
         '鄂尔多斯': [108.9734,39.2487],
         '重庆': [107.7539,30.1904],
         '金华': [120.0037,29.1028],
         '铜川': [109.0393,35.1947],
         '银川': [106.3586,38.1775],
         '镇江': [119.4763,31.9702],
         '长春': [125.8154,44.2584],
         '长沙': [113.0823,28.2568],
         '长治': [112.8625,36.4746],
         '阳泉': [113.4778,38.0951],
         '青岛': [120.4651,36.3373],
         '韶关': [113.7964,24.7028]
     };
 
     var HEBData = [
      [{name:'哈尔滨'}, {name:'延边州'}]
  ];
  var SYData = [
    [{name:'沈阳'}, {name:'延边州'}]
];
var BJData = [
  [{name:'北京'}, {name:'延边州'}]
];
     var XAData = [
      [{name:'西安'}, {name:'延边州'}]
  ];
  var XNData = [
      [{name:'西宁'}, {name:'延边州'}]
  ];
  var YCData = [
      [{name:'银川'}, {name:'延边州'}]
  ];
  var GYData = [
      [{name:'贵阳'}, {name:'延边州'}]
  ];
     var MDJData = [
         [{name:'牡丹江市'}, {name:'延边州'}]
     ];
     var HHData = [
         [{name:'黑河市'}, {name:'延边州'}]
     ];
     var JMSData = [
         [{name:'佳木斯市'}, {name:'延边州'}]
     ];
      var SGData = [
         [{name:'韶关'}, {name:'延边州'}]
     ];
      var CQData = [
         [{name:'重庆'}, {name:'延边州'}]
     ];
      var SXData = [
         [{name:'绍兴'}, {name:'延边州'}]
     ];
      var LCData = [
         [{name:'聊城'}, {name:'延边州'}]
     ];
      var ZQData = [
         [{name:'肇庆'}, {name:'延边州'}]
     ];
      var ZSData = [
         [{name:'舟山'}, {name:'延边州'}]
     ];
      var SZData = [
         [{name:'苏州'}, {name:'延边州'}]
     ];
     var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
     //var planePath = 'arrow';
     var convertData = function (data) {
       
         var res = [];
         for (var i = 0; i < data.length; i++) {
          
             var dataItem = data[i];
 
             var fromCoord = geoCoordMap[dataItem[0].name];
             var toCoord = geoCoordMap[dataItem[1].name];
             if (fromCoord && toCoord) {
                 res.push({
                     fromName: dataItem[0].name,
                     toName: dataItem[1].name,
                     coords: [fromCoord, toCoord],
                    //  value: dataItem[1].value
                 });
             }
         }
         return res;
         
     };
 
     var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
     var series = [];[
      ['哈尔滨', HEBData], ['沈阳', SYData], ['北京', BJData],['西安', XAData], ['西宁', XNData], ['银川', YCData],['贵阳',GYData],['牡丹江市', MDJData], ['黑河市', HHData],['佳木斯市',JMSData],['韶关',SGData],
     ['重庆',CQData],['绍兴',SXData],['聊城',LCData],['肇庆',ZQData],['舟山',ZSData],['苏州',SZData]
    ].forEach(function (item, i) { 
         series.push({
             name: item[0] + ' Top1',
             type: 'lines',
             zlevel: 1,
             effect: {
                 show: true,
                 period: 6,
                 trailLength: 0.7,
                 color: 'red',   //arrow箭头的颜色
                 symbolSize: 3
             },
             lineStyle: {
                 normal: {
                     color: color[i],
                     width: 0,
                     curveness: 0.2
                 }
             },
             data: convertData(item[1])
         },
         {
             name: item[0] + ' Top2',
             type: 'lines',
             zlevel: 2,
             symbol: ['none', 'arrow'],
             symbolSize: 10,
             effect: {
                 show: true,
                 period: 6,
                 trailLength: 0,
                 symbol: planePath,
                 symbolSize: 15
             },
             lineStyle: {
                 normal: {
                     color: color[i],
                     width: 1,
                     opacity: 0.6,
                     curveness: 0.2
                 }
             },
             data: convertData(item[1])
         },
         {
             name: item[0] + ' Top3',
             type: 'effectScatter',
             coordinateSystem: 'geo',
             zlevel: 2,
             rippleEffect: {
                 brushType: 'stroke'
             },
             label: {
                 normal: {
                     show: true,
                     position: 'right',
                     formatter: '{b}'
                 }
             },
             symbolSize: function (val) {
                 return val[2] / 8;
             },
             itemStyle: {
              normal: {
               color: color[i],
              },
              emphasis: {
                  areaColor: '#2B91B7'
              }
             },
             data: item[1].map(function (dataItem) {
                 return {
                     name: dataItem[1].name,
                     value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                 };
             })
         });
     });
     var option = {
         title : {
             text: '模拟航线',
             left: 'center',
             textStyle : {
                 color: '#fff'
             }
         },
         tooltip : {
             trigger: 'item',
             formatter:function(params, ticket, callback){
                 if(params.seriesType=="effectScatter") {
                     return "线路："+params.data.name+"";
                 }else if(params.seriesType=="lines"){
                     return params.data.fromName+">"+params.data.toName;
                 }else{
                     return params.name;
                 }
             }
         },
         legend: {
             orient: 'vertical',
             top: 'bottom',
             left: 'right',
             data:['哈尔滨 Top1', '沈阳 Top2', '北京 Top3'],
             textStyle: {
                 color: '#fff'
             },
             selectedMode: 'multiple'
         },
         geo: {
             map: 'china',
             
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
         series: series
     };
    myChart3.setOption(option);
};
mapChart();

//各景点状况分析
let situationAnalysisChart = function() {
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
      left: "8%",
      bottom: "10%"
    },
    legend: {
      data: ["平均收入", "客流量"],
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
        data: ["延吉市", "安图县", "敦化市", "珲春市", "图们市", "和龙市","龙井市","汪清县"],
        axisPointer: {
          type: "shadow"
        },
        axisLabel: {
          formatter: "{value}"
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        name: "收入/亿元",
        min: 0,
        max: 300,
        interval: 50,
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
        name: "人数/万人次",
        min: 0,
        max: 1000,
        interval: 150,
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
        name:'平均收入',
        type:'bar',
        barWidth : 10,
        stack: '数量',
        itemStyle:{
          color:'#0190fc',
        },
        data:[283.15,64.17,65.37,38.38,4.88,7.08,6.41,3.60]
      },
      {
        name:'客流量',
        type:'line',
        itemStyle:{
          color:'#ff9f25',
        },
        yAxisIndex: 1, // 指定使用索引为1的y轴
        data:[958.60,338.01,389.43,305.00,93.04,130.45,168.99,49.11]
      },
    ]
  };
  myChart4.setOption(option);
};
situationAnalysisChart();
//国内游客来源
let nationalAnalysisChart = function() {
	option = {
	  legend: {
		data: ['冬季', '夏季'],
		left: 'right', // 调整图例位置为右侧
		top: 'top', // 调整图例位置为顶部
		textStyle: {
		  color: 'white' 
		},
		selected: {
		  '冬季': false, // 默认不显示冬季数据
		  '夏季': false // 默认不显示夏季数据
		}
	  },
	  radar: {
		radius: '60%',
		center:['48%','42%'],
		indicator: [
		  { text: '饮食风俗',max:10 },
		  { text: '服务态度',max:10 },
		  { text: '卫生',max:10 },
		  { text: '住宿',max:10 },
		  { text: '交通',max:10 },
		  { text: '景区建设',max:10 }
		],
		startAngle: 30,
			  splitNumber: 4,
			  shape: 'circle',
			  name: {
				  formatter:'{value}',
				  textStyle: {
					  color:'#1ab1ef'
				  }
			  },
			  splitArea: {
				  show:true,
				  areaStyle: {
					  color: ['#051d64','#041d64', '#03185f','#021358'],
					  shadowColor: '#0f3ba8',
					  shadowBlur: 10
				  }
			  },
			  axisLine: {
				  lineStyle: {
					  color: '#2c8ebe',
					  type:'dashed'
				  }
			  },
			  splitLine: {
				  lineStyle: {
					  color: 'transparent'
				  }
			  }
		  },
	  series: [
		  {
			name: '服务分布',
			type: 'radar',
			itemStyle: {
			  color:'#1f9cf5',
			},
			label: {
			  normal: {
				  show: true,
				  color:'white',
			  }
			},
			data: [
			  {
				value: [8.048, 7.92, 8.22, 7.6, 7.48, 6.94],
				name: '冬季'
			  },
			  {
				value: [8.16, 8.34, 8.13, 7.81, 7.88, 7.89],
				name: '夏季'
			  }
			]
		},
	  ]
		}
	  myChart7.setOption(option)
	  myChart7.on('legendselectchanged', function(params) {
		let selected = params.selected;
		let data = option.series[0].data;
	
		for (let i = 0; i < data.length; i++) {
		  data[i].selected = selected[data[i].name];
		}
	
		myChart7.setOption({
		  series: [{
			data: data
		  }]
		});
	  });
  };
  nationalAnalysisChart();
//国际游客来源
let distributeByStatusChart = function() {
// 时间轴数据
var years = ['2021', '2022', '2023']
// 饼状图数据
var data = {
  '2021': [
    {value: 16, name: '俄罗斯', itemStyle:{color:'#f6bb64'},
    label: {
      fontSize: 15 ,// 设置字体大小为20
      formatter:'{b} {d}% \n({c}人)'
    }},
    {value: 695, name: '韩国', itemStyle:{color:'#1ac2fa'},
    label: {
      fontSize: 15 ,// 设置字体大小为20
      formatter:'{b} {d}% \n({c}人)'
    }},
    {value: 94, name: '其它', itemStyle:{color:'#10dd93'},
    label: {
      fontSize: 15 ,// 设置字体大小为20
      formatter:'{b} {d}% \n({c}人)'
    }},
  ],
  '2022': [
    {value: 0.5067, name: '俄罗斯', itemStyle:{color:'#f6bb64'},
    label: {
      fontSize: 15 ,// 设置字体大小为20
      formatter:'{b} {d}% \n({c}万)'
    }},
    {value: 1.6570, name: '韩国', itemStyle:{color:'#1ac2fa'},
    label: {
      fontSize: 15 ,// 设置字体大小为20
      formatter:'{b} {d}% \n({c}万)'
    }},
    {value: 0.1226, name: '其它', itemStyle:{color:'#10dd93'},
    label: {
      fontSize: 15 ,// 设置字体大小为20
      formatter:'{b} {d}% \n({c}万)'
    }}
  ],
  '2023': [
    {value: 20.09, name: '俄罗斯', itemStyle:{color:'#f6bb64'},
    label: {
      fontSize: 15 ,// 设置字体大小为20
      formatter:'{b} {d}% \n({c}万)'
    }},
    {value: 34.23, name: '韩国', itemStyle:{color:'#1ac2fa'},
    label: {
      fontSize: 15 ,// 设置字体大小为20
      formatter:'{b} {d}% \n({c}万)'
    }},
    {value: 0.86, name: '其它', itemStyle:{color:'#10dd93'},
    label: {
      fontSize: 15 ,
      formatter:'{b} {d}% \n({c}万)'
    }}
  ]
}
var option = {
  baseOption: {
    timeline: {
      axisType: 'value',
      autoPlay: true,
      playInterval: 1000,
      data: years,
      top:'70%'
    },
    series: [{
      type: 'pie',
      radius: ['30%', '50%'],  // Set the same value for inner and outer radius
      center: ['45%', '36%'],
      label: {
        show: true,
        formatter: '{b}({d}%)'
      },
      roseType: 'radius'  // Set the roseType to 'radius' for ring chart
    }]
  },
  options: []
}
// 根据数据填充option
years.forEach(function(year) {
  option.options.push({
    series: [{
      data: data[year]
    }]
  })
})

// 使用option设置echarts实例
myChart5.setOption(option);
// 监听timelinechanged事件
myChart5.on('timelinechanged', function(params) {
  var yearIndex = params.currentIndex;
  myChart5.setOption({
    series: [{
      data: data[years[yearIndex]],
    }]
  })
})
};
  distributeByStatusChart();  
//图例适应屏幕变化
let distributeByServerChart = function() {
  // 时间轴数据
  var years = ['2021', '2022', '2023']
  // 饼状图数据
  var data = {
    '2021': [
      {value: 0.2541, name: '黑龙江', itemStyle:{color:'#906eff'},
      label: {
        fontSize: 15 ,// 设置字体大小为20
        formatter:'{b} {d}%'
      }},
      {value: 0.2494, name: '其它', itemStyle:{color:'#28befe'},
      label: {
        fontSize: 15 ,// 设置字体大小为20
        formatter:'{b} {d}%'
      }},
      {value: 0.2081, name: '辽宁', itemStyle:{color:'#16e1e9'},
      label: {
        fontSize: 15 ,// 设置字体大小为20
        formatter:'{b} {d}%'
      }},
      {value: 0.1573, name: '京津冀', itemStyle:{color:'#10dd93'},
      label: {
        fontSize: 15 ,// 设置字体大小为20
        formatter:'{b} {d}%'
      }},
      {value: 0.0948, name: '长三角', itemStyle:{color:'#f6bb64'},
      label: {
        fontSize: 15 ,// 设置字体大小为20
        formatter:'{b} {d}%'
      }},
      {value: 0.0363, name: '珠三角', itemStyle:{color:'#10dd93'},
      label: {
        fontSize: 15 ,// 设置字体大小为20
        formatter:'{b} {d}%'
      }},
    ],
    '2022': [
      {value: 0.4155, name: '黑龙江', itemStyle:{color:'#906eff'},
      label: {
        fontSize: 15 ,// 设置字体大小为20
        formatter:'{b} {d}%'
      }},
      {value: 0.3768, name: '辽宁', itemStyle:{color:'#28befe'},
      label: {
        fontSize: 15 ,// 设置字体大小为20
        formatter:'{b} {d}%'
      }},
      {value: 0.0692, name: '长三角', itemStyle:{color:'#16e1e9'},
      label: {
        fontSize: 15 ,// 设置字体大小为20
        formatter:'{b} {d}% '
      }},
      {value: 0.0614, name: '珠三角', itemStyle:{color:'#10dd93'},
      label: {
        fontSize: 15 ,// 设置字体大小为20
        formatter:'{b} {d}%'
      }},
      {value: 0.0540, name: '京津冀', itemStyle:{color:'#f6bb64'},
      label: {
        fontSize: 15 ,// 设置字体大小为20
        formatter:'{b} {d}%'
      }},
      {value: 0.0231, name: '其它', itemStyle:{color:'#10dd93'},
      label: {
        fontSize: 15 ,// 设置字体大小为20
        formatter:'{b} {d}%'
      }},
    ],
    '2023': [
      {value: 0.3519, name: '辽宁', itemStyle:{color:'#906eff'},
      label: {
        fontSize: 15 ,// 设置字体大小为20
        formatter:'{b} {d}%'
      }},
      {value: 0.2407, name: '黑龙江', itemStyle:{color:'#28befe'},
      label: {
        fontSize: 15 ,// 设置字体大小为20
        formatter:'{b} {d}%'
      }},
      {value: 0.1296, name: '京津冀', itemStyle:{color:'#16e1e9'},
      label: {
        fontSize: 15 ,// 设置字体大小为20
        formatter:'{b} {d}%'
      }},
      {value: 0.1111, name: '山东', itemStyle:{color:'#10dd93'},
      label: {
        fontSize: 15 ,// 设置字体大小为20
        formatter:'{b} {d}%'
      }},
      {value: 0.1296, name: '长三角', itemStyle:{color:'#f6bb64'},
      label: {
        fontSize: 15 ,// 设置字体大小为20
        formatter:'{b} {d}%'
      }},
      {value: 0.0185, name: '珠三角', itemStyle:{color:'#10dd93'},
      label: {
        fontSize: 15 ,// 设置字体大小为20
        formatter:'{b} {d}%'
      }},
    ]
  }
  var option = {
    baseOption: {
      timeline: {
        axisType: 'value',
        autoPlay: true,
        playInterval: 1000,
        data: years,
        top:'75%'
      },
      series: [{
        type: 'pie',
        radius: '50%',  // Set the same value for inner and outer radius
        center: ['45%', '40%'],
        label: {
          show: true,
          formatter: '{b}({d}%)'
        },
      }]
    },
    options: []
  }
  // 根据数据填充option
  years.forEach(function(year) {
    option.options.push({
      series: [{
        data: data[year]
      }]
    })
  })
  
  // 使用option设置echarts实例
  myChart6.setOption(option);
  // 监听timelinechanged事件
  myChart6.on('timelinechanged', function(params) {
    var yearIndex = params.currentIndex;
    myChart6.setOption({
      series: [{
        data: data[years[yearIndex]],
      }]
    })
  })
  };
  distributeByServerChart();  
let chartResize = function(){
  myChart1.resize();
  myChart2.resize();
  myChart3.resize();
  myChart4.resize();
  myChart5.resize();
  myChart6.resize();
}
window.onresize = debounce(chartResize,500);
