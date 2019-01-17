<template>
  <div class="animated fadeIn">
  <div id="viewDiv">
  </div>
  </div>
</template>
<script>
import axios from "axios";
import esriLoader from "esri-loader";
import { MapAPI } from "@/core/const";

export default {
  data() {
    return {
      mapTileLayerLayers: "",
      TileLayerStreets: "",
      MapImageLayer: "",
      toolsUrl: "static/map/tools.json",
      view: null,
      IsMapToolsView: false
    };
  },
  mounted() {
    this.addLayer();
  },
  methods: {
    // getGoodsList() {
    //   axios.get("/static/layer.json").then(res => {
    //     var result = res.data;
    //     console.log(result);
    //   });
    // },
    addLayer() {
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
              "esri/layers/TileLayer"
            ])
            .then(([Map, Basemap, MapView, TileLayer, dom, on]) => {
              var activeWidget = null;
              var street = new TileLayer({
                url:
                    "http://122.112.216.247:6080/arcgis/rest/services/CHUZHOU/chuzhouServer/MapServer"
              });

              var baseMap = new Basemap({
                baseLayers: [street]
              });

              var map = new Map({
                basemap: baseMap
                // layers: [layer]
              });

              this.view = new MapView({
                container: "viewDiv",
                map: map
              });

        
            });
        });
    },
    goBaidu() {
      this.$router.push("/map/Baidu");
    },
    go3D() {
      this.$router.push("/map/3Dmap");
    }
  },
  components: {
    measureArea,
    measureLength
  }
};
</script>
<style>
@import "../../assets/css/main.less";
#viewDiv {
  padding: 0;
  margin: 0;
  height: 1000px;
  width: 100%;
}
.main .container-fluid {
  padding: 0 0px;
}
.breadcrumb {
  position: relative;
  margin-bottom: 0.01rem;
  border-bottom: 1px solid #cfd8dc;
}
#layerToggle {
  top: 20px;
  right: 20px;
  position: absolute;
  z-index: 99;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  opacity: 0.75;
}
.baidu {
  position: absolute;
  right: 0;
  top: 115px;
}
.threeMap {
  position: absolute;
  right: 0;
  top: 150px;
}
</style>
