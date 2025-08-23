<template>
    <div>
        <el-button plain @click="openDialog('bounce')"> 发布 </el-button>
    </div>
    <el-dialog
        v-model="dialogVisible"
        class="custom-transition-dialog"
        :title="dialogTitle"
        width="30%"
        :transition="transitionConfig"
    >
        <div>
            <p>
                {{ currentMsg }}
            </p>
        </div>
        <template #footer v-if="currentMsg == buttonDetail.publish.msg">
            <el-button @click="dialogVisible = false">
                取消
            </el-button>
            <el-button type="primary" @click="publish">
                确定
            </el-button>
        </template>
    </el-dialog>
    <div style="margin-top: 10px;">
        <div style="font-weight: bold;">分类<strong>*</strong></div>
        <SelectMenu ref="selectMenu"></SelectMenu>
    </div>
    <div style="margin-top: 10px;">
        <div style="font-weight: bold;">标题<strong>*</strong></div>
        <el-input ref="inputTitle"
            v-model="articleStore.title"
            style="width: 60vw"
            :rows="2"
            type="textarea"
            placeholder="请输入标题"
            autosize
            maxlength="50"
            show-word-limit="true"
            input-style="font-size:large; font-weight:bold;"
            :autofocus="true"
        />
    </div>
    <div  style="margin-top: 10px;">
        <div style="font-weight: bold;">概述</div>
        <el-input
            v-model="articleStore.summary"
            style="width: 60vw"
            :rows="2"
            type="textarea"
            placeholder="请输入概述"
            autosize
            maxlength="200"
            show-word-limit="true"
        />
    </div>
    <br></br>
    <br></br>
    <div class="editor-container">
        <div id="vditor" class="vditor-wrapper">
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, computed, watchEffect, reactive } from 'vue';
import Vditor from 'vditor';
import 'vditor/dist/index.css'
import { useArticleStore, clearArticleStore } from '../store/articleStore';
import Pad from '../components/Pad.vue';
import SelectMenu from '../components/SelectMenu.vue';
import { apiArticleAdd } from '../axios/articleAxios';
import { useMenuStore } from '../store/menuStore';
import { useRouter } from 'vue-router'

const dialogVisible = ref(false)
const currentAnimation = ref('bounce')
const isObjectConfig = ref(false)
const router = useRouter()
const selectMenu = ref(null)
const inputTitle = ref(null)
const currentMsg = ref(null)
const dialogTitle = ref(null)

const buttonDetail = reactive({
    publish: {
        msg: '确定要发布吗？',
        button: ['取消','确定'],
        title: 'INFO'
    },
    alertMenu: {
        msg: '请选择分类',
        button: ['确定'],
        title: 'WARNING'

    },
    alertTitle: {
        msg: '请输入标题',
        button: ['确定'],
        title: 'WARNING'
    }
})

const transitionConfig = computed(() => {
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

const check = ()=>{
    if(articleStore && articleStore.title && articleStore.menuId){
        currentMsg.value = buttonDetail.publish.msg
        dialogTitle.value = buttonDetail.publish.title
    }
    if(!articleStore.menuId){
        currentMsg.value = buttonDetail.alertMenu.msg
        dialogTitle.value = buttonDetail.alertMenu.title
        return
    }
    if(!articleStore.title){
        currentMsg.value = buttonDetail.alertTitle.msg
        dialogTitle.value = buttonDetail.alertTitle.title
        return
    }
}

const openDialog = (type) => {
    check()
  currentAnimation.value = type
  isObjectConfig.value = false
  dialogVisible.value = true
}
const articleStore = useArticleStore()

function publish(){
    apiArticleAdd(articleStore)
    // 提交完成后，把编辑页的信息清空
    clearArticleStore()
    dialogVisible.value = false
    router.push({
        path: '/publish'
    })
}

const editor = ref(null)
onMounted(() => {
  editor.value = new Vditor('vditor', {
    cdn: `${location.origin}${import.meta.env.BASE_URL}vditor`,
    height: 'calc(100vh - 60px)',
    mode: 'ir', // 即时渲染模式(Instant Rendering)
    toolbar: [
      'emoji',
      'headings',
      'bold',
      'italic',
      'strike',
      'link',
      '|',
      'list',
      'ordered-list',
      'check',
      'outdent',
      'indent',
      '|',
      'quote',
      'line',
      'code',
      'inline-code',
      'insert-before',
      'insert-after',
      '|',
      'upload',
      'table',
      '|',
      'undo',
      'redo',
      '|',
      'fullscreen',
      'both',
      'preview',
      'format'
    ],
    placeholder: '',
    counter: {
      enable: true,
      type: 'markdown'
    },
    cache: {
      enable: false // 禁用本地缓存，您可以用自己的方式保存
    },
    input(value) {
      articleStore.content = value
    },
    after() {
      // 初始化内容
      editor.value.setValue(articleStore.content)
    }
  })
})

</script>
<style>
.title{
    font-size:large;
}
/* .summary{
    font-size: large;
} */

</style>