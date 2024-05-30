<template>
  <div class="preserve" :style="`top:${props.cubuInfo?.top||300}px;left:${props.cubuInfo?.left||300}px;`">
    <div class="front">前</div>
    <div class="back">后</div>
    <div class="top">上</div>
    <div class="bottom">下</div>
    <div class="left">左</div>
    <div class="right">右</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['cubuInfo'])
</script>

<style scoped>
@keyframes spin {
  0% {   transform: rotateX(0deg) rotateY(0deg);; }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}
.preserve>div{
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  position: absolute;
}
.preserve {
  width: 200px;
  height: 200px;
  position: relative;
  /* top:300px;
  left:300px; */
  transform-style: preserve-3d;
  transform: rotateX(-15deg) rotateY(-15deg);
  animation: spin 5s linear infinite; /* 动画名称、持续时间、速度曲线、循环次数 */
}
.front{
  background: #00BFFF  ;
  transform: translateZ(100px);
}
.back{
  background: #FF6347  ;
  transform: translateZ(-100px);
}
.top{
  background: #8FBC8F  ;
  transform: rotateX(90deg) translateZ(100px);
}
.bottom{
  background: #CD5C5C  ;
  transform: rotateX(270deg) translateZ(100px);
}
.left{
  background: #FFDAB9  ;
  transform: rotateY(270deg) translateZ(100px);
}
.right{
      background: #9ACD32  ;
      transform: rotateY(90deg) translateZ(100px);
}
</style>