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
    var center = Cesium.Cartesian3.fromDegrees(116.435314, 39.960521, 15000.0);
    var heading = Cesium.Math.toRadians(50.0);
    var pitch = Cesium.Math.toRadians(-20.0);
    var range= 5000.0;
    viewer.camera.lookAt(cartesian, new Cesium.HeadingPitchRange(viewer.camera.heading, viewer.camera.pitch, range));
    viewer.camera.lookAtTransform(Matrix4.IDENTITY);
  }
}
</script>
<style scoped>
#cesiumContent{
  width: 80%;
	height: 60%;
}
</style>