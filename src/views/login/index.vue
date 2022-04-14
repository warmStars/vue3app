<template>
    <navber :title="state.title" :leftNavbarShow="state.leftNavbarShow"></navber>
    {{state.asd}}
    <div class="image-box">
        <van-image :src="getImageUrl('login')" fit="contain" class="image-style" />
        <div class="title">欢迎登陆</div>
        <div class="login-box">
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="userName" name="用户名" label="用户名" placeholder="请输入用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field v-model="passWord" type="password" name="密码" label="密码" placeholder="请输入密码"
                        :rules="[{ required: true, message: '请填写密码' }]" />
                </van-cell-group>
                <div class="submit-style">
                    <van-button round block type="primary" native-type="submit">
                        登录
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script setup lang="ts">
    import axios1 from 'axios';
    import navber from '@/components/vant/navber/index.vue';
    import util from '@/api/publicMethods/utils';
    import {
        useRouter
    } from 'vue-router';
    import {
        inject,
        reactive,
        ref,
    } from 'vue';
    const axios: any = inject('axios');
    console.log(axios1);
    const router = useRouter();
    const state = reactive({
        title: "登录",
        asd: 0,
        leftNavbarShow: false,
    });
    for (let i = 1; i <= 100; i++) {
        state.asd = i
    }
    const userName = ref('');
    const passWord = ref('');
    const getImageUrl = (name: any) => {
        return new URL(`../../assets/images/${name}.png`,
            import.meta.url).href
    };
    const onSubmit = (values: any) => {
        // console.log(213);
        // util.setSessionStorage('userInfo', userName.value);
        // router.push({
        //     path: '/'
        // })

    }
</script>
<style scoped>
    .image-box {
        width: 100%;
        position: relative;
        text-align: center;
    }

    .image-style {
        width: 100%;
    }

    .title {
        font-size: 25px;
        text-align: center;
        line-height: 25px;
        margin: 10px 0px 30px 0px;
    }

    .submit-style {
        margin: 16px;
    }
</style>