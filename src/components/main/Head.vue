<template>
  <div>
    <van-nav-bar
        title="欢迎使用小呆熊餐饮"
        :left-text="leftText"
        @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
      leftText: '',
      changeRoute: null,
      noBack: ['/', '/food' , '/member']
    }
  },
  methods: {
    onClickLeft() {
      if (this.leftText) {
        this.$router.push({path: this.changeRoute.from.fullPath})
      }
    },
    monitorRouter() {
      this.$EventBus.$on('changeRoute', (data) => {
        this.changeRoute = data
        if (this.noBack.indexOf(this.changeRoute.to.fullPath) == -1) {
          this.leftText= '返回'
        } else {
          this.leftText = ''
        }
      })
    }
  },
  mounted() {
    this.monitorRouter()
  }
}
</script>

<style scoped>

</style>
