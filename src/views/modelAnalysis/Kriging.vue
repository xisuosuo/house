<template>
    <div class="layout">
        <Layout :style="{height:'100%'}">
            <Sider ref="side1" :width='180'>
                <Menu active-name="" theme="dark" width="auto" :open-names="['']">
                    <router-link to="/menu">
                        <MenuItem name="1-1">
                        <Icon type="ios-navigate"></Icon>
                        <span>首页</span>
                        </MenuItem>
                    </router-link>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="md-speedometer" /> 数据展示
                        </template>
                        <router-link to="/data">
                            <MenuItem name="2-1">
                            <span style="font-size: 13px">数据统计</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/data/dataDeatils">
                            <MenuItem name="2-2">
                            <span style="font-size: 13px">数据查询</span>
                            </MenuItem>
                        </router-link>
                    </Submenu>
                    <router-link to="/infoSearch">
                        <MenuItem name="3-1">
                        <Icon type="md-search" />
                        <span>信息查询</span>
                        </MenuItem>
                    </router-link>
                    <Submenu name="4">
                        <template slot="title">
                            <Icon type="md-globe" /> 区位资源
                        </template>
                        <router-link to="/locationResources">
                            <MenuItem name="4-1">
                            <span>学区资源</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/medicalResources">
                            <MenuItem name="4-2">
                            <span>医疗资源</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/greenlResources">
                            <MenuItem name="4-3">
                            <span>绿地资源</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/businessResources">
                            <MenuItem name="4-4">
                            <span>商业资源</span>
                            </MenuItem>
                        </router-link>
                    </Submenu>
                    <router-link to="/recommendation/factor">
                        <MenuItem name="5-1">
                        <Icon type="md-pin" />
                        <span>购房选址</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/recommendation/housingPreference">
                        <MenuItem name="6-1">
                        <Icon type="md-thumbs-up" />
                        <span>房源推荐</span>
                        </MenuItem>
                    </router-link>

                    <Submenu name="7">
                        <template slot="title">
                            <Icon type="ios-radio" /> 房价分析
                        </template>
                        <router-link to="/priceAnalysis">
                            <MenuItem name="7-1">
                            <span style="font-size: 13px">价格分析</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/heatMap2d">
                            <MenuItem name="7-2">
                            <span style="font-size: 13px">二维热力图</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/heatMap">
                            <MenuItem name="7-3">
                            <span style="font-size: 13px">三维热力图</span>
                            </MenuItem>
                        </router-link>
                    </Submenu>
                    <Submenu name="8">
                        <template slot="title">
                            <Icon type="md-analytics" /> 房价预测
                        </template>
                        <router-link to="/GWR">
                            <MenuItem name="8-2">
                            <span style="font-size: 13px">GWR模型</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/Kriging">
                            <MenuItem name="8-1">
                            <span style="font-size: 13px">克里金插值预测</span>
                            </MenuItem>
                        </router-link>

                        <router-link to="/priceForecast">
                            <MenuItem name="8-3">
                            <span style="font-size: 13px">房价预测</span>
                            </MenuItem>
                        </router-link>
                    </Submenu>
                    <router-link to="/userManager">
                        <MenuItem name="9-1" v-if="show">
                        <Icon type="md-contacts" />
                        <span>用户管理</span>
                        </MenuItem>
                    </router-link>
                    <Submenu name="10">
                        <template slot="title">
                            <Icon type="md-paper" /> 用户手册
                        </template>
                        <router-link to="/auDecision/usersManual">
                            <MenuItem name="10-1">
                            <span style="font-size: 13px">用户手册</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/auDecision/livablemodel">
                            <MenuItem name="10-2">
                            <span style="font-size: 13px">宜居模型</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/auDecision/model">
                            <MenuItem name="10-3">
                            <span style="font-size: 13px">引力模型</span>
                            </MenuItem>
                        </router-link>
                    </Submenu>
                    <router-link to="/personalcenter">
                        <MenuItem name="11-1">
                        <Icon type="md-person" />
                        <span>个人中心</span>
                        </MenuItem>
                    </router-link>
                </Menu>
            </Sider>
            <Content>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Breadcrumb>
                        <Icon :class="rotateIcon" :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
                        <BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}</BreadcrumbItem>
                    </Breadcrumb>
                </Header>
                <div style="width:100%;height:880px">
                    <div id="viewDiv" style=" padding: 0; margin: 0; height: 860px;width: 100%;;background-color: #FCF9F2"></div>
                    <Button type="primary" @click="ongo" style="float:right;margin-top:10px;margin-left:10px;">房价预测
                    </Button>
                    <Button type="primary" @click="onSubmit" style="float:right;margin-top:10px">保存</Button>
                </div>
            </Content>
        </Layout>
    </div>

</template>
<script>
import axios from "axios";
import esriLoader from "esri-loader";
import { MapAPI } from "@/core/config/const";
import { debug } from "util";

export default {
  data() {
    return {
      mapTileLayerLayers: "",
      TileLayerStreets: "",
      MapImageLayer: "",
      view: null,
      IsMapToolsView: false,
      from: "",
      Mymap: "",
      mapViewL: null,
      mapViewR: null,
      left: "-100px",
      top: "-100px",
      width: 0,
      feature: ""
    };
  },
  mounted() {
    this.addLayerL();
  },
  methods: {
    addLayerL() {
      esriLoader
        .loadScript({
          url: MapAPI.js,
          css: MapAPI.css
        })
        .then(r => {
          esriLoader
            .loadModules([
              "esri/Map",
              "esri/Basemap",
              "esri/views/MapView",
              "esri/layers/TileLayer",
              "esri/layers/FeatureLayer",
              "esri/tasks/QueryTask",
              "esri/tasks/support/Query",
              "esri/tasks/Geoprocessor",
              "esri/tasks/support/FeatureSet"
            ])
            .then(
              ([
                Map,
                Basemap,
                MapView,
                TileLayer,
                FeatureLayer,
                QueryTask,
                Query,
                Geoprocessor,
                dom,
                on
              ]) => {
                var activeWidget = null;
                var street = new TileLayer({
                  url:
                    "http://122.112.216.247:6080/arcgis/rest/services/Servers/Map/MapServer"
                });

                var baseMap = new Basemap({
                  baseLayers: [street]
                });
                var map = new Map({
                  basemap: baseMap
                  // layers: [layer]
                });
                this.myMap = map;

                this.mapViewL = new MapView({
                  container: "viewDiv",
                  map: map
                });
                var gwrPOint =
                  "http://122.112.216.247:6080/arcgis/rest/services/Servers/DJpoint/MapServer/0";

                var queryTask = new QueryTask({
                  url: gwrPOint
                });
                var query = new Query();
                query.returnGeometry = true;
                query.outFields = ["*"];
                query.where = "OBSERVED>='3946'";
                // queryTask.execute(query, this.doGP);
                // queryTask.execute(query).then(function(results) {
                //   this.doGP(results);
                // });
                queryTask.execute(query).then(this.doGP);
              }
            );
        });
    },
    doGP(featureSet) {
      debugger;
      var gpUrl =
        "http://122.112.216.247:6080/arcgis/rest/services/Servers/KING/GPServer/Model";
      mapApi.esriApi.GetGeoprocessor().then(Geoprocessor => {
        var Kriging_GP = new Geoprocessor(gpUrl);
        this.krigingGP = Kriging_GP;
        var parms = {
          SDE_DJGWR: featureSet,
          Z_value_field: "LocalR2"
          //传入的几何对象
        };
        Kriging_GP.outSpatialReference = { wkid: 102100 };
        Kriging_GP.processSpatialReference = { wkid: 102100 };
        console.log(parms);
        Kriging_GP.submitJob(parms).then(this.gpJobComplete);
      });
      //   Kriging_GP.submitJob(params).then(this.gpJobComplete);
    },
    gpJobComplete(jobinfo) {
      console.log(jobinfo);
      debugger;
      if (jobinfo.jobStatus == "job-succeeded") {
        mapApi.esriApi.GetImageParameters().then(ImageParameters => {
          var imageParams = new ImageParameters({
            format: "png32",
            imageSpatialReference: 102100
          });
          var layer = this.krigingGP.getResultMapImageLayer(jobinfo.jobId);
          layer.opacity = 0.3;
          layer.title = "克里金插值";
          this.myMap.layers.add(layer);
        });

        // Kriging_GP.getResultImage(jobinfo.jobId, "fx", imageParam, getResultImaLayer);
      } else {
        alert("任务失败");
      }
    }
  },
  data() {
    return {
      social: []
    };
  }
};
</script>
<style>
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
#viewDiv {
  padding: 0;
  margin: 0;
  height: 800px;
  width: 100%;
}
</style>

