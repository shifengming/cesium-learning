Cesium.Ion.defaultAccessToken = '你在Cesium申请的key';

var tdtKey = "你在天地图申请的key";

'use strict';

//默认BING影像地图
var viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: Cesium.createWorldImagery({
        style: Cesium.IonWorldImageryStyle.AERIAL
    }),
    baseLayerPicker: false
});

//全球影像中文注记服务
var imageryLayers = viewer.scene.imageryLayers;
var tdtAnnoLayer = imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
    url: "http://t0.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={TileMatrix}&TILEROW={TileRow}&TILECOL={TileCol}&tk=" + tdtKey,
    layer: "tdtAnnoLayer",
    style: "default",
    format: "image/jpeg",
    tileMatrixSetID: "GoogleMapsCompatible"
}));

var camera_select = document.getElementById("camera_select");
if (camera_select) {
    camera_select.onchange = function gradeChange() {
        switch (camera_select.selectedIndex) {
            case 1:
                viewer.camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(114.35231209, 30.53542614, 5000.0),
                    orientation: {
                        heading: Cesium.Math.toRadians(0.0),
                        pitch: Cesium.Math.toRadians(-90.0),
                        roll: Cesium.Math.toRadians(0.0)
                    }
                });
                break;
            case 2:
                viewer.camera.flyTo({
                    destination: Cesium.Rectangle.fromDegrees(113.683333, 29.966667, 115.083333, 31.366667)
                });
                break;
            case 3:
                viewer.camera.setView({
                    destination: Cesium.Cartesian3.fromDegrees(114.40782845, 30.51011682, 5000.0),
                    orientation: {
                        heading: Cesium.Math.toRadians(0.0),
                        pitch: Cesium.Math.toRadians(-90.0),
                        roll: Cesium.Math.toRadians(0.0)
                    }
                });
                break;
            case 4:
                viewer.camera.setView({
                    destination: Cesium.Rectangle.fromDegrees(120.86667, 30.66667, 122.2, 31.883333)
                });
                break;
            case 5: {
                var whdxOptions = {
                    destination: Cesium.Cartesian3.fromDegrees(114.35231209, 30.53542614, 5000.0),
                    duration: 5,
                    orientation: {
                        heading: Cesium.Math.toRadians(0.0),
                        pitch: Cesium.Math.toRadians(-90.0),
                        roll: Cesium.Math.toRadians(0.0)
                    }
                };
                var hzkjdxOptions = {
                    destination: Cesium.Cartesian3.fromDegrees(114.40782845, 30.51011682, 5000.0),
                    orientation: {
                        heading: Cesium.Math.toRadians(0.0),
                        pitch: Cesium.Math.toRadians(-90.0),
                        roll: Cesium.Math.toRadians(0.0)
                    },
                    duration: 5,
                   //flyOverLongitude: Cesium.Math.toRadians(60.0)
                };

                whdxOptions.complete = function () {
                    setTimeout(function () {
                        viewer.camera.flyTo(hzkjdxOptions);
                    }, 1000);
                };

                // if (adjustPitch) {
                //     tokyoOptions.pitchAdjustHeight = 1000;
                //     laOptions.pitchAdjustHeight = 1000;
                // }

                viewer.camera.flyTo(whdxOptions);
            }
            break;
        default:
            break;
        }
    }
}