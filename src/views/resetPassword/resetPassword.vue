<template>
  <div class="resetpasswordBody">
    <div class="resetpassword-nav">
      <el-row>
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/login' }">登录</el-breadcrumb-item>
            <el-breadcrumb-item>重置密码</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </div>
    <el-row class="resetbody">
      <h2>重置密码</h2>
      <hr>
      <div class="stepsStyle">
        <el-steps :space="200"
                  :active="active"
                  finish-status="success">
          <el-step title="验证原信息"></el-step>
          <el-step title="设置密码"></el-step>
          <el-step title="完成"></el-step>
        </el-steps>
      </div>
      <el-form :model="resetpassForm"
               label-width="130px"
               status-icon
               :rules="rules"
               ref="resetpassForm"
               :label-position="labelPosition">
        <el-form-item v-show="firstShow"
                      label="用户名或邮箱:"
                      prop="username">
          <el-row>
            <el-col :span="8">
              <el-input v-model="resetpassForm.username"></el-input>
            </el-col>
            <el-col :span="14">
              请填写已经注册的用户名或注册时绑定的邮箱
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item v-show="firstShow"
                      label="注册手机:"
                      prop="phone">
          <el-row>
            <el-col :span="8">
              <el-input v-model="resetpassForm.phone"
                        maxlength="11"></el-input>
            </el-col>
            <el-col :span="14">
              请输入11位手机号
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item v-show="firstShow"
                      label="短信验证码:"
                      prop="vercode">
          <el-row type="flex"
                  :gutter="10">
            <el-col :span="5">
              <el-input v-model="resetpassForm.vercode"
                        maxlength="6"></el-input>
            </el-col>
            <el-button type="primary"
                       :disabled="codeshow"
                       @click="getvercode()">{{codemgs}}</el-button>
          </el-row>
        </el-form-item>
        <el-form-item v-if="secondShow"
                      label="新密码:"
                      prop="password">
          <el-row>
            <el-col :span="8">
              <el-input v-model="resetpassForm.password"></el-input>
            </el-col>
            <el-col :span="14">
              英文字母（区分大小写）、数字、符号组成,6-16个字符，不支持简单密码
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item v-if="secondShow"
                      label="确认密码:"
                      prop="checkPass">
          <el-row>
            <el-col :span="8">
              <el-input v-model="resetpassForm.checkPass"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <el-button style="margin-top: 12px;"
                 type="primary"
                 v-show="secondShow"
                 @click="lastStep">上一步</el-button>
      <el-button style="margin-top: 12px;"
                 type="primary"
                 v-show="firstShow"
                 @click="resetFirstCommit('resetpassForm')">下一步</el-button>
      <el-button style="margin-top: 12px;"
                 type="primary"
                 v-show="secondShow"
                 @click="resetCommit('resetpassForm')">提交</el-button>
      <div v-show="thirdShow">
        <el-row v-show="resetSuccess">
          <h1>密码重置成功</h1>
          <h5>{{resetSuccessMsg}}</h5>
          <el-button type="primary"
                     @click="jumpLogin">去登录</el-button>
        </el-row>
        <el-row v-show="resetFail">
          <h1>密码重置失败</h1>
          <h5>服务器连接失败</h5>
          <el-button type="primary"
                     @click="reload">重置密码</el-button>
        </el-row>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'resetPassword',
  data () {
    let validateName = (rule, value, callback) => {
      var reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z_)])+$).{4,20}$/;
      if (value === '') {
        callback(new Error('用户名或邮箱不存在'));
      }
      setTimeout(() => {
        if (!reg.test(value)) {
          callback(new Error('请输入包含数字、字母、下划线，4-20个字符且不为纯数字'))
        }
        else {
          callback();
        }
      }, 1000)
    };
    let validatePhone = (rule, value, callback) => {
      var reg = /^\d{11}$/;
      if (value === "") {
        callback(new Error('请输入手机号'));
      }
      setTimeout(() => {
        if (!reg.test(value)) {
          callback(new Error('请输入正确的手机号'))
        } else {
          callback()
        }
      }, 1000);
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
    let validatePass = (rule, value, callback) => {
      var reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z_)])+$).{6,16}$/;
      if (value === '') {
        callback(new Error('请输入密码'));
      }
      setTimeout(() => {
        if (!reg.test(value)) {
          callback(new Error('请输入包含数字、字母、下划线，6-16个字符'))
        }
        else {
          callback();
        }
      }, 1000)
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.resetpassForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      firstShow: true,
      secondShow: false,
      thirdShow: false,
      resetSuccess: true,
      resetFail: false,
      active: 1,
      resetSuccessMsg: '5秒后将自动跳转至登录页',
      labelPosition: 'left',
      resetpassForm: {
        username: '',
        phone: '',
        vercode: '',
        password: '',
        checkpass: ''
      },
      rules: {
        username: [
          { validator: validateName },
          { required: true }
        ],
        phone: [
          { validator: validatePhone },
          { required: true }
        ],
        vercode: [
          { validator: validateCode },
          { required: true }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2 },
          { required: true, message: '请再次确认密码', trigger: 'blur' }
        ]
      },
      codeshow: false,
      codemgs: '免费获取'
    };
  },
  methods: {
    reload () {
      //重新加载页面
    },
    jumpLogin: function () {
      this.$router.push({ path: '/login' });
    },
    lastStep () {
      this.active = 1;
      this.firstShow = true;
      this.secondShow = false;
    },
    resetFirstCommit (formName) {
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
    resetCommit (formName) {
      let time = '5';
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.active = 3;
          this.thirdShow = true;
          this.secondShow = false;
          let resend = setInterval(() => {
            if (time != '0') {
              time--;
            }
            this.resetSuccessMsg = time + '秒后将自动跳转至登录页';
            if (time == '0') {
              clearInterval(resend);
              this.$router.push({ path: '/login' });
            }
          }, 1000);
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
.resetpasswordBody {
  margin: auto 280px;
}
.resetpassword-nav {
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
.resetbody {
  min-height: 414px;
}
.stepsStyle {
  text-align: left;
  margin: 20px auto 30px;
}
</style>