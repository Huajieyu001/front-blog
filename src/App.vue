<!-- <template>
    <el-container class="container">
        <el-main class="main">
            <Header></Header>
        </el-main>
        <el-footer class="footer">
            <Footer></Footer>
        </el-footer>
    </el-container>
</template> -->

<!-- <template>
    <el-container>
        <el-aside class="aside">
            <Aside></Aside>
            <footer class="aside-footer">Footer</footer>
        </el-aside>
        <el-main class="main">Main</el-main>
    </el-container>
</template> -->

<template>
    <div class="container">
        <div class="layout">
            <aside class="aside">
                <Aside></Aside>
            </aside>
            <main class="main">Main</main>
        </div>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import Aside from './components/Aside.vue'
</script>

<style scoped>
/* .aside{
    height: 100vh;
    border-right: solid 2px;
    background-color: rgb(83, 41, 138);
    min-width: 0;
}*/
/* .container{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
} */
.layout{
    display: flex;
    background-color: greenyellow;
}
/* footer{
    background-color: aqua;
    position: relative  ;
    bottom: 0;
    max-width: 100vw;
    text-align: center;
    border-radius: 20%;
}  */
/* footer {
    text-align: center;
    padding: 20px;
    background: #2c3e50;
    color: white;
    border-radius: 10px;
    margin-top: 20px;
} */

.aside {
    flex: 0 0 260px;
    background: #fff;
    border-radius: 10px;
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
    background: #fff;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: transform 0.3s ease;
}
































/* .container {
    background: yellow;
    min-height: 100vh;
    width: 100vw;
    overflow: auto;
} */
/* 
.aside {
    background-color: skyblue;
} */
/*
.asideOn {
    width: 10vw;
}

.asideOff {
    width: 0;
} */
/* 
.header {
    background-color: red;
    width: 100%;
    min-height: 20px;
    top: 0;
} */

/* .main {
    background: green;
    overflow: auto;
} */

/* .footer {
    background-color: whitesmoke;
    bottom: 0;
    width: 100%;
} */
</style>