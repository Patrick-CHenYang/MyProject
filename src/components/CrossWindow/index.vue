<template>
  <!-- // 跨窗口动画 -->
  <div class="cross_window_wrap">
  {{getBrowserCenterCoordinates()}}
    <div class="cross_window_block" v-for="(item,index) in obgInfo" :key="index">
      <Cube :cubuInfo="item"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Cube from './cube.vue';

const obgInfo = ref([
  {
    id:1,
    top:getBrowserCenterCoordinates().y,
    left:getBrowserCenterCoordinates().x,
  }
])
function getBrowserCenterCoordinates() {
  // 获取窗口的宽度和高度
  var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  // 计算窗口可视区域的中心点坐标
  var centerX = winWidth / 2;
  var centerY = winHeight / 2;

  // 获取屏幕的宽度和高度
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;

  // 计算窗口中心点相对于屏幕左上角的坐标
  var screenCenterX = screenWidth > winWidth ? (screenWidth / 2 - centerX) + window.screenX : window.screenX + centerX;
  var screenCenterY = screenHeight > winHeight ? (screenHeight / 2 - centerY) + window.screenY : window.screenY + centerY;

  return { x: screenCenterX, y: screenCenterY };
}

// 调用函数并打印结果
console.log(getBrowserCenterCoordinates());
const windowInfo = ref();
let windowCount:number = ref(Number(localStorage.getItem('windowCount')) || 0);

// console.log('newWindowObj',windowInfo)
// const windowObj = [
//   {
//     id: 1,
//     width: 500,
//     height: 500,
//     left: 100,
//     top: 100,
//   }
// ]
// localStorage.setItem('windowObj', JSON.stringify(windowObj));
init();
function init() {
  window.addEventListener('storage', listener);
  windowInfo.value = localStorage.getItem('windowObj') || []
  windowCount = Number(localStorage.getItem('windowCount')) || 0;
  windowInfo.value.push({
    id: windowCount,
    // top:
  });
  console.log(windowInfo.value)


  
  windowCountOpen();// 网页标签计数
  window.addEventListener('beforeunload', function(event) {
    windowCountClose();
    deleteWindow(windowCount);
  });
}
function listener() {
  // console.log(123123)
}

// 更新窗口信息
function updateWindow() {
  localStorage.setItem('windowInfo', JSON.stringify(windowInfo.value));
}
// 删除当前窗口信息
function deleteWindow(id:number) {
  const index = windowInfo.value?.findIndex(item => {
    return item.id === id;
  })
  windowInfo.value.splice(index, 1);
  updateWindow();
}
// 网页标签打开时计数
function windowCountOpen(){
  windowCount++;
  localStorage.setItem('windowCount', JSON.stringify(windowCount));
}
// 网页标签打开时计数
function windowCountClose(){
  windowCount--;
  localStorage.setItem('windowCount', JSON.stringify(windowCount));
}
</script>

<style lang="scss" scoped>
.cross_window_wrap{
  width: 100%;
  height: 100%;
  .cross_window_block{
    width: 20px;
    height: 20px;

  }
}
</style>