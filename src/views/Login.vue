<template>
    <div class="back">
        <div class="form">
            <el-form
                :label-position="labelPosition"
                label-width="auto"
                :model="form"
                :rules="rules"
                style="max-width: 600px"
            >
                <el-form-item label="账号" :label-position="itemLabelPosition" prop="account">
                    <el-input v-model="form.account" clearable style="width: 240px;"/>
                </el-form-item>
                <el-form-item label="密码" :label-position="itemLabelPosition">
                    <el-input v-model="form.password" type="password" show-password clearable style="width: 240px;"/>
                </el-form-item>
                <el-form-item class="center">
                    <el-button @click="toHome">返回首页</el-button>
                    <el-button @click="toSignup">没有账号？去注册</el-button>
                    <el-button @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { FormItemProps, FormProps, FormRules } from 'element-plus'
import { useRouter } from 'vue-router';
import { REGEX } from '../utils/constants';

const router = useRouter()
const labelPosition = ref<FormProps['labelPosition']>('right')
const itemLabelPosition = ref<FormItemProps['labelPosition']>('')
const form = reactive({
    account: '',
    password: '',
})

const login = ()=> {
    console.log(form)
}

const toHome = ()=>{
    router.push('/')
}

const toSignup = ()=>{
    router.push('/signup')
}

const checkAccount = (rule: any, value: String, callback: any) => {
    if(!value){
        callback(new Error('Please input account'))
    }
    if(!REGEX.accountRegex.test(value)){
        callback(new Error('请输入正确格式的账号'))
    }
}

const rules = reactive<FormRules<typeof ruleform>>({
    account: [{validator: checkAccount, trigger: 'blur'}]
})
</script>

<style>
/* .back{
    display: flex;
    justify-content: center; 
    align-items: center; 
    height: 100%;
    width: 100%;
    background-color: rgb(201, 214, 193);
} */
.form{
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 300px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>