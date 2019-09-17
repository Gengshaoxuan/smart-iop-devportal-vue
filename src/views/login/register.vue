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
          <h2>注册会员</h2>
          <h5>企业网银客户或公有云用户可直接<el-link type='primary'
                     @click="jumpLogin">登录</el-link>
          </h5>
        </el-col>
      </el-row>
      <el-form :model="registerForm"
               label-width="100px"
               status-icon
               :rules="rules"
               ref="registerForm"
               :label-position="labelPosition">
        <el-form-item label="用户名:"
                      prop="username">
          <el-row>
            <el-col :span="8">
              <el-input v-model="registerForm.username"></el-input>
            </el-col>
            <el-col :span="14">
              4-20个字符，包含字母（不区分大小写）、数字、下划线，不能全部为数字
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="密码:"
                      prop="password">
          <el-row>
            <el-col :span="8">
              <el-input v-model="registerForm.password"></el-input>
            </el-col>
            <el-col :span="14">
              英文字母（区分大小写）、数字、符号组成,6-16个字符，不支持简单密码
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="确认密码:"
                      prop="checkPass">
          <el-row>
            <el-col :span="8">
              <el-input v-model="registerForm.checkPass"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="手机号码:"
                      prop="phone">
          <el-row>
            <el-col :span="8">
              <el-input v-model="registerForm.phone"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="短信验证码:"
                      prop="vercode">
          <el-row type="flex"
                  :gutter="10">
            <el-col :span="5">
              <el-input v-model="registerForm.vercode"></el-input>
            </el-col>
            <el-button type="primary"
                       :disabled="codeshow"
                       @click="getvercode()">{{codemgs}}</el-button>
          </el-row>
        </el-form-item>
        <el-form-item label="邮箱:"
                      prop="emailaddress">
          <el-row>
            <el-col :span="8">
              <el-input v-model="registerForm.emailaddress"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row type="flex"
                  justify="start">
            <el-checkbox v-model="checked">
            </el-checkbox>
            我已阅读并同意
            <el-link type="primary"
                     @click="jumpAgreement">
              《中国建设银行开放银行管理平台用户服务协议》、《中国建设银行股份有限公司隐私政策》
            </el-link>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row type="flex"
                  justify="start">
            <el-button type="primary"
                       :disabled="!checked"
                       @click="registerCommit('registerForm')">提交</el-button>
          </el-row>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    let validateName = (rule, value, callback) => {
      var reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z_)])+$).{4,20}$/;
      if (value === '') {
        callback(new Error('请输入用户名'));
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
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
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
    let validateEmail = (rule, value, callback) => {
      var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (value === "") {
        callback(new Error('请输入邮箱'));
      }
      setTimeout(() => {
        if (!reg.test(value)) {
          callback(new Error('请输入正确的邮箱'))
        } else {
          callback()
        }
      }, 1000);
    };
    return {
      labelPosition: 'left',
      registerForm: {
        username: '',
        password: '',
        checkPass: '',
        phone: '',
        vercode: '',
        emailaddress: ''
      },
      rules: {
        username: [
          { validator: validateName },
          { required: true }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2 },
          { required: true, message: '请再次确认密码', trigger: 'blur' }
        ],
        phone: [
          { validator: validatePhone },
          { required: true }
        ],
        vercode: [
          { validator: validateCode },
          { required: true }
        ],
        emailaddress: [
          { validator: validateEmail },
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ]
      },
      codeshow: false,
      checked: false,
      codemgs: '免费获取'
    }
  },
  methods: {
    jumpLogin: function () {
      this.$router.push({ path: '/login' });
    },
    jumpAgreement: function () {
      this.$router.push({ path: '/agreement' });
    },
    registerCommit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.commit("setToken", "dddd");
          this.$router.push({ path: '/PersonCenter' });
        } else {
          return false;
        }
      });
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
/* .el-form-item__label {
  text-align: left;
} */

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
  h2,
  h5 {
    display: inline-block;
  }
  h5 {
    color: #999;
    font-size: 12px;
  }
}
</style>
