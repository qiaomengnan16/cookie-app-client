<template>
  <div class="container">
    <div class="title">
      <span>注册</span>
    </div>
    <div>
      <van-field v-model="user.realName" maxlength="5" label="姓名" placeholder="请输入姓名" />
    </div>
    <div>
      <van-field v-model="user.cardNo" maxlength="18" label="身份证号" placeholder="请输入身份证号" />
    </div>
    <div class="footer">
      <van-button @click="register" :disabled="loginDisabled" :class="['login', {'login-selected': !loginDisabled}]" >注册</van-button>
      <div class="register">
        <a @click="goLogin">去登录</a>
      </div>
    </div>
  </div>
</template>

<script>
import {
  commonFetch,
  userRegister
} from '../utils/console'

import {
  setToken
} from '../utils/auth'

export default {
  name: "Register",
  data() {
    return {
      user: {
        realName: null,
        cardNo: null,
      },
      loginDisabled: true,
    }
  },
  methods: {
    goLogin() {
      this.$router.push({path: '/login'})
    },
    register() {
      if (!this.user.realName) {
        this.$toast.fail('请输入姓名')
        return
      }
      if (!this.user.cardNo) {
        this.$toast.fail('请输入身份证号')
        return
      }
      commonFetch(userRegister, this.user , res => {
        this.$toast.success("注册成功")
        this.$router.push({path: '/login'})
      })
    },
    buttonStatus() {
      if (this.user.cardNo.length == 18) {
        this.loginDisabled = false
      } else {
        this.loginDisabled = true
      }
    }
  },
  watch: {
    'user.cardNo': {
      handler () {
        this.buttonStatus()
      }
    },
  },

}
</script>

<style scoped>

.container {
  padding: 100px 20px;
}

.container >>> .van-cell {
  padding: 10px 0;
  font-size: 16px;
}

.container >>> .van-cell::after {
  left: 0;
  right: 0;
}

.title {
  font-size: 28px;
  font-weight: bold;
  text-align: left;
  color: black;
  margin-bottom: 20px;
}

.footer {
  margin-top: 50px;
}

.login {
  background-color: rgb(217,218,219);
  border-radius: 30px;
  padding: 10px 0;
  color: rgb(147,148,149);
  display: block;
  width: 100%;
}

.login-selected {
  background-color: rgb(59,165,252);
  color: white;
}

.message {
  font-size: 12px;
  text-align: left;
  margin-top: 15px;
}

.button {
  border-radius: 30px;
  padding: 0 15px;
  color: rgb(206,207,208);
}


.button-selected {
  border-color: rgb(59,165,252);
  color: rgb(59,165,252);
}

.agreement {
  color: rgb(90,169,206);
}

.van-button--disabled {
  opacity: 1;
}

.register {
  font-size: 14px;
  color: rgb(8, 143, 207);
  text-align: right;
  padding: 10px;
}

</style>
