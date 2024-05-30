
<template>
  <div class="HelloWorld">
    <div class="HelloWorld-com">
      <!-- <CountDown /> -->
      <CrossWindow />
    </div>
  </div>
</template>
<script setup lang="ts">
import CountDown from '@/components/CountDown/index.vue';
import CrossWindow from '@/components/CrossWindow/index.vue';
</script>
<style lang="scss" scoped>
.HelloWorld{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .HelloWorld-com{
    width: 100%;
    height: 100%;
  }
}
</style>
