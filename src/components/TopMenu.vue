<template>
  <!-- 菜单容器 -->
  <nav class="top-menu">
    <!-- 使用 ul 和 li 创建菜单项 -->
    <ul class="menu-list">
      <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
        <a :href="item.link" class="menu-link">{{ item.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

// 菜单项数据
const menuItems = ref([
  { label: '首页', link: '/' },
  { label: '博客推荐', link: '/products' },
  { label: '网站推荐', link: '/cases' },
  { label: '工具推荐', link: '/about' },
  { label: '开发问题合集', link: '/about' },
  { label: '其他', link: '/contact' },
]);
</script>

<style scoped>
/* 菜单容器 - 占据整个顶部 */
.top-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px; /* 稍大于菜单高度，留出空间 */
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

/* 水平菜单列表 */
.menu-list {
  display: flex;
  justify-content: space-around; /* 均匀分布 */
  list-style-type: none; /* 移除默认列表样式 */
  padding: 0;
  margin: 0;
  height: 100%;
}

/* 菜单项 - 均匀扩展 */
.menu-item {
  flex: 1; /* 关键：使所有项目均匀分布 */
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  height: 20px;
  margin: 15px 0; /* 与容器高度配合实现20px视觉效果 */
}

/* 菜单链接样式 */
.menu-link {
  display: block;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 14px;
  padding: 3px 0;
  transition: all 0.3s ease;
  
  /* 确保文本不会换行 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 鼠标悬停效果 */
.menu-link:hover {
  color: #2c83f0;
}

/* 可选：当前激活状态 */
.menu-link.active {
  color: #2c83f0;
  border-bottom: 2px solid #2c83f0;
}

/* 响应式处理 - 屏幕过小时改为垂直菜单 */
@media (max-width: 768px) {
  .menu-list {
    flex-direction: column;
  }
  
  .menu-item {
    height: auto;
    padding: 8px 0;
  }
}
</style>