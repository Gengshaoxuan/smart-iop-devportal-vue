<template>
  <div>
    <div class="block">
      <el-carousel :interval="4000"
                   type="card"
                   height="500px">
        <el-carousel-item v-for="item in imgList"
                          :key="item.name"
                          style="width:380px;text-align:center;">
          <img :src="item.idView">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: [
        { id: 0, name: '轮播图1', idView: require('../assets/images/banner/banner_card1.jpg') },
        { id: 1, name: '轮播图2', idView: require('../assets/images/banner/banner_card2.jpg') },
        { id: 2, name: '轮播图3', idView: require('../assets/images/banner/banner_card3.jpg') },
        { id: 3, name: '轮播图4', idView: require('../assets/images/banner/banner_card4.jpg') },
        { id: 4, name: '轮播图5', idView: require('../assets/images/banner/banner_card5.jpg') }
      ]
    }
  }
}
</script>

<style>
</style>
