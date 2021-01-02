<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" @click="switchPage(0)">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="switchPage(1)">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      active: 0,
      pageData: [
        {
          url: '/'
        },
        {
          url: '/member'
        },
      ]
    };
  },
  methods: {
    switchPage(index) {
      this.active = index
      this.$router.push(this.pageData[this.active].url)
    },
    currentActive() {
      if(this.$router.currentRoute.path == '/') {
        this.active = 0
      } else {
        for (let i in this.pageData) {
          if (this.pageData[i].url != '/') {
            if (this.$router.currentRoute.path.startsWith(this.pageData[i].url)) {
              this.active = Number(i)
            }
          }
        }
      }
    },
    init() {
      this.currentActive()
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped>

</style>
