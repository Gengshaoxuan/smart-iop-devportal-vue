<template>
  <div class="updateEmailBody">
    <div class="updateEmail-nav">
      <el-row>
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/login' }">用户中心</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/basicInformation' }">基本信息</el-breadcrumb-item>
            <el-breadcrumb-item>修改邮箱</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </div>
    <el-row class="updatebody">
      <h2>修改邮箱</h2>
      <hr>
      <div class="stepsStyle">
        <el-steps :space="200"
                  :active="active"
                  finish-status="success">
          <el-step title="验证登录信息"></el-step>
          <el-step title="设置新邮箱"></el-step>
          <el-step title="完成"></el-step>
        </el-steps>
      </div>
      <el-form :model="updateEmailForm"
               label-width="130px"
               status-icon
               :rules="rules"
               ref="updateEmailForm"
               :label-position="labelPosition">

        <el-form-item v-show="firstShow"
                      label="登录密码:"
                      prop="loginpass">
          <el-row>
            <el-col :span="8">
              <el-input v-model="updateEmailForm.loginpass"
                        maxlength="16"></el-input>
            </el-col>
            <el-col :span="14">
              英文字母（区分大小写）、数字、符号组成,6-16个字符
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item v-show="firstShow"
                      label="短信验证码:"
                      prop="vercode">
          <el-row type="flex"
                  :gutter="10">
            <el-col :span="5">
              <el-input v-model="updateEmailForm.vercode"
                        maxlength="6"></el-input>
            </el-col>
            <el-button type="primary"
                       :disabled="codeshow"
                       @click="getvercode()">{{codemgs}}</el-button>
          </el-row>
        </el-form-item>
        <el-form-item v-if="secondShow"
                      label="新邮箱地址:"
                      prop="email">
          <el-row>
            <el-col :span="8">
              <el-input v-model="updateEmailForm.email"></el-input>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item v-if="secondShow"
                      label="确认邮箱地址:"
                      prop="checkemail">
          <el-row type="flex">
            <el-col :span="8">
              <el-input v-model="updateEmailForm.checkemail"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <el-button style="margin-top: 12px;"
                 type="primary"
                 v-if="secondShow"
                 @click="lastStep">上一步</el-button>
      <el-button style="margin-top: 12px;"
                 type="primary"
                 v-show="firstShow"
                 @click="updateFirstCommit('updateEmailForm')">下一步</el-button>
      <el-button style="margin-top: 12px;"
                 type="primary"
                 v-show="secondShow"
                 @click="updateCommit('updateEmailForm')">提交</el-button>
      <div v-show="thirdShow">
        <el-row v-show="updateSuccess">
          <h1>安全链接发送成功</h1>
          <h5>新邮箱地址：***@.com，请登录邮箱，按操作提示完成验证，安全链接有效期为24小时</h5>
          <el-button type="primary"
                     @click="back">返回</el-button>
        </el-row>
        <el-row v-show="updateFail">
          <h1>安全链接发送失败</h1>
          <h5>服务器繁忙！</h5>
          <el-button type="primary"
                     @click="reload">重新修改邮箱</el-button>
        </el-row>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'updateEmail',
  data () {
    let validateLoginpass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error('请输入登录密码'));
      } else {
        callback()
      }
    };
    let validateCode = (rule, value, callback) => {
      var reg = /^\d{6}$/;
      if (value === "") {
        callback(new Error('请输入验证码'));
      }
      setTimeout(() => {
        if (!reg.test(value)) {
          callback(new Error('请输入正确的验证码'))
        } else {
          callback()
        }
      }, 1000);
    };
    let validateCheckEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error('请再次输入确认邮箱'));
      } else if (value !== this.updateEmailForm.email) {
        callback(new Error('两次输入的邮箱地址不一致，请重新输入'))
      } else {
        callback()
      }
    };
    return {
      firstShow: true,
      secondShow: false,
      thirdShow: false,
      updateSuccess: true,
      updateFail: false,
      active: 1,
      labelPosition: 'left',
      updateEmailForm: {
        loginpass: '',
        vercode: '',
        email: '',
        checkemail: ''
      },
      rules: {
        loginpass: [
          { validator: validateLoginpass },
          { required: true }
        ],
        vercode: [
          { validator: validateCode },
          { required: true }
        ],
        email: [
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' },
          { required: true, message: '请输入邮箱地址', trigger: 'blur' }
        ],
        checkemail: [
          { validator: validateCheckEmail },
          { required: true, type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ]
      },
      codeshow: false,
      codemgs: '免费获取',
    };
  },
  methods: {
    reload () {
      //重新加载页面
    },
    back: function () {
      this.$router.push({ path: '/basicInformation' });
    },
    lastStep () {
      this.active = 1;
      this.firstShow = true;
      this.secondShow = false;
    },
    updateFirstCommit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //步骤条
          if (this.active++ > 3) this.active = 1;
          if (this.active == 2) this.firstShow = false; this.secondShow = true;
        } else {
          return false;
        }
      });
    },
    updateCommit (formName) {
      let time = '5';
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.active = 3;
          this.thirdShow = true;
          this.secondShow = false;
        } else {
          return false;
        }
      })

    },
    getvercode () {
      let time = '60';
      this.codeshow = true;
      let resend = setInterval(() => {
        if (time != '0') {
          time--;
        }
        this.codemgs = time + '秒后重新发送';
        if (time == '0') {
          this.codeshow = false;
          this.codemgs = '重新发送';
          clearInterval(resend)
        }
      }, 1000);
    }
  }
}
</script>
<style lang="less" scoped>
.updateEmailBody {
  margin: auto 280px;
}
.updateEmail-nav {
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 20px;
  background-color: #bad8fa;
}
h2 {
  text-align: left;
}
hr {
  background: #0066b3;
}
.updatebody {
  min-height: 414px;
}
.stepsStyle {
  text-align: left;
  margin: 20px auto 30px;
}
</style>