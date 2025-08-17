<template>
    <div class="common-layout">
        <el-container class="container">
            <el-header class="header">Header</el-header>
            <el-container>
                <el-aside class="aside asideOn">Aside</el-aside>
                <el-container>
                    <el-main class="main">Main</el-main>
                    <el-footer class="footer">Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Main from '../components/Main.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.container {
    background: yellow;
    min-height: 100vh;
    width: 100%;
    overflow: auto;
}

.aside {
    background-color: skyblue;
}

.asideOn{
    width: 10vw;
}

.asideOff{
    width: 0;
}

.header {
    background-color: red;
    width: 100%;
    min-height: 20px;
    top: 0;
}

.main {
    background: green;
    overflow: auto;
}

.footer {
    background-color: aquamarine;
    bottom: 0;
    width: 100%;
}
</style>