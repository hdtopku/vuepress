<template>
  <div class="login-form">
    <div class="form-header">用户名</div>
    <div>
      <input placeholder="admin" type="text" class="form-control" v-model="username">
    </div>
    <div class="form-header">密码</div>
    <div>
      <input placeholder="admin" type="password" class="form-control" v-model="password">
    </div>
    <div class="btn-row">
      <button class="btn" @click="login">
        注册/登录(查看完整内容)
      </button>
    </div>
    <hr/>
    <a @click="timeoutLogin" href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=100270989&response_type=code&redirect_uri=https%3A%2F%2Fpassport.csdn.net%2Faccount%2Flogin%3FpcAuthType%3Dqq%26state%3Dtest">
      <img style="width: 150px;cursor: pointer" src="http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_5.png"/>
    </a>
  </div>
</template>

<script>
import { STORAGE_KEY } from './helper'

export default {
  data () {
    return {
      username: 'admin',
      password: 'admin'
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
        alert('请输入用户名或密码');
      }
    },
    timeoutLogin() {
      setTimeout(()=>{
        const data = JSON.stringify({
          name: 'admin',
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
.login-form
  padding: 1rem
  display flex
  flex-direction column
  box-sizing border-box
  .btn-row
    margin-top 1rem
  .btn
    padding 0.6rem 2rem
    outline none
    background-color #60C084
    color white
    border 0
    cursor pointer
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
