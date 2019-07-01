<template>
  <layout>
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
      <div style="margin: 0 auto;margin-top: 5px;width:1000px;height:680px">
        <Card style="height:100%">
          <Tabs type="card">
            <TabPane label="GWR模型分析数据">
              <Table :columns="columns1" :data="nowData"></Table>
              <Page :total="dataCount" :page-size="pageSize" @on-change="changepage" @on-page-size-change="_nowPageSize" show-total show-elevator/>
            </TabPane>
            <TabPane label="GWR模型分析图">
              <div id="viewDiv">
                <Select v-model="model1" placeholder="地价" @on-change="changeAttributes" style="width:200px;position:absolute;top:2px;right:2px">
                  <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}
                  </Option>
                </Select>
              </div>
            </TabPane>
            <TabPane label="克里金插值图">
              <div id="map2" style=" padding: 0; margin: 0; height: 800px;width: 100%;;background-color: #FCF9F2"></div>
            </TabPane>
          </Tabs>
          <Button type="primary" @click="ongo" style="float:right;margin-top:10px;margin-left:10px;">房价预测
          </Button>
          <Button type="primary" @click="onSubmit" style="float:right;margin-top:10px">保存</Button>
        </Card>
      </div>
      <router-view/>
    </Content>
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
      nowData: [],
      pageSize: 10, //每页显示多少条
      dataCount: 0, //总条数
      pageCurrent: 1, //当前页
      model1: "C1_DJ",
      cityList: [
        {
          value: "C1_DJ",
          label: "地价"
        },
        {
          value: "C2_RJL",
          label: "容积率"
        }
      ],
      columns1: [
        {
          title: "C1_DJ",
          key: "C1_DJ"
        },
        {
          title: "C2_RJL",
          key: "C2_RJL"
        },
        {
          title: "Cond",
          key: "Cond"
        },
        {
          title: "Intercept",
          key: "Intercept"
        },
        {
          title: "LocalR2",
          key: "LocalR2"
        },
        {
          title: "StdErrC1_DJ",
          key: "StdErrC1_DJ"
        },
        {
          title: "StdErrC2_RJL",
          key: "StdErrC2_RJL"
        }
      ],
      social: [],

      data1: [],
      data2: [],
      mapTileLayerLayers: "",
      TileLayerStreets: "",
      MapImageLayer: "",
      view: null,
      IsMapToolsView: false,
      from: "",
      Mymap: "",
      myMapR: "",
      mapViewL: null,
      mapViewR: null,
      left: "-100px",
      top: "-100px",
      width: 0,
      feature: "",
      res: []
    };
  },
  mounted() {
    this.changepage();
    this.addLayerL();
    this.addLayerL1();
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
              "esri/layers/MapImageLayer",
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
                MapImageLayer,
                TileLayer,
                FeatureLayer,
                QueryTask,
                Query,
                Geoprocessor,
                dom,
                on
              ]) => {
                var activeWidget = null;

                // var street = new MapImageLayer({
                //   url:
                //     "http://122.112.216.247:6080/arcgis/rest/services/Server/MAP/MapServer"
                // });
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
                  "http://122.112.216.247:6080/arcgis/rest/services/Servers/gwrfeature/MapServer/0";

                var queryTask = new QueryTask({
                  url: gwrPOint
                });
                var query = new Query();
                query.returnGeometry = true;
                query.outFields = ["*"];
                query.where = "PRICE>='3946'";
                // queryTask.execute(query, this.doGP);
                // queryTask.execute(query).then(function(results) {
                //   this.doGP(results);
                // });
                queryTask.execute(query).then(this.doGWRGP);
              }
            );
        });
    },
    changeAttributes() {
      this.addLayerL();
      this.doGP();
    },
    changepage(index) {
      var _start = (index - 1) * this.pageSize;
      var _end = index * this.pageSize;
      this.nowData = this.data1.slice(_start, _end);
    },
    _nowPageSize(index) {
      //实时获取当前需要显示的条数
      this.pageSize = index;
    },
    doGWRGP(featureSet) {
      var _this = this;
      var gpUrl =
        "http://122.112.216.247:6080/arcgis/rest/services/Servers/GwrResulr/GPServer/Model";
      mapApi.esriApi.GetGeoprocessor().then(Geoprocessor => {
        var Kriging_GP = new Geoprocessor(gpUrl);
        var parms = {
          Export_Output_6_shp: featureSet //传入的几何对象
        };
        Kriging_GP.submitJob(parms).then(jobinfo => {
          // ;
          if (jobinfo.jobStatus == "job-succeeded") {
            // ;
            Kriging_GP.getResultData(
              jobinfo.jobId,
              "GeographicallyWeightedRegression10"
            ).then(function(results) {
              // console.log("projected points: ", results.value.features.length);
              var GwrPoint = results.value.features;

              // this.gwrPointP = GwrPoint;
              function objSort(prop1, prop2) {
                return function(obj1, obj2) {
                  var val1 = obj1[prop1][prop2];
                  var val2 = obj2[prop1][prop2];
                  if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                    val1 = Number(val1);
                    val2 = Number(val2);
                  }
                  if (val1 < val2) {
                    return -1;
                  } else if (val1 > val2) {
                    return 1;
                  } else {
                    return 0;
                  }
                };
              }

              GwrPoint.sort(objSort("attributes", _this.model1));
              console.log(GwrPoint);

              for (let i = 0; i < GwrPoint.length; i++) {
                _this.data1.push(GwrPoint[i].attributes);
                _this.dataCount = GwrPoint.length;
              }
              for (let i = 0; i < _this.pageSize; i++) {
                _this.nowData.push(GwrPoint[i].attributes);
              }

              debugger;
              // for (let j = 0; j < 10; j++) {
              //   _this.nowData.push(results.value.features[j].attributes);
              // }

              var GwrPoint = results.value.features;
              var str = JSON.stringify(GwrPoint);
              console.log(str);
              localStorage.setItem("gwrPoint", str);
              var length = GwrPoint.length % 7;
              let length2 = (GwrPoint.length - length) / 7;
              let colors = [
                "#38a800",
                "#6fc400",
                "#b0e000",
                "#ffff00",
                "#ffaa00",
                "#ff5500",
                "#ff0000"
              ];
              for (let x = 0; x < 7; x++) {
                let start = x * length2;
                let end = start + length2;
                let GwrPoints = GwrPoint.slice(start, end);
                let Pointsymbol = {
                  type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                  style: "square",
                  color: colors[x],
                  size: "8px", // pixels
                  outline: {
                    // autocasts as new SimpleLineSymbol()
                    color: colors[x],
                    width: 3 // points
                  }
                };
                GwrPoints.forEach((GwrPoints, index) => {
                  mapApi.esriApi.GetGraphic().then(Graphic => {
                    let graphics = [];
                    let graphic = new Graphic({
                      geometry: GwrPoints.geometry,
                      symbol: Pointsymbol
                    });
                    graphics.push(graphic);
                    _this.mapViewL.graphics.addMany(graphics);
                  });
                });
              }
            });
          }
        });
      });
    },

    addResult(results) {
      console.log(results);
    },
    onSubmit() {
      const title = "保存成功";
      const content = "<p>保存地理加权分析数据，可以进行预测。</p>";
      this.$Modal.success({
        title: title,
        content: content
      });
    },
    ongo() {
      this.$router.push("/priceForecast");
    },
    addLayerL1() {
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
                this.myMapR = map;

                this.mapViewr = new MapView({
                  container: "map2",
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
                queryTask.execute(query).then(this.doGP1);
              }
            );
        });
    },
    doGP1(featureSet) {
      debugger;
      var gpUrl =
        "http://122.112.216.247:6080/arcgis/rest/services/Servers/kingModel/GPServer/kingModel";
      mapApi.esriApi.GetGeoprocessor().then(Geoprocessor => {
        var Kriging_GP = new Geoprocessor(gpUrl);
        this.krigingGP = Kriging_GP;
        var parms = {
          DJGWR: featureSet,
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
          layer.opacity = 0.7;
          layer.title = "克里金插值";
          this.myMapR.layers.add(layer);
        });
        // Kriging_GP.getResultImage(jobinfo.jobId, "fx", imageParam, getResultImaLayer);
      } else {
        alert("任务失败");
      }
    }
  }
};
</script>
<style>
#viewDiv {
  padding: 0;
  margin: 0;
  height: 800px;
  width: 100%;
}
</style>

