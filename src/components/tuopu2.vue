<template>
  <div>
    <span>横向拓扑图</span>
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
              "id": "demo3_node1", "x": 100, "y": 50, "height": 50,
              "width": 100, "text": "发起", "className": "node success"
            },
            {
              "id": "demo3_node2", "x": 250, "y": 50, "height": 50,
              "width": 100, "text": "过程1", "className": "node success"
            },
            {
              "id": "demo3_node3", "x": 400, "y": 50, "height": 50,
              "width": 100, "text": "过程2", "className": "node danger"
            },
            {
              "id": "demo3_node4", "x": 550, "y": 50, "height": 50,
              "width": 100, "text": "过程3", "className": "node success"
            },
            {
              "id": "demo3_node5", "x": 550, "y": 150, "height": 50,
              "width": 100, "text": "过程4", "className": "node success"
            },
            {
              "id": "demo3_node6", "x": 400, "y": 150, "height": 50,
              "width": 100, "text": "过程5", "className": "node warning"
            },
            {
              "id": "demo3_node7", "x": 250, "y": 150, "height": 50,
              "width": 100, "text": "过程6", "className": "node success"
            },
            {
              "id": "demo3_node8", "x": 100, "y": 150, "height": 50,
              "width": 100, "text": "过程7", "className": "node success"
            },
          ],
          "edges": [
            {
              "source": "demo3_node1", "sDirection": 'right',
              "target": "demo3_node2", "tDirection": 'left', "edgesType": "success"
            },
            {
              "source": "demo3_node2", "sDirection": 'right',
              "target": "demo3_node3", "tDirection": 'left', "edgesType": "danger"
            },
            {
              "source": "demo3_node3", "sDirection": 'right',
              "target": "demo3_node4", "tDirection": 'left', "edgesType": "success"
            },
            {
              "source": "demo3_node4", "sDirection": 'right',
              "target": "demo3_node5", "tDirection": 'right', "edgesType": "success"
            },
            {
              "source": "demo3_node5", "sDirection": 'right',
              "target": "demo3_node6", "tDirection": 'right', "edgesType": "warning"
            },
            {
              "source": "demo3_node6", "sDirection": 'right',
              "target": "demo3_node7", "tDirection": 'right', "edgesType": "success"
            },
            {
              "source": "demo3_node7", "sDirection": 'right',
              "target": "demo3_node8", "tDirection": 'right', "edgesType": "success"
            },
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