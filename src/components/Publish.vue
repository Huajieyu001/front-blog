<template>
    <h1>发布成功，3S后返回主页</h1>
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
    }, 3000)
})

</script>

<style scoped>
</style>