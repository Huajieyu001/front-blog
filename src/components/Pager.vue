<template>
  <el-pagination
    :page-size="10"
    :pager-count="7"
    layout="prev, pager, next, jumper, ->"
    :total="1000"
    background="true"
    class="pageHelper"
  />
</template>

<script setup>
</script>

<style>

.pageHelper{
    margin-top: 50px;
    background-color: rgb(32, 156, 197, 0.5);
    align-content: center;

    width: 20%;
    /* margin-left: 40%; */
    margin-right: 40%;
}

</style>