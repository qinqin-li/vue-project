<template>
  <div v-if="visible" class="modal-mask">
    <div class="modal-box">
      <h3>修改个人信息</h3>
      <div class="form-item">
        <label>姓名</label>
        <input v-model="localForm.name">
      </div>
      <div class="form-item">
        <label>邮箱</label>
        <input v-model="localForm.email">
      </div>
      <div class="form-item">
        <label>座右铭</label>
        <input v-model="localForm.motto">
      </div>
      <div class="form-item">
        <label>个人简介</label>
        <textarea v-model="localForm.introduction" rows="3"></textarea>
      </div>
      <div class="modal-btn-group">
        <button class="btn btn-outline" @click="handleCancel">取消</button>
        <button class="btn btn-primary" @click="handleSave">保存修改</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive, watch} from 'vue'

const props = defineProps({
  visible:{
    type:Boolean,
    default:false
  },
  initForm:{
    type:Object,
    required:true
  }
})

const emit = defineEmits(['cancel','save'])

// 本地表单副本，不修改传入props
const localForm = reactive({
  name:"",
  email:"",
  motto:"",
  introduction:""
})

// 弹窗打开，把父组件数据拷贝进本地表单
watch(()=>props.initForm,(newVal)=>{
  Object.assign(localForm,newVal)
},{immediate:true})

const handleCancel = ()=>{
  emit('cancel')
}
const handleSave = ()=>{
  emit('save', {...localForm})
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:99;
}
.modal-box {
  width: 520px;
  max-width: 90%;
  background-color: var(--card-bg);
  border-radius:14px;
  padding:24px;
  box-shadow: var(--shadow);
}
.modal-box h3 {
  margin-bottom:16px;
}
.form-item {
  margin:12px 0;
}
.form-item label {
  display:block;
  margin-bottom:5px;
  font-size:14px;
}
.form-item input,.form-item textarea {
  width:100%;
  padding:8px 10px;
  border-radius:6px;
  border:1px solid var(--border-color);
  background:var(--card-bg);
  color:var(--text-primary);
}
.modal-btn-group {
  margin-top:20px;
  display:flex;
  gap:10px;
  justify-content:flex-end;
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
</style>