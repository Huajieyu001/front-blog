<template>
      <!-- <el-upload
    v-model:file-list="fileList"
    class="upload-demo"
    :action="ossStore.host"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :limit="3"
    :on-exceed="handleExceed"
    :on-change="handleChange"
  >

    <el-button type="primary">Click to upload</el-button>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
  </el-upload> -->
  <form>
      <div class="mb-3">
        <label for="file" class="form-label">选择文件</label>
        <input type="file" class="form-control" id="file" name="file" required @change="uploadToOss">
      </div>
    </form>
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
<script setup lang="ts">
import { ref, onMounted, computed, watchEffect, reactive } from 'vue';
import Vditor from 'vditor';
import 'vditor/dist/index.css'
import { useArticleStore, clearArticleStore } from '../store/articleStore';
import SelectMenu from '../components/SelectMenu.vue';
import { apiArticleAdd } from '../axios/articleAxios';
import { useRouter, useRoute } from 'vue-router'
import { apiArticleGet, apiArticleUpdate } from '../axios/articleAxios'
import { useMenuStore } from '../store/menuStore';
import { useOssStore, initOssStore, clearOssStore } from '../store/ossStore';
import cuid from 'cuid'

const dialogVisible = ref(false)
const currentAnimation = ref('bounce')
const isObjectConfig = ref(false)
const router = useRouter()
const route = useRoute()
const selectMenu = ref(null)
const inputTitle = ref(null)
const currentMsg = ref(null)
const dialogTitle = ref(null)
const editId = ref(null)
const menuStore = useMenuStore()
const ossStore = useOssStore()
const visitPrefix = ref('https://huajieyu.oss-cn-hangzhou.aliyuncs.com/')
const visitAbsolutePath = ref('')

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
    if(editId.value){
        apiArticleUpdate(articleStore)
    } else {
        apiArticleAdd(articleStore)
    }
    // 提交完成后，把编辑页的信息清空
    clearArticleStore()
    dialogVisible.value = false
    router.push({
        path: '/'
    })
}

watchEffect(()=>{
    articleStore.menuId = menuStore.currentMenuId
})

const editor = ref(null)
onMounted(() => {
    editId.value = route.query.id
    if(editId.value){
        initArticle(editId.value)
    } else {
        clearArticleStore()
    }

    // 初始化上传文件接口
    if(!ossStore.isActive){
        initOssStore()
    }

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
    },
    upload: {
        accept: 'image/*',
        multiple: true,
        handler: (files) => {
            if (!files || files.length === 0) {
                return;
            }

            uploadToOss(files)
        }
    }
  })
})

const initArticle = async (id)=>{
  const resp = await apiArticleGet(id)
  Object.assign(articleStore, {...resp.data.data})
  processResponse(resp, true)
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

const uploadToOss = (files)=>{
    let file = files[0]
    const form = new FormData()
    const ext = file.name.split('.').pop();
    let objectName = ossStore.formData.key +  `${cuid()}.${ext}`
    form.append('name',file.name);
    form.append('policy', ossStore.formData.policy);
    form.append('OSSAccessKeyId', ossStore.formData.OSSAccessKeyId);
    form.append('success_action_status', '200');
    form.append('signature', ossStore.formData.signature);
    form.append('key', objectName);
    form.append('file', file);
    fetch(ossStore.host, {method: 'POST', body: form }).then(res=>{
        console.log("文件已上传")
    }).catch(err=>{
        console.log("Err", err)
    })

    let result = '![](' + visitPrefix.value + objectName + ')'

    console.log('返回结果', result)

    setTimeout(()=>{
        editor.value.insertValue(result);
    }, 500)
    
    return result
}

function getTimeFromCuid(cuid) {
  // 1. 提取时间戳部分：通常是第二个块，在第一个 '-' 之后（如果有的话）或固定位置。
  // 但请注意，CUID2 格式可能略有不同。这里以经典 cuid 为例。
  // 假设 cuid 格式为: cxxxxxxxxyyyyyyzzzzzzzzzz
  // 我们取前缀 'c' 之后的 8 个字符（经典 cuid 时间戳长度）
  const base36TimeStamp = cuid.substring(1, 9);

  // 2. 将 Base36 字符串解析为整数（毫秒数）
  const milliseconds = parseInt(base36TimeStamp, 36);

  // 3. 创建一个 Date 对象
  const generationDate = new Date(milliseconds);

  return generationDate;
}

</script>
<style>
.title{
    font-size:large;
}
/* .summary{
    font-size: large;
} */

</style>