//Content.vue
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
    var viewer = new Cesium.Viewer('cesiumContent');
    viewer.camera.setView({
           destination: Cesium.Cartesian3.fromDegrees(-85.16, 13.71, 23000000.0),
           orientation: {
                heading : Cesium.Math.toRadians(20.0), // 方向
                pitch : Cesium.Math.toRadians(-90.0),// 倾斜角度
                roll : 0
           }
    });
  }
}
</script>

<style scoped>
#cesiumContent{
  width: 80%;
	height: 60%;
}
</style>