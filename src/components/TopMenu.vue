<template>
  <!-- <nav class="top-menu">
    <ul class="menu-list">
      <li v-for="(item, index) in menuItems" :key="index" class="menu-item" :class="{ 'menuActive': item.label == currentLabel}">
        <div @click="toTopMenu(item)" class="menu-link">{{ item.label }}</div>
      </li>
    </ul>
  </nav> -->

  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

// 菜单项数据
// const menuItems = ref([
//   { label: '我的文章', link: '/' },
//   // { label: '博客推荐', link: '/blogRed' },
//   { label: '网站推荐', link: '/webRed' },
//   { label: '工具推荐', link: '/toolRed' },
//   { label: '其他', link: '/other' },
// ]);

const menuItems = ref([
  { label: '我的文章', link: '/' },
  // { label: '博客推荐', link: '/blogRed' },
  { label: '网站推荐', link: '/' },
  { label: '工具推荐', link: '/' },
  { label: '其他', link: '/' },
]);

const currentLabel = ref('我的文章')

const isSelected = (item)=>{
  console.log('item.label:', item.label, typeof item.label);
  console.log('currentLabel:', currentLabel, typeof currentLabel);
  console.log('是否相等:', item.label == currentLabel);
  return item.label == currentLabel
}

const toTopMenu = (item) => {
  currentLabel.value = item.label
  router.push({
    path: item.link
  })
}
</script>

<style scoped>
/* 菜单容器 - 占据整个顶部 */
.top-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  /* 稍大于菜单高度，留出空间 */
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

/* 水平菜单列表 */
.menu-list {
  display: flex;
  justify-content: space-around;
  /* 均匀分布 */
  list-style-type: none;
  /* 移除默认列表样式 */
  padding: 0;
  margin: 0;
  height: 100%;
}

/* 菜单项 - 均匀扩展 */
.menu-item {
  flex: 1;
  /* 关键：使所有项目均匀分布 */
  display: flex;
  align-items: center;
  /* 垂直居中 */
  justify-content: center;
  /* 水平居中 */
  height: 20px;
  margin: 15px 0;
  /* 与容器高度配合实现20px视觉效果 */
}

/* 菜单链接样式 */
.menu-link {
  /* background-color: transparent; */
  display: block;
  width: 100%;
  text-align: center;
  text-decoration: none;
  /* color: #333; */
  /* font-weight: 500; */
  font-size: large;
  padding: 3px 0;
  transition: all 0.3s ease;

  /* 确保文本不会换行 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 鼠标悬停效果 */
.menu-link:hover{
  color: #2c83f0;
  background-color: bisque;
}

.menuActive{
  color: rgb(207, 17, 17);
  font-weight: bold;
  background-color: skyblue;
}

/* 可选：当前激活状态 */
.menu-link.active {
  color: #2c83f0;
  border-bottom: 2px solid #2c83f0;
}

/* 响应式处理 - 屏幕过小时改为垂直菜单 */
/* @media (max-width: 768px) {
  .menu-list {
    flex-direction: column;
  }

  .menu-item {
    height: auto;
    padding: 8px 0;
  }
} */



















 
@media (max-width: 768px) {
  .top-menu{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 18px;
    /* 稍大于菜单高度，留出空间 */
    background: #ffffff;
    box-shadow: 0 0.5px 2px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  /* 水平菜单列表 */
  .menu-list {
    display: flex;
    justify-content: space-around;
    /* 均匀分布 */
    list-style-type: none;
    /* 移除默认列表样式 */
    padding: 0;
    margin: 0;
    height: 100%;
  }

  /* 菜单项 - 均匀扩展 */
  .menu-item {
    flex: 1;
    /* 关键：使所有项目均匀分布 */
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    height: 10px;
    /* margin: 3px 0; */
    /* 与容器高度配合实现20px视觉效果 */
  }

  /* 菜单链接样式 */
  .menu-link {
    /* background-color: transparent; */
    display: block;
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: #333;
    /* font-weight: 500; */
    font-size: xx-small;
    padding: 1px 0;
    transition: all 0.3s ease;

    /* 确保文本不会换行 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* 鼠标悬停效果 */
  /* .menu-link:hover {
    color: #2c83f0;
    background-color: bisque;
  } */

  /* 可选：当前激活状态 */
  /* .menu-link.active {
    color: #2c83f0;
    border-bottom: 2px solid #2c83f0;
  } */
}
</style>