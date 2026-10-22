<template>
  <div class="admin-container">
    <!-- 顶部选项卡 -->
    <el-tabs v-model="activeTab" @tab-change="handleTabChange">
      <el-tab-pane label="编辑个人信息" name="info"></el-tab-pane>
      <el-tab-pane label="项目管理" name="project"></el-tab-pane>
      <el-tab-pane label="文章管理" name="article"></el-tab-pane>
      <el-tab-pane label="退出登录" name="logout"></el-tab-pane>
    </el-tabs>

    <!-- 文章管理面板 -->
    <div v-if="activeTab === 'article'" class="article-wrap">
      <!-- 新增/编辑文章表单卡片 -->
      <el-card class="form-card" shadow="hover">
        <template #header>
          <span class="card-title">{{ editId ? '编辑文章' : '新增文章' }}</span>
        </template>
        <el-form :model="articleForm" label-width="80px">
          <el-form-item label="文章标题">
            <el-input v-model="articleForm.title" placeholder="请输入文章标题"></el-input>
          </el-form-item>
          <el-form-item label="文章内容">
            <el-input v-model="articleForm.content" type="textarea" :rows="6" placeholder="请输入文章详细内容"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="saveArticle">保存</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>

      <!-- 文章列表表格卡片 -->
      <el-card class="table-card" shadow="hover">
        <template #header>
          <span class="card-title">文章列表</span>
        </template>
        <el-table :data="articleList" border stripe style="width:100%">
          <el-table-column prop="id" label="ID" width="100"/>
          <el-table-column prop="title" label="文章标题"/>
          <el-table-column prop="createTime" label="发布时间" width="180"/>
          <el-table-column label="操作" width="160">
            <template #default="scope">
              <el-button type="warning" size="small" @click="editRow(scope.row)">编辑</el-button>
              <el-button type="danger" size="small" @click="deleteRow(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

// 当前选中标签
const activeTab = ref('article')
// 文章表单
const articleForm = ref({
  title: '',
  content: '',
})
// 当前编辑id
const editId = ref('')
// 文章列表初始数据
const articleList = ref([
  {
    id: 'a1',
    title: 'Vue3入门学习',
    content: 'Vue3基础学习内容',
    createTime: '2026-09-01'
  },
  {
    id: 'a2',
    title: 'VueRouter路由总结',
    content: 'Vue路由学习笔记',
    createTime: '2026-09-05'
  },
  {
    id: 'a5',
    title: '学习技巧',
    content: '前端学习经验分享',
    createTime: '2026-09-10'
  }
])

// 切换标签
const handleTabChange = (tabName) => {
  if (tabName === 'info') {
    router.push({ name: 'adminInfo' })
  } else if (tabName === 'project') {
    router.push({ name: 'projectManage' })
  } else if (tabName === 'logout') {
    // 退出登录逻辑
    localStorage.removeItem('isAdminLogin')
    router.push('/')
  }
}

// 保存文章
const saveArticle = () => {
  if (editId.value) {
    // 编辑
    const target = articleList.value.find(item => item.id === editId.value)
    if (target) {
      target.title = articleForm.value.title
      target.content = articleForm.value.content
    }
  } else {
    // 新增
    const newId = 'a' + Date.now().toString().slice(-3)
    articleList.value.push({
      id: newId,
      title: articleForm.value.title,
      content: articleForm.value.content,
      createTime: new Date().toLocaleDateString()
    })
  }
  resetForm()
}

// 编辑行
const editRow = (row) => {
  editId.value = row.id
  articleForm.value.title = row.title
  articleForm.value.content = row.content
}

// 删除文章
const deleteRow = (id) => {
  articleList.value = articleList.value.filter(item => item.id !== id)
}

// 重置表单
const resetForm = () => {
  articleForm.value.title = ''
  articleForm.value.content = ''
  editId.value = ''
}
</script>

<style scoped>
.admin-container {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}
.article-wrap {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.form-card, .table-card {
  border-radius: 10px;
}
.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}
.el-form-item {
  margin-bottom: 22px;
}
</style>
