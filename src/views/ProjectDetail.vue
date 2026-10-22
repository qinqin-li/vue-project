<template>
  <div class="detail-container">
    <h1 class="project-title">{{ project.name }}</h1>
    <div class="version-line">版本：{{ project.version }}</div>
    <div class="tag-group">
      <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
    </div>
    <div class="status-line">状态：{{ project.status }}</div>
    <hr class="divider" />
    <h2 class="intro-title">项目详情介绍</h2>
    <p class="intro-content">{{ project.desc }}</p>
    <div class="btn-group">
      <button class="back-btn" @click="router.go(-1)">← 返回上一页 go(-1)</button>
      <button class="back-btn" @click="router.replace({ name: 'project' })">返回项目列表 replace</button>
    </div>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const router = useRouter()
// 获取动态路由参数 projectId
const projectId = computed(() => route.params.projectId)
// 项目数据源
const allProjects = [
  {
    id: 'warehouse',
    name: '智慧仓库存储系统',
    version: 'V1.2',
    tags: ['Vue3', 'SpringBoot', 'MySQL', '仓储管理'],
    status: '已完成',
    desc: '实现仓库物资入库、出库、库存查询一体化管理，库存预警、角色权限、报表导出。'
  },
  {
    id: 'score',
    name: '大学生积分管理系统',
    version: 'V1.0',
    tags: ['Vue3', 'SpringBoot', 'MySQL', '学生综测'],
    status: '已完成',
    desc: '面向高校学生综测打分，实现信息录入、分数统计、排名查询，管理员权限管理。'
  }
]
// 根据路由参数匹配项目
const project = computed(() => {
  return allProjects.find(item => item.id === projectId.value)
})
</script>

<style scoped>
.detail-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 24px;
}
.project-title {
  font-size: 42px;
  font-weight: bold;
  margin:0 0 12px 0;
}
.version-line {
  font-size:18px;
  color:#333;
  margin-bottom:12px;
}
.tag-group{
  display:flex;
  gap:12px;
  margin-bottom:12px;
}
.tag{
  padding:6px 14px;
  background:#e8f4fd;
  color:#2478b8;
  border-radius:20px;
  font-size:18px;
}
.status-line{
  font-size:18px;
  margin-bottom:20px;
}
.divider{
  border:0;
  border-bottom:1px solid #999;
  margin:24px 0;
}
.intro-title{
  font-size:26px;
  margin:0 0 10px 0;
}
.intro-content{
  font-size:18px;
  line-height:1.7;
  color:#333;
}
.btn-group{
  margin-top:32px;
  display:flex;
  gap:16px;
}
.back-btn{
  padding:10px 20px;
  font-size:16px;
  border:1px solid #666;
  border-radius:4px;
  background:#fff;
  cursor:pointer;
}
.back-btn:hover{
  background:#f0f5f9;
}
</style>
