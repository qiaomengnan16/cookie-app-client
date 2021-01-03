<template>
  <div class="container">
    <!-- 昵称 姓名 图片 -->
    <div class="member-info">
      <div class="member-head">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3140835205,15957850&fm=26&gp=0.jpg"/>
      </div>
      <div class="member-text">
        <div class="member-name">
          {{user.realName}}
        </div>
        <div class="member-mobile">
          {{user.cardNo}}
        </div>
      </div>
    </div>
    <div class="menu-info">
      <div class="desc">常用功能</div>
      <div class="content">
        <div class="info" @click="toPath('/userIllness')">
          <div class="top">
            <van-icon class-prefix="icon" name="order" />
          </div>
          <div class="bottom">看病历史</div>
        </div>
        <div class="info" @click="toPath('/medicine')">
          <div class="top">
            <van-icon class-prefix="icon" name="coupon" />
          </div>
          <div class="bottom">取药历史</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {
  commonFetch,
  userCurrent, userRegister
} from '../utils/console'
import '../assets/member/iconfont.css'
import '../assets/vip/iconfont.css'
import '../assets/recharge/iconfont.css'
export default {
  name: "Member",
  data() {
    return {
      user: {
        realName: null,
        cardNo: null,
      }
    }
  },
  methods: {
    toPath(url) {
      this.$router.push({path: url})
    },
    initData() {
      commonFetch(userCurrent, {} , res => {
        this.user = res.data
      })
    }
  },
  mounted() {
    this.initData()
  }
}
</script>

<style scoped>

  .member-info {
    display: flex;
  }

  .member-info .member-head {
    padding-top: 5px;
    padding-left: 5px;
  }

  .member-info .member-head img {
    height: 90px;
    width: 90px;
    border-radius: 10px;
  }

  .member-info .member-text {
    text-align: left;
    padding-left: 30px;
    font-size: 14px;
  }

  .member-info .member-mobile {
    color: black;
    font-weight: bold;
  }

  .member-name {
    padding-top: 10px;
    font-size: 20px;
    font-weight: bold;
    color: black;
  }

  .vip {
    font-weight: normal;
    display: inline-block;
    color: #FFCB13;
    position: relative;
  }

  .vip .level {
    position: absolute;
    font-size: 12px;
    font-weight: bold;
    top: -6px;
    right: -8px;
    background-color: #FFCB13;
    color: white;
    border-radius: 50%;
    width: 16px;
    text-align: center;
  }

  .icon-vip {
    font-size: 22px;
  }

  .member-mobile {
    padding-top: 30px;
  }


  .price-info {
    margin-top: 10px;
    border-radius: 10px;
  }

  .price-info .content {
    display: flex;
    padding: 10px;
  }

  .price-info .desc {
    font-size: 16px;
    font-weight: bold;
    color: black;
    text-align: left;
    padding: 10px 0 10px 20px;
  }

  .price-info .content .info {
    width: 50%;
  }

  .price-info .content .title {
    font-size: 14px;
    color: black;
  }

  .price-info .content .price .left {
    font-size: 20px;
    font-weight: bold;
    color: black;
    padding-right: 5px;
  }

  .price-info .content .price .right {
    font-size: 12px;
    color: black;
  }


  .menu-info {
    margin-top: 10px;
    border-radius: 10px;
  }

  .menu-info .desc {
    font-size: 16px;
    font-weight: bold;
    color: black;
    text-align: left;
    padding: 10px 0 0px 20px;
  }

  .menu-info .content {
    display: flex;
    padding: 10px 20px;
  }


  .menu-info .content .info {
    padding: 5px 15px;
    width: 50%;
  }

  .menu-info .content .info .top {

  }

  .menu-info .content .info .icon {
    font-size: 24px;
  }

  .menu-info .content .info .bottom {

  }



  .price-info .price-money {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  .price-info .price-integral {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  .list-info {
    padding: 20px;
    text-align: left;
    margin-top: 10px;
    border-radius: 10px;
  }


  .list-info > div {
    padding: 10px 0;
    margin: 5px 0;
  }

  .container {
    background-color: rgba(208, 208, 208, 0.24);
    height: 100vh;
    padding: 10px;
    font-size: 14px;
    color: #646566;
  }

  .container > div {
    background-color: white;
  }

  .price-info-icon {
    font-size: 35px;
  }

  .list-info-item {
    display: flex;
  }

  .list-info-item .icon {
    font-size: 25px;
  }

  .list-info-item .text {
    width: 100%;
    border-bottom: 1px solid #BBBBBB;
    padding-left: 10px;
    padding-top: 2px;
  }





</style>
