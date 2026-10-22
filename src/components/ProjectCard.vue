<template>
  <div class="project-card">
    <!-- 头部区域：具名插槽 header-slot，父组件自定义标题右侧操作按钮 -->
    <div class="card-header">
      <h3 class="project-title">{{ project.name }}</h3>
      <slot name="header-slot" :project="project"></slot>
    </div>
    <div class="card-meta">
      <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
      <span class="status-badge" :class="statusClass">{{ project.status }}</span>
    </div>
    <!-- 默认插槽：项目主体内容，父组件传入任意HTML结构 -->
    <div class="card-body">
      <slot :project="project"></slot>
    </div>
    <!-- 底部区域：具名插槽 footer-slot，放置查看、演示、源码按钮 -->
    <div class="card-footer">
      <slot name="footer-slot" :project="project"></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
// props传入基础项目配置数据（字符串/数组/状态）
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})
// 计算属性，根据项目状态生成样式class
const statusClass = computed(() => {
  const s = props.project.status
  if (s === "已完成") return "status-finish"
  if (s === "开发中") return "status-dev"
  return "status-plan"
})
</script>

<style scoped>
.project-card {
  border: 1px solid var(--border-color);
  border-radius:14px;
  background-color: var(--card-bg);
  box-shadow: var(--shadow);
  padding:22px;
  margin-bottom:24px;
}
.card-header {
  display:flex;
  justify-content: space-between;
  align-items:center;
  margin-bottom:12px;
}
.project-title{
  font-size:20px;
  font-weight:600;
  color:var(--text-primary);
}
.card-meta{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-bottom:16px;
}
.tag{
  background:var(--tag-bg);
  color:var(--tag-text);
  padding:4px 10px;
  border-radius:12px;
  font-size:13px;
}
.status-badge{
  padding:4px 10px;
  border-radius:12px;
  font-size:13px;
}
.status-finish{
  background:#dcfce7;
  color:#166534;
}
.status-dev{
  background:#fef3c7;
  color:#92400e;
}
.status-plan{
  background:#fee2e2;
  color:#991b1b;
}
.card-body{
  padding:12px 0;
  color:var(--text-secondary);
  line-height:1.7;
}
.card-footer{
  margin-top:16px;
  display:flex;
  gap:10px;
  flex-wrap:wrap;
}
.btn{
  padding:7px 14px;
  border-radius:8px;
  border:none;
  cursor:pointer;
  font-size:14px;
}
.btn-primary{
  background-color:var(--primary-color);
  color:white;
}
.btn-outline{
  border:1px solid var(--primary-color);
  color:var(--primary-color);
  background:transparent;
}
</style>