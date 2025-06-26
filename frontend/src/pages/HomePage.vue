<template>
  <q-page class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title animated-title">
            차세대 지능형 건물<br>
            <span class="text-primary-green glowing-text">에너지 관리 시스템</span> 연구
          </h1>
          <p class="hero-subtitle fade-in-up">
            AI, IoT, 디지털 트윈 기술로 미래 건물 환경을 혁신합니다<br>
            실시간 환경 모니터링부터 개인화된 쾌적성 제어까지
          </p>
          <div class="hero-actions">
            <q-btn 
              size="lg" 
              color="primary" 
              class="q-mr-md q-mb-sm floating-btn"
              @click="$router.push('/projects')"
              unelevated
            >
              <q-icon name="science" class="q-mr-sm" />
              연구 프로젝트 보기
            </q-btn>
            <q-btn 
              size="lg" 
              outline 
              color="primary" 
              class="floating-btn"
              @click="$router.push('/about')"
            >
              <q-icon name="info" class="q-mr-sm" />
              연구소 소개
            </q-btn>
          </div>
        </div>
        <div class="hero-visual">
          <div class="tech-showcase">
            <div class="tech-circle tech-circle--1 floating-element">
              <q-icon name="sensors" size="2rem" color="primary" />
              <span>IoT 센서</span>
            </div>
            <div class="tech-circle tech-circle--2 floating-element">
              <q-icon name="psychology" size="2rem" color="secondary" />
              <span>AI 분석</span>
            </div>
            <div class="tech-circle tech-circle--3 floating-element">
              <q-icon name="device_hub" size="2rem" color="accent" />
              <span>스마트 제어</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 핵심 연구 프로젝트 Section -->
    <section class="projects-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">핵심 연구 프로젝트</h2>
          <p class="section-subtitle">
            5개의 주요 연구 프로젝트를 통해 차세대 건물 관리 시스템을 구축합니다
          </p>
        </div>

        <div class="projects-grid">
          <div 
            v-for="project in coreProjects" 
            :key="project.id"
            class="project-card interactive-card"
            @click="$router.push(`/research#${project.id}`)"
          >
            <div class="project-icon">
              <q-icon :name="project.icon" size="3rem" :color="project.color" />
            </div>
            <h3 class="project-title">{{ project.name }}</h3>
            <h4 class="project-subtitle">{{ project.fullName }}</h4>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tags">
              <q-chip 
                v-for="tag in project.tags" 
                :key="tag"
                size="sm"
                color="grey-2"
                text-color="grey-8"
                class="q-ma-xs hover-chip"
              >
                {{ tag }}
              </q-chip>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 연구 성과 통계 Section -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item counter-animation">
            <div class="stat-number">{{ stats.projects }}+</div>
            <div class="stat-label">진행 프로젝트</div>
          </div>
          <div class="stat-item counter-animation">
            <div class="stat-number">{{ stats.papers }}+</div>
            <div class="stat-label">논문 발표</div>
          </div>
          <div class="stat-item counter-animation">
            <div class="stat-number">{{ stats.patents }}+</div>
            <div class="stat-label">특허 출원</div>
          </div>
          <div class="stat-item counter-animation">
            <div class="stat-number">{{ stats.collaborations }}+</div>
            <div class="stat-label">산학협력</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 연구진 Section -->
    <section class="team-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">연구진</h2>
          <p class="section-subtitle">
            각 분야 전문가들이 모여 혁신적인 연구를 수행합니다
          </p>
        </div>

        <div class="team-grid">
          <div 
            v-for="member in teamMembers" 
            :key="member.id"
            class="team-card interactive-card"
          >
            <div class="team-avatar">
              <q-avatar size="80px" class="team-photo">
                <img v-if="member.photo" :src="member.photo" :alt="member.name">
                <q-icon v-else name="person" size="40px" color="grey-6" />
              </q-avatar>
            </div>
            <h3 class="team-name">{{ member.name }}</h3>
            <p class="team-position">{{ member.position }}</p>
            <div class="team-specialization">
              <q-chip 
                v-for="spec in member.specialization" 
                :key="spec"
                size="sm"
                outline
                color="primary"
                class="q-ma-xs hover-chip"
              >
                {{ spec }}
              </q-chip>
            </div>
          </div>
        </div>

        <div class="text-center q-mt-lg">
          <q-btn 
            color="primary" 
            outline 
            class="floating-btn"
            @click="$router.push('/about')"
          >
            전체 연구진 보기
          </q-btn>
        </div>
      </div>
    </section>
  </q-page>
</template>'purple',
        tags: ['동적 학습', '개인 기준선', '적응형 제어']
      }
    ])

    const teamMembers = ref([
      {
        id: 1,
        name: '신지웅',
        position: 'CEO',
        specialization: ['경영 전략', '연구 기획'],
        photo: null
      },
      {
        id: 2,
        name: '김경록',
        position: '부사장',
        specialization: ['기술 관리', '사업 개발'],
        photo: null
      },
      {
        id: 3,
        name: '안승호',
        position: '본부장',
        specialization: ['연구 총괄', '프로젝트 관리'],
        photo: null
      },
      {
        id: 4,
        name: '조현석',
        position: '선임연구원',
        specialization: ['IoT 시스템', '센서 네트워크'],
        photo: null
      },
      {
        id: 5,
        name: '김성환',
        position: '선임연구원',
        specialization: ['AI/ML', '데이터 분석'],
        photo: null
      },
      {
        id: 6,
        name: '이정아',
        position: '선임연구원',
        specialization: ['제어 시스템', '에너지 최적화'],
        photo: null
      }
    ])

    onMounted(() => {
      // 페이지 로드 시 애니메이션 트리거
      setTimeout(() => {
        document.querySelectorAll('.counter-animation').forEach(el => {
          el.classList.add('animate')
        })
      }, 500)
    })

    return {
      stats,
      coreProjects,
      teamMembers
    }
  }
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  overflow-x: hidden;
}

/* === 동적 애니메이션 === */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes glow {
  0%, 100% { text-shadow: 0 0 5px rgba(139, 195, 74, 0.5); }
  50% { text-shadow: 0 0 20px rgba(139, 195, 74, 0.8), 0 0 30px rgba(139, 195, 74, 0.6); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* === Hero Section === */
.hero-section {
  background: linear-gradient(135deg, #f8fffe 0%, #e8f5e8 100%);
  padding: 120px 20px 80px;
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 70%, rgba(139, 195, 74, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.animated-title {
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--primary-blue);
  animation: fadeInUp 1s ease-out;
}

.glowing-text {
  animation: glow 3s ease-in-out infinite;
}

.fade-in-up {
  animation: fadeInUp 1s ease-out 0.3s both;
}

.hero-subtitle {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--gray-600);
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  animation: fadeInUp 1s ease-out 0.6s both;
}

/* === 떠다니는 요소들 === */
.floating-element {
  animation: float 6s ease-in-out infinite;
}

.floating-element:nth-child(2) {
  animation-delay: -2s;
}

.floating-element:nth-child(3) {
  animation-delay: -4s;
}

.floating-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.floating-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
  transition: all 0.6s ease;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.floating-btn:hover::before {
  width: 300px;
  height: 300px;
}

.floating-btn:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 40px rgba(139, 195, 74, 0.3);
}

/* === 기술 쇼케이스 === */
.tech-showcase {
  position: relative;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-circle {
  position: absolute;
  width: 130px;
  height: 130px;
  background: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid transparent;
}

.tech-circle:hover {
  transform: translateY(-15px) scale(1.1);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
  border-color: var(--primary-green);
}

.tech-circle--1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.tech-circle--2 {
  bottom: 20px;
  left: 20px;
}

.tech-circle--3 {
  bottom: 20px;
  right: 20px;
}

/* === 섹션 공통 스타일 === */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--gray-800);
  margin-bottom: 1rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-green), var(--primary-blue));
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--gray-600);
  max-width: 600px;
  margin: 0 auto;
}

/* === 인터랙티브 카드 === */
.interactive-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.interactive-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(139, 195, 74, 0.1), transparent);
  transition: left 0.6s ease;
}

.interactive-card:hover::before {
  left: 100%;
}

.interactive-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

/* === 프로젝트 섹션 === */
.projects-section {
  padding: 80px 0;
  background: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--gray-100);
}

.project-icon {
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.project-card:hover .project-icon {
  transform: scale(1.1) rotateY(10deg);
}

.project-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary-blue);
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.project-card:hover .project-title {
  color: var(--primary-green);
}

.project-subtitle {
  font-size: 0.9rem;
  color: var(--gray-500);
  margin-bottom: 1rem;
  font-weight: 500;
}

.project-description {
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.hover-chip {
  transition: all 0.3s ease;
}

.hover-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* === 통계 섹션 === */
.stats-section {
  background: linear-gradient(135deg, var(--primary-blue) 0%, #1a3f7a 100%);
  padding: 80px 0;
  color: white;
  position: relative;
  overflow: hidden;
}

.stats-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 70% 30%, rgba(139, 195, 74, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.stat-item {
  padding: 2rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.15);
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--primary-green);
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
  font-weight: 500;
}

.counter-animation .stat-number {
  animation: pulse 2s ease-in-out infinite;
}

/* === 팀 섹션 === */
.team-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8fffe 0%, rgba(139, 195, 74, 0.05) 100%);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.team-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--gray-100);
}

.team-avatar {
  margin-bottom: 1.5rem;
  position: relative;
}

.team-photo {
  border: 3px solid var(--primary-green);
  transition: all 0.3s ease;
}

.team-card:hover .team-photo {
  transform: scale(1.1);
  border-color: var(--primary-blue);
}

.team-name {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--gray-800);
  margin-bottom: 0.5rem;
}

.team-position {
  color: var(--primary-blue);
  font-weight: 500;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.team-specialization {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

/* === 반응형 디자인 === */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    padding-top: 2rem;
  }
  
  .animated-title {
    font-size: 2.4rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .tech-showcase {
    height: 250px;
  }
  
  .tech-circle {
    width: 100px;
    height: 100px;
  }
  
  .tech-circle--2,
  .tech-circle--3 {
    bottom: 0;
  }
  
  .projects-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .hero-actions {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 100px 15px 60px;
  }
  
  .animated-title {
    font-size: 2rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .tech-circle {
    width: 80px;
    height: 80px;
  }
}

/* === 다크모드 지원 === */
@media (prefers-color-scheme: dark) {
  .hero-section {
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  }
  
  .animated-title {
    color: #ffffff;
  }
  
  .hero-subtitle {
    color: #cccccc;
  }
}

.text-primary-green {
  color: var(--primary-green);
}

.text-primary-blue {
  color: var(--primary-blue);
}
</style>