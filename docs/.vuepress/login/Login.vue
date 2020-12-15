<template>
  <div class="form">
  <div class="login-form">
    <div class="form-header">用户名</div>
    <div>
      <input placeholder="visitor" type="text" class="form-control" v-model="username">
    </div>
    <div class="form-header">密码</div>
    <div>
      <input placeholder="visitor" type="password" class="form-control" v-model="password">
    </div>
    <div class="btn-row">
      <button class="btn" @click="login">
        淘精灵账号登录
      </button>
    </div>
  </div>
<div class="social-form">
    <div class="form-header"><span style="font-weight: bolder;font-size: 20px">合作账号登录</span><div style="border: 1px dotted lightgrey;border-radius: 10px;padding: 5px;margin: 1rem 0">【温馨提示】<div></div>首次使用QQ登录，系统将给您创建一个淘精灵账号</div></div>
    <a @click="timeoutLogin" href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=100270989&response_type=code&redirect_uri=https%3A%2F%2Fpassport.csdn.net%2Faccount%2Flogin%3FpcAuthType%3Dqq%26state%3Dtest">
      <img style="width: 150px;cursor: pointer" src="http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_5.png"/>
    </a>
</div>
  </div>
</template>

<script>
import { STORAGE_KEY } from './helper'

export default {
  data () {
    return {
      username: 'visitor',
      password: 'visitor'
    }
  },
  methods: {
    login () {
      if (this.username && this.password) {
        const data = JSON.stringify({
          name: this.username,
          time: new Date().getTime()
        })
        // 登录成功后的逻辑处理，这里将数据保存在 localStorage 中仅作为功能演示
        window.localStorage.setItem(STORAGE_KEY, data)
        // 关闭窗口
        this.$emit('close', true)
      } else {
        alert('请输入正确的用户名和密码');
      }
    },
    timeoutLogin() {
      setTimeout(()=>{
        const data = JSON.stringify({
          name: 'visitor',
          time: new Date().getTime()
        })
        // 登录成功后的逻辑处理，这里将数据保存在 localStorage 中仅作为功能演示
        window.localStorage.setItem(STORAGE_KEY, data)
        // 关闭窗口
        this.$emit('close', true)
      },50)
    },
    clear () { window.localStorage.clear(); alert('已成功退出登录'); }
}
}
</script>

<style lang="stylus">
.form
  display flex
  align-items top
.social-form
  width 50%
  float right
  margin 1rem
  text-align center
  .form-header
    color #666
.login-form
  padding: 1rem
  display flex
  flex-direction column
  box-sizing border-box
  width 50%
  float left
  border-right 2px solid lightgrey

  .btn-row
    margin-top 1rem
  .btn
    padding 0.6rem 2rem
    outline none
    background-color #60C084
    color white
    border 0
    cursor pointer
    width 100%
    border-radius 20px
  .form-header
    color #666
    margin-bottom 0.5rem
  .form-control
    padding 0.6rem
    border 2px solid #ddd
    width 100%
    margin-bottom 0.5rem
    box-sizing border-box
    outline none
    transition border 0.2s ease
    &:focus
      border 2px solid #aaa
</style>
