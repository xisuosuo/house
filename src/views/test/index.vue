<template>
  <Row>
    <Col span="12">2
    <div id="viewDiv">
    </div>
    </Col>
    <Col span="12">1
    <div id="viewDiv1"> </div>
    </Col>
  </Row>
</template>
<script>
import axios from "axios";
import esriLoader from "esri-loader";
import { MapAPI } from "@/core/config/const";
export default {
  data() {
    return {
      mapTileLayerLayers: "",
      TileLayerStreets: "",
      MapImageLayer: "",
      view: null,
      IsMapToolsView: false,
      from: "",
      mapViewL: null,
      mapViewR: null,
      left: "-100px",
      top: "-100px",
      width: 0
    };
  },
  mounted() {
    this.addLayerL();
    this.addLayerR();
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

              this.mapViewL = new MapView({
                container: "viewDiv",
                map: map
              });
              setTimeout(() => {
                this.mapViewL.on("pointer-move", e => {
                  debugger;
                  this.from = "view1";
                  let width = document.body.clientWidth / 2;
                  this.left = width + e.x - 22 + "px";
                  this.top = e.y - 22 + "px";
                });
                this.mapViewL.watch("extent", extent => {
                  if (this.from === "view1") {
                    this.mapViewR.center = extent.center;
                    this.mapViewR.zoom = this.mapViewL.zoom;
                  }
                });
              }, 500);
            });
        });
    },
    addLayerR() {
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

              this.mapViewR = new MapView({
                container: "viewDiv1",
                map: map
              });
              setTimeout(() => {
                this.mapViewR.on("pointer-move", e => {
                  this.from = "view2";
                  this.left = e.x - 22 + "px";
                  this.top = e.y - 22 + "px";
                });
                this.mapViewR.watch("extent", extent => {
                  if (this.from === "view2") {
                    this.mapViewL.center = extent.center;
                    this.mapViewL.zoom = this.mapViewR.zoom;
                  }
                });
              }, 500);
            });
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
  height: 1000px;
  width: 100%;
}
#viewDiv1 {
  padding: 0;
  margin: 0;
  height: 1000px;
  width: 100%;
}
</style>

