<template>
  <div class="help-body">
    <div class="helpModule newUser">
      <el-row>
        <el-col>
          <img src="../../assets/images/helpCenter/gettingStart.png">
          <span>新手入门</span>
        </el-col>
      </el-row>
      <el-row>
        <el-link>
          <el-link>如何使用开放平台服务？</el-link>
        </el-link>
      </el-row>
      <el-row>
        <el-col>
          <el-link>如何注册平台账号？</el-link>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-link>如何完成实名认证？</el-link>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-link type="primary">更多</el-link>
        </el-col>
      </el-row>
    </div>
    <div class="helpModule testEnv">
      <el-row>
        <el-col>
          <img src="../../assets/images/helpCenter/envStart.png">
          <span>测试环境</span>
        </el-col>
      </el-row>
      <el-row>
        <el-link>
          <el-link>什么是沙箱测试环境？</el-link>
        </el-link>
      </el-row>
      <el-row>
        <el-col>
          <el-link>如何获取沙箱环境网关证书请求数据（CSR）？</el-link>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-link>如何获取沙箱环境证书？</el-link>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-link type="primary">更多</el-link>
        </el-col>
      </el-row>
    </div>
    <div class="helpModule onlineQ">
      <el-row>
        <el-col>
          <img src="../../assets/images/helpCenter/onlineSupport.png">
          <span>上线问题</span>
        </el-col>
      </el-row>
      <el-row>
        <el-link>
          <el-link>如何申请上线？</el-link>
        </el-link>
      </el-row>
      <el-row>
        <el-col>
          <el-link type="primary">更多</el-link>
        </el-col>
      </el-row>
    </div>
    <div class="helpModule helpDown">
      <el-row>
        <el-col>
          <img src="../../assets/images/helpCenter/downloadsdk.png">
          <span>下载</span>
        </el-col>
      </el-row>
      <el-row>
        <el-link>
          <el-link>SDK下载？</el-link>
        </el-link>
      </el-row>
      <el-row>
        <el-col>
          <el-link>密钥生成工具下载？</el-link>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-link>测试报告模板？</el-link>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-link type="primary">更多</el-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.help-body {
  margin: 40px 300px;
  display: flex;
  flex-wrap: wrap;
}
.helpModule /deep/ .el-row {
  width: 300px;
  margin-bottom: 20px;
}
</style>
