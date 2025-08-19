<template>
    <div class="markdown-body" v-html="data.content"></div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { parseMarkdown } from '../utils/markdownParser';
import DOMPurify from 'dompurify';
import { apiArticleGet } from '../axios/articleAxios'
import { useRoute } from 'vue-router';
import 'github-markdown-css';

const route = useRoute()
const data = reactive({
  title: '',
  summary: '',
  content: ''
})

const initArticle = async ()=>{
  const meta = await apiArticleGet(route.query.id)
  Object.assign(data, {...meta.data,})
  if(data.content){
    let parsedHtml = ref(parseMarkdown(data.content))
    data.content = ref(DOMPurify.sanitize(parsedHtml.value)).value
  }
}

onMounted(()=>{
  initArticle()
})

</script>

<style scoped>
.markdown-body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* 修改字体 */
  background-color: #f8f9fa; /* 修改背景 */
  color: #333; /* 修改文字颜色 */
  padding: 20px;
  border-radius: 8px;
}

/* 修改标题样式 */
.markdown-body h1 {
  color: #1a73e8;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.3em;
}

.markdown-body a:hover {
  text-decoration: underline;
}

/* 修改代码块背景和文字 */
.markdown-body pre {
  background-color: #efe7e7;
  color: #f8f8f6;
  padding: 16px;
  border-radius: 16px;
  overflow-x: auto;
}

/* 修改行内代码 */
.markdown-body code {
  background-color: #f0f0f0;
  color: #d63384;
  padding: 2px 4px;
  border-radius: 4px;
  font-family: monospace;
}

.markdown-body table {
background-color: #438ded;
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
}

.markdown-body :deep(hr){
  height: .1em !important;
  background: linear-gradient(to right, #ec6238, #dbc3b8, #4879d3, #3e947f, #60e74e, #a9aa56, #969092)
}
</style>