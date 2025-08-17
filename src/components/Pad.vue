<template>
  <!-- 遮罩层 -->
  <div v-if="visible" class="pad-mask" @click.self="closePad">
    <!-- Pad 内容区域 -->
    <div class="pad-container">
      <div class="pad-header">
        <h3>{{ title }}</h3>
        <button @click="closePad" class="close-btn">×</button>
      </div>
      <div class="pad-content">
        <slot></slot> <!-- 内容插槽 -->
      </div>
      <div class="pad-footer">
        <slot name="footer"></slot> <!-- 底部按钮插槽 -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  visible: Boolean,      // 控制显示/隐藏
  title: {               // Pad标题
    type: String,
    default: ''
  },
  closeOnClickMask: {    // 点击遮罩是否关闭
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['update:visible', 'close']);

// 关闭Pad
const closePad = () => {
  if (props.closeOnClickMask) {
    emit('update:visible', false);
    emit('close');
  }
};

// 禁止背景滚动
const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

// 恢复背景滚动
const enableScroll = () => {
  document.body.style.overflow = '';
};

// 监听显示状态变化
onMounted(() => {
  if (props.visible) disableScroll();
});

onBeforeUnmount(() => {
  enableScroll();
});
</script>

<style scoped>
/* 遮罩层样式 */
.pad-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* 半透明黑色 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 确保在最上层 */
}

/* Pad容器 */
.pad-container {
  width: 80%;
  max-width: 600px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1001; /* 高于遮罩层 */
}

/* 头部样式 */
.pad-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #eee;
}

/* 内容区域 */
.pad-content {
  padding: 20px;
  max-height: 70vh;
  overflow-y: auto;
}

/* 底部区域 */
.pad-footer {
  padding: 16px;
  border-top: 1px solid #eee;
  text-align: right;
}

/* 关闭按钮 */
.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
}
</style>