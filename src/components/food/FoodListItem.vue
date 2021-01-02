<template>
  <div class="food-list-item">
    <div class="img-container">
      <img :style="imgProperties" :src="food.headImage"/>
    </div>
    <div class="content-container">
      <div class="food-name">{{food.foodName}}</div>
      <div class="food-price">
        <div class="price">
          <span>
            ￥{{food.price}}
          </span>
        </div>
        <div class="food-plus">
          <div @click="add(-1)" v-if="food.buyNumber">
            <van-icon class-prefix="icon" name="jianhao" />
          </div>
          <div class="number" v-if="food.buyNumber">
            <span>{{food.buyNumber}}</span>
          </div>
          <div @click="add(1)">
            <van-icon class-prefix="icon" name="jiahao" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/food/iconfont.css'

  export default {
    name: "FoodListItem",
    props: {
      propData: {
        type: Object,
        default () {
          return {
            type: 0, // 0. 正常模式 1. small模式
            changeBuyNumber() {},
          }
        }
      },
      food: {
        type: Object,
        default() {
          return {
            foodName: null,
            buyNumber: 0,
          }
        }
      },
    },
    data() {
      return {
        object: {
          number: 0
        },
        imgProperties: {
          height: '85px',
          width: '85px',
        }
      }
    },
    methods: {
      add(number) {
        this.propData.changeBuyNumber(this.food , number)
      },
      init() {
        if (!this.food.buyNumber) {
          this.food.buyNumber = 0
        }
        if (this.propData.type == 1) {
          this.imgProperties.height = '70px'
          this.imgProperties.width = '70px'
        }
        this.food.headImage = JSON.parse(this.food.headImage)[0]['url']
      },
    },
    mounted () {
      this.init()
    }
  }
  </script>

<style scoped>

  .food-list-item {
    display: flex;
  }
  .img-container img {
    height: 90px;
    width: 90px;
    border-radius: 10px;
    border: 1px solid rgb(208,199,184);
  }
  .content-container {
    margin-left: 10px;
    position: relative;
    width: 100%;
  }
  .food-name {
    font-size: 14px;
    font-weight: bold;
    color: black;
    text-align: left;
  }
  .food-price {
    width: 100%;
    position: absolute;
    bottom: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
  }
  .food-plus {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
  }

  .food-plus .number {
    padding: 0px 5px;
  }

</style>
