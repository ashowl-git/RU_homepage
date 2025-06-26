import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '@/pages/HomePage.vue'
import About from '@/pages/AboutPage.vue'
import Research from '@/pages/ResearchPage.vue'
import Projects from '@/pages/ProjectsPage.vue'
import ProjectDetail from '@/pages/ProjectDetailPage.vue'
import News from '@/pages/NewsPage.vue'
import NewsDetail from '@/pages/NewsDetailPage.vue'
import Contact from '@/pages/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '이안텍 기업부설 연구소'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '연구소 소개 - 이안텍 연구소'
    }
  },
  {
    path: '/research',
    name: 'Research',
    component: Research,
    meta: {
      title: '연구 분야 - 이안텍 연구소'
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      title: '프로젝트 - 이안텍 연구소'
    }
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetail',
    component: ProjectDetail,
    meta: {
      title: '프로젝트 상세 - 이안텍 연구소'
    }
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    meta: {
      title: '소식 - 이안텍 연구소'
    }
  },
  {
    path: '/news/:id',
    name: 'NewsDetail',
    component: NewsDetail,
    meta: {
      title: '소식 상세 - 이안텍 연구소'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: '연락처 - 이안텍 연구소'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFoundPage.vue'),
    meta: {
      title: '페이지를 찾을 수 없습니다 - 이안텍 연구소'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 페이지 타이틀 설정
router.beforeEach((to) => {
  document.title = to.meta.title || '이안텍 기업부설 연구소'
})

export default router