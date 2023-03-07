
<template>
  <div class="HelloWorld">
    <div class="HelloWorld-com">
      <CountDown />
    </div>
  </div>
</template>
<script setup lang="ts">
import CountDown from  '@/components/CountDown/index.vue'
</script>
<style lang="scss" scoped>
.HelloWorld{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
