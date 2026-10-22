import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore',{
  state:()=>{
    return {
      isAdmin: JSON.parse(localStorage.getItem('isAdmin')) ?? false,
      profile: JSON.parse(localStorage.getItem('userProfile')) ?? {
        name:"",
        email:"",
        motto:"",
        introduction:""
      }
    }
  },
  getters:{
    isLoginAdmin:(state)=> state.isAdmin
  },
  actions:{
    loginAdmin(){
      this.isAdmin = true
      localStorage.setItem('isAdmin',JSON.stringify(this.isAdmin))
    },
    logoutAdmin(){
      this.isAdmin = false
      localStorage.setItem('isAdmin',JSON.stringify(this.isAdmin))
    },
    saveProfile(payload){
      this.profile = {...this.profile,...payload}
      localStorage.setItem('userProfile',JSON.stringify(this.profile))
    }
  }
})
