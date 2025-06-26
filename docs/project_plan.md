# 이안텍(EANTEC) 기업부설 연구소 홈페이지 프로젝트 계획

## 프로젝트 개요
- **프로젝트명**: 이안텍 기업부설 연구소 홈페이지
- **모기업**: (주)이에이엔테크놀로지 (https://www.eantec.co.kr/)
- **목표**: 지능형 건물 에너지 및 환경 관리 시스템 연구성과를 소개하는 전문 연구소 웹사이트 구축
- **개발 환경**: VS Code
- **시작일**: 2025년 6월 26일

## 연구 분야 및 주요 프로젝트
### 차세대 지능형 건물 에너지 및 환경 관리 시스템

#### 핵심 연구 프로젝트
1. **AERONET (Advanced Environmental Response with Omnidirectional NETwork)**
   - 저비용 고효율 다중 모드 센서 네트워크
   - 실시간 환경 데이터 수집 (온도, 습도, CO2, VOC, 미세먼지 등)
   - 재실자 정보 수집 (점유 여부, 위치 등)

2. **PEARNET (Personalized Environment Adaptation via Resident NETwork)**
   - AI 기반 개인별 열 쾌적성 선호도 학습 및 예측
   - 프라이버시 보호 기술 적용 (연합 학습)
   - 개인화된 환경 제어 시스템

3. **LEEMO (Living Environment Energy Management Optimization)**
   - MPC(Model Predictive Control) 및 DRL(Deep Reinforcement Learning) 활용
   - 에너지 효율성과 재실자 만족도 동시 최적화
   - 지능형 HVAC 제어 전략
4. **FUMUNET (Functional Mock-Up–Unified Network for Environment & Thermal comfort)**
   - FMU 디지털 트윈 공동 시뮬레이션 기반
   - 실내환경 최적화 네트워크

5. **DYPER-NET (Dynamic Personal baseline for thermal comfort NETwork)**
   - 다이퍼넷/디퍼넷
   - 동적 개인화 열쾌적성 기준선 네트워크
   - 개인별 맞춤형 쾌적성 제어

## 기술적 특징
- **IoT 센서 네트워크**: 실시간 정밀 데이터 수집
- **인공지능(AI) & 머신러닝(ML)**: 패턴 분석 및 예측
- **모델 예측 제어(MPC)**: 미래 예측 기반 최적 제어
- **심층 강화 학습(DRL)**: 지능형 학습 알고리즘
- **연합 학습**: 프라이버시 보호 개인화 학습

## 프로젝트 목표
1. 기존 BEMS(건물 에너지 관리 시스템)의 규칙 기반 제어 한계 극복
2. 실시간, 개인화된 에너지 및 쾌적성 최적 제어 시스템 구축
3. 에너지 효율성, 재실자 만족도, 시스템 운영 효율성 혁신적 개선
4. 지능형 건물 관리 생태계 구축

## 기술 스택 (최종 결정)
- **Backend**: Node.js + Express.js + Sequelize ORM
- **Database**: PostgreSQL (관계형 DB, 복잡한 쿼리 및 데이터 무결성에 유리)
- **Frontend**: Vue.js 3 + Quasar Framework (미니멀 디자인 + CMS 개발에 최적)
- **차트/시각화**: Chart.js, D3.js (연구 데이터 시각화)
- **File Storage**: Multer + Local Storage (향후 AWS S3 확장 가능)
- **Authentication**: JWT
- **빌드 도구**: Vite (빠른 개발 환경)
- **배포**: Netlify 또는 Vercel

## 프로젝트 분류 체계 (업데이트됨)
### 주요 분류 (category)
- **국책연구**: 정부 과제 및 공공기관 의뢰 연구
- **위탁연구**: 기업 의뢰 연구 프로젝트
- **사내연구**: 자체 R&D 및 기술 개발
- **기술개발**: 특정 기술 개발 프로젝트
- **사업화**: 연구 결과의 사업화 및 상용화
- **특허**: 특허 출원 및 등록 관련
- **논문연구**: 학술 논문 및 연구 발표
- **컨설팅**: 기술 자문 및 컨설팅 서비스

### 기술 분야 태그 (technology_fields)
- AERONET, PEARNET, LEEMO, FUMUNET, DYPER-NET
- IoT 센서, AI/머신러닝, 제어 알고리즘, 디지털 트윈 등
## 주요 페이지 구조
1. **메인 페이지 (Home)**
   - 연구소 소개 히어로 섹션
   - 주요 연구 분야 개요
   - 핵심 프로젝트 하이라이트
   - 최신 연구 성과

2. **연구소 소개 (About)**
   - 연구소 설립 목적 및 비전
   - 연구 철학 및 방향성
   - 조직 구조 및 연구진 소개
   - 모기업(이안텍) 연계성

3. **연구 분야 (Research)**
   - **지능형 건물 관리 시스템**
     - AERONET 프로젝트
     - PEARNET 프로젝트  
     - LEEMO 프로젝트
     - FUMUNET 프로젝트
     - DYPER-NET 프로젝트
   - **기술 혁신 분야**
     - IoT & 센서 네트워크
     - AI & 머신러닝
     - 모델 예측 제어
     - 심층 강화 학습

4. **연구 성과 (Publications)**
   - 논문 발표
   - 특허 출원/등록
   - 학회 발표
   - 수상 실적

5. **협력 & 파트너십 (Collaboration)**
   - 산학 협력
   - 정부 과제
   - 국제 협력
   - 기업 파트너십
6. **뉴스 & 이벤트 (News)**
   - 연구소 소식
   - 연구 개발 동향
   - 세미나/워크샵
   - 채용 공고

7. **연락처 (Contact)**
   - 연구소 위치 및 연락처
   - 연구 협력 문의
   - 견학 신청
   - 채용 문의

## 디자인 컨셉
- **컬러 팔레트**: 과학적이고 전문적인 느낌 (블루, 그린, 화이트 계열)
- **UI/UX**: 클린하고 모던한 디자인
- **시각화**: 연구 데이터 및 시스템 구조도 인터랙티브 표현
- **반응형**: 모든 디바이스에서 최적화된 경험

## 연구진 구성
### 경영진
- **신지웅** CEO
- **김경록** 부사장

### 연구진
- **안승호** 본부장
- **조현석** 선임연구원
- **김성환** 선임연구원
- **이정아** 선임연구원

## 디자인 컨셉 & UI/UX 요구사항
### 디자인 스타일
- **미니멀리즘 컨셉**: 깔끔하고 모던한 디자인
- **아이패드 스타일**: 카드 컴포넌트들의 모서리 둥글게 처리
- **반응형 디자인**: 모든 디바이스 최적화
- **과학적 컬러**: 블루, 그린, 화이트 계열의 신뢰감 있는 색상

### 주요 기능 요구사항
1. **프로젝트 검색 & 필터링 시스템** (참고: http://www.dmppartners.com/works/)
   - 연구 분야별 필터 (AERONET, PEARNET, LEEMO, FUMUNET, DYPER-NET)
   - 연도별 필터 (2023~2025)
   - 상태별 필터 (진행중, 완료, 계획중)
   - 키워드 검색 기능

2. **CMS (Content Management System)**
   - 프로젝트 추가/삭제/수정
   - 연구진 인원 추가/삭제/수정
   - 뉴스/공지사항 관리
   - 연구 성과 업데이트

## 완료된 작업
- [x] 프로젝트 폴더 구조 확인
- [x] docs 폴더 생성
- [x] 이안텍 본사 웹사이트 분석
- [x] 연구 분야 및 프로젝트 정리
- [x] 연구진 정보 정리
- [x] 참고 사이트 분석 (dmppartners 필터링 시스템)
- [x] project_plan.md 파일 생성 및 기획 완료
- [x] CMS 시스템 상세 기획서 작성
- [x] 데이터베이스 스키마 설계
- [x] 기술 스택 최종 결정 (Vue.js + Quasar, Node.js + Express, PostgreSQL)
- [x] 프로젝트 폴더 구조 생성
- [x] Backend/Frontend package.json 설정
- [x] 환경 변수 설정 파일 생성
- [x] MongoDB → PostgreSQL 전환 결정
- [x] 프로젝트 분류 체계 개선 (연구 유형별 분류로 변경)
- [x] PostgreSQL 모델 설계 (Project, Researcher)
- [x] Sequelize ORM 설정
- [x] 인증 미들웨어 구현 (JWT)
- [x] 파일 업로드 미들웨어 구현 (Multer)
- [x] 업로드 디렉토리 구조 생성
- [x] 기본 API 서버 구조 완성

## 다음 단계 (우선순위)
1. [ ] PostgreSQL 데이터베이스 설치 및 설정
2. [ ] User 모델 및 News 모델 완성
3. [ ] 모델 간 관계 설정 (Associations)
4. [ ] 기본 API 라우트 구현 (CRUD)
5. [ ] 초기 데이터 시딩 (연구진 정보)
6. [ ] Frontend Vue.js 프로젝트 초기화

## 특별 고려사항
- **CMS 기능**: 연구진이 쉽게 콘텐츠를 관리할 수 있는 직관적 인터페이스
- **프로젝트 필터링**: 다중 조건 검색 및 정렬 기능
- **미니멀 디자인**: 과학적 내용을 깔끔하게 표현
- **유지보수성**: 향후 연구 프로젝트 추가 시 확장 용이성

---
*최종 업데이트: 2025-06-26*