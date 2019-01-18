<template>
    <div id="map"></div>
</template>
<script>
import axios from "axios";
import esriLoader from "esri-loader";
export default {
  data() {
    return {
      mapTileLayerLayers: "",
      TileLayerStreets: "",
      MapImageLayer: "",
      view: null,
      IsMapToolsView: false
    };
  },
  mounted() {
    this.addLayer();
  },
  methods: {
    addLayer() {
      var MapAPI = {
        js: "http://localhost/arcgis_js_api/library/3.27/3.27/init.js",
        css:
          "http://localhost/arcgis_js_api/library/3.27/3.27/esri/css/esri.css"
      };
      esriLoader
        .loadScript({
          url: MapAPI.js,
          css: MapAPI.css
        })
        .then(r => {
          esriLoader
            .loadModules([
              "esri/map",
              "esri/layers/ArcGISTiledMapServiceLayer",
              "dojo/domReady!"
            ])
            .then(([Map, ArcGISTiledMapServiceLayer]) => {
              var map = new Map("map");
              var tiled = new ArcGISTiledMapServiceLayer(
                "http://122.112.216.247:6080/arcgis/rest/services/CHUZHOU/chuzhouServer/MapServer"
              );
              map.addLayer(tiled);
            });
        });
    }
  },
  components: {}
};
</script>
<style>
#viewDiv {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
