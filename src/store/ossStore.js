import { defineStore } from "pinia";
import { apiGeneratePostSignature } from "../axios/ossAxios";

const useOssStore = defineStore('ossStore', {
    state: ()=>({
        host: '',
        formData:{
            name: '',
            policy: '',
            OSSAccessKeyId: '',
            success_action_status: '200',
            signature: '',
            key:'',
            file: ''
        },
        isActive: false
    })
})

const clearOssStore = ()=>{
    const ossStore = useOssStore()
    ossStore.formData = {
        name: '',
        policy: '',
        OSSAccessKeyId: '',
        success_action_status: '200',
        signature: '',
        key:'',
        file: ''
    }
    ossStore.isActive = false
}

const initOssStore = async ()=>{
    const resp = await apiGeneratePostSignature()
    if(resp.status == 200){
        const ossStore = useOssStore()
        const data = resp.data
        ossStore.host = data.host
        ossStore.formData.policy = data.policy
        ossStore.formData.OSSAccessKeyId = data.ossAccessKeyId
        ossStore.formData.signature = data.signature
        ossStore.formData.key = data.dir

        ossStore.isActive = true
    }
}

export { useOssStore, clearOssStore, initOssStore }