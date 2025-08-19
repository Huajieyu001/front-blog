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
    background-color: rgb(126, 233, 201);
    border-radius: 5px;
    border: solid, 0.5px;
    margin-top: 24px;
    min-height: 40px;
}

.elem:hover{
    background: #61cad8;
    transform: translateX(10px); 
    transform: translateY(10px); 
}
</style>