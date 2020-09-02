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
    // var center = Cesium.Cartesian3.fromDegrees(116.435314, 39.960521, 15000.0);
    // var heading = Cesium.Math.toRadians(50.0);
    // var pitch = Cesium.Math.toRadians(-20.0);
    // var range= 5000.0;
    // viewer.camera.lookAt(cartesian, new Cesium.HeadingPitchRange(viewer.camera.heading, viewer.camera.pitch, range));
    // viewer.camera.lookAtTransform(Matrix4.IDENTITY);
    // var west = Cesium.Math.toRadians( -77.0 );
    // var south = Cesium.Math.toRadians( 38.0 );
    // var east = Cesium.Math.toRadians( -72.0 );
    // var north = Cesium.Math.toRadians( 42.0 );
    // var extent = new Cesium.Extent( west, south, east, north );
    // Cesium.camera.viewExtent( extent, Cesium.Ellipsoid.WGS84 );
    var scene = viewer.scene;
    var canvas = viewer.canvas;
    canvas.setAttribute('tabindex', '0'); // needed to put focus on the canvas
    canvas.onclick = function() {
        canvas.focus();
    };
    var ellipsoid = viewer.scene.globe.ellipsoid;

    // disable the default event handlers
    scene.screenSpaceCameraController.enableRotate = false;
    scene.screenSpaceCameraController.enableTranslate = false;
    scene.screenSpaceCameraController.enableZoom = false;
    scene.screenSpaceCameraController.enableTilt = false;
    scene.screenSpaceCameraController.enableLook = true;
  }
}
</script>
<style scoped>
#cesiumContent{
  width: 80%;
	height: 60%;
}
</style>