<template>
    <div class="article-item" @click="read()">
      <div v-if="article.featured" class="featured-indicator">精选文章</div>
      <div class="article-header">
        <div class="category-tag">{{ article.menuName }}</div>
        <div class="article-date">{{ article.createTime }}</div>
      </div>
      <h2 class="article-title">{{ article.title }}</h2>
      <p class="article-excerpt">{{ article.summary }}</p>
      <div class="divider"></div>
      <div class="article-footer">
        <div class="article-meta">
          <div class="meta-item">
            <i class="far fa-clock"></i>
            <span>{{ article.readTime }}</span>
          </div>
          <!-- <div class="meta-item">
            <i class="far fa-comment"></i>
            <span>{{ article.comments }}条评论</span>
          </div>
          <div class="meta-item">
            <i class="far fa-heart"></i>
            <span>{{ article.likes }}次点赞</span>
          </div> -->
        </div>
      </div>
    </div>
  </template>
  
<script setup>
import { defineProps, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router'

const props = defineProps({
    article: Object
})
const router = useRouter()

onMounted(()=>{
})

const read = ()=>{
    router.push({
         name: 'ArticleDetail',
         query:{
            id: props.article.id
         }
    })
}
</script>
  
<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    padding: 40px 20px;
    min-height: 100vh;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    overflow: hidden;
}

header {
    background: linear-gradient(135deg, #2c3e50 0%, #1a2530 100%);
    color: white;
    padding: 50px 40px;
    text-align: center;
}

h1 {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 15px;
    letter-spacing: -0.5px;
}

.subtitle {
    font-size: 1.2rem;
    color: #bdc3c7;
    max-width: 600px;
    margin: 0 auto;
}

.articles-list {
    padding: 30px;
}

.article-item {
    padding: 30px;
    border-bottom: 1px solid #eaeaea;
    transition: all 0.3s ease;
    position: relative;
}

.article-item:last-child {
    border-bottom: none;
}

.article-item:hover {
    /* background-color: #f9f9f9; */
    background-color: #fff;
    transform: translateX(10px);
}

.article-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.category-tag {
    background: #3498db;
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
}

.article-date {
    color: #95a5a6;
    font-size: 0.9rem;
}

.article-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: #000000a8;
    /* color: #7c9ab9; */
    margin-bottom: 15px;
    line-height: 1.3;
    transition: color 0.3s ease;
}

.article-item:hover .article-title {
    color: rgb(235, 158, 135);
}

.article-excerpt {
    color: #7f8c8d;
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 20px;
}

.article-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.article-meta {
    display: flex;
    gap: 20px;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #95a5a6;
    font-size: 0.9rem;
}

.read-more {
    color: #64aad8;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    transition: all 0.3s ease;
}

.read-more i {
    margin-left: 5px;
    transition: transform 0.3s ease;
}

.read-more:hover {
    color: #2980b9;
}

.read-more:hover i {
    transform: translateX(3px);
}

.divider {
    height: 1px;
    background: linear-gradient(to right, transparent, #e0e0e0, transparent);
    margin: 10px 0;
}

@media (max-width: 768px) {
    .container {
        border-radius: 0;
    }
    
    header {
        padding: 30px 20px;
    }
    
    h1 {
        font-size: 2.2rem;
    }
    
    .articles-list {
        padding: 15px;
    }
    
    .article-item {
        padding: 20px 15px;
    }
    
    .article-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    
    .article-title {
        font-size: 1.5rem;
    }
    
    .article-footer {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
    
    .article-meta {
        width: 100%;
        justify-content: space-between;
    }
}

.featured-indicator {
    position: absolute;
    top: 15px;
    right: 15px;
    background: #e74c3c;
    color: white;
    padding: 3px 10px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
}
</style>