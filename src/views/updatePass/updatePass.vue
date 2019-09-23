<template>
  <div class="updatepassBody">
    <div class="updatepass-nav">
      <el-row>
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/login' }">用户中心</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/basicInformation' }">基本信息</el-breadcrumb-item>
            <el-breadcrumb-item>修改密码</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </div>
    <el-row class="updatebody">
      <h2>修改密码</h2>
      <hr>
      <div class="stepsStyle">
        <el-steps :space="200"
                  :active="active"
                  finish-status="success">
          <el-step title="验证身份"></el-step>
          <el-step title="设置密码"></el-step>
          <el-step title="完成"></el-step>
        </el-steps>
      </div>
      <el-form :model="updatepassForm"
               label-width="130px"
               status-icon
               :rules="rules"
               ref="updatepassForm"
               :label-position="labelPosition">

        <el-form-item v-show="firstShow"
                      label="登录密码:"
                      prop="loginpass">
          <el-row>
            <el-col :span="8">
              <el-input v-model="updatepassForm.loginpass"></el-input>
            </el-col>
            <el-col :span="14">
              英文字母（区分大小写）、数字、符号组成，6-16个字符
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item v-show="firstShow"
                      label="短信验证码:"
                      prop="vercode">
          <el-row type="flex"
                  :gutter="10">
            <el-col :span="5">
              <el-input v-model="updatepassForm.vercode"
                        maxlength="6"></el-input>
            </el-col>
            <el-button type="primary"
                       :disabled="codeshow"
                       @click="getvercode()">{{codemgs}}</el-button>
          </el-row>
        </el-form-item>
        <el-form-item v-if="secondShow"
                      label="新密码:"
                      prop="newpass">
          <el-row>
            <el-col :span="8">
              <el-input v-model="updatepassForm.newpass"></el-input>
            </el-col>
            <el-col :span="14">
              英文字母（区分大小写）、数字、符号组成，6-16个字符
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item v-if="secondShow"
                      label="确认密码:"
                      prop="checkpass">
          <el-row type="flex">
            <el-col :span="8">
              <el-input v-model="updatepassForm.checkpass"></el-input>
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
                 @click="updateFirstCommit('updatepassForm')">下一步</el-button>
      <el-button style="margin-top: 12px;"
                 type="primary"
                 v-show="secondShow"
                 @click="updateCommit('updatepassForm')">提交</el-button>
      <div v-show="thirdShow">
        <el-row v-show="updateSuccess">
          <h1>密码修改成功</h1>
          <el-button type="primary"
                     @click="back">返回</el-button>
        </el-row>
        <el-row v-show="updateFail">
          <h1>手机号修改失败</h1>
          <h5>服务器繁忙！</h5>
          <el-button type="primary"
                     @click="reload">重新修改手机号码</el-button>
        </el-row>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'updatepass',
  data () {
    let validatePass = (rule, value, callback) => {
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
    let validateCheckPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.updatepassForm.newpass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
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
      updatepassForm: {
        loginpass: '',
        vercode: '',
        newpass: '',
        checkpass: ''
      },
      rules: {
        loginpass: [
          { validator: validatePass },
          { required: true }
        ],
        vercode: [
          { validator: validateCode },
          { required: true }
        ],
        newpass: [
          { validator: validatePass },
          { required: true }
        ],
        checkpass: [
          { validator: validateCheckPass },
          { required: true }
        ]
      },
      codeshow: false,
      codeshownew: false,
      codemgs: '免费获取',
      codemgsnew: '免费获取'
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
    },
    getvercodenew () {
      let time = '60';
      this.codeshownew = true;
      let resend = setInterval(() => {
        if (time != '0') {
          time--;
        }
        this.codemgsnew = time + '秒后重新发送';
        if (time == '0') {
          this.codeshownew = false;
          this.codemgsnew = '重新发送';
          clearInterval(resend)
        }
      }, 1000);
    }
  }
}
</script>
<style lang="less" scoped>
.updatepassBody {
  margin: auto 280px;
}
.updatepass-nav {
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