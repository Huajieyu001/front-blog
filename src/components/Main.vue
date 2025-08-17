<template>
    <Summary v-for="item in data" :key="item">{{ item }}</Summary>
    <Pager></Pager>
</template>

<script setup>
import { reactive } from 'vue';
import Content from './Content.vue'
import Summary from './Summary.vue'
import Pager from './Pager.vue';

const data = reactive([
    {name: "sdfgdfbvjhgsdv"},
    {name: "dfghbd"},
    {name: "sabfgnfn"},
    {name: "dhnfnf"},
    {name: "sdagdbf"},
    {name: "dsnfnfhdgdfg"},
    {name: "sdfgdfbvjhgsdv"},
    {name: "dfghbd"},
    {name: "sabfgnfn"},
    {name: "dhnfnf"},
    {name: "sdagdbf"},
    {name: "dsnfnfhdgdfg"},
    {name: "sdfgdfbvjhgsdv"},
    {name: "dfghbd"},
    {name: "sabfgnfn"},
    {name: "dhnfnf"},
    {name: "sdagdbf"},
    {name: "dsnfnfhdgdfg"},
])





</script>

<style>

</style>