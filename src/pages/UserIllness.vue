<template>
  <div class="home">
    <div v-for="item in list" :key="item.id">
      <van-cell  :title="item.illnessName" value="" label=""/>
    </div>
  </div>
</template>

<script>
import {
  commonFetch,
  userIllnessList,
} from '../utils/console'

export default {
  name: "Illness",
  data() {
    return {
      list: []
    }
  },
  methods: {
    initData() {
      commonFetch(userIllnessList, {} , res => {
        this.list = res.data
      })
    },
  },
  mounted() {
    this.initData()
  }
}
</script>

<style scoped>
.home {
  text-align: left;
}

.home {
  height: calc(100vh - 100px);
  overflow: scroll;
}
.home >>> .van-cell {
  background-color: #BBBBBB;
}
</style>
