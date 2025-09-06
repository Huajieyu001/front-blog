<template>
    <!-- <el-container>
        <el-card style="max-width: 480px; margin: 30px; background-color: aquamarine; border-radius: 5px; border: solid 0.5px;">
        </el-card>
    </el-container> -->

    <el-row :gutter="20">
        <el-col :span="6">
            <div class="grid-content ep-bg-purple">HAHAHA</div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple">HAHAHA</div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple">HAHAHA</div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple">HAHAHA</div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple">HAHAHA</div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple">HAHAHA</div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple">HAHAHA</div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple">gs</div>
        </el-col>
    </el-row>
</template>

<script setup>
import { reactive, onMounted } from 'vue'

onMounted(()=>{
})

const detail = reactive({
    data:[
        {
            name: '',
            list: []
        },
        {
            name: '',
            list: []
        }
    ]
})
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
  margin-bottom: 20px;
}

.grid-content {
  border-radius: 0px;
  padding: 5px;
  border: solid gray 0.5px;
  min-height: 36px;
  background-color: rgb(247, 238, 217);
  width: 260px;
  height: 140px;
}
</style>