<template>
    <!-- <Operation></Operation> -->
     <div style="margin: 20px;">
        筛选 &nbsp;<SelectMenu></SelectMenu>
     </div>
    <!-- <Summary v-if="article.records && article.records.length > 0"
            v-for="item in article.records" 
            :key="item"
            @click="readArticle(item.id)">
        <template v-slot:title>
            <div class="article-list-title">标题：{{ item.title }}</div>
        </template>
        <template v-slot:summary>
            概述：{{ item.summary }}
        </template>
    </Summary> -->
    <ArticleTab v-for="item in article.records" :article="item" :key="item.id"></ArticleTab>
    <div class="record left-distance">共有{{ article.total }}条记录</div>
    <el-pagination
        :page-size="pageSize"
        :pager-count="7"
        layout="prev, pager, next, jumper, ->"
        :total="article.total"
        v-model:current-page="pageNum"
        :background="back"
        class="pageHelper left-distance"
    /> 
</template>

<script setup>
import { ref, onMounted, reactive, watchEffect } from 'vue';
import Summary from './Summary.vue'
import { apiArticleList } from '../axios/articleAxios'
import { useRouter } from 'vue-router';
import { useMenuStore } from '../store/menuStore';
import SelectMenu from './SelectMenu.vue';
import ArticleTab from './ArticleTab.vue';

const pageNum = ref(1)
const pageSize = ref(10)
const back = ref(true)
const menuStore = useMenuStore()

const router = useRouter()

const article = reactive({
    total: 0,
    records: []
})

onMounted(()=>{
    initList(1, 10)
})

const initList = async(pageNum, pageSize, menuId)=>{
    const resp = await apiArticleList(menuId, pageNum, pageSize)
    Object.assign(article, {...resp.data.data})
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
    initList(pageNum.value, pageSize.value, menuStore.currentMenuId)
})

</script>

<style scoped>
.article-list-title{
    font-weight: 800;
}

.record{
    margin-top: 50px;
    font-size: large;
}

.left-distance{
    margin-left: 20px;
}
</style>