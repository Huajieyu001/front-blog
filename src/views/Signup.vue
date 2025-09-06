<template>
    <div class="back">
        <div class="form">
            <el-form
                :label-position="labelPosition"
                label-width="auto"
                ref="formRef"
                :rules="rules"
                :model="form"
                style="max-width: 600px"
            >
                <el-form-item label="邮箱" :label-position="itemLabelPosition" prop="email">
                    <el-input v-model="form.email" clearable style="width: 240px;"/>
                </el-form-item>
                <el-form-item label="验证码" :label-position="itemLabelPosition" prop="captcha">
                    <el-input v-model="form.captcha" clearable style="width: 240px;" max-length="6"/>
                    <el-button @click="getCode(formRef)" :disabled="captchaDisabled">{{ captchaText }}</el-button>
                </el-form-item>
                <el-form-item label="账号" :label-position="itemLabelPosition" prop="username">
                    <el-input v-model="form.username" clearable style="width: 240px;"/>
                </el-form-item>
                <el-form-item label="密码" :label-position="itemLabelPosition" prop="password">
                    <el-input v-model="form.password" type="password" show-password clearable style="width: 240px;"/>
                </el-form-item>
                <el-form-item label="确认密码" :label-position="itemLabelPosition" prop="confirmPassword">
                    <el-input v-model="form.confirmPassword" type="password" show-password clearable style="width: 240px;"/>
                </el-form-item>
                <el-form-item class="center">
                    <el-button @click="toHome">返回首页</el-button>
                    <el-button @click="toLogin">已有账号？去登录</el-button>
                    <el-button @click="signup(formRef)">注册</el-button>
                    <el-button @click="resetForm(formRef)">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { FormItemProps, FormProps, FormInstance } from 'element-plus'
import { useRouter } from 'vue-router';
import { REGEX } from '../utils/constants'
import { apiSignup, apiGetCode } from '../axios/accountAxios';

const captchaDisabled = ref(false)
const countDown = ref(0)
const captchaText = ref('获取验证码')
const router = useRouter()
const labelPosition = ref<FormProps['labelPosition']>('right')
const itemLabelPosition = ref<FormItemProps['labelPosition']>('')
const formRef = ref<FormInstance>()
const form = reactive({
    email: '',
    captcha: '',
    username: '',
    password: '',
    confirmPassword: '',
})

const signup = (formEl: FormInstance | undefined) => {
    if (!formEl) return

    formEl.validate((valid) => {
        if (valid) {
            signupUseApi()
        } else {
            console.log('error submit!')
        }
    })
}

const signupUseApi = async ()=>{
    captchaDisabled.value = true
    const data = await apiSignup(form)
    if(data.code == 200){
        router.push('/')
    } else {
        alert(data.msg)
    }
}

const getCode = (formEl: FormInstance | undefined)=> {
    if (!formEl) return
    formEl.validateField('email', (valid) => {
        if(valid){
            startCountDown()
            apiGetCode({email: form.email})
        }
    })
}

const startCountDown = ()=>{
    countDown.value = 60
    captchaDisabled.value = true

    updateButtonText()

    let countdownInterval = setInterval(() => {
        countDown.value--
        updateButtonText()

        if(countDown.value <= 0){
            clearInterval(countdownInterval)
            captchaDisabled.value = false
        }
    }, 1000);
}

const updateButtonText = ()=>{
    if(countDown.value > 0){
        captchaText.value = '重新获取' + countDown.value + 'S'
    } else {
        captchaText.value = '获取验证码'
        captchaDisabled.value = false
    }
}


const toHome = ()=>{
    router.push('/')
}

const toLogin = ()=>{
    router.push('/login')
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const checkEmail = (rule: any, value: any, callback: any) => {
    if(!value){
        callback(new Error('Please input email'))
    }
    if(!REGEX.emailRegex.test(value)){
        callback(new Error('请输入正确格式的邮箱'))
    }
    callback()
}
const checkCaptcha = (rule: any, value: any, callback: any) => {
    if(!value){
        callback(new Error('Please input captcha'))
    }
    if(!REGEX.captchaRegex.test(value)){
        callback(new Error('请输入正确格式的验证码'))
    }
    callback()
}
const checkAccount = (rule: any, value: any, callback: any) => {
    if(!value){
        callback(new Error('Please input username'))
    }
    if(!REGEX.accountRegex.test(value)){
        callback(new Error('账号只能包含字母，数字，“_”和“-”'))
    }
    callback()
}
const checkPassword = (rule: any, value: any, callback: any) => {
    if(!value){
        callback(new Error('Please input password'))
    }
    callback()
}
const checkConfirmPassword = (rule: any, value: any, callback: any) => {
    if(!value){
        callback(new Error('Please input confirmPassword'))
    }
    if(value !== form.password){
        callback(new Error('密码不一致'))
    }
    callback()
}

const rules = reactive<FormRules<typeof ruleform>>({
    email: [{validator: checkEmail, trigger: 'change'}],
    captcha: [{validator: checkCaptcha, trigger: 'change'}],
    username: [{validator: checkAccount, trigger: 'change'}],
    password: [{validator: checkPassword, trigger: 'change'}],
    confirmPassword: [{validator: checkConfirmPassword, trigger: 'change'}]
})

</script>

<style>
.back{
    /* background-color: aquamarine; */
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    height: 90vh;
    width: 90vw;
}
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