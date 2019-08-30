<template>
    <div style=" display: flex;">
           <div>产品介绍</div>
      <Row>
              <Col  span="8" >
                  <Menu @on-select="log" theme="dark" :open-names="['2']" :active-name="'2-1'" accordion style="cursor:pointer;">
                      <Submenu  name="1">
                          <template slot="title">
                              内容管理
                          </template>
                          <MenuItem name="1-1">文章管理</MenuItem>
                          <MenuItem name="1-2">评论管理</MenuItem>
                          <MenuItem name="1-3">举报管理</MenuItem>
                      </Submenu>
                      <Submenu name="2">
                          <template slot="title">
                              <!-- <Icon type="ios-people" /> -->
                              用户管理
                          </template>
                          <MenuItem name="2-1">对公账户预约</MenuItem>
                          <MenuItem name="2-2">个人账户</MenuItem>
                      </Submenu>
                      <Submenu name="3">
                          <template slot="title">
                              <!-- <Icon type="ios-stats" /> -->
                              统计分析
                          </template>
                          <MenuGroup title="使用">
                              <MenuItem name="3-1">新增和启动</MenuItem>
                              <MenuItem name="3-2">活跃分析</MenuItem>
                              <MenuItem name="3-3">时段分析</MenuItem>
                          </MenuGroup>
                          <MenuGroup title="留存">
                              <MenuItem name="3-4">用户留存</MenuItem>
                              <MenuItem name="3-5">流失用户</MenuItem>
                          </MenuGroup>
                      </Submenu>
                  </Menu>
              </Col>
          </Row>
          <div style="margin-left:80px; float:right; height:1000px; background-color: red;width:800px;">
            <!-- <router-view></router-view> -->
                <div v-for="(item,index) in zip.content" :key="index">
                        <h2 v-if="item.h2">{{item.text}}</h2>
                         <p v-if="item.ps">{{item.text}}</p>

                </div>
          </div>
      
    </div>
</template>
<script>
export default {
    data () {
    return {
        // Refused to display '' in a frame because it set 'X-Frame-Options' to 'sameorigin'.

      msg: '按钮',
      zip:{
        title:"账单分期",
        id:"33",
        content:[{h2:true,text:'一、产品介绍'},
        {ps:true,text:"开放平台内容"},
        {h2:true,text:'二、产品特点'},
        {ps:true,text:"申请便捷"},
        {ps:true,text:"期数灵活"},
        {tables:true}],
    }


    }
  },
  methods:{
    log(name){
        console.log(name);
    if(name == '2-2'){
        // this.$router.push({name:'AccountManPersonQuery',params:{"1":"2","3":"4"}});

    }else{
        // this.$router.push({name:'AccountManToPublicOpenAcc',params:{"chunnuan":"中国","huakia":"花开"}});

    }

    },
  },
  mounted(){
      console.log("渲染完毕");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
    width: 600px;
    background-color: lightsalmon;
}
</style>
