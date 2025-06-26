# CMS 시스템 & 필터링 기능 상세 기획서

## 1. CMS (Content Management System) 기능 명세

### 1.1 시스템 아키텍처
```
Frontend (React/Vue.js)
├── Public Website (일반 사용자)
└── Admin Panel (관리자)

Backend (Node.js/Express)
├── RESTful API
├── Authentication & Authorization
└── File Upload Management

Database (MongoDB/PostgreSQL)
├── Projects Collection/Table
├── Researchers Collection/Table
├── News Collection/Table
└── Users Collection/Table
```

### 1.2 관리자 기능

#### 프로젝트 관리
- **프로젝트 추가**
  - 프로젝트명 (한글/영문)
  - 프로젝트 분류 (AERONET, PEARNET, LEEMO, FUMUNET, DYPER-NET)
  - 시작일/종료일
  - 상태 (계획중, 진행중, 완료)
  - 상세 설명
  - 기술 키워드
  - 관련 이미지/도면 업로드
  - 참여 연구진 선택

- **프로젝트 수정/삭제**
  - 기존 프로젝트 정보 수정
  - 프로젝트 상태 변경
  - 프로젝트 삭제 (관련 데이터 정리)

#### 연구진 관리
- **연구진 추가**
  - 이름
  - 직급 (CEO, 부사장, 본부장, 선임연구원, 연구원)
  - 전문 분야
  - 프로필 사진
  - 이메일
  - 약력/경력사항

- **연구진 수정/삭제**
  - 정보 업데이트
  - 직급 변경
  - 퇴사자 처리 (비활성화)

#### 뉴스/공지사항 관리
- **뉴스 작성**
  - 제목
  - 내용 (WYSIWYG 에디터)
  - 카테고리 (연구소 소식, 연구 성과, 협력 소식 등)
  - 공개일/종료일
  - 첨부 파일

#### 연구 성과 관리
- **논문/특허 등록**
  - 제목
  - 저자
  - 게재지/등록처
  - 발표일
  - 카테고리 (논문, 특허, 수상)
  - PDF 파일 업로드
## 2. 프로젝트 필터링 시스템 (dmppartners 스타일)

### 2.1 필터 카테고리 구성

#### 연구 분류별 필터 (업데이트됨)
```
전체
├── 국책연구 (정부 과제)
├── 위탁연구 (기업 의뢰)
├── 사내연구 (자체 R&D)
├── 기술개발 (기술 개발 프로젝트)
├── 사업화 (사업화 연구)
├── 특허 (특허 관련)
├── 논문연구 (학술 논문)
├── 컨설팅 (기술 컨설팅)
└── 기타
```

#### 기술 분야별 필터 (태그 형태)
```
전체
├── AERONET (환경 센싱 네트워크)
├── PEARNET (개인화 환경 적응)
├── LEEMO (에너지 관리 최적화)
├── FUMUNET (디지털 트윈 시뮬레이션)
├── DYPER-NET (동적 개인화 쾌적성)
├── IoT 센서
├── AI/머신러닝
├── 제어 알고리즘
├── 디지털 트윈
├── 에너지 최적화
└── 환경 모니터링
```

### 2.2 검색 기능
- **키워드 검색**: 프로젝트명, 설명, 기술 키워드에서 검색
- **복합 필터**: 여러 조건 동시 적용
- **정렬 옵션**: 
  - 최신순
  - 가나다순
  - 진행률순

### 2.3 UI/UX 구성 요소

#### 필터 드롭다운 메뉴
```html
<div class="filter-container">
  <select name="research-field">
    <option value="all">연구 분야</option>
    <option value="aeronet">AERONET</option>
    <option value="pearnet">PEARNET</option>
    <!-- ... -->
  </select>
  
  <select name="status">
    <option value="all">프로젝트 상태</option>
    <option value="planning">계획중</option>
    <option value="ongoing">진행중</option>
    <option value="completed">완료</option>
  </select>
  
  <select name="year">
    <option value="all">연도</option>
    <option value="2025">2025</option>
    <!-- ... -->
  </select>
</div>
```
#### 프로젝트 카드 레이아웃 (아이패드 스타일)
```css
.project-card {
  background: white;
  border-radius: 16px; /* 아이패드 스타일 둥근 모서리 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 24px;
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
}
```

### 2.4 프로젝트 카드 구성 요소
- **프로젝트 썸네일** (16:9 비율)
- **프로젝트명** (한글/영문)
- **연구 분야 태그** (컬러 코딩)
- **진행 상태 배지**
- **시작일 ~ 종료일**
- **참여 연구진** (프로필 사진)
- **기술 키워드** (해시태그 형태)
- **간단 설명** (2-3줄)

## 3. 데이터베이스 스키마 설계

### 3.1 Projects 테이블
```javascript
{
  _id: ObjectId,
  title_ko: String, // 한글 제목
  title_en: String, // 영문 제목
  category: String, // AERONET, PEARNET, LEEMO, FUMUNET, DYPER-NET
  status: String, // planning, ongoing, completed
  start_date: Date,
  end_date: Date,
  description: String,
  technologies: [String], // 기술 키워드 배열
  researchers: [ObjectId], // 연구진 ID 배열
  images: [String], // 이미지 파일 경로 배열
  documents: [String], // 문서 파일 경로 배열
  created_at: Date,
  updated_at: Date
}
```

### 3.2 Researchers 테이블
```javascript
{
  _id: ObjectId,
  name: String,
  position: String, // CEO, 부사장, 본부장, 선임연구원, 연구원
  specialization: [String], // 전문 분야
  email: String,
  profile_image: String,
  bio: String, // 약력
  is_active: Boolean, // 재직 여부
  created_at: Date,
  updated_at: Date
}
```

### 3.3 News 테이블
```javascript
{
  _id: ObjectId,
  title: String,
  content: String, // HTML 콘텐츠
  category: String, // 연구소 소식, 연구 성과, 협력 소식
  author: ObjectId, // 작성자 ID
  publish_date: Date,
  end_date: Date,
  attachments: [String], // 첨부 파일
  is_published: Boolean,
  view_count: Number,
  created_at: Date,
  updated_at: Date
}
```
## 4. 기술 스택 최종 결정

### 4.1 Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (유연한 스키마로 연구 데이터 관리에 적합)
- **Authentication**: JWT (JSON Web Token)
- **File Upload**: Multer + AWS S3 (이미지/문서 파일 관리)
- **Image Processing**: Sharp (썸네일 생성)

### 4.2 Frontend
- **Framework**: Vue.js 3 (학습 곡선이 완만하고 CMS 개발에 적합)
- **UI Framework**: Quasar Framework (Vue 기반, 미니멀 디자인 컴포넌트 풍부)
- **State Management**: Pinia (Vue 3 권장 상태 관리)
- **HTTP Client**: Axios
- **Rich Text Editor**: Quill.js (뉴스/공지사항 작성용)

### 4.3 CMS Admin Panel
- **Admin Framework**: Vue.js + Quasar Admin Template
- **차트/그래프**: Chart.js (연구 성과 시각화)
- **Date Picker**: Vue Datepicker
- **File Upload**: Vue File Agent (드래그앤드롭 파일 업로드)

## 5. 개발 단계별 계획

### Phase 1: 기본 구조 및 CMS 개발 (2주)
1. 프로젝트 초기 설정
2. 데이터베이스 스키마 구현
3. 기본 API 개발
4. CMS Admin Panel 기본 기능

### Phase 2: 공개 웹사이트 개발 (2주)
1. 메인 페이지 개발
2. 프로젝트 목록 및 필터링 시스템
3. 연구소 소개 페이지
4. 반응형 디자인 적용

### Phase 3: 고급 기능 및 최적화 (1주)
1. 검색 기능 고도화
2. 이미지 최적화 및 CDN 적용
3. SEO 최적화
4. 성능 튜닝

### Phase 4: 테스트 및 배포 (1주)
1. 기능 테스트
2. 사용성 테스트
3. 배포 환경 구축
4. 모니터링 설정

## 6. 예상 비용 및 리소스

### 6.1 개발 기간: 총 6주
### 6.2 필요 리소스
- Frontend 개발자: 1명
- Backend 개발자: 1명
- UI/UX 디자이너: 0.5명 (파트타임)

### 6.3 운영 비용 (월간)
- 서버 호스팅: $50-100
- 파일 스토리지: $20-50
- 도메인 및 SSL: $20

---
*CMS 시스템 기획서 v1.0 - 2025.06.26*