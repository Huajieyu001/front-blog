<template>
    <!-- <button @click="func">func</button> -->
    <!-- <component :is="currentLayout"> -->
        <!-- <router-view /> -->
    <!-- </component> -->
     <!-- <Home/> -->
     <!-- <Elem/> -->
    <router-view></router-view>
</template>

<script setup>
import Home from './views/Home.vue'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import FullScreen from './components/FullScreen.vue'

const route = useRoute()

const layoutComponents = {
    Home,
    FullScreen
}

const currentLayout = computed(()=>{
    let name = route.meta.layout
    console.log("route.meta.layout = " + route.meta.layout)
    return layoutComponents[name]
})

// func(()=>{
//     console.log(currentLayout)
// })

</script>

<style scoped>
.layout {
    display: flex;
    background-color: greenyellow;
    border-radius: 24px;
}

aside {
    flex: 0 0 400px;
    background: gray;
    border-radius: 40px;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.3s ease;
    margin-right: 20px;
}

main {
    flex: 1;
    background: #dbd1c8;
    border-radius: 40px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: transform 0.3s ease;
}

.router-link-active {
    font-weight: bold;
}

.router-link-exact-active {
    color: red;
    border: 0.5px solid red;
}

.routerLink {
    height: 20px;
    width: 40px;
    background-color: #a36363;
    font-size: x-large;
}
</style>