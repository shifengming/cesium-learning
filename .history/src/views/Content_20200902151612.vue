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
    viewer.camera.setView({
           destination: Cesium.Rectangle.fromDegrees(0.0, 20.0, 10.0, 30.0),//west, south, east, north
           orientation: {
                heading : Cesium.Math.toRadians(20.0), // 方向
                pitch : Cesium.Math.toRadians(-90.0),// 倾斜角度
                roll : 0
            }
    })
  }
}
</script>

<style scoped>
#cesiumContent{
  width: 80%;
	height: 60%;
}
</style>