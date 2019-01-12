import {
  esriApi
} from "./4+/GEsriApi"
import {
  popup
} from "./js/GPopup"
import {
  convert
} from "./js/convert"
// import {
//   layer
// } from "./4+/GMapLayer"
import {
  loading
} from "./js/GLoading"
import {
  geometryUtils
} from "./js/GGeometryUtils";
var mapApi = mapApi || {};
(function () {
  mapApi.esriApi = esriApi; //统一获取ESRI JS API
  mapApi.popup = popup; //弹出气泡设置
  mapApi.convert = convert; //相关转换工具
  // mapApi.layer = layer;
  mapApi.loading = loading;
  mapApi.geometryUtils = geometryUtils;
})();
window.mapApi = mapApi;
