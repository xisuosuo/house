import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import '@/assets/css/main.less';
import '@/assets/css/home.less';
import '@/assets/css/map.less';
import '@/assets/css/marker.less';
import '../public/js/gfont/style.css';
import echarts from 'echarts';
import './core/';
import "@/map/api/";
import axios from "axios";
// import qs from "qs";
Vue.use(iView);

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$Message.config({
  top: 60,
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});
new Vue({
  router,
  store,
  data: {
    Bus: new Vue()
  },
  render: h => h(App)
}).$mount('#app')

