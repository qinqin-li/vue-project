<template>
  <div>
    <div class="nav-bar">
      <RouterLink class="nav-btn" :to="{ name:'home' }">👤个人主页</RouterLink>
      <RouterLink class="nav-btn" :to="{ name:'project' }">📂项目展示</RouterLink>
      <RouterLink class="nav-btn" :to="{ name:'adminProfile' }">🔐后台管理</RouterLink>
      <RouterLink class="nav-btn" :to="{ name:'ArticleList'}">📄文章列表</RouterLink>

      <!-- 点击弹出登录弹窗 -->
      <button class="nav-btn" @click="openLoginModal">模拟管理员登录</button>
    </div>
    <!-- 登录弹窗遮罩层 -->
    <div v-if="showLoginModal" class="modal-mask">
      <div class="modal-card">
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
          <button @click="closeLoginModal">取消</button>
        </div>
      </div>
    </div>
    <RouterView />
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
const userStore = useUserStore()

// 控制登录弹窗显示隐藏
const showLoginModal = ref(false)
// 登录表单
const loginForm = ref({
  username: '',
  password: ''
})

// 预设管理员账号密码
const adminUser = {
  username: 'admin',
  password: '123456'
}

// 打开弹窗
const openLoginModal = () => {
  showLoginModal.value = true
}
// 关闭弹窗，清空输入框
const closeLoginModal = () => {
  showLoginModal.value = false
  loginForm.value.username = ''
  loginForm.value.password = ''
}

// 登录校验
const handleLogin = () => {
  if (!loginForm.value.username.trim()) {
    alert('请输入账号')
    return
  }
  if (!loginForm.value.password.trim()) {
    alert('请输入密码')
    return
  }
 if(loginForm.value.username === adminUser.username && loginForm.value.password === adminUser.password){
  userStore.loginAdmin() //调用pinia action，代替直接写localStorage
  alert("✅登录成功！现在可以访问后台管理")
  closeLoginModal()
}else{
  alert('❌账号或密码错误，请重新输入')
}

}
</script>

<style>
.nav-bar{
  max-width:900px;
  margin:10px auto;
  display:flex;
  gap:12px;
  padding:10px 20px;
}
.nav-btn{
  padding:8px 18px;
  border-radius:8px;
  border:1px solid #3182ce;
  background:#ffffff;
  color:#3182ce;
  cursor:pointer;
  text-decoration:none;
}
.nav-btn:hover{
  background:#ebf8ff;
}
.nav-btn.router-link-active{
  background:#3182ce;
  color:white;
}

/* 登录弹窗样式 */
.modal-mask{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,0.4);
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:999;
}
.modal-card{
  width:400px;
  background:#fff;
  padding:32px;
  border-radius:14px;
}
.modal-card h2{
  text-align:center;
  margin-bottom:24px;
}
.form-item{
  margin-bottom:16px;
}
.form-item label{
  display:block;
  margin-bottom:5px;
}
.form-item input{
  width:100%;
  box-sizing:border-box;
  padding:10px;
  border:1px solid #ccc;
  border-radius:6px;
}
.login-btn{
  width:100%;
  padding:10px;
  background:#3182ce;
  color:#fff;
  border:none;
  border-radius:6px;
  cursor:pointer;
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
