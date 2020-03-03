import Vue from 'vue'
import App from './App'
import uni_request from './js_sdk/yinchengnuo-req/uni_request/uni_request.js'

Vue.prototype.$http = uni_request({ // 有效配置项只有三个
	baseURL: 'https://www.liulongbin.top:8081', //baseURL
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
