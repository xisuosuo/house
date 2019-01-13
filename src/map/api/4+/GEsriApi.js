import esriLoader from "esri-loader";
class GEsriApi {
  //basemap
  GetBasemap() {
    return new Promise(resolve => {
      esriLoader.loadModules(["esri/Basemap"]).then(([Basemap]) => {
        resolve(Basemap);
      });
    });
  }
  //layers
  GetTileLayer() {
    return new Promise(resolve => {
      esriLoader.loadModules(["esri/layers/TileLayer"]).then(([TileLayer]) => {
        resolve(TileLayer);
      });
    });
  }
  GetMapImageLayer() {
    return new Promise(resolve => {
      esriLoader.loadModules(["esri/layers/MapImageLayer"]).then(([MapImageLayer]) => {
        resolve(MapImageLayer);
      });
    });
  }
  GetVectorTileLayer() {
    return new Promise(resolve => {
      esriLoader.loadModules(["esri/layers/VectorTileLayer"]).then(([VectorTileLayer]) => {
        resolve(VectorTileLayer);
      });
    });
  }
  GetGraphicsLayer() {
    return new Promise(resolve => {
      esriLoader.loadModules(["esri/layers/GraphicsLayer"]).then(([GraphicsLayer]) => {
        resolve(GraphicsLayer);
      });
    });
  }
  GetFeatureLayer() {
    return new Promise(resolve => {
      esriLoader.loadModules(["esri/layers/FeatureLayer"]).then(([FeatureLayer]) => {
        resolve(FeatureLayer);
      });
    });
  }

  //Symbols
  GetSimpleFillSymbol() {
    return new Promise(resolve => {
      esriLoader.loadModules(["esri/symbols/SimpleFillSymbol"]).then(([SimpleFillSymbol]) => {
        resolve(SimpleFillSymbol);
      });
    });
  }
  GetSimpleMarkerSymbol() {
    return new Promise(resolve => {
      esriLoader.loadModules(
        ["esri/symbols/SimpleMarkerSymbol"]).then(
        ([SimpleMarkerSymbol]) => {
          resolve(SimpleMarkerSymbol);
        }
      );
    });
  }
  GetPictureMarkerSymbol() {
    return new Promise(resolve => {
      esriLoader.loadModules(
        ["esri/symbols/PictureMarkerSymbol"]).then(
        ([PictureMarkerSymbol]) => {
          resolve(PictureMarkerSymbol);
        }
      );
    });
  }
  //graphic
  GetGraphic() {
    return new Promise(resolve => {
      esriLoader.loadModules(
        ["esri/Graphic"]).then(
        ([Graphic]) => {
          resolve(Graphic);
        }
      );
    });
  }

  GetGraphicsLayer() {
    return new Promise(resolve => {
      esriLoader.loadModules(
        ["esri/layers/GraphicsLayer"]).then(
        ([Graphic]) => {
          resolve(GraphicsLayer);
        }
      );
    });
  }

  GetColor() {
    return new Promise(resolve => {
      esriLoader.loadModules(
        ["esri/Color"]).then(
        ([Color]) => {
          resolve(Color);
        }
      );
    });
  }
  //geometry
  GetExtent() {
    return new Promise(resolve => {
      esriLoader.loadModules(
        ["esri/geometry/Extent"]).then(
        ([Extent]) => {
          resolve(Extent);
        }
      );
    });
  }
  GetPoint() {
    return new Promise(resolve => {
      esriLoader.loadModules(
        ["esri/geometry/Point"]).then(
        ([Point]) => {
          resolve(Point);
        }
      );
    });
  }
  GetPolyline() {
    return new Promise(resolve => {
      esriLoader.loadModules(
        ["esri/geometry/Polyline"]).then(
        ([Polyline]) => {
          resolve(Polyline);
        }
      );
    });
  }
  GetPolygon() {
    return new Promise(resolve => {
      esriLoader.loadModules(
        ["esri/geometry/Polygon"]).then(
        ([Polygon]) => {
          resolve(Polygon);
        }
      );
    });
  }
  GetgeometryEngine() {
    return new Promise(resolve => {
      esriLoader.loadModules(
        ["esri/geometry/geometryEngine"]).then(
        ([geometryEngine]) => {
          resolve(geometryEngine);
        }
      );
    });
  }

  //widgets
  GetZoom() {
    return new Promise(resolve => {
      esriLoader.loadModules(["esri/widgets/Zoom"]).then(([Zoom]) => {
        resolve(Zoom);
      });
    });
  }

  GetSketchViewModel() {
    return new Promise(resolve => {
      esriLoader.loadModules(["esri/widgets/Sketch/SketchViewModel"]).then(([SketchViewModel]) => {
        resolve(SketchViewModel);
      });
    });
  }


  GetWebScene() {
    return new Promise(resolve => {
      esriLoader.loadModules(["esri/WebScene"]).then(([WebScene]) => {
        resolve(WebScene);
      });
    });
  }


  GetDirectLineMeasurement3D() {
    return new Promise(resolve => {
      esriLoader.loadModules(["esri/widgets/DirectLineMeasurement3D"]).then(([DirectLineMeasurement3D]) => {
        resolve(DirectLineMeasurement3D);
      });
    });
  }
}

export const esriApi = new GEsriApi();