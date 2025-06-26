<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Header -->
    <q-header elevated class="bg-white text-primary">
      <q-toolbar>
        <q-toolbar-title class="text-h5 font-bold">
          <router-link to="/" class="text-decoration-none text-primary">
            <span class="text-primary-blue">이안텍</span> 
            <span class="text-primary-green">연구소</span>
          </router-link>
        </q-toolbar-title>

        <!-- Desktop Navigation -->
        <q-tabs 
          v-model="activeTab" 
          class="desktop-nav"
          indicator-color="primary-green"
          active-color="primary-green"
          align="right"
        >
          <q-tab name="home" label="홈" @click="$router.push('/')" />
          <q-tab name="about" label="연구소 소개" @click="$router.push('/about')" />
          <q-tab name="research" label="연구 분야" @click="$router.push('/research')" />
          <q-tab name="projects" label="프로젝트" @click="$router.push('/projects')" />
          <q-tab name="news" label="소식" @click="$router.push('/news')" />
          <q-tab name="contact" label="연락처" @click="$router.push('/contact')" />
        </q-tabs>

        <!-- Mobile Menu Button -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="mobile-menu-btn"
          @click="drawer = !drawer"
        />
      </q-toolbar>
    </q-header>

    <!-- Mobile Drawer -->
    <q-drawer
      v-model="drawer"
      show-if-above
      side="right"
      bordered
      class="mobile-drawer"
    >
      <q-list>
        <q-item clickable v-ripple @click="navigateTo('/')">
          <q-item-section>홈</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/about')">
          <q-item-section>연구소 소개</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/research')">
          <q-item-section>연구 분야</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/projects')">
          <q-item-section>프로젝트</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/news')">
          <q-item-section>소식</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/contact')">
          <q-item-section>연락처</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Main Content -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="bg-gray-800 text-white">
      <div class="q-pa-md">
        <div class="row">
          <div class="col-md-4 col-12 q-mb-md">
            <h6 class="text-h6 q-mb-sm">이안텍 기업부설 연구소</h6>
            <p class="text-body2">
              지능형 건물 에너지 관리 시스템<br>
              연구개발 전문기관
            </p>
          </div>
          
          <div class="col-md-4 col-12 q-mb-md">
            <h6 class="text-h6 q-mb-sm">연구 분야</h6>
            <ul class="text-body2" style="list-style: none; padding: 0;">
              <li>• 국책연구 및 위탁연구</li>
              <li>• IoT & AI 기반 에너지 관리</li>
              <li>• 디지털 트윈 시뮬레이션</li>
              <li>• 스마트 빌딩 기술</li>
            </ul>
          </div>
          
          <div class="col-md-4 col-12">
            <h6 class="text-h6 q-mb-sm">연락처</h6>
            <p class="text-body2">
              <strong>모기업:</strong> (주)이에이엔테크놀로지<br>
              <strong>웹사이트:</strong> www.eantec.co.kr
            </p>
          </div>
        </div>
        
        <q-separator class="q-my-md" />
        
        <div class="text-center text-body2">
          <p>&copy; 2025 이안텍 기업부설 연구소. All rights reserved.</p>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const drawer = ref(false)
    const activeTab = ref('home')

    const navigateTo = (path) => {
      router.push(path)
      drawer.value = false
    }

    // Set active tab based on current route
    onMounted(() => {
      const routeMap = {
        '/': 'home',
        '/about': 'about',
        '/research': 'research',
        '/projects': 'projects',
        '/news': 'news',
        '/contact': 'contact'
      }
      activeTab.value = routeMap[route.path] || 'home'
    })

    return {
      drawer,
      activeTab,
      navigateTo
    }
  }
}
</script>

<style scoped>
.text-primary-green {
  color: var(--primary-green);
}

.text-primary-blue {
  color: var(--primary-blue);
}

.desktop-nav {
  display: none;
}

.mobile-menu-btn {
  display: block;
}

@media (min-width: 768px) {
  .desktop-nav {
    display: flex;
  }
  
  .mobile-menu-btn {
    display: none;
  }
}

.mobile-drawer {
  display: block;
}

@media (min-width: 768px) {
  .mobile-drawer {
    display: none;
  }
}
</style>