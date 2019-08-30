<template>
    <div style="height:800px;">
      <h1>这是站内信</h1>
        <!-- 主页下边的token+{{this.$store.state.token}} -->
        <br/>
        <!-- 嘿嘿嘿+{{this.$abc.state.token}} -->
        <br/>
        <button @click="getNormalAPP()">点击进行网络请求</button>
    </div>
</template>


<script>
// import DDD from '../../utils/store'

export default {
    data () {
    return {
      msg: '按钮',
      // store:DDD,
    }
  },methods:{
    getNormalAPP(){
        this.$request('/ws/service/getServiceList',{'search':'缴费'},true).then(data=>{
            console.log("data"+data);
        });

    }
  }
}
</script>
<style scoped>
button{
    width: 600px;
    background-color: lightsalmon;
}
</style>
