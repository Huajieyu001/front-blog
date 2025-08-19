<template>
    <Summary v-if="articleItemList.data && articleItemList.data.length > 0"
            v-for="item in articleItemList.data" 
            :key="item"
            @click="readArticle(item.id)">
        <template v-slot:title>
            <div class="article-list-title">标题：{{ item.title }}</div>
        </template>
        <template v-slot:summary>
            摘要：{{ item.summary }}
        </template>
    </Summary>
    <Pager></Pager>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import Content from './Content.vue'
import Summary from './Summary.vue'
import Pager from './Pager.vue';
import { apiArticleList } from '../axios/articleAxios'
import { useRouter } from 'vue-router';

const router = useRouter()
const articleItemList = reactive({
    data:[]
})

const initList = async()=>{
    const data = await apiArticleList(1, 10)
    console.log("@@@@", data.data.list)
    articleItemList.data = data.data.list
}
onMounted(()=>{
    const data = initList()
    console.log(data)
})
const readArticle = (id)=>{
    router.push({
        name: 'ArticleDetail',
        query: {
            id: id
        }
    })
}

</script>

<style scoped>
.article-list-title{
    font-weight: 800;
}
</style>