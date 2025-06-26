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
</template>