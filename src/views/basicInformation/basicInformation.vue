<template>
  <div>
    <h2>基本信息</h2>
    <hr>
    <el-row>
      <el-col :span="4"><span>用户名：</span></el-col>
      <el-col :span="4"><span>admin2536874</span></el-col>
      <el-col :span="4"><span>未实名认证</span></el-col>
      <el-col :span="4">
        <el-link type="primary"
                 @click="jumpCertifi">立即实名</el-link>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><span>手机号码：</span></el-col>
      <el-col :span="4"><span>188****8888</span></el-col>
      <el-col :span="4">
        <el-link type="primary"
                 @click="jumpUpdatePhone">修改</el-link>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><span>邮箱地址：</span></el-col>
      <el-col :span="4"><span>gengsx@163.com</span></el-col>
      <el-col :span="4">
        <el-link type="primary"
                 @click="jumpUpdateEmail">修改</el-link>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><span>密码强度：</span></el-col>
      <el-col :span="4"><span>高</span></el-col>
      <el-col :span="4">
        <el-link type="primary"
                 @click="jumpUpdatePass">修改</el-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'basicInformation',
  // data () {

  // },
  methods: {
    jumpCertifi: function () {
      this.$router.push({ path: '/certification' });
    },
    jumpUpdatePhone: function () {
      this.$router.push({ path: '/updatePhone' });
    },
    jumpUpdateEmail: function () {
      this.$router.push({ path: '/updateEmail' });
    },
    jumpUpdatePass: function () {
      this.$router.push({ path: '/updatePass' });
    }
  }
}
</script>
<style lang="less" scoped>
</style>