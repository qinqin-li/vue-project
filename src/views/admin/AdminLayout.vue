<template>
  <div class="admin-wrap">
    <!-- 顶部全局导航（保留你页面最上方那一排：个人主页、项目展示、后台管理...） -->
    <TopBar />
    <div class="admin-body">
      <!-- 左侧侧边栏 -->
      <div class="admin-sidebar">
        <div class="sidebar-title">后台管理面板</div>
        <el-menu router>
          <el-menu-item index="/admin/profile">编辑个人信息</el-menu-item>
          <el-menu-item index="/admin/project">项目管理</el-menu-item>
          <!-- ==========新增文章管理菜单========== -->
          <el-menu-item index="/admin/article">文章管理</el-menu-item>
          <el-menu-item @click="handleLogout">退出登录</el-menu-item>
        </el-menu>
      </div>
      <!-- 右侧内容区域，子页面在这里渲染 -->
      <div class="admin-main">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script setup>
import TopBar from '@/components/TopBar.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const handleLogout = () => {
  localStorage.removeItem('isAdminLogin')
  router.push('/')
}
</script>
<style scoped>
.admin-wrap{
  width:100%;
}
.admin-body{
  display:flex;
  margin-top:10px;
}
.admin-sidebar{
  width:220px;
  border-right:1px solid #e5e7eb;
  min-height: calc(100vh - 120px);
  padding:10px;
}
.sidebar-title{
  font-size:16px;
  font-weight:bold;
  padding:10px 0;
}
.admin-main{
  flex:1;
  padding:20px;
}
</style>
