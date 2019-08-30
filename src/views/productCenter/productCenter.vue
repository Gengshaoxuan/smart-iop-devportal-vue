<template>
  <div style=" display: flex;">
    <div style="height:50px;">这是产品中心</div>

    <button @click="jumpPdIn()">跳转产品介绍</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "按钮"
    };
  },
  methods: {
    jumpPdIn() {
      this.$router.push({ name: "ProductIntroduction" });
      // this.$router.push({name:'Login',params:{"china":"中国","cuf":"hhhh"}});
    }
  }
};
</script>
<style scoped>
button {
  width: 600px;
  background-color: lightsalmon;
}
</style>
