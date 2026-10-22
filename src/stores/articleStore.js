import { defineStore } from 'pinia'
export const useArticleStore = defineStore('articleStore',{
  state:()=>{
    return {
      // state初始化：页面加载优先读取本地存储
      articleList: JSON.parse(localStorage.getItem('articleList')) ?? [
        {id:"a1",title:"Vue3入门学习",content:"Vue3组合式API学习笔记",createTime:"2026‑09‑01"},
        {id:"a2",title:"VueRouter路由总结",content:"动态路由、嵌套路由、路由守卫学习总结",createTime:"2026‑09‑05"}
      ]
    }
  },
  getters:{
  },
  // actions：修改全局数据的方法，新增、编辑、删除文章
  actions:{
    addArticle(art){
      this.articleList.push(art)
      localStorage.setItem('articleList',JSON.stringify(this.articleList))
    },
    editArticle(payload){
      const idx = this.articleList.findIndex(a=>a.id === payload.id)
      if(idx !== -1){
        this.articleList[idx] = payload
        localStorage.setItem('articleList',JSON.stringify(this.articleList))
      }
    },
    delArticle(aid){
      this.articleList = this.articleList.filter(item=>item.id!==aid)
      localStorage.setItem('articleList',JSON.stringify(this.articleList))
    }
  }
})
