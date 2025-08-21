<template>
    <div class="mb-4">
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      :color="button.color"
      @click="toWriteArticle"
    >
      {{ button.text }}
    </el-button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const buttons = reactive([
  {
    text: "去写文章",
    type: "info",
    color: "#A3A6AD"
  }
])

const toWriteArticle = ()=>{
  router.push({
    name: "Article"
  })
}

</script>

<style>
.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
