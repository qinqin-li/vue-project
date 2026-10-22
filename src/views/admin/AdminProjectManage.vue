<template>
  <div>
    <h2>项目管理后台</h2>
    <p>在这里维护项目信息，新增/修改项目（演示页面）</p>
    <ul>
      <li>智慧仓库存储系统 <button>编辑</button></li>
      <li>大学生积分管理系统 <button>编辑</button></li>
    </ul>
    <button @click="goProject">跳转项目展示页</button>
  </div>
</template>
<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
const goProject = ()=>{
  router.push({name:"project"})
}
</script>
