<template>
 <div class="shopping-mall">

    <div class="search-bar">
      <van-row>
        <van-col span="3">
          <!-- <img :src="locationIcon" width="100%"> -->
          <van-icon name="location"></van-icon>
        </van-col>
        <van-col span="16">
          <!-- <van-field  placeholder="点击搜索"></van-field> -->
          <input type="text" class="search-input">

        </van-col>
        <van-col span="5">
          <van-button size="mini">查找</van-button>
        </van-col>
      </van-row>
    </div>

    <div class="swiper-area">
      <van-row>
        <van-col span="24">
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
              <img :src="banner.image" width="100%">
            </van-swipe-item>
          </van-swipe>
        </van-col>
      </van-row>
    </div>

    <div class="type-bar">
      <div v-for="(cate,index) in category" :key="index" class="type-bar-item">
        <img v-lazy="cate.image" width="90%">
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>

    <div class="ad-banner">
      <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%">
    </div>

    <div class="recommend-area">
      <div class="recommend-title">
        商品推荐
      </div>
      <div class="recommend-body">
        <swiper :options="swiperOption">
      <!-- <swiper> -->
        <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
          <div class="recommend-item">
            <img :src="item.image" width="80%">
            <div>{{item.goodsName}}</div>
            <div>￥{{item.price | moneyFilter}}(￥{{item.mallPrice | moneyFilter}})</div>  
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      </div>
    </div>

    <floor :floorData="floor1" :floorTitle="floorName.floor1"></floor>
    <floor :floorData="floor2" :floorTitle="floorName.floor2"></floor>
    <floor :floorData="floor3" :floorTitle="floorName.floor3"></floor>
 </div>
</template>

<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import Floor from '@/components/Floor'
import {toMoney} from '@/filter/moneyFilter.js'
export default {
  name: 'ShoppingMall',
  components: {
    swiper,
    swiperSlide,
    Floor
  },
  data () {
    return {
      msg: 'Shoppimg Mall',
      // locationIcon: require('../assets/images/location.png')
      bannerPicArray: [],
      category: [],
      adBanner: [],
      recommendGoods: [],
      swiperOption: {
        slidesPerView: 3,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        //   autoplay: true
        // }
      },
      floor1: [],
      floor2: [],
      floor3: [],
      // floorData0: [],
      // floorData1: [],
      // floorData2: [],
      // floorTitle: '休闲食品',
      floorName: {}
    }
  },
  created () {
    var self = this
    axios.get('/api/goods')
      .then(function (response) {
        console.log(response)
        if(response.status === 200) {
          // console.log(response.data.data.category)
          self.category = response.data.data.category
          self.adBanner = response.data.data.advertesPicture
          self.bannerPicArray = response.data.data.slides
          self.recommendGoods = response.data.data.recommend
          self.floor1 = response.data.data.floor1
          self.floor2 = response.data.data.floor2
          self.floor3 = response.data.data.floor3
          // self.floorData0 = self.floor1[0]
          // self.floorData1 = self.floor1[1]
          // self.floorData2 = self.floor1[2]
          self.floorName = response.data.data.floorName
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  filters: {
    moneyFilter(money) {
      return toMoney(money)
    }
  }
}
</script>

<style lang="scss">
@import '../style/shopping-mall'
</style>