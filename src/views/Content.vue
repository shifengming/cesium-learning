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
    // 创建cesium部件，告诉上边定义的HTML元素
    viewer.camera.flyTo('cesiumContent',{
      //位置
      destination: Cesium.Cartesian3.fromDegrees(114.35231209,30.53542614,5000.0),
      //姿态
      orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-90.0),
        roll: Cesium.Math.toRadians(0.0)
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