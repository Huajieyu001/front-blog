<template>
    <!-- <TopMenu></TopMenu> -->
    <div class="container">
        <div class="layout">
            <el-splitter>
                <el-splitter-panel class="aside-panel" :size="150" :max="150">
                    <aside class="left-chunk">
                        <Aside></Aside>
                    </aside>
                </el-splitter-panel>
                <el-splitter-panel>
                    <div class="right-chunk">
                        <main class="app-main">
                            <Main></Main>
                        </main>
                        <div class="blog-foot">
                            <Footer></Footer>
                        </div>
                    </div>
                </el-splitter-panel>
            </el-splitter>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.layout{
    display: flex;
    background-color: #fef9f4;
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
    height: 98vh;
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

.left-chunk{
    height: 100%;
}

.right-chunk{
    width: 100%;
    height: 100%;
    /* justify-content: center;
    align-items: center; */
    /* position: relative; */
    display: flex;            /* 关键：使用 flex 布局 */
    flex-direction: column;   /* 关键：垂直方向排列 */
    justify-content: space-between; /* 关键：内容在两端分布 */
}

.blog-foot{
    text-align: center;
}
</style>