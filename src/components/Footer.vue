<template>
  <div class="foot">
    <el-row style="display: flex;align-items: flex-end;">
      <el-col :span="4"><span class="foot-icon"></span></el-col>
      <el-col :span="16">
        <p><span>© 版权所有中国建设银行</span><span>京ICP备13030780号</span><span>京公网安备：110102000450</span></p>
        <p><span>总行地址：中国北京西城区金融大街25号</span><span>邮编：100033</span></p>
        <p><span>手机网站：m.ccb.com</span><span>客服与投诉热线：95533</span></p>
      </el-col>
      <el-col :span="4">
        <el-image :src="QRcodeUrl"></el-image>
        <span style="display:block">微信银行</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      QRcodeUrl: require('../assets/images/QRcode.png')
    }
  }
}
</script>

<style scoped>
/* .foot-icon {
  background: url(../../../public/img/icons.png) no-repeat -2px -111px;
  width: 22px;
  height: 28px;
  margin-right: 10px;
  float: left;
  margin-top: 40px;
} */
.foot {
  height: 150px;
  background: #0066b3;
  color: #ffffff;
}
</style>
