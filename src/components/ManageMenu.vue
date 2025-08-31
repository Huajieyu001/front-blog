<template>
    <el-dialog
        v-model="dialogVisible"
        class="custom-transition-dialog"
        :title="dialogTitle"
        width="30%"
        :transition="transitionConfig"
    >
        <div>
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
            </el-form>
            <!-- <el-input v-model="input" style="width: 240px" placeholder="Please input" /> -->
        </div>
        <template #footer>
            <el-button @click="dialogVisible = false">
                取消
            </el-button>
            <el-button type="primary" @click="addMenu(ruleFormRef)">
                确定
            </el-button>
        </template>
    </el-dialog>
    <div class="container">
        <el-container>
            <el-header>
                <el-button type="primary" plain @click="openDialogWithObject">新增菜单</el-button>
                    <!-- <el-button plain @click="openDialog('fade')"> Default </el-button>
                    <el-button plain @click="openDialog('scale')"> Scale </el-button>
                    <el-button plain @click="openDialog('slide')"> Slide </el-button>
                    <el-button plain @click="openDialog('bounce')"> Bounce </el-button>
                    <el-button plain @click="openDialogWithObject"> Object Config </el-button> -->
            </el-header>
            <el-main>
                <div>
                    <el-table :data="menuData" border style="width: 100%" >
                        <el-table-column fixed prop="id" label="id" width="120" />
                        <el-table-column prop="name" label="name" width="150" />
                        <el-table-column prop="comment" label="comment" width="120" />
                        <el-table-column prop="createBy" label="createBy" width="120" />
                        <el-table-column prop="createTime" label="createTime" width="180" />
                        <el-table-column prop="updatedBy" label="updatedBy" width="120" />
                        <el-table-column prop="updateTime" label="updateTime" width="180" />
                        <el-table-column prop="isDeleted" label="isDeleted" width="120" />
                        <el-table-column fixed="right" label="操作" min-width="120">
                        <template #default>
                            <el-button link type="primary" size="small">Edit</el-button>
                            <el-button link type="primary" size="small">Delete</el-button>
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
import { apiMenuList, apiMenuAdd } from '../axios/menuAxios';
import type { DialogTransition, FormInstance, FormRules } from 'element-plus'

onMounted(()=>{
    init()
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

const dialogTitle = ref('请输入菜单名')
const menuData = reactive([])

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

const openDialogWithObject = () => {
  currentAnimation.value = 'object-config'
  isObjectConfig.value = true
  dialogVisible.value = true
}

const init = async ()=>{
    const data = await apiMenuList()
    Object.assign(menuData, {...data})
}

const addMenu = async (formEl: FormInstance | undefined)=>{
    if(!formEl) return

    formEl.validate((valid)=>{
        if(valid){
            dialogVisible.value = false
            useApiAddMenu()
        }
    })
}

const useApiAddMenu = async ()=>{
    const resp =  await apiMenuAdd({name: ruleForm.name})
    if (resp.code == 200){
        location.reload()
    } else {
        alert(resp.msg)
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