<template>
  <q-page class="news-page">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">뉴스</h1>
        <p class="page-subtitle">연구소 최신 소식과 연구 성과를 확인하세요</p>
      </div>
    </div>
    
    <div class="container q-py-xl">
      <div class="row">
        <div class="col-12">
          <p class="text-center text-h6">뉴스 목록 페이지 개발 예정</p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'NewsPage'
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
</style>
