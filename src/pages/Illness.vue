<template>
  <div class="home">
    <div v-for="item in list" :key="item.id">
      <van-cell @click="confirm(item.id)" :title="item.name" value="" label="点击确诊"/>
    </div>
  </div>
</template>

<script>
import {
  commonFetch,
  illnessList,
  illnessConfirm,
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
      commonFetch(illnessList, {} , res => {
        this.list = res.data
      })
    },
    confirm(id) {
      this.$dialog.confirm({
        title: '确诊',
        message: '确诊后请去药房领取药物',
      }).then(() => {
        // on confirm
        commonFetch(illnessConfirm, {id: id} , res => {
          this.$toast.success("确诊成功, 请领取药物")
          this.$router.push({path: '/medicine'})
        })
      })
      .catch(() => {
        // on cancel

      });
    }
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
