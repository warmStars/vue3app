<template>
    <div>
        <van-sticky>
            <van-nav-bar v-if="leftNavbarShow" :title="title" left-arrow @click-left="onClickLeft" />
            <van-nav-bar v-else :title="title" />
        </van-sticky>
    </div>
</template>
<script setup lang="ts">
    import {
        defineProps
    } from 'vue';
    import {
        useRouter
    } from 'vue-router';
    const props = defineProps({
        title: {
            type: String,
            default: ''
        },
        leftNavbarShow: {
            type: Boolean || String,
            default: true
        }
    })
    const router = useRouter();
    const onClickLeft = () => {
        router.go(-1)
    };
</script>
<style scoped>
    .home {
        width: 375px;
        height: 375px;
        background: red
    }
</style>