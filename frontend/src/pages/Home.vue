<template>
  <q-page class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="container">
          <div class="row items-center">
            <div class="col-lg-6 col-md-12">
              <h1 class="hero-title">
                EAN테크놀로지<br>
                <span class="text-primary">부설 기술연구소</span><br>
                혁신과 기술의 미래
              </h1>
              <p class="hero-subtitle">
                첨단 기술 연구와 개발을 통한 차세대 솔루션 창출
              </p>
              <div class="hero-buttons q-mt-xl">
                <q-btn 
                  size="lg" 
                  color="primary" 
                  unelevated 
                  class="q-mr-md q-mb-sm"
                  @click="$router.push('/research')"
                >
                  연구분야 보기
                </q-btn>
                <q-btn 
                  size="lg" 
                  outline 
                  color="primary"
                  class="q-mb-sm"
                  @click="$router.push('/projects')"
                >
                  프로젝트 보기
                </q-btn>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="hero-image">
                <q-icon name="science" size="200px" color="primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Research Areas Section -->
    <section class="research-section q-py-xl">
      <div class="container">
        <h2 class="section-title text-center q-mb-xl">
          핵심 연구 프로젝트
        </h2>
        <div class="row q-gutter-lg">
          <div class="col-lg-4 col-md-6 col-sm-12" v-for="project in researchProjects" :key="project.name">
            <q-card class="research-card" flat bordered>
              <q-card-section>
                <div class="research-icon q-mb-md">
                  <q-icon :name="project.icon" size="48px" :color="project.color" />
                </div>
                <h3 class="research-title">{{ project.name }}</h3>
                <p class="research-description">{{ project.description }}</p>
              </q-card-section>
              <q-card-actions>
                <q-btn flat color="primary" @click="learnMore(project.name)">
                  자세히 보기
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Section -->
    <section class="tech-section q-py-xl bg-grey-1">
      <div class="container">
        <h2 class="section-title text-center q-mb-xl">
          핵심 기술
        </h2>
        <div class="row q-gutter-md">
          <div class="col-lg-3 col-md-6 col-sm-12" v-for="tech in technologies" :key="tech.name">
            <q-card class="tech-card text-center" flat>
              <q-card-section>
                <q-icon :name="tech.icon" size="64px" color="primary" />
                <h4 class="tech-name q-mt-md">{{ tech.name }}</h4>
                <p class="tech-desc">{{ tech.description }}</p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="news-section q-py-xl">
      <div class="container">
        <div class="row items-center q-mb-xl">
          <div class="col">
            <h2 class="section-title">최신 소식</h2>
          </div>
          <div class="col-auto">
            <q-btn flat color="primary" @click="$router.push('/news')">
              전체 보기
            </q-btn>
          </div>
        </div>
        <div class="row q-gutter-lg">
          <div class="col-lg-4 col-md-6 col-sm-12" v-for="news in latestNews" :key="news.id">
            <q-card class="news-card" flat bordered>
              <q-card-section>
                <div class="news-date text-grey-6 text-caption q-mb-sm">
                  {{ news.date }}
                </div>
                <h4 class="news-title">{{ news.title }}</h4>
                <p class="news-summary">{{ news.summary }}</p>
              </q-card-section>
              <q-card-actions>
                <q-btn flat color="primary" size="sm">
                  읽기
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      researchProjects: [
        {
          name: 'AERONET',
          description: '저비용 고효율 다중 모드 센서 네트워크를 통한 실시간 환경 데이터 수집',
          icon: 'sensors',
          color: 'blue'
        },
        {
          name: 'PEARNET',
          description: 'AI 기반 개인별 열 쾌적성 선호도 학습 및 예측 시스템',
          icon: 'psychology',
          color: 'green'
        },
        {
          name: 'LEEMO',
          description: 'MPC 및 DRL을 활용한 에너지 효율성과 재실자 만족도 최적화',
          icon: 'power',
          color: 'orange'
        },
        {
          name: 'FUMUNET',
          description: 'FMU 디지털 트윈 공동 시뮬레이션 기반 실내환경 최적화',
          icon: 'apartment',
          color: 'purple'
        },
        {
          name: 'DYPER-NET',
          description: '동적 개인화 열쾌적성 기준선 네트워크 시스템',
          icon: 'thermostat',
          color: 'red'
        }
      ],
      technologies: [
        {
          name: 'IoT 센서',
          description: '실시간 정밀 데이터 수집',
          icon: 'device_hub'
        },
        {
          name: 'AI/ML',
          description: '패턴 분석 및 예측',
          icon: 'psychology'
        },
        {
          name: 'MPC',
          description: '미래 예측 기반 최적 제어',
          icon: 'tune'
        },
        {
          name: 'DRL',
          description: '지능형 학습 알고리즘',
          icon: 'auto_awesome'
        }
      ],
      latestNews: [
        {
          id: 1,
          title: 'AERONET 프로젝트 1차 성과 발표',
          summary: '저비용 고효율 센서 네트워크 프로토타입 개발 완료',
          date: '2025.06.20'
        },
        {
          id: 2,
          title: 'AI 기반 쾌적성 예측 모델 특허 출원',
          summary: 'PEARNET 기술을 활용한 개인화 환경 제어 시스템',
          date: '2025.06.15'
        },
        {
          id: 3,
          title: '2025년 하반기 연구진 채용 공고',
          summary: '머신러닝 및 IoT 전문 연구원 모집',
          date: '2025.06.10'
        }
      ]
    }
  },
  methods: {
    learnMore(projectName) {
      this.$router.push({
        path: '/research',
        query: { project: projectName }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.home-page
  min-height: 100vh

.hero-section
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
  color: white
  padding: 120px 0
  min-height: 80vh
  display: flex
  align-items: center

.hero-title
  font-size: 3.5rem
  font-weight: 700
  line-height: 1.2
  margin-bottom: 1.5rem

.hero-subtitle
  font-size: 1.25rem
  margin-bottom: 2rem
  opacity: 0.9

.hero-image
  text-align: center

.section-title
  font-size: 2.5rem
  font-weight: 600
  color: #2c3e50

.research-card, .tech-card, .news-card
  height: 100%
  border-radius: 16px
  transition: transform 0.3s ease, box-shadow 0.3s ease
  
  &:hover
    transform: translateY(-4px)
    box-shadow: 0 8px 25px rgba(0,0,0,0.1)

.research-title, .tech-name, .news-title
  font-weight: 600
  margin-bottom: 0.75rem

.research-description, .tech-desc, .news-summary
  color: #666
  line-height: 1.6

.container
  max-width: 1200px
  margin: 0 auto
  padding: 0 20px

@media (max-width: 768px)
  .hero-title
    font-size: 2.5rem
  
  .section-title
    font-size: 2rem
</style>
