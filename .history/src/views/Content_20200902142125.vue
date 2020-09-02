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
    //setView
    viewer.camera.setView({
           destination: Cesium.Cartesian3.fromDegrees(114.35231209, 30.53542614, 5000.0),
           orientation: {
                heading : Cesium.Math.toRadians(20.0), // 方向
                pitch : Cesium.Math.toRadians(-90.0),// 倾斜角度
                roll : 0
           }
    })
    viewer.camera.setView({
           destination: Cesium.Rectangle.fromDegrees(0.0, 20.0, 10.0, 30.0),
           orientation: {
                heading : Cesium.Math.toRadians(20.0), // 方向
                pitch : Cesium.Math.toRadians(-90.0),// 倾斜角度
                roll : 0
           }
    })
    //flyTo
    viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(116.4353140214, 39.960521, 15000.0),
            orientation: {
                heading : Cesium.Math.toRadians(20.0), // 方向
                pitch : Cesium.Math.toRadians(-90.0),// 倾斜角度
                roll : 0
            },
            duration: 2, // 设置飞行持续时间，默认会根据距离来计算
            maximumHeight:5000, // 相机最大飞行高度
            easingFunction: _Cesium.default.EasingFunction.LINEAR_NONE,
            flyOverLongitude:100,  // 如果到达目的地有2种方式，设置具体值后会强制选择方向飞过这个经度(这个，很好用)
            complete: function complete() {
                var z = (view.z || 90000) * 1.2 + 8000;// 到达位置后执行的回调函数
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