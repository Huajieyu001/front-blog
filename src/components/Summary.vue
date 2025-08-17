<template>
    <div class="elem">
        <slot>this is a default slot</slot>
    </div>
</template>
<script setup>

</script>
<style>
    
.elem{
    background-color: rgb(126, 233, 201);
    border-radius: 5px;
    border: solid, 0.5px;
    margin-top: 24px;
    height: 48px;
}

.elem:hover{
    background: #61cad8;
    height: 80px;
    /* transform: translateY(-5px);  */
}
</style>