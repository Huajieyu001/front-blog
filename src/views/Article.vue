<template>
    <Pad v-model:visible="showPad" @close="handlePadClose" :title="'INFO'" :closeOnClickMask="false">
        <span>{{ message }}</span>
        <template v-slot:footer>
            <el-button @click="confirm">OK</el-button>
        </template>
    </Pad>
    <el-button-group>
        <el-button @click="publish">Publish</el-button>
        <el-button @click="save">Save as Draft</el-button>
        <el-button @click="clear">Clear</el-button>
    </el-button-group>
    <hr></hr>
    <SelectMenu></SelectMenu>
    <div style="margin-top: 10px;">
        <div style="font-weight: bold;">标题</div>
        <el-input
            v-model="articleStore.title"
            style="width: 60vw"
            :rows="2"
            type="textarea"
            placeholder="请输入标题"
            autosize
            maxlength="50"
            show-word-limit="true"
            input-style="font-size:large; font-weight:bold;"
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
import { ref, onMounted } from 'vue';
import Vditor from 'vditor';
import 'vditor/dist/index.css'
import { useArticleStore } from '../store/articleStore';
import Pad from '../components/Pad.vue';
import SelectMenu from '../components/SelectMenu.vue';
import { apiArticleAdd } from '../axios/articleAxios';
import { useMenuStore } from '../store/menuStore';

const articleStore = useArticleStore()
const showPad = ref(false)
const message = ref('')
const menuStore = useMenuStore()

function publish(){
    apiArticleAdd(articleStore)
    articleStore.$reset()
    // location.reload();
}

function save(){
    message.value = '确定要保存到草稿吗'
    showPad.value = true
}

function clear(){
    message.value = '确定要清除吗'
    showPad.value = true
    articleStore.$reset()
}

function confirm(){

}

const handlePadClose = (result)=>{
    if(result){
        console.log('Ok')
        return
    }
    console.log('NGNGNGN')
}

function cancel(){
    console.log("sldkhjfsnvdv")
}

const editor = ref(null)
const content = ref('')
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