<template>
  <div class="personcenterBody">
    <div class="personcenter-nav">
      <el-row>
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/personCenter' }">用户中心</el-breadcrumb-item>
            <el-breadcrumb-item>基本信息</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </div>
    <div class="personcenter-body">
      <el-row>
        <el-col :span="4">
          <el-menu>
            <el-menu-item @click="jumpItem(i.url)"
                          :key="index"
                          v-for="(i,index) in navData"
                          class="">
              <span slot="title">{{i.title}}</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="19"
                :offset="1">
          <div class="content">
            <!-- 路由插槽：路由跳转的位置 -->
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 所有的导航标题，进行路由跳转指向 -->
    <!-- <router-link :to="i.url"
                   :key="index"
                   v-for="(i,index) in navData">{{i.title}}</router-link> -->

    <!-- <h1>个人中心--Mock示例</h1>
    <ul v-for="(item, key) in newsListShow"
        :key="key">
      <li>{{item.title}}</li>
    </ul> -->
  </div>
</template>
 
<script>
import api from "../../utils/api.js";
import navData from "../../../static/data/nav";

export default {
  name: 'personCenter',
  data () {
    return {
      // newsListShow: [],
      navData: []
    };
  },
  created () {
    this.init();
    // this.setNewsApi();
  },
  methods: {
    init () {
      this.navData = navData.navData;
    },
    jumpItem (url) {
      this.$router.push({ path: url })
    }
    // setNewsApi: function () {
    //   api.JH_news("/news/index", "type=top&key=123456").then(res => {
    //     console.log(res);
    //     this.newsListShow = res.articles;
    //   });
    // }
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .topNav {
  width: 100%;
  background: #ed4040;
  position: fixed;
  top: 0rem;
  left: 0;
  z-index: 10;
}
.simpleNav {
  width: 100%;
  line-height: 1rem;
  overflow: hidden;
  overflow-x: auto;
  text-align: center;
  font-size: 0;
  font-family: "微软雅黑";
  white-space: nowrap;
}
.simpleNav::-webkit-scrollbar {
  height: 0px;
}
.simpleNavBar {
  display: inline-block;
  width: 1.2rem;
  color: #fff;
  font-size: 0.3rem;
}
.navActive {
  color: #000;
  border-bottom: 0.05rem solid #000;
}
.placeholder {
  width: 100%;
  height: 1rem;
} */
.personcenterBody {
  min-height: 470px;
  margin: auto 280px;
}
.personcenter-nav {
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 20px;
  background-color: #bad8fa;
}
.personcenter-body {
  margin-top: 40px;
}
</style>