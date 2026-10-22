<template>
  <div style="padding:40px">
    <el-card shadow="hover" style="max-width:850px;margin:0 auto">
      <div v-if="currentArticle">
        <el-tag>{{ currentArticle.tag }}</el-tag>
        <h1>{{ currentArticle.title }}</h1>
        <p>📅发布时间：{{ currentArticle.date }} &nbsp;&nbsp; 👁阅读量：{{ currentArticle.view }}</p>
        <el-divider></el-divider>
        <div style="line-height:2;font-size:17px;white-space:pre‑line">
          {{ currentArticle.fullContent }}
        </div>
        <el-divider></el-divider>
        <el-button type="primary" @click="goBack">← 返回文章列表</el-button>
      </div>
      <div v-else>文章加载中……</div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const goBack = ()=>{
  if(window.history.length>1){
    router.back()
  }else{
    router.push({name:'ArticleList'})
  }
}

const currentArticle = ref(null)
const allArticles = [
  {
    id: 'a1',
    title: 'Vue3入门学习',
    tag: '前端基础',
    date: '2026‑09‑01',
    view: 236,
    summary: '本文章记录Vue3基础语法学习，包括setup、响应式ref与reactive，选项式API与组合式API之间的区别，适合刚入门Vue的同学参考学习。',
    fullContent: `Vue3是目前主流前端框架，组合式API是重点。
1.setup是组合式API入口，在组件创建前执行。
2.ref用于简单类型响应式数据，reactive处理对象数组。
3.选项式API：data、methods，适合简单项目；组合式API更利于代码复用。
4.生命周期钩子onMounted、onUpdated、onUnmounted对应页面挂载、更新、销毁。
学习Vue时建议多写小demo，观察页面数据变化，加深理解响应式原理。`
  },
  {
    id: 'a2',
    title: 'VueRouter路由总结',
    tag: '路由技术',
    date: '2026‑09‑05',
    view: 189,
    summary: '讲解动态路由、嵌套路由、路由守卫、编程式导航的实际使用场景，同时分析路由元信息、登录权限控制在项目当中的实现思路。',
    fullContent: `Vue Router实现页面之间跳转，不用刷新浏览器。
1.动态路由 path:"/article/:id"，使用params获取参数，实现文章详情。
2.嵌套路由：children配置，配合RouterView完成后台子页面渲染。
3.路由守卫beforeEach，用来做登录权限拦截，未登录阻止访问后台。
4.编程式导航：$router.push 代码跳转；RouterLink标签跳转。
5.meta元信息，可以给路由标记是否需要登录、页面标题等信息。`
  },
  {
    id: 'a3',
    title: '学习技巧',
    tag: '经验分享',
    date: '2026‑09‑10',
    view: 97,
    summary: '分享计算机专业学习前端的高效学习路径，如何练习项目、调试bug，整理笔记，以及做课程大作业时的避坑经验。',
    fullContent: `计算机专业学习前端的几点经验：
1.先把HTML、CSS、JavaScript基础打牢固，不要直接上手框架。
2.多动手敲代码，不要只看视频，遇到报错优先看浏览器控制台。
3.课程大作业：先把基础功能完成，再做美化，不要一开始纠结样式。
4.学会查阅官方文档，遇到bug先自己排查，锻炼排错能力。
5.做完项目写笔记总结，巩固知识点，方便期末复习。`
  },
  {
    id: 'a4',
    title: 'Pinia状态管理实践',
    tag: '状态管理',
    date: '2026‑09‑15',
    view:142,
    summary: '对比Vuex，讲解Pinia的基础使用，如何拆分模块、实现数据持久化，在后台管理项目当中统一管理用户登录状态与全局数据。',
    fullContent: `Pinia是Vue官方新一代状态管理库，替代Vuex。
1.创建store，定义state存放全局共享数据，例如登录用户信息。
2.组件直接导入store，读写全局变量，不需要复杂的mutation。
3.可以拆分多个store，按业务模块分开管理数据。
4.配合localStorage实现状态持久化，刷新页面数据不会丢失。
适合：登录状态、后台表单全局数据、跨组件数据共享场景。`
  }
]

const articleId = route.params.id
currentArticle.value = allArticles.find(item => item.id === articleId)
</script>
