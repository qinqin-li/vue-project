import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projectStore',{
  state:()=>{
    return {
      projectList: JSON.parse(localStorage.getItem('projectList')) ?? [
        {
          id:"warehouse",
          name: "智慧仓库存储系统",
          version: "V1.2",
          tags: ["Vue3", "SpringBoot", "MySQL", "仓储管理"],
          status: "已完成",
          desc:"实现仓库物资入库、出库、库存查询一体化管理，库存预警、角色权限、报表导出。"
        },
        {
          id:"score",
          name: "大学生积分管理系统",
          version: "V1.0",
          tags: ["Vue3", "SpringBoot", "MySQL", "学生综测"],
          status: "已完成",
          desc:"面向高校辅导员，学生综合素质测评积分管理，积分日志，排行榜，权限隔离。"
        }
      ]
    }
  },
  getters:{
    getProjectById:(state)=>{
      return (pid)=> state.projectList.find(p=>p.id === pid)
    }
  },
  actions:{
    addProject(proj){
      this.projectList.push(proj)
      localStorage.setItem('projectList',JSON.stringify(this.projectList))
    },
    editProject(payload){
      const index = this.projectList.findIndex(item=>item.id === payload.id)
      if(index !== -1){
        this.projectList[index] = payload
        localStorage.setItem('projectList',JSON.stringify(this.projectList))
      }
    },
    delProject(pid){
      this.projectList = this.projectList.filter(item=>item.id!==pid)
      localStorage.setItem('projectList',JSON.stringify(this.projectList))
    }
  }
})
