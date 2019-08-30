<template>
  <div class="registerBody">
    <div class="register-nav">
      <el-row>
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>注册</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </div>
    <div class="register-wrap">
      <el-row>
        <el-col class="register-title">
          <h2>注册网站会员</h2>
        </el-col>
      </el-row>
      <el-form label-width="90px">
        <el-form-item label="用户名:">
          <el-input>
            <template slot="append">4-20个字符，包含字母（不区分大小写）、数字、下划线，不能全部为数字</template>
          </el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input>
            <template slot="append">密码必须同时包含大小写字母和至少 1 个数字，8-16个字符，不支持纯数字或纯字母</template>
          </el-input>
        </el-form-item>
        <el-form-item label="确认密码:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="手机号码:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="短信验证码:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="邮箱:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-row type="flex"
                  justify="start">
            <el-checkbox>
              我已阅读并同意
              <el-link type="primary">
                《中国建设银行开放银行管理平台用户服务协议》、《中国建设银行股份有限公司隐私政策》
              </el-link>
            </el-checkbox>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row type="flex"
                  justify="start">
            <el-button type="primary">提交</el-button>
          </el-row>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'register'
}
</script>

<style>
.registerBody {
  margin: auto 280px;
}
.register-nav {
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 20px;
  background-color: #bad8fa;
}
.register-title {
  text-align: left;
  padding-left: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #0066b3;
}
</style>
