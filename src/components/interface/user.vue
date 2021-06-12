<template>
  <div>
    <a-Button>
        Find All
    </a-Button>
    <a-Button>
        Add
    </a-Button>
    <a-Button>
        Delete
    </a-Button>
    <a-Button>
        Change
    </a-Button>
    <a-form>
        <a-form.Item>
            <a-Input />
        </a-form.Item>
        <a-form.Item>
            <a-Button>
                Find By Name
            </a-Button>
        </a-form.Item>
    </a-form>
    <a-table :columns="columns" :data-source="data">
        <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    scopedSlots: { customRender: 'id' },
    width: 240,
  },
  {
    title: 'TBD0',
    dataIndex: 'TBD0',
    key: 'TBD0',
    width: 80,
  },
  {
    title: 'TBD1',
    dataIndex: 'TBD1',
    key: 'TBD1',
    ellipsis: true,
  },
];

const data = [
  {
    id: 1,
    TBD0: '1-TBD0',
    TBD1: '1-TBD1',
  },
  {
    id: 2,
    TBD0: '2-TBD0',
    TBD1: '2-TBD1',
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>