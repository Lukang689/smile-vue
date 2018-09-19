<template>
  <div class="floor">
    <div class="floor-title">{{floorTitle}}</div>
    <div class="floor-anomaly">
      <div class="floor-one floor-item">
        <img :src="floorData0.image" width="100%">
      </div>
      <div>
          <div class="floor-two floor-item">
            <img :src="floorData1.image" width="100%">
          </div>
          <div class="floor-item">
            <img :src="floorData2.image" width="100%">
          </div>
      </div>
    </div>
    <div class="floor-rule">
      <div v-for="(item,index) in floorData.slice(3)" :key="index">
        <img :src="item.image" width="100%">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Floor',
  props: [
    'floorData',
    'floorTitle'
  ],
  data () {
    return {
      floorData0: {},
      floorData1: {},
      floorData2: {}
    }
  },
  watch: {
    floorData: function () {
      this.floorData0 = this.floorData[0]
      this.floorData1 = this.floorData[1]
      this.floorData2 = this.floorData[2]
    }
  }
}
</script>

<style lang="scss">
@import '../style/floor'
</style>