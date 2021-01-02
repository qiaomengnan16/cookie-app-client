<template>
<div>
  <van-overlay :show="propData.show">
    <div class="wrapper">
      <van-loading />
    </div>
  </van-overlay>
</div>
</template>

<script>
export default {
  name: "CommonOverlay",
  props: {
    propData: {
      type: Object,
      default () {
        return {
          show: false
        }
      }
    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.van-overlay {
  z-index: 2;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>