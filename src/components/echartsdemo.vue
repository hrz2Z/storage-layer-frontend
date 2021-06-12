
<template>
  <div>
    <h3>echarts 报表</h3>
    <!-- 水纹球 -->
    <shuiwen></shuiwen>
    <!-- 伪立体柱状图 -->
    <weilitizhuzhuangtu></weilitizhuzhuangtu>
    <!-- 饼状图 -->
    <bingzhuangtu></bingzhuangtu>
    <!-- 仪表盘 -->
    <yibiaopan></yibiaopan>
    <!-- 地图 -->
    <ditu></ditu>
    <!-- 关系图 -->
    <guanxitu></guanxitu>
    <!-- 主题图 -->
    <zhutitu></zhutitu>
    <!-- 单柱 -->
    <danzhu></danzhu>
    <!-- 热力图 -->
    <relitu></relitu>
    <!-- 天气 -->
    <tianqi></tianqi>

  </div>
</template>
<script>
  import shuiwen from '@/components/echarts/shuiwen'
  import weilitizhuzhuangtu from '@/components/echarts/weilitizhuzhuangtu'
  import bingzhuangtu from '@/components/echarts/bingzhuangtu'
  import yibiaopan from '@/components/echarts/yibiaopan'
  import ditu from '@/components/echarts/ditu'
  import guanxitu from '@/components/echarts/guanxitu'
  import zhutitu from '@/components/echarts/zhutitu'
  import danzhu from '@/components/echarts/danzhu'
  import relitu from '@/components/echarts/relitu'
  import tianqi from '@/components/echarts/tianqi'

  export default {
    components:{
      shuiwen,
      weilitizhuzhuangtu,
      bingzhuangtu,
      yibiaopan,
      ditu,
      guanxitu,
      zhutitu,
      danzhu,
      relitu,
      tianqi
    },
    data() {
      return {
      }
    },

    mounted() {
    },

    methods: {
      
    },

  }
</script>
<style scoped>

</style>