<template>
    <!-- <van-notice-bar @click="gotoNotice" mode="link" left-icon="volume-o" :text="state.text" /> -->
    <!-- <van-tabs v-model:active="activeName" swipeable>
        <van-tab title="代办事项" name="a">
            <todo></todo>
        </van-tab>
        <van-tab title="我发起的" name="b">我发起的21312</van-tab>
        <van-tab title="我处理的" name="c">我处理的12312</van-tab>
    </van-tabs> -->
    <tabbar></tabbar>
    <router-view></router-view>
</template>

<script setup lang="ts">
    import util from '@/api/publicMethods/utils';
    import tabbar from './common/tabbar.vue';
    import todo from './common/todo.vue';
    import {
        reactive,
        ref
    } from 'vue';
    import {
        useRouter
    } from 'vue-router';
    const router = useRouter();
    const activeName = ref('a');
    let state = reactive({
        text: 'Jerry'
    })
    const gotoNotice = () => {
        console.log(12312);
    }
</script>
<style>
    .van-tabs__nav {
        background: transparent !important;
    }
</style>
<style scoped>
    .home {
        width: 375px;
        height: 375px;
        background: red
    }
</style>