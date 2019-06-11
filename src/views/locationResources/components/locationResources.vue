<template>
    <div class="layout">
        <Layout :style="{height:'100%'}">
            <Sider ref="side1" :width='180'>
                <Menu active-name="" theme="dark" width="auto" :open-names="['']">
                    <router-link to="/menu">
                        <MenuItem name="8-1">
                        <Icon type="ios-navigate"></Icon>
                        <span>首页</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/locationResources">
                        <MenuItem name="2-2">
                        <Icon type="md-pin" />
                        <span>区位资源</span>
                        </MenuItem>
                    </router-link>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="md-search" /> 信息查询
                        </template>
                        <MenuItem name="3-1">
                        <span @click="siteSelect">条件选房</span>
                        </MenuItem>
                        <Submenu name="3-1-1">
                            <template slot="title">
                                数据统计
                            </template>
                            <MenuItem name="3-1-1-1">
                            <span @click="selectHouse() ">公共设施</span>
                            </MenuItem>
                            <MenuItem name="3-1-1-2">
                            <span @click="selectBuffer() ">缓冲区分析</span>
                            </MenuItem>
                        </Submenu>
                        <MenuItem name="3-3">
                        <span @click="controlAnlayse">周边设施</span>
                        </MenuItem>
                    </Submenu>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="md-analytics" /> 数据展示
                        </template>
                        <router-link to="/data">
                            <MenuItem name="1-1">
                            <span style="font-size: 13px">数据统计</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/data/dataDeatils">
                            <MenuItem name="1-2">
                            <span style="font-size: 13px">数据查询</span>
                            </MenuItem>
                        </router-link>
                    </Submenu>
                    <router-link to="/recommendation/housingPreference">
                        <MenuItem name="2-1">
                        <Icon type="md-thumbs-up" />
                        <span>房源推荐</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/recommendation/factor">
                        <MenuItem name="2-2">
                        <Icon type="md-pin" />
                        <span>购房选址</span>
                        </MenuItem>
                    </router-link>
                    <Submenu name="8">
                        <template slot="title">
                            <Icon type="ios-radio" /> 房价分析
                        </template>
                        <router-link to="/priceAnalysis">
                            <MenuItem name="8-2">
                            <span style="font-size: 13px">价格分析</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/heatMap2d">
                            <MenuItem name="8-1">
                            <span style="font-size: 13px">二维热力图</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/heatMap">
                            <MenuItem name="8-1">
                            <span style="font-size: 13px">三维热力图</span>
                            </MenuItem>
                        </router-link>
                    </Submenu>
                    <router-link to="/userManager">
                        <MenuItem name="4-1" v-if="show">
                        <Icon type="md-contacts" />
                        <span>用户管理</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/personalcenter">
                        <MenuItem name="5-1">
                        <Icon type="md-person" />
                        <span>个人中心</span>
                        </MenuItem>
                    </router-link>
                    <Submenu name="6">
                        <template slot="title">
                            <Icon type="md-paper" /> 用户手册
                        </template>
                        <router-link to="/auDecision/usersManual">
                            <MenuItem name="6-1">
                            <span style="font-size: 13px">用户手册</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/auDecision/livablemodel">
                            <MenuItem name="6-2">
                            <span style="font-size: 13px">宜居模型</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/auDecision/model">
                            <MenuItem name="6-3">
                            <span style="font-size: 13px">引力模型</span>
                            </MenuItem>
                        </router-link>
                    </Submenu>
                </Menu>
            </Sider>
            <Content>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Breadcrumb>
                        <Icon :class="rotateIcon" :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
                        <BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}</BreadcrumbItem>
                    </Breadcrumb>
                </Header>
                <div style="width: 80%; margin: 0 auto;margin-top: 30px;border: 1px solid #dcdee2">
                    <Tabs>
                         <TabPane label="学区">
                            <div id="map1">
                                <smallMapView></smallMapView>
                            </div>
                            <!-- <div style="padding-top: 50px;position: absolute;right: 10px; z-index: 9999;">
                                <CheckboxGroup  v-model="checkAllGroup" @on-change="checkAllGroupChange">
                                    <Checkbox label="幼儿园">幼儿园</Checkbox>
                                    <br>
                                    <Checkbox label="小学"></Checkbox>
                                    <br>
                                    <Checkbox label="初中"></Checkbox>
                                    <br>
                                    <Checkbox label="高中"></Checkbox>
                                    <br>
                                    <Checkbox label="大专院校"></Checkbox>
                                </CheckboxGroup>
                            </div> -->
                        </TabPane> 
                        <TabPane label="服务区">
                            <div id="map2">
                                <serverArea></serverArea>
                            </div>
                            <!-- <div style="position: relative;float: right; width: 250px;margin: 10px;padding-top: 400px;z-index: 9999">
                                <Col span="2">
                                <p style="margin: 7px">0</p>
                                </Col>
                                <Col span="18">
                                <Slider v-model="value1" max="60" show-input input-size="small"></Slider>
                                </Col>
                                <Col span="4">
                                <p style="margin: 7px">分钟</p>
                                </Col>
                            </div> -->
                        </TabPane>
                        <TabPane label="缓冲区">
                            <div class="map3">
                                <!-- <smallMapView></smallMapView> -->
                            </div>
                            <div style="position: relative;float: right; width: 250px;margin: 10px;padding-top: 400px;z-index: 9999">
                                <Col span="2">
                                <p style="margin: 7px">0</p>
                                </Col>
                                <Col span="18">
                                <Slider v-model="value2" max="20" show-input input-size="small"></Slider>
                                </Col>
                                <Col span="4">
                                <p style="margin: 7px">公里</p>
                                </Col>
                            </div>
                        </TabPane>
                        <TabPane label="可达性">
                            <div class="map4">
                                <!-- <smallMapView></smallMapView> -->
                            </div>
                            <div style="padding-top: 50px;position: relative;float: right; z-index: 9999;">
                                <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                                    <Checkbox label="引力模型"></Checkbox>
                                    <br>
                                    <Checkbox label="引力模型"></Checkbox>
                                    <br>
                                    <Checkbox label="两步移动"></Checkbox>
                                    <br>
                                    <Checkbox label="两步移动"></Checkbox>
                                </CheckboxGroup>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
        </Layout>
    </div>
</template>

<script>
import smallMapView from "@/map/components/smallMapView";
import serverArea from "@/map/components/serverArea";
export default {
  data() {
    return {
      value1: 25,
      value2: 5
    };
  },
  mounted() {},

  methods: {},
  components: {
    smallMapView,
    serverArea
  }
};
</script>

<style lang="less">
.ivu-tabs-bar {
  margin-bottom: 0;
}
.layout {
  //   border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow-y: hidden;
  height: 1000px;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>