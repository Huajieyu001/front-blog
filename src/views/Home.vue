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
import Main from '../components/Main.vue'
import Footer from '../components/Footer.vue'
import Aside from '../components/Aside.vue'
import { useHomeStore } from '../store/homeStore'

const homeStore = useHomeStore()

</script>

<style scoped>
.layout{
    display: flex;
    background-color: greenyellow;
    border-radius: 24px;
}

aside {
    flex: 0 0 400px;
    background: gray;
    border-radius: 40px;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.3s ease;
    margin-right: 20px;
}
main {
    flex: 1;
    background: #dbd1c8;
    border-radius: 40px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: transform 0.3s ease;
}
</style>