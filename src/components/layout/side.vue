<template>
    <div class="side">
      <a-menu
        :default-selected-keys="[this.$route.path.split('/')[2]]"
        :default-open-keys="[this.$route.path.split('/')[1]]"
        mode="inline"
        theme="light"
      >
        <a-sub-menu key="interface">
          <span slot="title">
            <a-icon type="appstore" />
            <span>Interface</span>
          </span>
          <a-menu-item key="permit">
            <router-link to="/interface/permit">Permit</router-link>
          </a-menu-item>
          <a-menu-item key="catalog">
            <router-link to="/interface/catalog">Catalog</router-link>
          </a-menu-item>
          <a-menu-item key="directory">
            <router-link to="/interface/directory">Directory</router-link>
          </a-menu-item>
          <a-menu-item key="column">
            <router-link to="/interface/column">Column</router-link>
          </a-menu-item>
          <a-menu-item key="compute">
            <router-link to="/interface/compute">Compute</router-link>
          </a-menu-item>
          <a-menu-item key="user">
            <router-link to="/interface/user">User</router-link>
          </a-menu-item>
          <a-menu-item key="discovery">
            <router-link to="/interface/discovery">Discovery</router-link>
          </a-menu-item>
          <a-menu-item key="test">
            <router-link to="/interface/test">Test</router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
  .ant-menu-inline{
    border: none;
  }
</style>

