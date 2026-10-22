import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/userStore'
import Login from '../views/Login.vue'
import HomePage from '../views/HomePage.vue'
import ProjectShowPage from '../views/ProjectShowPage.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import NotFound from '../views/NotFound.vue'
import AdminLayout from '../views/admin/AdminLayout.vue'
import AdminProfileEdit from '../views/admin/AdminProfileEdit.vue'
import AdminProjectManage from '../views/admin/AdminProjectManage.vue'
import ArticleList from '../views/ArticleList.vue'
import ArticleManage from '../views/admin/ArticleManage.vue'

const routes = [
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '管理员登录',
      requireAuth: false
    }
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
    meta: {
      title: '个人主页',
      requireAuth: false
    }
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectShowPage,
    meta: {
      title: '项目展示',
      requireAuth: false
    }
  },
  {
    path: '/project/:projectId',
    name: 'projectDetail',
    component: ProjectDetail,
    meta: {
      title: '项目详情',
      requireAuth: false
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    meta: {
      title: '后台管理',
      requireAuth: true
    },
    children: [
      {
        path: 'profile',
        name: 'adminProfile',
        component: AdminProfileEdit,
        meta: { title: '个人信息编辑', requireAuth: true }
      },
      {
        path: 'project',
        name: 'adminProject',
        component: AdminProjectManage,
        meta: { title: '项目管理', requireAuth: true }
      },
      {
        path: 'article',
        name: 'adminArticle',
        component: ArticleManage,
        meta: { title: '文章管理', requireAuth: true }
      }
    ]
  },
  {
    path: '/articleList',
    name: 'ArticleList',
    component: ArticleList,
    meta: { title: '文章列表', requireAuth: false }
  },
  {
    path: '/article/:id',
    name: 'ArticleDetail',
    component: () => import("@/views/ArticleDetail.vue"),
    meta: { title: '文章详情', requireAuth: false }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { title: '页面不存在', requireAuth: false }
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

//全局路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} | 个人作品集` : '个人作品集'
  const userStore = useUserStore()
  if (to.meta.requireAuth) {
    if (userStore.isLoginAdmin) {
      next()
    } else {
      alert("请先登录管理员账号！")
      next({name:"login"}) //未登录跳转到登录页
    }
  } else {
    next()
  }
})
export default router
