<template>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="search" to="/workBench">工作台</van-tabbar-item>
        <van-tabbar-item icon="home-o"  to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/myIndex">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script setup lang="ts">
    import {
        reactive,
        ref
    } from 'vue';
    const active = ref(1);
</script>