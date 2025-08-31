<template>
    <el-button @click="add">写文章</el-button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const add = ()=>{
    router.push({
        name: 'Article'
    })
}
</script>

<style scoped>
</style>