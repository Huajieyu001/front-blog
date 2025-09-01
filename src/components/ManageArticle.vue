<template>
    <el-dialog
        v-model="dialogVisible"
        class="custom-transition-dialog"
        :title="dialogTitle"
        width="30%"
        :transition="transitionConfig"
    >
        <div>
            确定要删除吗
        </div>
        <template #footer>
            <el-button @click="dialogVisible = false">
                取消
            </el-button>
            <el-button type="primary" @click="confirm()">
                确定
            </el-button>
        </template>
    </el-dialog>
    <div class="container common-layout">
        <el-container>
            <el-header class="head">
                    <el-pagination
                        :page-size="pageSize"
                        :pager-count="7"
                        layout="prev, pager, next, jumper, ->"
                        :total="article.total"
                        v-model:current-page="pageNum"
                        :background="back"
                        class="pageHelper left-distance"
                    />
                    <el-button type="primary" plain @click="addArticle" style="margin-top: 30px;">新增文章</el-button>
            </el-header>
            <el-main>
                <div>
                    <el-table :data="article.records" border stripe style="width: 100%" >
                        <el-table-column fixed prop="id" label="ID" width="120" />
                        <el-table-column prop="menuId" label="菜单id" width="120" />
                        <el-table-column prop="menuName" label="菜单名" width="120" show-overflow-tooltip/>
                        <el-table-column prop="title" label="标题" width="120" show-overflow-tooltip/>
                        <el-table-column prop="summary" label="摘要" width="120" show-overflow-tooltip/>
                        <el-table-column prop="content" label="内容" width="120" show-overflow-tooltip/>
                        <el-table-column prop="createBy" label="创建人" width="120" />
                        <el-table-column prop="createTime" label="创建时间" width="180" />
                        <el-table-column prop="updatedBy" label="更新人" width="120" />
                        <el-table-column prop="updateTime" label="更新时间" width="180" />
                        <el-table-column prop="isDeleted" label="是否删除" width="120" />
                        <el-table-column fixed="right" label="操作" min-width="120">
                        <template #default="scope">
                            <el-button link type="primary" size="small" @click="editArticle(scope.row.id)">编辑</el-button>
                            <el-button link type="primary" size="small" @click="openDialogWithObject(scope.row.id)">删除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted, ref, computed, watchEffect } from 'vue'
import { apiMenuList, apiMenuAdd, apiMenuUpdate, apiMenuDelete } from '../axios/menuAxios';
import { apiArticleAdd, apiArticleDelete, apiArticleList } from '../axios/articleAxios'
import type { DialogTransition, FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'

onMounted(()=>{
    initMenuList()
    initList(1, 10)
})

const checkName = (rule: any, value: string, callback: any)=>{
    if(!value){
        console.log('name = ', value)
        callback(new Error('请输入菜单名'))
    }
    callback()
}

const ruleForm = reactive({
    name: ''
})
const ruleFormRef = ref<FormInstance>()

const rules = reactive<FormRules<typeof ruleForm>>({
    name: [{validator: checkName, trigger: ['blur']}, {required: true, trigger: 'blur'}]
})

const dialogTitle = ref('警告')
const menuData = reactive([])
const launchBtnEnum = reactive(['Add', 'Edit', 'Delete'])
const launchBtn = ref('')
const editId = ref(null)
const pageNum = ref(1)
const pageSize = ref(10)
const back = ref(true)
const article = reactive({
    total: 0,
    records: []
})
const router = useRouter()

// dialog
const dialogVisible = ref(false)
const currentAnimation = ref('fade')
const isObjectConfig = ref(false)
const transitionConfig = computed<DialogTransition>(() => {
  if (isObjectConfig.value) {
    return {
      name: 'dialog-custom-object',
      appear: true,
      mode: 'out-in',
      duration: 500,
    }
  }
  return `dialog-${currentAnimation.value}`
})

const openDialogWithObject = (id) => {
    currentAnimation.value = 'object-config'
    isObjectConfig.value = true
    dialogVisible.value = true
    editId.value = id
}

const initMenuList = async ()=>{
    const resp = await apiMenuList()
    Object.assign(menuData, {...resp.data})
    processResponse(resp, true)
}

const initList = async (pageNum, pageSize)=>{
    const resp = await apiArticleList(null, pageNum, pageSize)
    Object.assign(article, {...resp.data.data})
    // 获取菜单名称
    article.records.forEach(e=>{
        let name = ''
        menuData.forEach(m=>{
            if(m.id == e.menuId){
                name = m.name
                return
            }
        })
        e.menuName = name
    })
    processResponse(resp, true)
}

const addArticle = ()=>{
    router.push({
        name: "Article",
    })
}

const editArticle = (id)=>{
    router.push({
        name: "Article",
        query: {
            id
        }
    })
}

const confirm = ()=>{
    useApiDeleteArticle(editId)
}

const useApiDeleteArticle = async ()=> {
    const resp = await apiArticleDelete(editId.value)
    processResponse(resp)
}

watchEffect(()=>{
    initList(pageNum.value, pageSize.value)
})

const processResponse = (resp, notRequiresRefresh)=> {
    if(resp.status == 401){
        router.push("/login")
        return
    }
    console.log("//////////////", resp.data)
    if (resp.data.code == 200){
        if(!notRequiresRefresh){
            location.reload()
        }
    } else {
        alert(resp.data.msg)
    }
}
</script>

<style scoped>
.container{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
}

.head{
    margin-bottom: 50px;
}
</style>