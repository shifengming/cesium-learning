import ImageryProvider from '../../public/Cesium-1.71/Build/Cesium/Cesium';
import ArcGisMapServerImageryProvider from '../../public/Cesium-1.71/Build/Cesium/Cesium';
import BaseLayerPicker from '../../public/Cesium-1.71/Build/Cesium/Cesium';
import TileMapServiceImageryProvider from '../../public/Cesium-1.71/Build/Cesium/Cesium';
import SingleTileImageryProvider from '../../public/Cesium-1.71/Build/Cesium/Cesium';
<template>
    <!-- 创建一个HTML元素来保存CesiumJS部件 -->
    <div id="cesiumContent"></div>
</template>
 
<script>
export default {
  name: 'cesiumContent',
  data () {
    return {}
  },
  mounted(){
    var Cesium = this.Cesium;
    var cesiumContent = document.getElementById("cesiumContent");
    // 创建cesium部件，告诉上边定义的HTML元素
    var viewer = new Cesium.Viewer('cesiumContent',{
        animation:false
    })
    var viewer = new Cesium.Viewer('cesiumContainer',{
      ImageryProvider: new Cesium.ArcGisMapServerImageryProvider({
        url : 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
      }),
      baseLayerPicker: false
    });
    var layers = viewer.scene.imageryLayers;
    var blackMarble = layers.addImageryProvider(new Cesium.TileMapServiceImageryProvider({
          url : '//cesiumjs.org/tilesets/imagery/blackmarble',
          maximumLevel : 8,
          credit : 'Black Marble imagery courtesy NASA Earth Observatory'
    }));
    //设置图层的透明度
    blackMarble.alpha = 0.5;
    //设置图层的亮度
    blackMarble.brightness = 2.0;
    //添加一个图层，在
    layers.addImageryProvider(new Cesium.SingleTileImageryProvider({
      rectangle: Cesium.Rectangle.fromDegress(-75.0,28.0,-67.0,29.75)
    }))
  }
}
</script>
<style scoped>
#cesiumContent{
  width: 80%;
	height: 60%;
}
</style>