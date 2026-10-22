<template>
  <div class="not-found">
    <h1>404</h1>
    <p>访问的页面不存在</p>
    <button @click="goHome">返回首页</button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goHome = ()=>{
  router.push({name:'home'})
}
</script>
<style scoped>
.not-found{
  text-align:center;
  margin-top:120px;
}
</style>
