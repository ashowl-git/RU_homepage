<template>
  <q-page class="research-page">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">연구분야</h1>
        <p class="page-subtitle">차세대 지능형 건물 에너지 및 환경 관리 시스템</p>
      </div>
    </div>
    
    <div class="container q-py-xl">
      <div class="row q-gutter-lg">
        <div class="col-12">
          <q-card class="overview-card" flat bordered>
            <q-card-section>
              <h2>연구 개요</h2>
              <p>기존 BEMS(건물 에너지 관리 시스템)의 규칙 기반 제어 한계를 극복하고, 
              실시간 개인화된 에너지 및 쾌적성 최적 제어 시스템을 구축합니다.</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ResearchPage'
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

.overview-card
  border-radius: 16px
</style>
