<template>
  <div>
    <van-popup v-model="propData.show" :closeable="true" :close-on-click-overlay="false" round position="bottom" >
      <div class="position">
        <div class="tips">
          请选择您的座位
        </div>
        <div class="position-info">
          <div v-for="item in positions" :key="item.id"  :class=" ['position-info-content', {selected: selectedItem == item}]" @click="selected(item)">
            <van-icon class-prefix="icon" name="position-available" />
            <div class="position-no">{{item.positionNo}}</div>
          </div>
        </div>
        <div class="position-confirm">
          <van-button position="bottom" @click="confirm" type="info">选好了</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>

import {
  commonFetch,
  apiPositionList
} from '../../utils/console'

export default {
  name: "PositionSelect",
  props: {
      propData: {
          type: Object,
          default () {
              return {
                show: false,
                confirm: function() {

                }
              }
          }
      }
  },
  data() {
    return {
      positions: [],
      selectedItem: null
    }
  },
  methods: {
    selected(data) {
      if (data && data.positionNo) {
        this.selectedItem = data
      }
    },
    confirm() {
      if (!this.selectedItem || !this.selectedItem.id) {
        this.$toast.fail('请选择您的座位')
        return
      }
      this.propData.confirm(this.selectedItem)
    },
    initData() {
      commonFetch(apiPositionList,null,res => {
        this.positions = res.data
      })
    }
  },
  mounted() {
    this.initData()
  }
}
</script>

<style scoped>


    .position {

    }

    .icon-position-available {
        font-size: 50px;
    }

    .icon-position-disable {
        font-size: 50px;
    }

    .position-info {
        max-height: 50vh;
        overflow-y: scroll;
        display: flex;
        flex-wrap: wrap;
        padding: 0 12px;
    }

    .position-confirm button{
        width: 100%;
    }

    .position-info-content {
        position: relative;

    }

    .selected {
      color: red;
      font-weight: bold;
    }

    .position-no {
        position: absolute;
        top: 18px;
        left: 14px;
        font-size: 14px;
    }


</style>
