<template>
    <el-dialog
        v-model="dialogVisible"
        class="custom-transition-dialog"
        :title="dialogTitle"
        width="30%"
        :transition="transitionConfig"
    >
        <div v-if="launchBtn != launchBtnEnum[2]">
            <el-form
                ref="ruleFormRef"
                style="max-width: 600px"
                :model="ruleForm"
                status-icon
                :rules="rules"
                label-width="auto"
                class="demo-ruleForm"
            >
                <el-form-item label="菜单名" prop="name">
                    <el-input v-model="ruleForm.name" style="width: 240px;" placeholder="Please input"></el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input v-model="ruleForm.comment" style="width: 240px;" placeholder="Please input"></el-input>
                </el-form-item>
            </el-form>
            <!-- <el-input v-model="input" style="width: 240px" placeholder="Please input" /> -->
        </div>
        <div v-else>
            确定要删除吗
        </div>
        <template #footer>
            <el-button @click="dialogVisible = false">
                取消
            </el-button>
            <el-button type="primary" @click="confirm(ruleFormRef)">
                确定
            </el-button>
        </template>
    </el-dialog>
    <div class="container">
        <el-container>
            <el-header>
                <el-button type="primary" plain @click="openDialogWithObject(launchBtnEnum[0])">新增菜单</el-button>
                    <!-- <el-button plain @click="openDialog('fade')"> Default </el-button>
                    <el-button plain @click="openDialog('scale')"> Scale </el-button>
                    <el-button plain @click="openDialog('slide')"> Slide </el-button>
                    <el-button plain @click="openDialog('bounce')"> Bounce </el-button>
                    <el-button plain @click="openDialogWithObject"> Object Config </el-button> -->
            </el-header>
            <el-main>
                <div>
                    <el-table :data="menuData" border stripe style="width: 100%" >
                        <el-table-column fixed prop="id" label="ID" width="120" />
                        <el-table-column prop="name" label="菜单名" width="150" />
                        <el-table-column prop="comment" label="备注" width="120" />
                        <el-table-column prop="createBy" label="创建人" width="120" />
                        <el-table-column prop="createTime" label="创建时间" width="180" />
                        <el-table-column prop="updatedBy" label="更新人" width="120" />
                        <el-table-column prop="updateTime" label="更新时间" width="180" />
                        <el-table-column prop="isDeleted" label="是否删除" width="120" />
                        <el-table-column fixed="right" label="操作" min-width="120">
                        <template #default="scope">
                            <el-button link type="primary" size="small" @click="openDialogWithObject(launchBtnEnum[1], scope.row.id)">编辑</el-button>
                            <el-button link type="primary" size="small" @click="openDialogWithObject(launchBtnEnum[2], scope.row.id)">删除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted, ref, computed } from 'vue'
import { apiMenuList, apiMenuAdd, apiMenuUpdate, apiMenuDelete } from '../axios/menuAxios';
import type { DialogTransition, FormInstance, FormRules } from 'element-plus'

onMounted(()=>{
    init()
})

const checkName = (rule: any, value: string, callback: any)=>{
    if(!value){
        callback(new Error('请输入菜单名'))
    }
    callback()
}

const ruleForm = reactive({
    name: '',
    comment: ''
})
const ruleFormRef = ref<FormInstance>()

const rules = reactive<FormRules<typeof ruleForm>>({
    name: [{validator: checkName, trigger: ['blur']}, {required: true, trigger: 'blur'}],
})

const dialogTitle = ref('请输入菜单名')
const menuData = reactive([])
const launchBtnEnum = reactive(['Add', 'Edit', 'Delete'])
const launchBtn = ref('')
const editMenuId = ref(null)

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

const openDialog = (type: string) => {
  currentAnimation.value = type
  isObjectConfig.value = false
  dialogVisible.value = true
}

const openDialogWithObject = (btnName, id) => {
    currentAnimation.value = 'object-config'
    isObjectConfig.value = true
    dialogVisible.value = true
    launchBtn.value = btnName
    if(id){
        editMenuId.value = id
    }
    if(btnName == launchBtnEnum[2]){
        dialogTitle.value = '警告'
    } else {
        dialogTitle.value = '请输入菜单名'
    }
}

const init = async ()=>{
    const resp = await apiMenuList()
    Object.assign(menuData, {...resp.data.data})
    processResponse(resp, true)
}

const confirm = async (formEl: FormInstance | undefined)=>{
    if(launchBtn.value == launchBtnEnum[2]){
        useApiDeleteMenu()
        return
    }
    if(!formEl) return

    formEl.validate((valid)=>{
        if(valid){
            dialogVisible.value = false
            if(launchBtn.value == launchBtnEnum[0]){
                useApiAddMenu()
            } else if(launchBtn.value == launchBtnEnum[1]) {
                useApiUpdateMenu()
            } else {
                alert('发生一些异常')
            }
        }
    })
}

const useApiAddMenu = async ()=>{
    const resp =  await apiMenuAdd({...ruleForm})
    processResponse(resp)
}

const useApiUpdateMenu = async() => {
    const resp = await apiMenuUpdate({id: editMenuId.value, ...ruleForm})
    processResponse(resp)
}

const useApiDeleteMenu = async()=>{
    const resp = await apiMenuDelete({id: editMenuId.value})
    processResponse(resp)
}

const processResponse = (resp, notRequiresRefresh)=> {
    if(resp.status == 401){
        router.push("/login")
        return
    }
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
</style>