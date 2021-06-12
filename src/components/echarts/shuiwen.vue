<doc>
  https://www.makeapie.com/explore.html#sort=rank~timeframe=all~author=all

  https://www.npmjs.com/package/echarts-liquidfill

  npm install echarts-liquidfill
</doc>
<template>
  <div>
    <div id="shuiwen" style="width: 500px;height:400px;float: left;"></div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import "echarts-liquidfill";
  export default {

    data() {
      return {
        charts: '',
      }
    },

    mounted() {
      this.init("shuiwen")
    },

    methods: {
      init(id) {
        this.charts = echarts.init(document.getElementById(id))
        let value = 0.45;
        let data = [value, value, value,];
        let option = {
          backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
            offset: 0,
            color: '#431ab8'
          }, {
            offset: 1,
            color: '#471bba'
          }]),
          title: {
            text: (value * 100).toFixed(0) + '{a|%}',
            textStyle: {
              fontSize: 50,
              fontFamily: 'Microsoft Yahei',
              fontWeight: 'normal',
              color: '#bcb8fb',
              rich: {
                a: {
                  fontSize: 28,
                }
              }
            },
            x: 'center',
            y: '35%'
          },
          graphic: [{
            type: 'group',
            left: 'center',
            top: '60%',
            children: [{
              type: 'text',
              z: 100,
              left: '10',
              top: 'middle',
              style: {
                fill: '#aab2fa',
                text: '使用占比',
                font: '20px Microsoft YaHei'
              }
            }]
          }],
          series: [{
            type: 'liquidFill',
            radius: '80%',
            center: ['50%', '50%'],
            //  shape: 'roundRect',
            data: data,
            backgroundStyle: {
              color: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0.5,
                y2: 1,
                colorStops: [{
                  offset: 1,
                  color: 'rgba(68, 145, 253, 0)'
                }, {
                  offset: 0.5,
                  color: 'rgba(68, 145, 253, .25)'
                }, {
                  offset: 0,
                  color: 'rgba(68, 145, 253, 1)'
                }],
                globalCoord: false
              },
            },
            outline: {
              borderDistance: 0,
              itemStyle: {
                borderWidth: 20,
                borderColor: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(69, 73, 240, 0)'
                  }, {
                    offset: 0.5,
                    color: 'rgba(69, 73, 240, .25)'
                  }, {
                    offset: 1,
                    color: 'rgba(69, 73, 240, 1)'
                  }],
                  globalCoord: false
                },
                shadowBlur: 10,
                shadowColor: '#000',
              }
            },
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 1,
                  color: 'rgba(58, 71, 212, 0)'
                }, {
                  offset: 0.5,
                  color: 'rgba(31, 222, 225, .2)'
                }, {
                  offset: 0,
                  color: 'rgba(31, 222, 225, 1)'
                }],
                globalCoord: false
              },
            },
            label: {
              normal: {
                formatter: '',
              }
            }
          },]
        };
        // 使用刚指定的配置项和数据显示图表。
        this.charts.setOption(option);
      }
    },

  }
</script>
<style scoped>

</style>