<template>
    <Layout >
        <Sider hide-trigger :width="70">
          <div class="layout-menu">
            <ul>
               <router-link to="/menu">
               <li class="menu-home"><a><span class="icon-home"></span></a></li>
               </router-link>
                <router-link to="/housingValuation/forecast">
              <li class="menu-item"><a class="nav-item">
                  <div class="icon-wrap"><span class="menu-icon icon-cgzs"></span></div>
                  <div class="div-label"><span>房价预测</span></div>
                </a></li>
                </router-link >
                <router-link to="/housingValuation/valuation">
              <li class="menu-item"><a class="nav-item">
                  <div class="icon-wrap"><span class="menu-icon icon-pgkh"></span></div>
                  <div class="div-label"><span>房产估价</span></div>
                </a>
              </li>
                </router-link>
            </ul>
          </div>
        </Sider>
        <Content>
            <router-view/>
        </Content>
    </Layout>         
</template>
<style lang="less" scoped>
// .ivu-layout {
//   height: 1024px;
// }

</style>