import Vue from 'vue'
import Router from 'vue-router'
import main from '@/views/main/index.vue'
import login from './views/login/index.vue'
import test from './views/test/index.vue'
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

    {
      path: '/test',
      component: test,
    },
    {
      path: '/main',
      component: main,
      children: [{
          path: '/',
          redirect: "/menu",
          name: '首页',
        },
        {
          path: '/mapMatching',
          name: '地图匹配',
          component: () =>
            import('@/views/recommendation/mapMatching.vue'),
        },
          {
              path: '/locationResources',
              name: '区位资源',
              component: () =>
                  import('@/views/locationResources/components/locationResources.vue'),
          },
        {
          name: "可达性数据",
          path: "/Details",
          component: () =>
            import('@/views/recommendation/components/Details.vue'),
        },

        {
          name: "楼盘详情",
          path: "/houseinfo",
          component: () =>
            import('@/views/houseCompare/components/houseinfo.vue'),
        },
          {
              path: '/locationResources',
              name: '区位资源',
              component: () =>
                  import('@/views/locationResources/components/locationResources.vue'),
          },
        {
          name: "个人中心",
          path: "/personal",
          component: () =>
            import('@/views/personal/component/personal.vue'),
          children: [{
            path: '/',
            name: '个人中心',
            meta: {
              auth: true
            },
            component: () =>
              import('@/views/personal/component/personal.vue'),
          }, ]
        },

        {
          name: "test",
          path: "/test",
          component: () =>
            import('@/views/test/index.vue'),
        },
        {
          name: "我的收藏",
          path: "/collection",
          component: () =>
            import('@/views/collection/index.vue'),
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
          name: "数据展示",
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
          // redirect: '/',
          component: () =>
            import('@/views/infoSearch/index.vue'),
          children: [{
            path: '/',
            name: '基础信息查询',
            meta: {
              auth: true
            },
            component: () =>
              import('@/views/infoSearch/home/index.vue')
          }]
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
            name: "对比",
            path: "/houseCompare/compare",
            component: () =>
              import('@/views/houseCompare/components/compare.vue'),
          }, ]
        },
        {
          path: '/recommendation',
          name: '房源推荐',
          component: () =>
            import('@/views/recommendation/index.vue'),
          children: [{
            name: '购房推荐',
            path: '/recommendation/housingPreference',
            meta: {
              auth: true
            },
            component: () =>
              import('@/views/recommendation/components/housingPreference.vue'),
          }, {
            path: '/recommendation/factor',
            name: '购房选址',
            meta: {
              auth: true
            },
            component: () =>
              import('@/views/recommendation/components/factor.vue'),
          }]
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
              import('@/views/recommendation/recommendHousing.vue'),
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
              path: '/auDecision/usersManual',
              name: '用户手册',
              meta: {
                auth: true
              },
              component: () =>
                import('@/views/auDecision/components/usersManual.vue'),
            },
            {
              path: '/auDecision/livablemodel',
              name: '宜居模型',
              meta: {
                auth: true
              },
              component: () =>
                import('@/views/auDecision/components/livablemodel.vue'),
            },
            {
              path: '/auDecision/model',
              name: '引力模型',
              meta: {
                auth: true
              },
              component: () =>
                import('@/views/auDecision/components/model.vue'),
            }
          ]
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
        },
        {
          path: '/userManager',
          name: '用户管理',
          component: () =>
            import('@/views/userManager/index.vue'),
          children: [{
            path: '/',
            name: '用户信息管理',
            meta: {
              auth: true
            },
            component: () =>
              import('@/views/userManager/components/userIndex.vue'),
          }, ]
        },
        {
          name: "用户中心",
          path: "/personalcenter",
          component: () =>
            import('@/views/personalcenter/component/personalCenter.vue'),
          children: [{
            path: '/',
            name: "用户中心",
            meta: {
              auth: true
            },
            component: () =>
              import('@/views/userManager/components/userIndex.vue'),
          }, ]
        }, {
          name: "房价分析",
          path: "/priceAnalysis",
          component: () =>
            import('@/views/priceAnalysis/index.vue'),
          // children: [{
          //   path: '/',
          //   name: "用户中心",
          //   meta: {
          //     auth: true
          //   },
          //   component: () =>
          //     import('@/views/userManager/components/userIndex.vue'),
          // }, ]
        },{
          name: "模型分析",
          path: "/modelAnalysis",
          component: () =>
            import('@/views/modelAnalysis/index.vue'),
          // children: [{
          //   path: '/',
          //   name: "用户中心",
          //   meta: {
          //     auth: true
          //   },
          //   component: () =>
          //     import('@/views/userManager/components/userIndex.vue'),
          // }, ]
        }

      ]
    }
  ]
})