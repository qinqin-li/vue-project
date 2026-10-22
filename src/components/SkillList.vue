<template>
  <div>
    <div class="section-title">🧩技能列表（支持关键词筛选）</div>
    <div class="search-wrapper">
      <input class="search-input"
             v-model="searchWordModel"
             placeholder="输入技能名称/熟练度进行筛选，例如Vue、熟练">
    </div>
    <div>
      <span class="skill-item" v-for="(skill,sIndex) in filteredSkillArr" :key="sIndex">
        {{ skill.name }}
        <span class="skill-level">[{{ skill.level }}]</span>
      </span>
      <div v-if="filteredSkillArr.length===0" class="empty-tip">
        没有匹配到对应的技能，请更换关键词
      </div>
    </div>
  </div>
</template>
<script setup>
import {computed} from 'vue'
// defineModel 实现双向绑定
const searchWordModel = defineModel('searchWord')
const props = defineProps({
  skillList:{
    type:Array,
    required:true
  }
})
const filteredSkillArr = computed(()=>{
  const keyword = searchWordModel.value.trim().toLowerCase();
  if(!keyword){
    return props.skillList
  }
  return props.skillList.filter(item=>{
    return item.name.toLowerCase().includes(keyword) || item.level.toLowerCase().includes(keyword);
  })
})
</script>

<style scoped>
.search-wrapper {
  margin:24px 0;
}
.search-input {
  width: 100%;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background-color: var(--card-bg);
  color: var(--text-primary);
  font-size: 15px;
}
.search-input:focus {
  outline: none;
  border-color: var(--primary-color);
}
.section-title {
  font-size:17px;
  font-weight:600;
  margin:22px 0 12px;
  padding-bottom:6px;
  border-bottom:1px solid var(--border-color);
}
.skill-item {
  display: inline-block;
  padding:6px 12px;
  border-radius: 20px;
  margin:6px 4px;
  background-color: var(--tag-bg);
  color: var(--tag-text);
  font-size:14px;
}
.skill-level {
  font-size:12px;
  opacity:0.8;
  margin-left:4px;
}
.empty-tip {
  color: var(--text-secondary);
  padding:12px;
  text-align:center;
}
</style>