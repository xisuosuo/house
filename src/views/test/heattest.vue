<template>
  <div id="viewDiv">
  </div>
</template>
<script>
import axios from "axios";
import $ from "jquery";
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
      feature: "",
      fields: []
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
              "esri/layers/support/Field",
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
                Field,
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
                  center: [118.2358, 32.26102],
                  container: "viewDiv",
                  map: map,
                  zoom: 13
                });
                const renderer = {
                  type: "heatmap",
                  field: "PRICE",
                  colorStops: [
                    { ratio: 0, color: "rgba(255, 255, 255, 0)" },
                    { ratio: 0.2, color: "rgba(255, 255, 255, 1)" },
                    { ratio: 0.5, color: "rgba(255, 140, 0, 1)" },
                    { ratio: 0.8, color: "rgba(255, 140, 0, 1)" },
                    { ratio: 1, color: "rgba(255, 0, 0, 1)" }
                  ],
                  minPixelIntensity: 0,
                  maxPixelIntensity: 5000
                };
                var featureLayer = new FeatureLayer({
                  url:
                    "http://122.112.216.247:6080/arcgis/rest/services/Server/FEATURELAYE/FeatureServer/0", //点数据集
                  // title: "热力图",
                  outFields: ["*"],
                  renderer: renderer //渲染器
                });

                map.add(featureLayer);

                // mapApi.esriApi.GetHeatmapRenderer().then(HeatmapRenderer => {
                //   var heatmapRenderer = new HeatmapRenderer({
                //     //设置渲染器
                //     // field: "PRICE ",
                //     colorStops: [
                //       { ratio: 0.4, color: "rgba(0, 255, 0, 0)" },
                //       { ratio: 0.75, color: "rgba(255, 140, 0, 1)" },
                //       { ratio: 0.9, color: "rgba(255, 0,   0, 1)" }
                //     ],
                //     blurRadius: 8,
                //     maxPixelIntensity: 230,
                //     minPixelIntensity: 10
                //   });
                //   debugger;
                //   var featureLayer = new FeatureLayer({
                //     url:
                //       "http://122.112.216.247:6080/arcgis/rest/services/Server/FEATURELAYE/FeatureServer/0", //点数据集
                //     // title: "热力图",
                //     outFields: ["*"],
                //     renderer: heatmapRenderer //渲染器
                //   });

                //   map.add(featureLayer);
                // });
              }
            );
        });
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

