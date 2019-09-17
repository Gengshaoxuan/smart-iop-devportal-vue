<template>
  <div class="newsCenterBody">
    <div class="newsCenter-nav">
      <el-row>
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>新闻中心</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </div>
    <div class="news_list">
      <ul>
        <li v-for="(news, i) in newsList"
            :key="i"
            @click="jumpNewsDetail">
          <el-link :underline="false"><span>{{news.title}}</span><span>{{news.time}}</span></el-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'newsCenter',
  data () {
    return {
      newsList: [
        {
          title: '中国建设银行正式推出开放银行管理平台1',
          time: '2018-08-25 08:00:00'
        },
        {
          title: '中国建设银行正式推出开放银行管理平台2',
          time: '2018-08-25 08:00:00'
        },
        {
          title: '中国建设银行正式推出开放银行管理平台3',
          time: '2018-08-25 08:00:00'
        }
      ]
    }
  },
  methods: {
    jumpNewsDetail: function () {
      this.$router.push({ path: "/newsCenterDetail" })
    }
  }
}
</script>
<style lang="less" scoped>
.newsCenterBody {
  margin: auto 280px;
}
.newsCenter-nav {
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 20px;
  background-color: #bad8fa;
}
.news_list {
  min-height: 410px;
  margin-top: 40px;
  width: 960px;
}
</style>