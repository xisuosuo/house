   <template>
    <!--<Sider ref="side1" :width='180' :style="{background: '#fff'}">-->
        <!--<Menu active-name="" theme="light" width="auto" :open-names="['']">-->
            <!--<router-link to="/data">-->
                <!--<MenuItem name="2-1">-->
                <!--<Icon type="md-speedometer" />-->
                <!--<span class="siderItem">数据台账</span>-->
                <!--</MenuItem>-->
            <!--</router-link>-->

            <!--<Submenu name="2">-->
                <!--<router-link to="/data/dataDeatils">-->
                    <!--<MenuItem name="4-3">-->
                    <!--<span> 简单查询</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
                <!--<template slot="title">-->
                    <!--<Icon type="md-search" />查询统计-->
                <!--</template>-->

                <!--<router-link to="/infoSearch">-->
                    <!--<MenuItem name="4-1-2">-->
                    <!--<span class="kjcx">条件查询</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
                <!--<router-link to="/infoSearch">-->
                    <!--<MenuItem name="4-1-2">-->
                    <!--<span class="kjcx">公共设施统计</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
                <!--<router-link to="/infoSearch">-->
                    <!--<MenuItem name="4-1-3">-->
                    <!--<span class="kjcx">缓冲区查询</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
                <!--<router-link to="/infoSearch">-->
                    <!--<MenuItem name="4-2">-->
                    <!--<span class="kjcx">周边设施查询</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
            <!--</Submenu>-->

            <!--<Submenu name="4">-->
                <!--<template slot="title">-->
                    <!--<Icon type="md-globe" />区位资源-->
                <!--</template>-->
                <!--<router-link to="/locationResources">-->
                    <!--<MenuItem name="4-1">-->
                    <!--<span>学区资源</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
                <!--<router-link to="/medicalResources">-->
                    <!--<MenuItem name="4-2">-->
                    <!--<span>医疗资源</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
                <!--<router-link to="/greenlResources">-->
                    <!--<MenuItem name="4-3">-->
                    <!--<span>绿地资源</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
                <!--<router-link to="/businessResources">-->
                    <!--<MenuItem name="4-4">-->
                    <!--<span>商业资源</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
            <!--</Submenu>-->

            <!--<Submenu name="5">-->
                <!--<template slot="title">-->
                    <!--<Icon type="md-pin" />购房选址-->
                <!--</template>-->
                <!--<router-link to="/recommendation/factor">-->
                    <!--<MenuItem name="5-1">-->
                    <!--<span style="font-size: 13px">偏好选址</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
                <!--<router-link to="/compareHouse">-->
                    <!--<MenuItem name="5-2">-->
                    <!--<span style="font-size: 13px">房源对比</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
            <!--</Submenu>-->
            <!--<Submenu name="6">-->
                <!--<template slot="title">-->
                    <!--<Icon type="md-thumbs-up" />房源推荐-->
                <!--</template>-->
                <!--<router-link to="/recommendation/housingPreference">-->
                    <!--<MenuItem name="6-1">-->
                    <!--<span class="siderItem">基于用户推荐</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
                <!--<router-link to="/recommendation/housings">-->
                    <!--<MenuItem name="6-2">-->
                    <!--<span class="siderItem">基于住宅推荐</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
            <!--</Submenu>-->
            <!--<Submenu name="7">-->
                <!--<template slot="title">-->
                    <!--<Icon type="ios-radio" />房价分析-->
                <!--</template>-->
                <!--<router-link to="/priceAnalysis">-->
                    <!--<MenuItem name="7-1">-->
                    <!--<span style="font-size: 13px">价格分析</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
                <!--<router-link to="/heatMap2d">-->
                    <!--<MenuItem name="7-2">-->
                    <!--<span style="font-size: 13px">二维热力图</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
                <!--<router-link to="/heatMap">-->
                    <!--<MenuItem name="7-3">-->
                    <!--<span style="font-size: 13px">三维热力图</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
            <!--</Submenu>-->
            <!--<Submenu name="8">-->
                <!--<template slot="title">-->
                    <!--<Icon type="md-analytics" />房价预测-->
                <!--</template>-->
                <!--<router-link to="/modelAnalysis">-->
                    <!--<MenuItem name="8-2">-->
                    <!--<span style="font-size: 13px">GWR模型</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
                <!--<router-link to="/Kriging">-->
                    <!--<MenuItem name="8-1">-->
                    <!--<span style="font-size: 13px">克里金插值预测</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
                <!--<router-link to="/priceForecast">-->
                    <!--<MenuItem name="8-3">-->
                    <!--<span style="font-size: 13px">房价预测</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->

            <!--</Submenu>-->

            <!--<Submenu name="9">-->
                <!--<template slot="title">-->
                    <!--<Icon type="md-contacts" />系统管理-->
                <!--</template>-->
                <!--<router-link to="/userManager">-->
                    <!--<MenuItem name="9-2">-->
                    <!--<span style="font-size: 13px">用户管理</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
                <!--<router-link to="/auDecision/usersManual">-->
                    <!--<MenuItem name="9-2">-->
                    <!--<span style="font-size: 13px">用户手册</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
                <!--<router-link to="/auDecision/livablemodel">-->
                    <!--<MenuItem name="9-3">-->
                    <!--<span style="font-size: 13px">宜居模型</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
                <!--<router-link to="/auDecision/model">-->
                    <!--<MenuItem name="9-4">-->
                    <!--<span style="font-size: 13px">引力模型</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
            <!--</Submenu>-->

            <!--<Submenu name="10">-->
                <!--<template slot="title">-->
                    <!--<Icon type="md-contacts" />个人中心-->
                <!--</template>-->
                <!--<router-link to="/personalcenter">-->
                    <!--<MenuItem name="10-1">-->
                    <!--<span style="font-size: 13px">信息维护</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
                <!--<router-link to="personal">-->
                    <!--<MenuItem name="10-2">-->
                    <!--<span style="font-size: 13px">密码修改</span>-->
                    <!--</MenuItem>-->
                <!--</router-link>-->
            <!--</Submenu>-->

            <!-- <router-link to="/personalcenter">
                <MenuItem name="11-1">
                <Icon type="md-person" />
                <span class="siderItem">个人中心</span>
                </MenuItem>
            </router-link> -->
        <!--</Menu>-->
    <!--</Sider>-->
</template>
<style lang="less">
.ivu-layout-sider-children {
  height: 730px;
}
.siderItem {
  margin-left: 1px;
}
</style>

          
  