<template>
  <div>
    <span>纵向拓扑图</span>
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
            {
              "id": "node1", "x": 361, "y": 20, "height": 50, "width": 180,
              "text": "浏览器发起'www.qq.com'请求", "className": "node success"
            },
            {
              "id": "node2",
              "x": 391, "y": 100, "height": 50, "width": 120, "text": "本地hosts文件解析",
              "className": "node success"
            },
            {
              "id": "node3", "x": 301, "y": 200, "height": 50, "width": 100, "text": "客户接入联通网", "className": "node"
            },
            {
              "id": "node4", "x": 400, "y": 200, "height": 50, "width": 100, "text": "客户接入移动网", "className": "node"
            },
            {
              "id": "node5", "x": 499, "y": 200, "height": 50, "width": 100, "text": "客户接入电信网",
              "className": "node success", "title": "如果hosts匹配成功则不经过DNS服务器解析。直接使用IP访问"
            },
            {
              "id": "node6", "x": 233, "y": 300, "height": 50, "width": 140, "text": "联通DNS服务器", "className": "node"
            },
            {
              "id": "node7", "x": 372, "y": 300, "height": 50, "width": 140, "text": "移动DNS服务器", "className": "node"
            },
            {
              "id": "node8", "x": 511, "y": 300, "height": 50, "width": 140, "text": "电信DNS服务器",
              "className": "node success"
            },
            {
              "id": "node9", "x": 233, "y": 400, "height": 50, "width": 370,
              "text": "核心骨干交换网集群", "className": "node success"
            },
            {
              "id": "node19", "x": 343, "y": 500, "height": 50, "width": 150,
              "text": "WEb服务器", "className": "node success"
            },
          ],
          "edges": [
            { "source": "node1", "sDirection": 'bottom', "target": "node2", "tDirection": 'top', "edgesType": "success" },
            { "source": "node2", "sDirection": 'bottom', "target": "node5", "tDirection": 'top', "edgesType": "success" },
            { "source": "node3", "sDirection": 'bottom', "target": "node6", "tDirection": 'top', "edgesType": "danger" },
            { "source": "node6", "sDirection": 'bottom', "target": "node9", "tDirection": 'left', "edgesType": "danger" },
            { "source": "node4", "sDirection": 'bottom', "target": "node7", "tDirection": 'top', "edgesType": "danger" },
            { "source": "node5", "sDirection": 'bottom', "target": "node8", "tDirection": 'top', "edgesType": "success" },
            { "source": "node7", "sDirection": 'bottom', "target": "node9", "tDirection": 'top', "edgesType": "danger" },
            { "source": "node8", "sDirection": 'bottom', "target": "node9", "tDirection": 'right', "edgesType": "danger" },
            { "source": "node9", "sDirection": 'bottom', "target": "node19", "tDirection": 'top', "edgesType": "success" }
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