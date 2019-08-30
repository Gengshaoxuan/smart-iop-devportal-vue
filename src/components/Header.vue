<template>
  <div>
    <div class="head-nav">
      <el-row type="flex" class="row-bg" justify="end">
        <el-col>
          客服与投诉热线：95533 |
          <el-link type="primary" :underline="false">建行首页</el-link>
          <el-link type="primary" :underline="false">建行集团</el-link>
          <el-link type="primary" :underline="false">网点及ATM</el-link>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row type="flex" class="row-bg head-title" justify="space-around">
        <el-col :span="4"></el-col>
        <el-col :span="4">
          <el-image :src="logoUrl"></el-image>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="jumpIndex" class="title">首页</el-button>
          <el-button type="primary" @click="jumpProductCenter" class="title">产品中心</el-button>
          <el-button type="primary" @click="jumpHelpCenter" class="title">帮助中心</el-button>
        </el-col>
        <el-col :span="4"></el-col>
        <el-col :span="4">
          <el-link
            v-show="(!this.$store.state.token)"
            @click="jumpRegister"
            :underline="false"
          >注册</el-link>
          <el-link
            v-show="(!this.$store.state.token)"
            @click="jumpLogin"
            :underline="false"
          >登录</el-link>
          <el-link
            v-show="(this.$store.state.token)"
            type="primary"
            @click="jumpMessage"
            :underline="false"
          >站内信</el-link>
          <el-link
            v-show="(this.$store.state.token)"
            type="primary"
            @click="jumpPersonCenter"
            :underline="false"
          >个人中心</el-link>
          <el-link
            v-show="(this.$store.state.token)"
            type="primary"
            @click="jumpMyApplication"
            :underline="false"
          >我的应用</el-link>
          <el-link
            v-show="(this.$store.state.token)"
            type="primary"
            @click="loginout"
            :underline="false"
          >退出</el-link>
        </el-col>
        <el-col :span="2"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      logoUrl: require("../assets/images/logo.png")
    };
  },
  methods: {
    jumpIndex: function() {
      this.$router.push({ path: "/" });
    },
    jumpLogin: function() {
      this.$router.push({ path: "/login" });
    },
    jumpRegister: function() {
      this.$router.push({ path: "/register" });
    },
    jumpHelpCenter: function() {
      this.$router.push({ path: "/helpCenter" });
    },
    jumpProductCenter: function() {
      this.$router.push({ path: "/productCenter" });
    },
    jumpMessage: function() {
      this.$router.push({ path: "/Message" });
    },
    jumpPersonCenter: function() {
      this.$router.push({ path: "/PersonCenter" });
    },
    jumpMyApplication: function() {
      this.$router.push({ path: "/MyApplication" });
    },
    loginout: function() {
      //退出登录
      this.$store.commit("clearLoginState");
      this.$router.push({ path: "/home" });
    }
  }
};
</script>

<style>
.head-nav {
  display: flex;
  justify-content: flex-end;
  padding-right: 220px;
  background-color: #0066b3;
  color: #1dd9e2;
  height: 50px;
  line-height: 50px;
}
.head-title {
  height: 80px;
  line-height: 80px;
}
.el-image__inner {
  vertical-align: middle;
}
.title{
    background-color: #ffffff;
    border: none;
    color: #333333;
    font-size: 18px;
}
</style>
