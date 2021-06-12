<template>
  <div>
    <div class="dd">
      <h1 class="hh1">STORAGE-LAYER-BLOCK-CHAIN-MODEL</h1>
      <a-dropdown>
        <a class="ant-dropdown-link">
          Hello, user!
          <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a>reset password</a>
          </a-menu-item>
          <a-menu-item>
            <a>log out</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>

    <app-side></app-side>
    <div class="main">
      <app-bread></app-bread>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import appSide from "./layout/side";
import appBread from "./bread";

export default {
  name: "HelloWorld",
  components: {
    appSide,
    appBread
  },
  props: {
    msg: String
  }
};
</script>

<style scoped>
.dd,
.hh1 {
  background-color: #007acc;
  font-size: 40px;
  color: #fff;
  text-align: center;
  line-height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  vertical-align: middle;
}
.side {
  position: absolute;
  width: 250px;
  top: 80px;
  left: 0;
  bottom: 0;
}
.main {
  position: absolute;
  top: 80px;
  left: 250px;
  bottom: 0;
  right: 0;
  padding: 10px;
}
.ant-dropdown-trigger {
  position:absolute;
  font-size: 15px;
  color: #fff;
  right: 20px;
}
</style>
