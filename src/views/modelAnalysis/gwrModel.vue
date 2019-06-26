<template>
  <div style="height:600px;width:100%">
    <div id="viewDiv" style="width:780px;height:700px;postion:abslute;right:0"></div>
    <div style="width:750px;height:700px">
      <Table :columns="columns1" :data="nowData"></Table>
      <Page :total="dataCount" :page-size="pageSize" @on-change="changepage" @on-page-size-change="_nowPageSize" show-total show-elevator/> </div>
  </div>
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
      pageSize: 12, //每页显示多少条
      dataCount: 0, //总条数
      pageCurrent: 1, //当前页
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
      data1: [],
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
      feature: "",
      res: []
    };
  },
  mounted() {
    this.changepage();
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
                queryTask.execute(query).then(this.doGP);
              }
            );
        });
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
    doGP(featureSet) {
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
              console.log("projected points: ", results.value.features.length);
              for (let i = 0; i < results.value.features.length; i++) {
                _this.data1.push(results.value.features[i].attributes);
                _this.dataCount = results.value.features.length;
              }
              for (let i = 0; i < _this.pageSize; i++) {
                _this.nowData.push(results.value.features[i].attributes);
              }

              debugger;
              // for (let j = 0; j < 10; j++) {
              //   _this.nowData.push(results.value.features[j].attributes);
              // }

              var GwrPoint = results.value.features;
              var length = GwrPoint.length % 7;
              console.log(length);
              let length2 = (GwrPoint.length - length) / 7;
              console.log(length2);
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

