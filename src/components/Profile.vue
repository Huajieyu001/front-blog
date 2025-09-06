<template>
    <div class="profile">
        <!-- <el-avatar :size="size" :src="circleUrl" @click="toManage()" /> -->
        <el-avatar :size="size" :src="circleUrl" @click="toManage" />
        <br></br>
        <!-- <span>sddfs</span> -->
    </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const size = ref(100)

const state = reactive({
    circleUrl: 'https://ts1.tc.mm.bing.net/th/id/OIP-C.7GLMYPqMlt2LgkbPsOnDIAAAAA?w=207&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
})

const { circleUrl } = toRefs(state)

const toManage = () => {
    if (localStorage.getItem("huajieyu_blog_auth")) {
        router.push({
            name: "Manage"
        })
    } else {
        router.push({
            name: "Login"
        })
    }
}

const toGithub = () => {
    window.open("https://github.com/Huajieyu001")
}


</script>

<style scoped>
.profile {
    border: #87c48c solid 0.5px;
    /* border: solid 1px; */
    /* border-radius: 20px; */
    padding: 10px;
    margin: 10px;
}
</style>
