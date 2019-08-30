<template>
  <div>
    <div class="block">
      <el-carousel height="400px">
        <el-carousel-item v-for="item in imgList"
                          :key="item.name">
          <el-row>
            <el-col :span='24'><img :src="item.idView"></el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- <div class="block">
      <span class="demonstration">Click 指示器触发</span>
      <el-carousel trigger="click"
                   height="150px">
        <el-carousel-item v-for="item in 4"
                          :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: [
        { id: 0, name: '轮播图1', idView: require('../assets/images/banner/v1.0/banner1.jpg') },
        { id: 1, name: '轮播图2', idView: require('../assets/images/banner/v1.0/banner2.jpg') },
        { id: 2, name: '轮播图3', idView: require('../assets/images/banner/v1.0/banner3.jpg') },
        { id: 3, name: '轮播图4', idView: require('../assets/images/banner/v1.0/banner4.jpg') },
        { id: 4, name: '轮播图5', idView: require('../assets/images/banner/v1.0/banner5.jpg') }
      ]
    }
  }
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
