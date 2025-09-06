<template>
  <el-tabs type="border-card">
    <el-tab-pane v-for="item in categories" :label="item">{{ item }}</el-tab-pane>
  </el-tabs>
</template>

<script setup>

import { ref, reactive } from 'vue'
const categories = reactive(['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG', 'HHH', 'III'])
</script>