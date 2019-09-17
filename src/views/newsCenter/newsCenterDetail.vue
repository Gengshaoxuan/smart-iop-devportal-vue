<template>
  <div class="newsCenterDetailBody">
    <div class="newsCenterDetail-nav">
      <el-row>
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/newsCenter' }">新闻中心</el-breadcrumb-item>
            <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </div>
    <div class="newsDetail">
      <h2>中国建设银行正式推出开放银行管理平台</h2>
      <div>发布时间：2018年8月25日</div>
      <div>
        <p>近年来随着移动互联网技术的日益成熟，互联网金融科技不断发展变革，服务开放逐渐成为互联网金融发展的新趋势，以客户为中心进行生态重构，打造开放平台，融入场景成为众多互联网企业的发展方向。在服务开放的大背景下，开放平台是银行未来发展的必然趋势，聚焦银行核心业务，通过开放服务，通过第三方生态服务客户。</p>
        <p>2018年8月25日，中国建设银行正式推出开放银行管理平台，将建行的优质功能服务，以标准统一的接口（API）封装到软件开发工具包（SDK）中，以产品的概念对外发布，为第三方开发者提供开发、注册、认证、申请及购买的一站式服务管理，支持多平台应用注册，提供标准化的便捷接入流程。开放银行管理平台上线初期推出聚合支付、e账户、信用卡账单分期、龙支付钱包四大产品服务，第三方开发者可根据自己的需求，构建应用场景。</p>
        <p>开放银行管理平台的推出，将建行在行业中具有优势的功能通过标准的形式发布，在满足第三方构建完整应用场景的同时，丰富了自身平台生态，提升了客户体验，增加了客户粘性。未来，中国建设银行将不断完善开放银行管理平台，为第三方开发者提供更多建行优质产品服务，拓展合作渠道，吸引各类互联网企业、第三方应用的接入，构建终端客户、开发者用户、建设银行合作共赢的“金融生态圈”。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.newsCenterDetailBody {
  margin: auto 280px;
}
.newsCenterDetail-nav {
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 20px;
  background-color: #bad8fa;
}
.newsDetail {
  width: 960px;
  margin: 40px auto;
  min-height: 500px;
}
</style>