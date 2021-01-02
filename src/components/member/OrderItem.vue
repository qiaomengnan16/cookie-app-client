<template>
    <div class="order-item">
        <div class="img">
            <img height="50" width="50" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2259495850,858877480&fm=26&gp=0.jpg"/>
        </div>
        <div class="content">
            <div class="branch">
                <div class="left">{{order.branchName}}</div>
                <div class="right">{{order.orderStatus == 10 ? '未付款' : '已付款'}}</div>
            </div>
            <div class="discount">已优惠{{order.discountAmount}}元</div>
            <div class="food">
                <div class="left">
                    <div class="item" v-for="(item) in order.items" :key="item.id">
                        <div class="top">
                            <img height="40" width="60" :src="item.headImage">
                        </div>
                        <div class="bottom">
                          {{ item.foodName }}
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="top">¥{{order.amount}}</div>
                    <div class="bottom">共{{order.items ? order.items.length : 0}}件</div>
                </div>
            </div>
            <div class="re">
              <span @click="toDetail" v-if="order.orderStatus == 10">
                去付款
               </span>
              <span v-if="order.orderStatus == 20">
                再来一单
              </span>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "OrderItem",
    props: {
      order: {
        type: Object,
        default () {
          return {
            branchName: null,
            orderStatus: null,
            discountAmount: null,
            items: [{
              headImage: null
            }]
          }
        }
      },
    },
    methods: {
      toDetail() {
        this.$router.push({path: '/member/order_detail', query: {dataId: this.order.id}})
      }
    }
  }
</script>

<style scoped>

    .order-item {
        display: flex;
        margin: 10px;
        background-color: white;
        border-radius: 10px;
        padding: 10px;
    }

    .order-item .img {
        padding-right: 10px;
    }

    .order-item .img img {
        border-radius: 5px;
    }

    .order-item .content {
        width: 85%;
        text-align: left;
    }

    .order-item .content .branch {
        display: flex;
        width: 100%;
    }

    .order-item .content .branch .left {
        font-size: 20px;
        font-weight: bold;
        color: black;
        width: 80%;
    }

    .order-item .content .branch .right {
        color: rgb(171,171,171);
        font-size: 14px;
        padding: 3px 0;
    }

    .order-item .content .discount {
        font-size: 12px;
        color: rgb(231,58,70);
        border: 1px solid rgb(231,58,70);
        display: inline-block;
        border-radius: 5px;
        padding: 0 1px;
    }

    .order-item .content .food {
        display: flex;
        padding: 10px 0;
    }

    .order-item .content .food .left {
        width: 78%;
        display: flex;
        overflow: scroll;
    }

    .order-item .content .food .left .item {
        margin-right: 5px;
    }

    .order-item .content .food .left .item:last-child {
        margin-right: 0px;
    }

    .order-item .content .food .left .top img {
        border-radius: 5px;
    }

    .order-item .content .food .left .bottom {
        font-size: 12px;
        color: black;
        text-align: center;
    }

    .order-item .content .food .right {
        width: 20%;
    }

    .order-item .content .food .right .top {
        font-size: 18px;
        font-weight: bold;
        color: black;
        text-align: center;
    }

    .order-item .content .food .right .bottom {
        font-size: 12px;
        color: rgb(171,171,171);
        text-align: center;
    }

    .re {
        text-align: right;
        padding: 0 10px 5px 0;
    }

    .re span {
        border: 1px solid rgb(53,177,201);
        color: rgb(53,177,201);
        border-radius: 20px;
        font-size: 14px;
        font-weight: bold;
        padding: 5px 10px;
    }



</style>
