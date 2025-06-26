<template>
  <q-page class="researchers-page">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">연구진</h1>
        <p class="page-subtitle">이안텍 기업부설 연구소 연구진을 소개합니다</p>
      </div>
    </div>
    
    <div class="container q-py-xl">
      <div class="row q-gutter-lg">
        <div class="col-lg-6 col-md-12" v-for="member in researchers" :key="member.name">
          <q-card class="researcher-card" flat bordered>
            <q-card-section class="text-center">
              <q-avatar size="80px" class="q-mb-md">
                <q-icon name="person" size="40px" />
              </q-avatar>
              <h3>{{ member.name }}</h3>
              <p class="text-primary">{{ member.position }}</p>
              <p class="text-grey-7">{{ member.description }}</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ResearchersPage',
  data() {
    return {
      researchers: [
        {
          name: '신지웅',
          position: 'CEO',
          description: '연구소 전체 운영 및 전략 수립'
        },
        {
          name: '김경록',
          position: '부사장',
          description: '연구 개발 총괄 및 기술 전략'
        },
        {
          name: '안승호',
          position: '본부장',
          description: '연구 프로젝트 관리 및 조정'
        },
        {
          name: '조현석',
          position: '선임연구원',
          description: 'AI/ML 알고리즘 개발'
        },
        {
          name: '김성환',
          position: '선임연구원',
          description: 'IoT 센서 네트워크 개발'
        },
        {
          name: '이정아',
          position: '선임연구원',
          description: '제어 시스템 최적화'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.page-header
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%)
  color: white
  padding: 80px 0
  text-align: center

.page-title
  font-size: 3rem
  font-weight: 700
  margin-bottom: 1rem

.page-subtitle
  font-size: 1.25rem
  opacity: 0.9

.container
  max-width: 1200px
  margin: 0 auto
  padding: 0 20px

.researcher-card
  border-radius: 16px
  transition: transform 0.3s ease
  
  &:hover
    transform: translateY(-4px)
</style>
