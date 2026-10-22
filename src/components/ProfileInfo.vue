<template>
  <div>
    <div class="header-area">
      <div class="avatar-box">
        <img :src="profile.avatar" alt="个人头像">
      </div>
      <div class="base-info">
        <div class="name">{{ profile.name }}</div>
        <p>🎓学号：{{ profile.studentId }}</p>
        <p>📚班级：{{ profile.className }}</p>
        <p>📧邮箱：{{ profile.email }}</p>
        <p>🎂生日：{{ profile.birthday }}</p>
      </div>
    </div>

    <div class="control-group">
      <button class="btn btn-primary" @click="handleSwitchDetail">
        {{ showDetail ? "🔽收起完整个人详情" : "▶展开完整个人详情" }}
      </button>
    </div>
    <div v-show="showDetail" class="detail-panel">
      <p><strong>性别：</strong>{{ profile.gender }}</p>
      <p><strong>座右铭：</strong>{{ profile.motto }}</p>
      <p><strong>个人简介：</strong>{{ profile.introduction }}</p>
      <p>爱好：{{ profile.hobbies?.join('、') || '暂无爱好' }}</p>

    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  profile: {
    type: Object,
    required: true
  },
  showDetail: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['switch-detail'])

const handleSwitchDetail = () => {
  emit('switch-detail')
}
</script>

<style scoped>
.header-area {
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 28px;
  flex-wrap: wrap;
}
.avatar-box {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--primary-color);
  flex-shrink: 0;
}
.avatar-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.base-info p {
  margin: 6px 0;
  font-size: 15px;
  color: var(--text-secondary);
}
.base-info .name {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
}
.control-group {
  margin: 20px 0;
  display: flex;
  gap:12px;
  flex-wrap: wrap;
}
.detail-panel {
  background-color: var(--tag-bg);
  padding:18px;
  border-radius:10px;
  margin:12px 0;
}
.detail-panel p {
  margin:8px 0;
  color: var(--text-secondary);
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
</style>