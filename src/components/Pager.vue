<template>
  <el-pagination
    :page-size="pageSize"
    :pager-count="7"
    layout="prev, pager, next, jumper, ->"
    :total="size"
    v-model:current-page="pageNum"
    :background="back"
    class="pageHelper"
  />
</template>

<script setup>
import {ref, onMounted} from 'vue'
const pageNum = ref(2)
const pageSize = ref(10)
const size = ref(110)
const back = ref(true)

onMounted(()=>{
  console.log("before", pageSize.value)
})
</script>

<style>

.pageHelper{
    margin-top: 50px;
    background-color: rgb(32, 156, 197, 0.5);
    align-content: center;

    width: 20%;
    /* margin-left: 40%; */
    margin-right: 40%;
}

</style>