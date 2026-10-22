<template>
  <div style="padding:30px 40px">
    <h2>📄全部文章列表</h2>
    <p>这里记录我的Vue学习笔记、技术总结与经验分享</p>
    <div style="display:grid;grid-template-columns:repeat(auto‑fill,minmax(480px,1fr));gap:24px;margin-top:24px">
      <el-card v-for="article in articleList" :key="article.id" shadow="hover">
        <template #header>
          <div style="display:flex;justify‑content:space‑between;align‑items:center">
            <el-tag>{{ article.tag }}</el-tag>
            <span>👁阅读：{{ article.view }}</span>
          </div>
        </template>
        <h3>{{ article.title }}</h3>
        <p>📅发布时间：{{ article.date }}</p>
        <p>{{ article.summary }}</p>
        <router-link class="read-link" :to="{name:'ArticleDetail',params:{id:article.id}}">
          <el-button type="primary">点击阅读全文 →</el-button>
        </router-link>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const articleList = ref([
  {
    id: 'a1',
    title: 'Vue3入门学习',
    tag: '前端基础',
    date: '2026‑09‑01',
    view: 236,
    summary: '本文章记录Vue3基础语法学习，包括setup、响应式ref与reactive，选项式API与组合式API之间的区别，适合刚入门Vue的同学参考学习。'
  },
  {
    id: 'a2',
    title: 'VueRouter路由总结',
    tag: '路由技术',
    date: '2026‑09‑05',
    view: 189,
    summary: '讲解动态路由、嵌套路由、路由守卫、编程式导航的实际使用场景，同时分析路由元信息、登录权限控制在项目当中的实现思路。'
  },
  {
    id: 'a3',
    title: '学习技巧',
    tag: '经验分享',
    date: '2026‑09‑10',
    view: 97,
    summary: '分享计算机专业学习前端的高效学习路径，如何练习项目、调试bug，整理笔记，以及做课程大作业时的避坑经验。'
  },
  {
    id: 'a4',
    title: 'Pinia状态管理实践',
    tag: '状态管理',
    date: '2026‑09‑15',
    view: 142,
    summary: '对比Vuex，讲解Pinia的基础使用，如何拆分模块、实现数据持久化，在后台管理项目当中统一管理用户登录状态与全局数据。'
  }
])
</script>

<style scoped>
.read-link{
  text‑decoration:none;
}
</style>
