import { checkAuth } from './login/helper'
import Login from './login/Login'

export default ({
                  Vue,
                  options,
                  router,
                  siteData
                }) => {
  Vue.mixin({
    beforeMount() {
      const doCheck = () => {
        if (!checkAuth()) {
          this.$dlg.modal(Login, {
            width: 500,
            height: 350,
            title: '用户登录',
            singletonKey: 'employee-login',
            maxButton: false,
            closeButton: false,
            callback: data => {
              if (data === true) {
                // do some stuff after login
              }
            }
          })
        }
      }

      if (this.$dlg) {
        doCheck()
      } else {
        import('v-dialogs').then(resp => {
          Vue.use(resp.default)
          this.$nextTick(() => {
            doCheck()
          })
        })
      }
    }
  })
}
