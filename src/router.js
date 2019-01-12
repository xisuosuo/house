import Vue from 'vue'
import Router from 'vue-router'
import main from '@/views/main/index.vue'
import login from './views/login/index.vue'
// import test from './views/test/test.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: "/login"
    },
    {
      path: '/login',
      component: login,

      meta: {
        auth: false,
      }
    },
    // {
    //   path: '/test',
    //   component: test,

    //   meta: {
    //     auth: false,
    //   }
    // },
    {
      path: '/main',
      component: main,
      children: [{
          path: '/',
          redirect: "/menu"
        },
        {
          name: "个人中心",
          path: "/personal",
          component: () =>
            import('@/views/personal/component/personal.vue'),
        },
        {
          path: '/menu',
          name: '首页',
          component: () =>
            import('@/views/menu/index.vue'),
        },
        {
          path: "/personal",
          component: () =>
            import('@/views/personal/component/personal.vue'),
        },
        {
          path: '/data',
          redirect: '/',
          component: () =>
            import('@/views/account/index.vue'),
          children: [{
            path: '/',
            name: '数据台账',
            meta: {
              auth: true
            },
            component: () =>
              import('@/views/account/components/account'),
          }, {
            path: '/data/dataDeatils',
            name: '数据明细',
            meta: {
              auth: true
            },
            component: () =>
              import('@/views/account/components/dataDetails.vue'),
          }]
        },
        {
          path: '/infoSearch',
          name: '信息查询',
          redirect: '/',
          component: () =>
            import('@/views/infoSearch/index.vue'),
          children: [{
              path: '/',
              name: '信息查询',
              meta: {
                auth: true
              },
              component: () =>
                import('@/views/infoSearch/home/index.vue')
            },
            {
              path: '/infoSearch/infoDeatil',
              name: '详细查询',
              meta: {
                auth: true
              },
              component: () =>
                import('@/views/infoSearch/home')
            },
          ]
        },
        {
          path: '/3dmap',
          name: '3维地图',
          component: () =>
            import('@/views/map/index.vue'),
          children: [{
            path: '/',
            name: '3维地图',
            meta: {
              auth: true
            },
            component: () =>
              import('@/views/map/index.vue'),
          }]
        },
        {
          path: '/houseCompare',
          name: '房源对比',
          component: () =>
            import('@/views/houseCompare/index.vue'),
          children: [{
            path: '/',
            name: '房源对比',
            meta: {
              auth: true
            },
            component: () =>
              import('@/views/houseCompare/index.vue'),
          }]
        },
        {
          path: '/recommendation',
          redirect: '/',
          name: '房源推荐',
          component: () =>
            import('@/views/recommendation/index.vue'),
          children: [{
            path: '/',
            name: '房源推荐',
            meta: {
              auth: true
            },
            component: () =>
              import('@/views/recommendation/index.vue'),
          }, ]
        },
        {
          path: '/recommendHousing',
          redirect: '/',
          name: '推荐房源',
          component: () =>
            import('@/views/recommendation/recommendHousing.vue'),
          children: [{
            path: '/',

            name: '推荐房源',
            component: () =>
              import('@/views/recommendation/recommendHousing.vue')
          }, ]
        },
        {
          path: '/mapMatching',
          redirect: '/',
          name: '地图匹配',
          component: () =>
            import('@/views/recommendation/mapMatching.vue'),
          children: [{
            path: '/',

            name: '地图匹配',
            component: () =>
              import('@/views/recommendation/mapMatching.vue')
          }, ]
        },
        {
          path: '/periphery',
          redirect: '/',
          name: '位置周边',
          component: () =>
            import('@/views/recommendation/periphery'),
          children: [{
            path: '/',

            name: '位置周边',
            component: () =>
              import('@/views/recommendation/periphery')
          }, ]
        },
        {
          path: '/auDecision',
          name: '辅助决策',
          component: () =>
            import('@/views/auDecision/index.vue'),
          children: [{
            path: '/',
            name: '辅助决策',
            meta: {
              auth: true
            },
            component: () =>
              import('@/views/auDecision/index.vue'),
          }]
        },
        {
          path: '/housingValuation',
          name: '住房估价',
          component: () =>
            import('@/views/housingValuation/index.vue'),
          children: [{
              path: '/',
              name: '房价预测',
              meta: {
                auth: true
              },
              component: () =>
                import('@/views/housingValuation/components/forecast.vue'),
            },
            {
              path: '/housingValuation/valuation',
              name: '房产估价',
              meta: {
                auth: true
              },
              component: () =>
                import('@/views/housingValuation/components/valuation.vue'),
            }
          ]
        }
      ]
    }
  ]
})