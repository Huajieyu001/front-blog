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
    <div class="title">Title<br></br>
        <input type="text" placeholder="请输入标题" class="title" v-model="articleStore.title"/>
    </div>
    <div class="summary">Summary<br></br>
        <input type="textarea" placeholder="请输入摘要" class="summary" v-model="articleStore.summary"/>
    </div>
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

const articleStore = useArticleStore()
const showPad = ref(false)
const message = ref('')

function publish(){
    message.value = '确定要提交吗'
    showPad.value = true
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
      content.value = value
      articleStore.article = value
    },
    after() {
      // 初始化内容
      editor.value.setValue(articleStore.article)
    }
  })
})

</script>
<style>
.title{
    font-size: xx-large;
}
.summary{
    font-size: large;
}

</style>