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
    var homeCameraView={destination:new Cesium.Cartesian3.fromDegrees(111,29,1000000),
      orientation:{
          heading:0,
          pitch:-1.5707963267948966,
          roll:0
          }};    
      homeCameraView.duration = 10.0;//过程10秒，单位秒
      homeCameraView.maximumHeight = 1000000;//飞行的最大高度，设置很高时就会先很高然后下降
      homeCameraView.pitchAdjustHeight = 1000000;//如果飞的太高则自动纠正，保障地球在视角内
      //api介绍Transform matrix representing the reference frame the camera will be in when the flight is completed.
      homeCameraView.endTransform = Cesium.Matrix4.IDENTITY; 

      //改变homeButton的初始位置
      viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
          e.cancel = true;
          viewer.scene.camera.flyTo(homeCameraView);
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