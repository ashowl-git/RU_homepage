<template>
  <q-page class="contact-page">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">연락처</h1>
        <p class="page-subtitle">연구 협력 및 문의사항이 있으시면 언제든 연락주세요</p>
      </div>
    </div>
    
    <div class="container q-py-xl">
      <div class="row q-gutter-lg">
        <div class="col-lg-6 col-md-12">
          <q-card class="contact-card" flat bordered>
            <q-card-section>
              <h3 class="q-mb-md">연구소 정보</h3>
              <div class="contact-info">
                <div class="contact-item q-mb-md">
                  <q-icon name="business" class="q-mr-sm" />
                  <span>이안텍 기업부설 연구소</span>
                </div>
                <div class="contact-item q-mb-md">
                  <q-icon name="location_on" class="q-mr-sm" />
                  <span>주소: 서울시 강남구 테헤란로</span>
                </div>
                <div class="contact-item q-mb-md">
                  <q-icon name="phone" class="q-mr-sm" />
                  <span>전화: 02-1234-5678</span>
                </div>
                <div class="contact-item q-mb-md">
                  <q-icon name="email" class="q-mr-sm" />
                  <span>이메일: research@eantec.co.kr</span>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        
        <div class="col-lg-6 col-md-12">
          <q-card class="contact-card" flat bordered>
            <q-card-section>
              <h3 class="q-mb-md">문의하기</h3>
              <q-form>
                <q-input 
                  v-model="form.name" 
                  label="이름" 
                  outlined 
                  class="q-mb-md"
                />
                <q-input 
                  v-model="form.email" 
                  label="이메일" 
                  type="email" 
                  outlined 
                  class="q-mb-md"
                />
                <q-input 
                  v-model="form.subject" 
                  label="제목" 
                  outlined 
                  class="q-mb-md"
                />
                <q-input 
                  v-model="form.message" 
                  label="메시지" 
                  type="textarea" 
                  rows="4" 
                  outlined 
                  class="q-mb-md"
                />
                <q-btn 
                  color="primary" 
                  unelevated 
                  size="lg" 
                  class="full-width"
                  @click="submitForm"
                >
                  문의 보내기
                </q-btn>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // TODO: 폼 제출 로직 구현
      this.$q.notify({
        type: 'positive',
        message: '문의가 성공적으로 전송되었습니다.'
      })
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

.contact-card
  border-radius: 16px

.contact-item
  display: flex
  align-items: center
  font-size: 1rem
</style>
