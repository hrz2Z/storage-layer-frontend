<template>
  <div>
    <h2>这是m第一个页面</h2>
    <a-date-picker @change="onChange" /> <br>
    <a-button  @click="down" type="primary">
      下载
    </a-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mData: [
          {
            name: 'wjw',
            age: 18,
            sex: '1'
          }, {
            name: 'tcz',
            age: 22,
            sex: '1'
          }, {
            name: 'zx',
            age: 23,
            sex: '1'
          }, {
            name: 'qy',
            age: 21,
            sex: '1'
          }, {
            name: 'lxh',
            age: 22,
            sex: '1'
          },
        ]
      }
    },
    methods: {
      onChange(date, dateString) {
        console.log(date, dateString);
      },
      down() {
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = ['姓名', '年龄', '性别'] // excel的表头标题
          const filterVal = ['name', 'age', 'sex'] // 需要导出对应自己列表中的每项数据 
          const list = this.mData // 整个列表的数据
          const data = this.formatJson(filterVal, list)
          excel.export_json_to_excel(
            tHeader,
            data,
            'table-list' // 文件名称,若不写导出文件可能不识别
          )
        })
      },
      formatJson(filterVal, jsonData) { // 在整个列表的数据中过滤导出自己需要的数据
        return jsonData.map(v => filterVal.map(j => v[j]))
      },
    }
  }
</script>

<style scoped>

</style>