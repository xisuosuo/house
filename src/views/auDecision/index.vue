<template>
    <Layout >
        <Sider hide-trigger :width="70">
          <div class="layout-menu">
            <ul>
               <router-link to="/menu">
               <li class="menu-home"><a><span class="icon-home"></span></a></li>
               </router-link>
                <router-link to="/auDecision/livablemodel">
              <li class="menu-item"><a class="nav-item">
                  <div class="icon-wrap"><span class="menu-icon icon-chart"></span></div>
                  <div class="div-label"><span>宜居模型</span></div>
                </a></li>
                </router-link>
                <router-link to="/auDecision/model">
              <li class="menu-item"><a class="nav-item">
                  <div class="icon-wrap"><span class="menu-icon icon-xmsc"></span></div>
                  <div class="div-label"><span>引力模型</span></div>
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

        