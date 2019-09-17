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
      <div>
        <el-link>
          <p>中国建设银行正式推出开放银行管理平台</p>
          <p>2018-8-25</p>
          <p>近年来随着移动互联网技术的日益成熟，互联网金融科技不断发展变革，服务开放逐渐成为互联网金融发展的新趋势，以客户为中心进行生态重构，打造开放平台，融入场景成为众多互联网企业的发展方向。在服务开放的大背景下，开放平台是银行未来发展的必然趋势，聚焦银行核心业务，通过开放服务，通过第三方生态服务客户。</p>
        </el-link>
      </div>

      <el-link type="primary"
               @click="jumpNewscenter">更多</el-link>
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
  name: 'home',
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
  },
  methods: {
    jumpNewscenter: function () {
      this.$router.push({ path: '/newsCenter' })
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
  padding-bottom: 20px;
}
.gray {
  background-color: #f5f5f5;
}
</style>
