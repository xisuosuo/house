<template>
    <Layout >
        <Sider hide-trigger :width="70"  >
          <div class="layout-menu">
            <ul>
               <router-link to="/menu">
               <li class="menu-home"><a><span class="icon-home"></span></a></li>
               </router-link>
              <li class="menu-item" @click="siteSelect"><a class="nav-item">
                  <div class="icon-wrap"><span class="menu-icon icon-collision"></span></div>
                  <div class="div-label" ><span>条件选房</span></div>
                </a></li>
               <li class="menu-item"><a class="nav-item">
                  <div class="icon-wrap"><span class="menu-icon icon-wnpg"></span></div>
                  <div class="div-label"><span>智能选房</span></div>
                </a>
                <ul class="sub-menu-item">
                  <li><a @click="openCompare()">房源对比</a></li>
                  <li><a @click="openCalculator()">房源计算器</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </Sider>
        <Content>

        </Content>
  </Layout >
</template>
<script>
export default {
    
}
</script>
