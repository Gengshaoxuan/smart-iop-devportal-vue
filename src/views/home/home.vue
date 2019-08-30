<template>
  <div class="hello">
    <v-carousel></v-carousel>
    <el-row class="indexDes">
      <h2>产品介绍</h2>
      <h4>竭力为您提供便捷、安全、稳定的云基础设施及平台服务</h4>
    </el-row>
    <el-row class="indexDes">
      <h2>案例推荐</h2>
      <h4>为百万客户提供优秀的云服务</h4>
    </el-row>
    <v-carousel-card></v-carousel-card>
    <el-row class="indexDes">
      <h2>合作方展示</h2>
      <h4>诚邀各行业优秀的合作伙伴与建行一起共建生态</h4>
    </el-row>
    <el-row>
      <img src="../../assets/images/partnerShow/htjf.png">
      <img src="../../assets/images/partnerShow/tlzf.png">
    </el-row>
    <el-row class="indexDes gray">
      <h2>接入流程</h2>
      <h4>为第三方合作伙伴提供标准化的便捷接入流程</h4>
    </el-row>
    <el-row class="indexDes gray step"
            type="flex"
            justify="center">
      <el-col :span="2"
              v-for="item of stepList"
              :key="item.id">
        <img :src=item.url>
        <span>{{item.name}}</span>
      </el-col>
    </el-row>
    <el-row class="indexDes">
      <h2>新闻</h2>
      <h4>了解开放银行管理平台最新动态、新闻报道</h4>
      <el-link type="primary">更多</el-link>
    </el-row>
  </div>

</template>

<script>
import Carousel from '../../components/Carousel'
import CarouselCard from '../../components/CarouselCard'

export default {
  components: {
    'v-carousel': Carousel,
    'v-carousel-card': CarouselCard
  },
  name: 'HelloWorld',
  data () {
    return {
      stepList: [
        { id: 0, name: '应用申请', url: require('../../assets/images/accessProcess/application_apply.png') },
        { id: 1, name: '', url: require('../../assets/images/accessProcess/arrow.png') },
        { id: 2, name: '产品申请', url: require('../../assets/images/accessProcess/product_apply.png') },
        { id: 3, name: '', url: require('../../assets/images/accessProcess/arrow.png') },
        { id: 4, name: '证书申请', url: require('../../assets/images/accessProcess/credit_apply.png') },
        { id: 5, name: '', url: require('../../assets/images/accessProcess/arrow.png') },
        { id: 6, name: '开发测试', url: require('../../assets/images/accessProcess/develop_test2x.png') },
        { id: 7, name: '', url: require('../../assets/images/accessProcess/arrow.png') },
        { id: 8, name: '上线申请', url: require('../../assets/images/accessProcess/online_apply.png') }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.indexDes {
  margin: 100px auto;
}
.indexDes span {
  display: block;
}
.step {
  margin-top: -100px;
  display: flex;
  align-items: flex-end;
}
.gray {
  background-color: #f5f5f5;
}
</style>
