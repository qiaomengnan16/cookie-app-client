<template>
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
    >
      <order-item v-for="(item) in pageData.data" :key="item.id" :order="item" />
    </van-list>
</template>

<script>

import {
  commonFetch,
  apiOrderPage
} from '../../utils/console'

import OrderItem from "@/components/member/OrderItem"

export default {
  name: "OrderList",
  components: {
    OrderItem
  },
  props: {
    propData: {
      type: Object,
      default () {
        return {
          orderStatusList: []
        }
      }
    },
  },
  data() {
    return {
      // 页面滚动到底部时为true
      loading: false,
      // 数据全部加载完毕时设置为true
      finished: false,
      // 页面数据
      pageData: {
        data: [],
        search: {
          currentPage: 0,
          pageSize: 10
        },
        pageNum: 0,
        pages: 0,
        orderStatusList: []
      }
    }
  },
  methods: {
    onLoad() {
      this.pageData.search.currentPage++
      this.pageData.search.orderStatusList = this.propData.orderStatusList
      commonFetch(apiOrderPage,this.pageData.search,res => {
        if (!res.data.data || res.data.data.length < 1) {
          this.loading = false
          this.finished = true
        } else {
          for (let i in res.data.data) {
            this.pageData.data.push(res.data.data[i])
          }
          this.pageData.pageNum = res.data.pageNum
          this.pageData.pages = res.data.pages
          this.loading = false
          if (this.pageData.pageNum == this.pageData.pages) {
            this.finished = true
          }
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
