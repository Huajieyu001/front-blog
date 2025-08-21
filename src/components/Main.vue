<template>
    <Operation></Operation>
    <Summary v-if="article.records && article.records.length > 0"
            v-for="item in article.records" 
            :key="item"
            @click="readArticle(item.id)">
        <template v-slot:title>
            <div class="article-list-title">标题：{{ item.title }}</div>
        </template>
        <template v-slot:summary>
            摘要：{{ item.summary }}
        </template>
    </Summary>
    <div class="alert">共有{{ article.records.length }}条记录</div>
    <el-pagination
    :page-size="pageSize"
    :pager-count="7"
    layout="prev, pager, next, jumper, ->"
    :total="article.total"
    v-model:current-page="pageNum"
    :background="back"
    class="pageHelper"
  />
</template>

<script setup>
import { ref, onMounted, reactive, watchEffect } from 'vue';
import Content from './Content.vue'
import Summary from './Summary.vue'
import Pager from './Pager.vue';
import { apiArticleList } from '../axios/articleAxios'
import { useRouter } from 'vue-router';
import { useMenuStore } from '../store/menuStore';

const pageNum = ref(1)
const pageSize = ref(10)
const back = ref(true)
const menuStore = useMenuStore()



const router = useRouter()
const articleItemList = reactive([])

const article = reactive({
    total: 0,
    records: []
})

onMounted(()=>{
    initList(1, 10)
})

const initList = async(pageNum, pageSize)=>{
    console.log('pageNum', pageNum)
    console.log('pageSize', pageSize)
    const data = await apiArticleList(menuStore.currentMenuId, pageNum, pageSize)
    console.log("@@@@", data)
    Object.assign(article, {...data})
}

const readArticle = (id)=>{
    router.push({
        name: 'ArticleDetail',
        query: {
            id: id
        }
    })
}

watchEffect(()=>{
    initList(pageNum.value, pageSize.value)
})

</script>

<style scoped>
.article-list-title{
    font-weight: 800;
}

.alert{
    margin-top: 100px;
    font-size: large;
}
</style>