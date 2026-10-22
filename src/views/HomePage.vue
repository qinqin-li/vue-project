<template>
  <div class="home-container">
    <!-- 个人信息卡片 -->
    <el-card class="info-card">
      <template #header>
        <div class="card-header">
          <span>👤 个人信息主页</span>
          <div class="header-btn-group">
            <el-button @click="toggleDark" size="small">🌙 暗黑模式</el-button>
            <el-button type="primary" size="small" @click="goEdit">编辑信息</el-button>
          </div>
        </div>
      </template>

      <div class="info-main">
        <!-- 头像 -->
        <el-avatar :size="100" src="https://p3-hippo-sign.byteimg.com/tos-cn-i-a9rns2rl98/01120041209e404890204d3221202401~tplv-a9rns2rl98-image.image" />
        <div class="info-text">
          <h2>{{ userInfo.name }}</h2>
          <p>🎓 学号：{{ userInfo.studentId }}</p>
          <p>📚 班级：{{ userInfo.className }}</p>
          <p>📩 邮箱：{{ userInfo.email }}</p>
          <p>🎂 生日：{{ userInfo.birthday }}</p>
          <el-button type="primary" size="small" @click="expandFlag = !expandFlag">
            {{ expandFlag ? '收起完整个人详情' : '展开完整个人详情' }}
          </el-button>
        </div>
      </div>

      <!-- 展开区域 -->
      <div v-if="expandFlag" class="expand-content">
        <p><strong>性别：</strong>{{ userInfo.gender }}</p>
        <p><strong>座右铭：</strong>{{ userInfo.motto }}</p>
        <p><strong>个人简介：</strong>{{ userInfo.intro }}</p>
        <p><strong>爱好：</strong>{{ userInfo.hobby }}</p>
      </div>
    </el-card>

    <!-- 技能列表区域 -->
    <el-card class="skill-card">
      <template #header>
        <span>🧩 技能列表（支持关键词筛选）</span>
      </template>
      <el-input v-model="searchSkill" placeholder="输入技能名称/熟练度进行筛选，例如Vue、熟练" style="margin-bottom:16px"/>
      <div class="skill-tags">
        <el-tag v-for="item in filterSkillList" :key="item.name" style="margin:4px">
          {{ item.name }}【{{ item.level }}】
        </el-tag>
      </div>
    </el-card>

    <!-- 学习经历时间线 -->
    <el-card class="timeline-card">
      <template #header>
        <span>📖 学习经历时间线</span>
      </template>
      <el-timeline>
        <el-timeline-item v-for="item in studyList" :key="item.time" :timestamp="item.time">
          <el-tag size="small">{{ item.tag }}</el-tag>
          <span>{{ item.content }}</span>
        </el-timeline-item>
      </el-timeline>
    </el-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

// 用户个人信息（和截图保持一致）
const userInfo = ref({
  name: '李雨芩',
  studentId: '249981114',
  className: '24计科2班',
  email: 'liyuqin@example.com',
  birthday: '2006-07-07',
  gender: '女',
  motto: '道阻且长，行则将至',
  intro: '计算机科学与技术专业学生，主攻Web前端方向，学习Vue、JavaScript等技术，乐于钻研新技术。',
  hobby: '阅读、羽毛球、摄影、听歌'
})

// 技能数据
const skillList = ref([
  { name: 'HTML', level: '熟练' },
  { name: 'CSS', level: '熟练' },
  { name: 'JavaScript', level: '良好' },
  { name: 'Vue3', level: '良好' },
  { name: 'Python', level: '一般' },
  { name: 'MySQL', level: '一般' },
  { name: 'Git', level: '了解' },
  { name: 'Photoshop', level: '了解' },
])
const searchSkill = ref('')
// 技能筛选计算属性
const filterSkillList = computed(() => {
  if (!searchSkill.value) return skillList.value
  return skillList.value.filter(item => {
    return item.name.includes(searchSkill.value) || item.level.includes(searchSkill.value)
  })
})

// 展开收起控制
const expandFlag = ref(false)

// 学习经历
const studyList = ref([
  { time: '2024-09', tag: '入学', content: '开始学习前端基础 HTML、CSS、JavaScript' },
  { time: '2025-03', tag: '框架学习', content: '学习Vue3组合式API，完成基础小demo' },
  { time: '2025-10', tag: '路由学习', content: '学习Vue Router动态路由、路由守卫' },
])

// 暗黑模式简单切换
const toggleDark = () => {
  document.documentElement.classList.toggle('dark')
}
// 跳转编辑信息（后台）
const goEdit = () => {
  router.push({ name: 'admin' })
}
</script>

<style scoped>
.home-container {
  max-width: 900px;
  margin: 20px auto;
  padding: 0 20px;
}
.info-card, .skill-card, .timeline-card {
  margin-bottom:20px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info-main {
  display:flex;
  gap:24px;
  align-items: center;
}
.info-text h2 {
  margin:0;
  font-size:26px;
}
.info-text p {
  margin:6px 0;
}
.expand-content {
  margin-top:16px;
  padding:16px;
  background-color: #e8f4ff;
  border-radius:8px;
}
.skill-tags {
  display:flex;
  flex-wrap:wrap;
}
</style>
