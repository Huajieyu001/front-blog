<template>
    <div class="footer">
        <small class="text">Email: <span>huajieyu001@163.com</span></small>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <small class="text">我见青山多妩媚，料青山，见我应如是</small>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <!-- <br> -->
        <small class="text">Github: <span @click="to(1)">https://github.com/Huajieyu001</span></small>
        <br>
        <small class="text">Copyright ©2025 Huajieyu</small>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <!-- <br> -->
        <small @click="to(2)" class="beian">黔ICP备2023015906号-1</small>
    </div>
</template>

<script setup>

const to = (id)=>{
    if(id == 1){
        window.open("https://github.com/Huajieyu001")
    }
    else if( id == 2){
        window.open("https://beian.mps.gov.cn/#/query/webSearch")
    }
}
</script>

<style>
footer {
    text-align: center;
    padding: 20px;
    /* background: #FFFFFF; */
    color: gray;
    border-radius: 10px;
    margin-top: 10px;
}

.beian:hover{
    color: blue;
}


</style>
