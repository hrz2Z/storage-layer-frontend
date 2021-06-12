<template>
  <div class="topbar">
    <div class="top-right-logo">
      <div class="toplogo">
      </div>
      <span class="index-title">wjwjwjwjwjwjw</span>
    </div>
    <div class="top-right">
      <div class="top-center">
      </div>
    </div>
    <div class="top-left">
    </div>
  </div>
</template>

<script>
import mqtt from 'mqtt'
// 连接选项
const options = {
    clean: true, // 保留回话
    connectTimeout: 4000, // 超时时间
    // 认证信息
    // clientId: 'mqttjs_a6b036fc12',
    username: 'wjw',
    password: 'wjwjwj',
}
const connectUrl = 'ws://1.2.3.4:8083/mqtt'
const client = mqtt.connect(connectUrl, options)


export default {
  name: "topbar",
  // components: {
  //   PersonCenter,
  //   ModifyPassword,
  //   TeamCompany,
  // },
  data() {
    return {
    };
  },
  created() {
    //     let Mesdata = JSON.parse(res.data)
    //     this.openNotificationWithIcon('info', this.TypeData[Mesdata.type], Mesdata.content, Mesdata.id, Mesdata.result)
    // 开启mqtt获取实时消息的通知
    this.mqtthuoquMsg();
  },

  methods: {
    // mqtt
    mqtthuoquMsg() {
      console.log('asdasdasdasd')
        client.on('connect', () => {
            console.log("连接成功！！！")
            client.subscribe('/123456', { qos: 2 }, (error) => {
                if (!error) {
                    console.log('订阅成功')
                } else {
                    console.log('订阅失败')
                }
            })

        })
        // 接收消息处理
        client.on('message', (topic, message) => {
            console.log('收到来自', topic, '的消息', message.toString())
        })
    },
  }
};
</script>

<style scoped>
.topbar {
  text-align: center;
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 1px 2px 3px #ddd;
}

.topbar .top-right-logo {
  margin-left: 5px;
  height: 100%;
  float: left;
  cursor: pointer;
}

.top-center {
  border-radius: 50px;
  line-height: 26px;
  border: 1px #ccc solid;
  height: 26px;
  margin-top: 7px;
  box-sizing: content-box;
}

.topbar .top-right-logo .toplogo {
  line-height: 50px;
  display: inline-block;
}

.topbar .top-right-logo .index-title {
  font-family: MicrosoftYaHei;
  font-size: 19px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #000;
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 右侧的切换目录 */
.topbar .top-right {
  display: inline-block;
}

.topbar .top-right .menu {
  padding: 0 15px;
  display: inline-block;
  font-size: 15px;
  cursor: pointer;
  border-radius: 50px;
}

.topbar .top-right .menu:nth-child(2) {
  margin-left: 10px;
}

.topbar .top-right .menu p {
  margin: 0;
}

.topbar .top-right .menu:hover {
  color: #fff;
  border-radius: 50px;
  line-height: 26px;
  height: 26px;
  background: #19223f;
}

.topbar .top-right .projectStyle {
  color: #fff;
  border-radius: 50px;
  line-height: 26px;
  height: 26px;
  background: #19223f;
}

.topbar .top-right .menu p {
  display: inline-block;
}

/* 左侧登录信息 */
.topbar .top-left {
  float: right;
  margin-right: 10px;
}

/* 登录信息 */
.topbar .top-left .login-message .message-img {
  float: right;
  margin-right: 24px;
  cursor: pointer;
  font-size: 17px;
  color: #4b4b4b;
}

.topbar .top-left .login-message .message-img:hover {
  opacity: 0.5;
}

.topbar .top-left .login-message .message-name {
  float: right;
  margin-right: 24px;
  cursor: pointer;
}

.topbar .top-left .login-message .message-name span {
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #2bb5e4;
}

@media screen and (max-width: 1440px) {
}
</style>
