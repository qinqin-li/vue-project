<template>
  <div>
    <h2>后台管理页面</h2>
    <h3>一、编辑个人信息</h3>
    <div class="form-item">
      <label>姓名</label>
      <input v-model="localForm.name"/>
    </div>
    <div class="form-item">
      <label>邮箱</label>
      <input v-model="localForm.email"/>
    </div>
    <div class="form-item">
      <label>座右铭</label>
      <input v-model="localForm.motto"/>
    </div>
    <div class="form-item">
      <label>个人简介</label>
      <textarea v-model="localForm.introduction" rows="4"></textarea>
    </div>
    <button @click="saveProfile">保存个人信息</button>

    <hr style="margin:30px 0;">

    <h3>二、编辑项目信息</h3>
    <div class="form-item">
      <label>项目名称</label>
      <input v-model="projectForm.name"/>
    </div>
    <div class="form-item">
      <label>项目版本</label>
      <input v-model="projectForm.version"/>
    </div>
    <div class="form-item">
      <label>项目介绍</label>
      <textarea v-model="projectForm.desc" rows="4"></textarea>
    </div>
    <button @click="saveProject">保存项目信息</button>

    <div class="btn-group" style="margin-top:20px">
      <button @click="backHome">返回个人主页</button>
      <button @click="goProject">前往项目展示页</button>
    </div>
  </div>
</template>
<script setup>
import {reactive,onMounted} from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
const userStore = useUserStore()

const router = useRouter()
// ========== 个人信息表单，只存4个可编辑字段 ==========
const localForm = reactive({
  name:"李雨芩",
  email:"liyuqin@example.com",
  motto:"道阻且长，行则将至",
  introduction:"计算机科学与技术专业学生，主攻Web前端方向"
})
// ========== 项目表单 ==========
const projectForm = reactive({
  name:"智慧仓储管理系统",
  version:"V1.0",
  desc:"基于Vue3开发的前端管理系统，实现入库出库、库存查询等仓储基础功能。"
})
onMounted(()=>{
  //读取个人信息
  try{
    const strProfile = localStorage.getItem("userProfile")
    if(strProfile){
      const data = JSON.parse(strProfile)
      localForm.name = data.name
      localForm.email = data.email
      localForm.motto = data.motto
      localForm.introduction = data.introduction
    }
  }catch(e){
    console.log("读取个人信息异常",e)
  }
  //读取项目信息
  try{
    const strProject = localStorage.getItem("projectInfo")
    if(strProject){
      const proj = JSON.parse(strProject)
      projectForm.name = proj.name
      projectForm.version = proj.version
      projectForm.desc = proj.desc
    }
  }catch(e){
    console.log("读取项目信息异常",e)
  }
})

//保存个人信息
//保存
const saveProfile = ()=>{
  if(!localForm.name.trim()){
    alert("姓名不能为空")
    return
  }
  userStore.saveProfile(localForm)
  alert("✅个人信息保存成功！")
}


//保存项目信息
const saveProject = ()=>{
  console.log("点击保存项目", projectForm)
  if(!projectForm.name.trim()){
    alert("项目名称不能为空")
    return
  }
  try{
    localStorage.setItem("projectInfo", JSON.stringify({...projectForm}))
    alert("✅项目信息保存成功！去项目页面查看更新效果")
  }catch(err){
    console.error("项目保存失败",err)
    alert("❌项目保存出错")
  }
}

const backHome = ()=>{
  router.push({name:'home'})
}
const goProject = ()=>{
  router.push({name:'project'})
}
</script>

<style scoped>
.form-item{
  margin:14px 0;
}
label{
  display:block;
  margin-bottom:4px;
}
input,textarea{
  width:100%;
  padding:8px;
}
button{
  padding:8px 16px;
  margin-right:10px;
  margin-top:6px;
}
</style>
