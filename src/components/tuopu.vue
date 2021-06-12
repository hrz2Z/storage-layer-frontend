<template>
  <div>
    <span>S型拓扑图</span>
    <div class="bktopo-container">
      <div class="bktopo_demo" id="bktopo_demo2">
        <div class="none node" id="node-templates" data-container="body" data-placement="top" data-html="true"
          data-trigger="hover">
          <div class="node-container"><span class="node-text"></span></div>
        </div>
        <div class="bktopo_box" style="height:350px;"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data: {
          "nodes": [
            { "id": "root", "x": 10, "y": 152, "height": 50, "width": 120, "text": "卡机健康度", "className": "info" },
            { "id": "child1", "x": 200, "y": 30, "height": 50, "width": 120, "text": "进程CPU监控", "className": "info" },
            { "id": "child2", "x": 200, "y": 90, "height": 50, "width": 120, "text": "网管网络故障监控", "className": "info" },
            { "id": "child3", "x": 200, "y": 150, "height": 50, "width": 120, "text": "进程内在泄露监控", "className": "info" },
            { "id": "child4", "x": 200, "y": 210, "height": 50, "width": 120, "text": "进程存活监控", "className": "info" },
            { "id": "child5", "x": 200, "y": 270, "height": 50, "width": 120, "text": "用户内在使用监控", "className": "info" },
            { "id": "child1_1", "x": 380, "y": 30, "height": 50, "width": 120, "text": "监控正常无触发自愈", "className": "success" },
            { "id": "child2_1", "x": 380, "y": 90, "height": 50, "width": 120, "text": "监控正常无触发自愈", "className": "success" },
            { "id": "child3_1", "x": 380, "y": 150, "height": 50, "width": 120, "text": "发现异常触发自愈", "className": "danger" },
            { "id": "child3_2", "x": 560, "y": 150, "height": 50, "width": 120, "text": "重启进程正常", "className": "success" },
            { "id": "child4_1", "x": 380, "y": 210, "height": 50, "width": 120, "text": "发现异常触发自愈", "className": "danger" },
            { "id": "child4_2", "x": 560, "y": 210, "height": 50, "width": 120, "text": "重启进程正常", "className": "success" },
            { "id": "child5_1", "x": 380, "y": 270, "height": 50, "width": 120, "text": "发现异常触发自愈", "className": "success" },
          ],
          "edges": [
            { "source": "root", "sDirection": 'right', "target": "child1", "tDirection": 'left', "edgesType": "info" },
            { "source": "root", "sDirection": 'right', "target": "child2", "tDirection": 'left', "edgesType": "info" },
            { "source": "root", "sDirection": 'right', "target": "child3", "tDirection": 'left', "edgesType": "info" },
            { "source": "root", "sDirection": 'right', "target": "child4", "tDirection": 'left', "edgesType": "info" },
            { "source": "root", "sDirection": 'right', "target": "child5", "tDirection": 'left', "edgesType": "info" },
            { "source": "child1", "sDirection": 'right', "target": "child1_1", "tDirection": 'left', "edgesType": "success" },
            { "source": "child2", "sDirection": 'right', "target": "child2_1", "tDirection": 'left', "edgesType": "success" },
            { "source": "child3", "sDirection": 'right', "target": "child3_1", "tDirection": 'left', "edgesType": "danger" },
            { "source": "child3_1", "sDirection": 'right', "target": "child3_2", "tDirection": 'left', "edgesType": "success" },
            { "source": "child4", "sDirection": 'right', "target": "child4_1", "tDirection": 'left', "edgesType": "danger" },
            { "source": "child4_1", "sDirection": 'right', "target": "child4_2", "tDirection": 'left', "edgesType": "success" },
            { "source": "child5", "sDirection": 'right', "target": "child5_1", "tDirection": 'left', "edgesType": "success" }
          ]
        }
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        $('#bktopo_demo2 .bktopo_box').bkTopology({
          data: this.data, //配置数据源
          lineType: [ //配置线条的类型
            { type: 'success', lineColor: '#46C37B' },
            { type: 'info', lineColor: '#4A9BFF' },
            { type: 'warning', lineColor: '#f0a63a' },
            { type: 'danger', lineColor: '#c94d3c' },
            { type: 'default', lineColor: '#aaa' }
          ]
        });
      }
    },
  }
</script>
<style scoped>

</style>