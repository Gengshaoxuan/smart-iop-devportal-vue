<template>
  <div class="loginBody">
    <div class="login-area">
      <div class="login-title">
        <h1>建设银行开放平台</h1>
        <div class="login-strip"></div>
        <h3>一站式智能解决方案</h3>
      </div>
      <div class="login-wrap">
        <el-row type="flex" justify="start">
          <h3>登录</h3>
        </el-row>
        <el-form :model="form">
          <el-form-item>
            <el-input placeholder="用户名/手机号/邮箱" prefix-icon="el-icon-user" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input
              type="password"
              placeholder="登录密码"
              prefix-icon="el-icon-lock"
              v-model="form.pass"
              maxlength="6"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="验证码"
              prefix-icon="el-icon-notebook-2"
              v-model="form.code"
              maxlength="4"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="action_login">登录</el-button>
          </el-form-item>
          <el-row type="flex" justify="end">
            <el-link :underline="false" type="primary">忘记密码？</el-link>
          </el-row>
        </el-form>
        <el-row class="login_foot">
          <el-col>
            <span>还没有账户？</span>
            <el-link :underline="false" type="primary" @click="jumpRegister">立即注册</el-link>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        name: "",
        pass: "",
        code: ""
      }
    };
  },
  methods: {
    jumpRegister: function() {
      this.$router.push({ path: "/register" });
    },
    action_login() {
      this.$store.commit("setToken","dddd");
      this.$router.push({ path: "/home" });

    }
  }
};
</script>

<style>
.loginBody {
  background: url("../../assets/images/loginBack.jpg") center center no-repeat;
  background-size: 100%;
}
.login-area {
  width: 960px;
  height: 684px;
  margin: 0 auto;
  position: relative;
}
.login-title {
  position: absolute;
  top: 50%;
  margin-top: -56px;
}
.login-title h1 {
  font-size: 48px;
  letter-spacing: 10px;
  color: #e9f0f9;
  font-weight: 550;
}
.login-title h3 {
  padding-left: 30px;
  font-size: 18px;
  letter-spacing: 4px;
  color: #a6c3e8;
}
.login-strip {
  width: 50px;
  height: 6px;
  margin: 15px 0 20px;
  border-radius: 3px;
  background: #29d1ff;
}
.login-wrap {
  width: 348px;
  height: 390px;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -195px;
  background-color: #ffffff;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
}
.login-wrap h3 {
  padding-left: 30px;
}
.login-wrap /deep/ .el-form {
  padding: 0px 30px;
}
.login-wrap /deep/ .el-button {
  width: 285px;
}
.login_foot {
  background-color: #eeeeee;
  padding: 30px;
}
</style>
