<doc>

  https://www.makeapie.com/editor.html?c=xpS0XykpeX

</doc>
<template>
  <div>
    <div id="relitu" style="width: 500px;height:400px;float: left;"></div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {

    data() {
      return {
        charts: '',
      }
    },

    mounted() {
      this.init("relitu")
    },

    methods: {
      init(id) {
        this.charts = echarts.init(document.getElementById(id))

        var outname = ["南海诸岛", '北京市', '天津市', '上海市', '重庆市', '河北省', '河南省', '云南省', '辽宁省', '黑龙江省', '湖南省', '安徽省', '山东省', '新疆维吾尔自治区', '江苏省', '浙江省', '江西省', '湖北省', '广西壮族自治区', '甘肃省', '山西省', '内蒙古自治区', '陕西省', '吉林省', '福建省', '贵州省', '广东省', '青海省', '西藏自治区', '四川省', '宁夏回族自治区', '海南省', '台湾省', '香港', '澳门'];
        var outvalue = [0, 524, 13, 140, 75, 13, 83, 11, 19, 15, 69, 260, 39, 4, 31, 104, 36, 1052, 33, 347, 9, 157, 22, 4, 18, 5, 6398, 41, 0, 484, 404, 22, 3, 5, 225];
        var outdata = [];
        for (var i = 0; i < outname.length; i++) {
          outdata.push({
            name: outname[i],
            value: outvalue[i]
          })
        }
        console.log('outdata---> ', outdata)
        let option = {
          tooltip: {
            show: true,
            formatter: function (params) {
              return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value + '人&nbsp;&nbsp;';
            }
          },
          visualMap: {
            type: 'piecewise',
            left: '15',
            bottom: '15',
            itemWidth: 27,
            itemHeight: 15,
            textStyle: {
              color: '#333333',
              fontSize: 14,
            },
            pieces: [{
              min: 500,
              label: '>500',
            }, {
              max: 500,
              min: 200,
              label: '200-500',
            }, {
              max: 200,
              min: 0,
              label: '<200',
            }, {
              value: 0,
              label: '无数据',
            },],
            inRange: {
              color: ['#B2CAE0', '#D2EAFF', '#8AC6FD', '#45A5F8']
            },
            outOfRange: {
              color: ['#999999']
            }
          },
          geo: {
            map: 'china',
            show: true,
            roam: false,
            label: {
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                borderColor: 'rgba(0,63,140,0.2)',
                shadowColor: 'rgba(0,63,140,0.2)',
                shadowOffsetY: 20,
                shadowBlur: 30
              }
            }
          },
          series: [{
            type: 'map',
            map: 'china',
            aspectScale: 0.75,
            //zoom:1.1,
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              }
            },
            itemStyle: {
              normal: {
                areaColor: '#B2CAE0',
                borderColor: '#fff',
                borderWidth: 1,
              },
              emphasis: {
                areaColor: '#FFAE00',
              }
            },
            data: outdata
          }]
        };

        // 使用刚指定的配置项和数据显示图表。
        this.charts.setOption(option);
      }
    },

  }
</script>
<style scoped>

</style>