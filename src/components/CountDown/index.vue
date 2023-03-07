<template>
    <div class="coun-down-group" @click="isShowTime()">
        <div class="coun-down">
            <div class="coun-down-title">
                倒计时
            </div>
            <div class="coun-down-time">
                00:54:48
            </div>
            <div class="coun-down-img">
                <img src="@/assets/OIP-C.jpg" alt="">
            </div>
        </div>

        <div>
            <el-time-picker
                ref="timeSelectRef"
                v-model="state.closingTime" 
                placeholder="倒计时选择" 
                format="HH:mm:ss"
                value-format="HH:mm:ss"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import moment from "moment"; 
import { reactive,ref } from "vue";
import {reactiveType} from './config'
const timeSelectRef = ref()
const state = reactive<reactiveType>({
    closingTime:'',
    icon:'123'
});

const isShowTime = ()=>{
    timeSelectRef.value.handleOpen();
}
</script>

<style lang="scss" scoped>
    @import './index.scss';
</style>