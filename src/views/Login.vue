<template>
  <div class="login-container">
    <div class="login-card">
      <h2>🔐管理员登录</h2>
      <div class="form-item">
        <label>账号</label>
        <input
          v-model="loginForm.username"
          type="text"
          placeholder="请输入管理员账号"
        />
      </div>
      <div class="form-item">
        <label>密码</label>
        <input
          v-model="loginForm.password"
          type="password"
          placeholder="请输入密码"
        />
      </div>
      <button class="login-btn" @click="handleLogin">登录后台</button>
      <div class="back-tip">
        <button @click="goHome">← 返回个人主页</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const loginForm = ref({
  username: '',
  password: ''
})

// 课程作业预设管理员账号密码
const adminUser = {
  username: 'admin',
  password: '123456'
}

const handleLogin = () => {
  if (!loginForm.value.username.trim()) {
    alert('请输入账号')
    return
  }
  if (!loginForm.value.password.trim()) {
    alert('请输入密码')
    return
  }

  if (
    loginForm.value.username === adminUser.username &&
    loginForm.value.password === adminUser.password
  ) {
    alert('✅登录成功，进入后台管理')
    localStorage.setItem('isAdmin', 'true')
    router.push({ name: 'adminProfile' })
  } else {
    alert('❌账号或者密码错误！')
  }
}

const goHome = ()=>{
  router.push({name:'home'})
}
</script>

<style scoped>
.login-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #edf2f7;
}
.login-card {
  width: 380px;
  padding: 36px;
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}
h2 {
  text-align: center;
  margin-bottom: 26px;
  color:#2d3748;
}
.form-item {
  margin-bottom: 18px;
}
.form-item label {
  display: block;
  margin-bottom: 6px;
  color:#4a5568;
}
.form-item input {
  width: 100%;
  box-sizing: border-box;
  padding: 11px 14px;
  border:1px solid #e2e8f0;
  border-radius:8px;
  font-size:15px;
}
.login-btn {
  width:100%;
  padding:11px;
  background-color:#3182ce;
  color:white;
  border:none;
  border-radius:8px;
  font-size:16px;
  cursor:pointer;
}
.login-btn:hover{
  background-color:#2b6cb0;
}
.back-tip{
  margin-top:16px;
  text-align:center;
}
.back-tip button{
  border:none;
  background:transparent;
  color:#3182ce;
  cursor:pointer;
}
</style>
