<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Header with Floating Effect -->
    <q-header 
      :class="['floating-header', { 'header-scrolled': isScrolled }]"
      :style="headerStyle"
    >
      <q-toolbar class="header-toolbar">
        <q-toolbar-title class="text-h5 font-bold brand-title">
          <router-link to="/" class="text-decoration-none">
            <span class="text-primary-blue">EAN</span> 
            <span class="text-primary-green">연구소</span>
          </router-link>
        </q-toolbar-title>

        <!-- Desktop Navigation with Hover Effects -->
        <q-tabs 
          v-model="activeTab" 
          class="desktop-nav floating-nav"
          indicator-color="transparent"
          active-color="primary-green"
          align="right"
        >
          <q-tab 
            name="home" 
            class="nav-tab"
            @click="$router.push('/')"
          >
            <span class="nav-label">홈</span>
            <div class="nav-hover-bg"></div>
          </q-tab>
          <q-tab 
            name="about" 
            class="nav-tab"
            @click="$router.push('/about')"
          >
            <span class="nav-label">연구소 소개</span>
            <div class="nav-hover-bg"></div>
          </q-tab>
          <q-tab 
            name="research" 
            class="nav-tab"
            @click="$router.push('/research')"
          >
            <span class="nav-label">연구 분야</span>
            <div class="nav-hover-bg"></div>
          </q-tab>
          <q-tab 
            name="projects" 
            class="nav-tab"
            @click="$router.push('/projects')"
          >
            <span class="nav-label">프로젝트</span>
            <div class="nav-hover-bg"></div>
          </q-tab>
          <q-tab 
            name="news" 
            class="nav-tab"
            @click="$router.push('/news')"
          >
            <span class="nav-label">소식</span>
            <div class="nav-hover-bg"></div>
          </q-tab>
          <q-tab 
            name="contact" 
            class="nav-tab"
            @click="$router.push('/contact')"
          >
            <span class="nav-label">연락처</span>
            <div class="nav-hover-bg"></div>
          </q-tab>
        </q-tabs>

        <!-- Mobile Menu Button with Floating Effect -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="mobile-menu-btn floating-btn"
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
            <h6 class="text-h6 q-mb-sm">EAN 테크놀로지 기업부설 연구소</h6>
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
          <p>&copy; 2025 EAN 테크놀로지 기업부설 연구소. All rights reserved.</p>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const drawer = ref(false)
    const activeTab = ref('home')
    const isScrolled = ref(false)
    const scrollY = ref(0)

    const navigateTo = (path) => {
      router.push(path)
      drawer.value = false
    }

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      scrollY.value = window.scrollY
      isScrolled.value = window.scrollY > 50
    }

    // 헤더 스타일 계산
    const headerStyle = computed(() => {
      if (isScrolled.value) {
        return {
          transform: 'translateY(10px) scale(0.98)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
          borderRadius: '20px',
          margin: '10px',
          width: 'calc(100% - 20px)',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)'
        }
      }
      return {
        background: 'white'
      }
    })

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
      
      // 스크롤 이벤트 리스너 등록
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      drawer,
      activeTab,
      isScrolled,
      headerStyle,
      navigateTo
    }
  }
}
</script>

<style scoped>
/* === 브랜드 컬러 === */
.text-primary-green {
  color: var(--primary-green);
}

.text-primary-blue {
  color: var(--primary-blue);
}

/* === 떠다니는 헤더 === */
.floating-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.floating-header.header-scrolled {
  transform: translateY(10px) scale(0.98);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin: 10px;
  width: calc(100% - 20px);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(139, 195, 74, 0.1);
}

.header-toolbar {
  padding: 0 20px;
  min-height: 70px;
}

/* === 브랜드 타이틀 === */
.brand-title {
  transition: all 0.3s ease;
  cursor: pointer;
}

.brand-title:hover {
  transform: scale(1.05);
}

.brand-title a {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* === 네비게이션 호버 효과 === */
.floating-nav .nav-tab {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  margin: 0 4px;
  transition: all 0.3s ease;
  background: transparent;
}

.nav-label {
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.9rem;
}

.nav-hover-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--primary-green), var(--primary-blue));
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px;
}

.nav-tab:hover .nav-hover-bg {
  opacity: 0.1;
  transform: scale(1);
}

.nav-tab:hover .nav-label {
  color: var(--primary-green);
  transform: translateY(-2px);
}

.nav-tab:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(139, 195, 74, 0.2);
}

/* === 모바일 메뉴 버튼 === */
.floating-btn {
  transition: all 0.3s ease;
  border-radius: 12px;
}

.floating-btn:hover {
  transform: translateY(-2px) scale(1.1);
  background: var(--primary-green);
  color: white;
  box-shadow: 0 8px 25px rgba(139, 195, 74, 0.3);
}

/* === 반응형 네비게이션 === */
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

/* === 모바일 드로어 === */
.mobile-drawer {
  display: block;
}

@media (min-width: 768px) {
  .mobile-drawer {
    display: none;
  }
}

/* === 페이지 컨테이너 마진 === */
.q-page-container {
  padding-top: 90px; /* 헤더 높이만큼 여백 */
}

/* === 추가 호버 효과 === */
.q-item {
  transition: all 0.3s ease;
  border-radius: 12px;
  margin: 4px 8px;
}

.q-item:hover {
  background: linear-gradient(135deg, rgba(139, 195, 74, 0.1), rgba(30, 71, 136, 0.1));
  transform: translateX(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* === 푸터 스타일 개선 === */
.q-footer {
  background: linear-gradient(135deg, #2c3e50, #34495e);
}

/* === 글로벌 호버 효과 === */
* {
  transition: transform 0.2s ease;
}

button:hover,
.q-btn:hover {
  transform: translateY(-2px);
}

/* === 스크롤바 스타일링 === */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, var(--primary-green), var(--primary-blue));
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-green));
}
</style>