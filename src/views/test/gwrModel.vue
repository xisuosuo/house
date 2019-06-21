<template>
  <div id="viewDiv">
  </div>
</template>
<script>
import axios from "axios";
import esriLoader from "esri-loader";
import { MapAPI } from "@/core/config/const";
import { constants } from "fs";
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
              "esri/layers/MapImageLayer",
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
                FeatureLayer,
                QueryTask,
                Query,
                Geoprocessor,
                dom,
                on
              ]) => {
                var activeWidget = null;

                var street = new MapImageLayer({
                  url:
                    "http://122.112.216.247:6080/arcgis/rest/services/Server/MAP/MapServer"
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
                query.where = "PRICE>='8000'";
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
      var gpUrl =
        "http://122.112.216.247:6080/arcgis/rest/services/Servers/GwrResulr/GPServer/Model";
      mapApi.esriApi.GetGeoprocessor().then(Geoprocessor => {
        var Kriging_GP = new Geoprocessor(gpUrl);
        var parms = {
          Export_Output_6_shp: featureSet //传入的几何对象
        };
        Kriging_GP.submitJob(parms).then(jobinfo => {
          debugger;
          if (jobinfo.jobStatus == "job-succeeded") {
            debugger;
            Kriging_GP.getResultData(
              jobinfo.jobId,
              "GeographicallyWeightedRegression10"
            ).then(function(results) {
              console.log("projected points: ", results);
            });
          }
        });
      });

      //   Kriging_GP.submitJob(params).then(this.gpJobComplete);
    },
    // gpJobComplete(jobinfo) {
    //   console.log(jobinfo);
    //   debugger;
    //   if (jobinfo.jobStatus == "job-succeeded") {
    //     Kriging_GP.getResultData(
    //       jobinfo.jobId,
    //       "GeographicallyWeightedRegression10",
    //       result
    //     );
    //   }
    // },
    addResult(results) {
      console.log(results);
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
#viewDiv {
  padding: 0;
  margin: 0;
  height: 800px;
  width: 100%;
}
</style>

