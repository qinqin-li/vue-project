<template>
  <div class="project-page">
    <div class="container">
      <div class="page-header">
        <h1>📂课程项目作品展示</h1>
        <p>下面同时展示两个完整课程项目：智慧仓库存储系统｜大学生积分管理系统</p>
      </div>
      <!-- 项目1：智慧仓库存储系统 -->
      <ProjectCard :project="warehouseProject">
        <!-- 具名插槽 header-slot -->
        <template #header-slot="scope">
          <span>版本：{{ scope.project.version }}</span>
        </template>
        <!-- 默认作用域插槽，放置项目特点、使用技术，你的原文 -->
        <template #default>
          <div class="section">
            <h3>✨项目特点</h3>
            <ul>
              <li>实现仓库物资入库、出库、库存查询一体化管理，替代传统纸质台账</li>
              <li>库存自动统计，低于阈值触发库存预警，提醒管理员及时补货，划分角色权限，区分仓库操作员与管理员，保障数据安全</li>
              <li>支持库存数据导出，生成台账报表，方便存档核对，页面交互简洁，可视化展示仓库物资状态，降低仓库管理操作难度</li>
            </ul>
          </div>
          <div class="section">
            <h3>🔧使用技术</h3>
            <ul>
              <li>前端：Vue3 + JavaScript + Element Plus，实现页面交互</li>
              <li>后端：SpringBoot，提供业务接口</li>
              <li>数据库：MySQL，存储货物、库存、用户权限数据</li>
            </ul>
          </div>
        </template>
        <template #footer-slot="scope">
    <button class="btn btn-primary" @click="toDetail(scope.project)">查看项目详情</button>
  </template>
        <!-- 删掉了原来的 #footer-slot 按钮代码 -->
      </ProjectCard>
      <!-- 项目2：大学生积分管理系统 -->
      <ProjectCard :project="scoreProject">
        <template #header-slot="scope">
          <span>版本：{{ scope.project.version }}</span>
        </template>
        <template #default>
          <div class="section">
            <h3>✨项目特点</h3>
            <ul>
              <li>面向高校辅导员，管理学生综合素质测评积分，实现加分扣分登记</li>
              <li>自动记录每一次积分变更日志，记录操作人、分值、变更原因，可追溯</li>
              <li>支持积分自动排序，生成学生综测排行榜，支持按姓名、班级检索学生，同时统计班级平均积分</li>
              <li>权限隔离：学生仅查看个人积分，管理员可维护全部学生数据</li>
            </ul>
          </div>
          <div class="section">
            <h3>🔧使用技术</h3>
            <ul>
              <li>前端：Vue3 + JavaScript，搭建页面</li>
              <li>后端：SpringBoot，处理业务逻辑</li>
              <li>数据库：MySQL，存储学生信息、积分记录、操作日志</li>
            </ul>
          </div>
        </template>
        <template #footer-slot="scope">
  <button class="btn btn-primary" @click="toDetail(scope.project)">查看项目详情</button>
</template>

        <!-- 删掉了原来的 #footer-slot 按钮代码 -->
      </ProjectCard>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ProjectCard from '../components/ProjectCard.vue'
const router = useRouter()
// 点击查看详情，编程式导航，传递params参数projectId
const toDetail = (proj)=>{
  let pid
  if(proj.name === "智慧仓库存储系统") pid = "warehouse"
  else pid = "score"
  router.push({
    name:"projectDetail",
    params:{ projectId: pid }
  })
}
const warehouseProject = ref({
  name: "智慧仓库存储系统",
  version: "V1.2",
  tags: ["Vue3", "SpringBoot", "MySQL", "仓储管理"],
  status: "已完成"
})
const scoreProject = ref({
  name: "大学生积分管理系统",
  version: "V1.0",
  tags: ["Vue3", "SpringBoot", "MySQL", "学生综测"],
  status: "已完成"
})

</script>

<style scoped>
.project-page {
  min-height: 100vh;
  background: linear-gradient(130deg,#f0f4fa,#e6ecf5);
  padding:40px 16px;
}
.container{
  max-width:1000px;
  margin:0 auto;
}
.page-header{
  text-align:center;
  margin-bottom:36px;
}
.page-header h1{
  font-size:28px;
  color:#2d3748;
  margin-bottom:8px;
}
.page-header p{
  color:#555;
}
.section{
  margin-bottom:18px;
}
.section h3{
  font-size:18px;
  color:#344966;
  margin-bottom:10px;
}
.section ul{
  padding-left:22px;
}
.section li{
  line-height:1.7;
  color:#444;
  margin:5px 0;
}
</style>
