<template>
    <div class="elem">
        <slot name="title">This is default title</slot>
        <slot name="summary">This is default summary</slot>
    </div>
</template>
<script setup>

</script>
<style scoped>
    
.elem{
    padding: 10px;
    background:#FFFFFF;
    /* border-radius: 5px; */
    border: solid, 0.5px skyblue;
    margin-bottom: 28px;
    min-height: 40px;
}

.elem:hover{
    background:#dddc9b;
    transform: translateX(-5px);
    color: #2796e0
}
</style>