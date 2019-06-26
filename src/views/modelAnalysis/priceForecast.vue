<template>
    <layout :style="{height:'100%'}">
        <Sider ref="side1" :width='180'>
            <Menu active-name="" theme="dark" width="auto" :open-names="['']">
                <router-link to="/menu">
                    <MenuItem name="8-1">
                    <Icon type="ios-navigate"></Icon>
                    <span>首页</span>
                    </MenuItem>
                </router-link>
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
                        <MenuItem name="8-3">
                        <span style="font-size: 13px">三维热力图</span>
                        </MenuItem>
                    </router-link>
                </Submenu>
                <router-link to="/infoSearch">
                    <MenuItem name="4-1">
                    <Icon type="md-search" />
                    <span>信息查询</span>
                    </MenuItem>
                </router-link>
                <router-link to="/locationResources">
                    <MenuItem name="2-2">
                    <Icon type="md-pin" />
                    <span>区位资源</span>
                    </MenuItem>
                </router-link>
                <router-link to="/userManager">
                    <MenuItem name="4-2" v-if="show">
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
                <router-link to="/locationResources">
                    <MenuItem name="2-2">
                    <Icon type="md-pin" />
                    <span>区位资源</span>
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
                <Submenu name="9">
                    <template slot="title">
                        <Icon type="md-analytics" /> 房价预测
                    </template>
                    <router-link to="/priceForecast">
                        <MenuItem name="1-1">
                        <span style="font-size: 13px">房价预测</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/GWR">
                        <MenuItem name="1-2">
                        <span style="font-size: 13px">GWR模型</span>
                        </MenuItem>
                    </router-link>
                </Submenu>
            </Menu>
        </Sider>
        <Content>
            <div style="margin: 0 auto;margin-top: 5px;width:1000px;height:650px">
                <Button type="primary" @click="impor" style="margin-bottom:3px">导入数据</Button>
                <Table :columns="columns1" :data="nowData1"></Table>
                <Page :total="dataCount1" :page-size="pageSize1" @on-change="changepage1" @on-page-size-change="_nowPageSize1" show-total show-elevator/>
            </div>
            <router-view/>
        </Content>
        <Modal v-model="modal1" title="选择需要预测的小区数据" @on-ok="ok" @on-cancel="cancel">
            <Table :columns="columns2" :data="nowData2"></Table>
            <Page :total="dataCount2" :page-size="pageSize2" @on-change="changepage2" @on-page-size-change="_nowPageSize2" show-total show-elevator/>
        </Modal>
    </layout>

    <!-- overflow-x: auto;overflow-y: auto -->
</template>
<script>
import axios from "axios";
import esriLoader from "esri-loader";
import { MapAPI } from "@/core/config/const";
import { constants } from "fs";
export default {
  data() {
    return {
      modal1: false
    };
  },
  methods: {
    impor() {
      this.modal1 = true;
    }
  }
};
</script>
<style>

</style>

