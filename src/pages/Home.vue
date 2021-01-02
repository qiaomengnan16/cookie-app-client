<template>
  <div class="home">
    <van-cell @click="goIllness" title="看病" value="" label="点击看病" />
    <van-cell @click="goMedicine" title="取药" value="" label="点击取药" />
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    }
  },
  methods: {
    goIllness() {

    },
    goMedicine() {

    }
  },
  mounted() {

  }
}
</script>

<style scoped>
  .home {
    text-align: left;
  }
  .home >>> .van-cell {
    background-color: #BBBBBB;
  }
</style>
