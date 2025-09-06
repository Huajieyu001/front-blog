<template>
  <el-select v-model="menuStore.currentMenuId" placeholder="Select" style="width: 240px">
    <el-option v-for="item in menuList" :key="item.id" :label="item.name" :value="item.id" />
  </el-select>
</template>

<script setup>
import { useMenuStore } from '../store/menuStore';
import { watchEffect, onMounted, reactive } from 'vue';
import { apiMenuList } from '../axios/menuAxios';

const menuStore = useMenuStore()

const menuList = reactive([])

onMounted(() => {
  init()
})

const init = async () => {
  const resp = await apiMenuList()
  Object.assign(menuList, { ...resp.data.data })
  menuList.unshift({ id: null, name: '' })
  processResponse(resp, true)
}

watchEffect(() => {
})

const processResponse = (resp, notRequiresRefresh) => {
  if (resp.status == 401) {
    ElMessage.error("认证失败")
    localStorage.removeItem("huajieyu_blog_auth")
    router.push("/login")
    return
  }
  if (resp.data.code == 200) {
    if (!notRequiresRefresh) {
      location.reload()
    }
  } else {
    ElMessage.error(resp.data.msg)
  }
}
</script>

<style scoped></style>