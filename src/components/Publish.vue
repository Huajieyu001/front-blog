<template>
    <h1>发布成功，即将返回主页</h1>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue'

const router = useRouter()

onMounted(()=>{
    setTimeout(()=>{
        router.push({
            path: "/"
        })
    }, 1000)
})

</script>

<style scoped>
</style>