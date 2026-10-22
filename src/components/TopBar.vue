<template>
  <div class="top-bar">
    <div class="page-title">👤个人信息主页</div>
    <div style="display:flex;gap:8px;">
      <button class="btn btn-outline" @click="handleThemeToggle">
        {{ isDark ? "☀亮色模式":"🌙暗黑模式" }}
      </button>
      <button class="btn btn-primary" @click="handleOpenEdit">编辑信息</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isDark: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle-theme', 'open-edit'])

const handleThemeToggle = () => {
  emit('toggle-theme')
}
const handleOpenEdit = () => {
  emit('open-edit')
}
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.page-title {
  font-size: 22px;
  font-weight: 600;
}
.btn {
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
}
.btn-primary {
  background-color: var(--primary-color);
  color: #fff;
}
.btn-outline {
  background: transparent;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
}
.btn-outline:hover {
  background-color: var(--tag-bg);
}
</style>