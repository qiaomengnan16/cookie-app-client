<template>
  <div class="home">
    <div v-for="item in list" :key="item.id">
      <van-cell @click="confirm(item)" :title="item.medicineName" :value="getStatus(item)" :label="getReceive(item)"/>
    </div>
  </div>
</template>

<script>
import {
  commonFetch,
  userMedicineList,
  userMedicineConfirm, illnessConfirm,
} from '../utils/console'
export default {
  name: "Medicine",
  data() {
    return {
      list: []
    }
  },
  methods: {
    getStatus(item) {
      return item.status == 0 ? '未领取' : '已领取'
    },
    getReceive(item) {
      return item.status == 0 ? '点击领取': ''
    },
    initData() {
      commonFetch(userMedicineList, {} , res => {
        this.list = res.data
      })
    },
    confirm(item) {
      if (item.status == 0) {
        this.$dialog.confirm({
          title: '确认领取',
          message: '确认领取吗',
        }).then(() => {
          // on confirm
          commonFetch(userMedicineConfirm, {id: item.id} , res => {
            this.$toast.success("领取成功")
            this.initData()
          })
        })
        .catch(() => {
          // on cancel

        });
      } else {
        this.$toast.fail('该药品已领取过')
      }
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
