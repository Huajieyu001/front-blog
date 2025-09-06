<template>
  <router-link :to="'/'" class="go-home">返回首页</router-link>
  <div>
    <div class="article-title">
      {{ data.title }}
    </div>
    <p class="summary">
      {{ data.summary }}
    </p>
  </div>
  <div class="markdown-content" v-html="parsedContent"></div>
  <div style="margin-top: 20px; margin-bottom: 50px">
    本文章<span v-if="data.createBy">由&nbsp;{{ data.createBy }}&nbsp;</span>发布于&nbsp;{{ data.createTime }}
    <div v-if="data.updateTime">最后更新于&nbsp;{{ data.updateTime }}</div>
  </div>
  <el-backtop :right="100" :bottom="100" />
  <Footer class="footer"></Footer>
</template>

<script setup>
import { ref, onMounted, reactive, watchEffect, nextTick } from 'vue';
import { parseMarkdown } from '../utils/markdownParser';
import { apiArticleGet } from '../axios/articleAxios'
import { useRoute } from 'vue-router';
import 'github-markdown-css';
import { addLineNumbers } from '../utils/lineNumberUtils';

const route = useRoute()
const data = reactive({
  title: '',
  summary: '',
  content: '',
  createBy: '',
  createTime: '',
  updateBy: '',
  updateTime: ''
})
const parsedContent = ref()

const initArticle = async () => {
  const resp = await apiArticleGet(route.query.id)
  Object.assign(data, { ...resp.data.data })
  nextTick(() => {
    addLineNumbers('pre code')
  });
}

onMounted(() => {
  initArticle()

})

watchEffect(() => {
  parsedContent.value = parseMarkdown(data.content || '');
})
</script>

<style scoped>
.article-title {
  font-size: 40px;
  font-weight: 600;
}

.summary {
  font-size: x-large;
  color: #00000076;
  background-color: #ebeeef;
  margin-top: 30px;
  padding: 12px;
  /* border-radius: 5px; */
  border: solid 0.3px;
}


.go-home {
  font-size: xx-large;
  color: #64aad8;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
}

.go-home {
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.go-home:hover {
  color: #2980b9;
}

.go-home:hover i {
  transform: translateX(3px);
}

.markdown-content {
  padding: 16px;
  border: solid 0.3px #00000076;
}

/* 确保代码块有基础样式 */
.markdown-content :deep(pre) {
  /* padding: 16px; */
  overflow: auto;
  /* background: #f6f8fa; */
  border-radius: 5px;
  /* border-left: 3px solid #3a7bd5; */
  margin: 1rem 0;
}


.markdown-container {
  padding: 1em;
  font-family: 'Arial', sans-serif;
}

/* 代码块基础样式（与主题匹配） */
.markdown-container pre {
  margin: 1.5em 0;
  padding: 1em;
  border-radius: 8px;
  background-color: #1e1e1e;
  /* 与agate主题的背景一致 */
  overflow: auto;
  /* 水平滚动 */
}

.footer {
  text-align: center;
}
</style>