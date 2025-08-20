<template>
    <div class="container">
        <div class="layout">
            <el-splitter>
                <el-splitter-panel :size="200" :max="200" :min="10">
                    <aside>
                        <Aside></Aside>
                    </aside>
                </el-splitter-panel>
                <el-splitter-panel>
                    <main class="app-main">
                        <Main></Main>
                    </main>
                    <footer>
                        <Footer></Footer>
                    </footer>
                </el-splitter-panel>
            </el-splitter>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import Main from '../components/Main.vue'
import Footer from '../components/Footer.vue'
import Aside from '../components/Aside.vue'
import { useHomeStore } from '../store/homeStore'
import { useMenuStore } from '../store/menuStore'
import { getMenus } from '../axios/menuAxios'

const homeStore = useHomeStore()
const menuStore = useMenuStore()

const initMenu = async ()=>{
    const data = await getMenus()
    menuStore.menus = data
    console.log("@@@@@@@", data)
    menuStore.currentMenuId = data[0].id
}

onMounted(()=>{
    initMenu()
})
</script>

<style scoped>
.layout{
    display: flex;
    background-color: #fef9f4;
    /* border-radius: 24px;  */
    border: solid 0.5px skyblue;
}

aside {
    flex: 0 0 400px;
    background: gray;
    /* border-radius: 40px; */
    /* padding: 20px; */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.3s ease;
    height: 100%;
    /* margin-right: 20px; */
}
main {
    flex: 1;
    background: #fef9f4;
    padding: 30px;
    /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08); */
    /* border-top-right-radius: 24px; */
    overflow: hidden;
    transition: transform 0.3s ease;
}
</style>