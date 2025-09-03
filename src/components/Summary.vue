<template>
    <div class="article-item">
        <slot name="title" class="">This is default title</slot>
        <slot name="summary">This is default summary</slot>
    </div>
</template>
<script setup>

</script>
<style scoped>


.article-item {
    padding: 30px;
    border-bottom: 1px solid #eaeaea;
    transition: all 0.3s ease;
    position: relative;
}

.article-item:last-child {
    border-bottom: none;
}

.article-item:hover {
    background-color: #f9f9f9;
    transform: translateX(10px);
}


.article-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

</style>