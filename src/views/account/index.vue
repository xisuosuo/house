<template>
    <Layout>
        <Sider hide-trigger :width="70">
            <div class="layout-menu">
                <ul>
                    <router-link to="/menu">
                        <li class="menu-home"><a><span class="icon-home"></span></a></li>
                    </router-link>
                    <router-link to="/data">
                    <li class="menu-item"><a class="nav-item">
                        <div class="icon-wrap"><span class="menu-icon icon-database"></span></div>
                        <div class="div-label"><span>数据台账</span></div>
                    </a></li>
                    </router-link >
                    <router-link to="/data/dataDeatils">
                    <li class="menu-item"><a class="nav-item">
                        <div class="icon-wrap"><span class="menu-icon icon-ctxtjh"></span></div>
                        <div class="div-label"><span>数据统计</span></div>
                    </a>
                    </li>
                    </router-link>
                </ul>
            </div>
        </Sider>
            <Layout :style="{padding: '0 10px ',height:'100%'}">
        <Content>
            <router-view/>
        </Content>
    </Layout>
    </Layout>
</template>
 <style lang="less" scoped>
.ivu-layout {
  height: 1024px;
}

.group-panel-box {
  &.blue {
    .panel-title {
      background: #2d8cf0;
    }
    .panel-line {
      background: #2d8cf0;
    }
  }
  .panel-title {
    float: left;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    color: white;
    font-size: 14px;
    margin-left: 10px;
    clear: both;
  }
  .panel-line {
    height: 2px;
    clear: both;
  }
}
.chartImage {
  position: relative;
  left: 0;
  float: right;
  top: -51px;
  cursor: pointer;
}
.slelectInput {
  width: 200px;
  float: right;
}

.data-view {
  padding: 20px;
  height: 2000px;
  .group-header {
    height: 20px;
  }
  .ivu-row {
    .left {
      padding-right: 10px;
    }
    .right {
      padding-left: 10px;
    }
    .chart {
      height: 400px;
      width: 100%;
    }
    .card-box {
      .card-tools {
        span {
          float: left;
        }
        .ivu-select {
          float: left;
          margin: 4px 20px 4px 5px;
          width: 150px;
          .ivu-select-selection {
            border-radius: 0;
          }
        }
      }
    }
  }
}

</style>
