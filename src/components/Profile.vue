<template>
    <div class="profile">
        <el-avatar :size="size" :src="circleUrl" />
        <br></br>
        <span>sddfs</span>
    </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue'

const size = ref(100)

const state = reactive({
    circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    squareUrl:
        'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
    sizeList: ['small', '', 'large'] as const,
})

const { circleUrl, squareUrl, sizeList } = toRefs(state)
</script>

<style scoped>
.profile{
    border: solid 1px;
    border-radius: 20px;
    padding: 10px;
    margin: 10px;
}
</style>
