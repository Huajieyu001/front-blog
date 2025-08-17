<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
</script>
<style>
.btn{
    padding: 2px 10px;
    min-width: 20px;
    max-width: 50px;
    border: solid 0.5px;
    border-radius: 10px;
    background-color: aquamarine;
}
</style>