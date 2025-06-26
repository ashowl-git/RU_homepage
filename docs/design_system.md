# EAN테크놀로지 부설 기술연구소 디자인 시스템

## 🎨 컬러 팔레트 (EAN 테크놀로지 CI)

### Primary Colors
```css
/* 그린 - 메인 브랜드 컬러 */
--primary-green: #8BC34A; /* R132 G185 B37 / C54 M6 Y100 K0 */
--primary-green-rgb: 132, 185, 37;
--primary-green-hsl: 81, 67%, 44%;

/* 블루 - 보조 브랜드 컬러 */
--primary-blue: #1E4788; /* R35 G71 B138 / C98 M83 Y15 K3 */
--primary-blue-rgb: 30, 71, 138;
--primary-blue-hsl: 216, 64%, 33%;

/* 그레이 - 중성 컬러 */
--primary-gray: #757B7A; /* R118 G119 B122 / C56 M46 Y44 K11 */
--primary-gray-rgb: 117, 123, 122;
--primary-gray-hsl: 174, 2%, 47%;
```

### Color Variations (자동 생성된 톤)
```css
/* Green Variations */
--green-50: #f3f8e8;
--green-100: #e7f1d1;
--green-200: #d4e7a3;
--green-300: #c1dd75;
--green-400: #aed347;
--green-500: #8bc34a; /* Primary */
--green-600: #7aa63e;
--green-700: #688832;
--green-800: #566b26;
--green-900: #444e1a;

/* Blue Variations */
--blue-50: #e8ecf5;
--blue-100: #d1d9eb;
--blue-200: #a3b3d7;
--blue-300: #758dc3;
--blue-400: #4767af;
--blue-500: #1e4788; /* Primary */
--blue-600: #1a3f7a;
--blue-700: #16376c;
--blue-800: #122f5e;
--blue-900: #0e2750;

/* Gray Variations */
--gray-50: #f7f8f8;
--gray-100: #eff0f0;
--gray-200: #dfe1e1;
--gray-300: #cfd2d2;
--gray-400: #bfc3c3;
--gray-500: #757b7a; /* Primary */
--gray-600: #676d6c;
--gray-700: #595f5e;
--gray-800: #4b5150;
--gray-900: #3d4342;
```

### Semantic Colors
```css
/* Success */
--success: var(--green-500);
--success-bg: var(--green-50);
--success-border: var(--green-200);

/* Info */
--info: var(--blue-500);
--info-bg: var(--blue-50);
--info-border: var(--blue-200);

/* Warning */
--warning: #f59e0b;
--warning-bg: #fef3c7;
--warning-border: #fde68a;

/* Error */
--error: #ef4444;
--error-bg: #fee2e2;
--error-border: #fecaca;

/* Neutral */
--neutral: var(--gray-500);
--neutral-bg: var(--gray-50);
--neutral-border: var(--gray-200);
```
## 📐 Border Radius (애플 스타일 둥근 모서리)

### Border Radius Scale
```css
/* 애플 스타일 border-radius */
--radius-xs: 4px;   /* 작은 버튼, 뱃지 */
--radius-sm: 8px;   /* 버튼, 입력 필드 */
--radius-md: 12px;  /* 카드, 패널 */
--radius-lg: 16px;  /* 큰 카드, 모달 */
--radius-xl: 20px;  /* 대형 컨테이너 */
--radius-2xl: 24px; /* 히어로 섹션 */
--radius-full: 9999px; /* 원형 (프로필 이미지) */
```

### Component-Specific Radius
```css
/* 컴포넌트별 적용 */
.btn { border-radius: var(--radius-sm); }
.card { border-radius: var(--radius-lg); }
.modal { border-radius: var(--radius-xl); }
.avatar { border-radius: var(--radius-full); }
.input { border-radius: var(--radius-sm); }
.badge { border-radius: var(--radius-xs); }
```

## 🔤 Typography

### Font Family
```css
/* 한글: Pretendard, 영문: Inter */
--font-primary: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
--font-mono: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
```

### Font Sizes
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

### Line Heights
```css
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

## 📊 Spacing Scale
```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
```
## 🎭 Shadows (깊이감 표현)
```css
/* 미니멀한 그림자 */
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

/* 호버 효과용 그림자 */
--shadow-hover: 0 8px 30px rgba(132, 185, 37, 0.12);
--shadow-focus: 0 0 0 3px rgba(132, 185, 37, 0.1);
```

## 🔄 Transitions
```css
--transition-fast: 150ms ease;
--transition-normal: 300ms ease;
--transition-slow: 500ms ease;

/* 컴포넌트별 트랜지션 */
--transition-colors: color 150ms ease, background-color 150ms ease, border-color 150ms ease;
--transition-transform: transform 300ms ease;
--transition-opacity: opacity 200ms ease;
```

## 🧩 Component Styles

### Card Component
```css
.card {
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: var(--space-6);
  transition: var(--transition-transform), box-shadow var(--transition-normal);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.card--research {
  border-top: 4px solid var(--primary-green);
}

.card--project {
  border-left: 4px solid var(--primary-blue);
}
```

### Button Component
```css
.btn {
  border-radius: var(--radius-sm);
  padding: var(--space-3) var(--space-6);
  font-weight: 500;
  transition: var(--transition-colors);
  border: 1px solid transparent;
}

.btn--primary {
  background: var(--primary-green);
  color: white;
}

.btn--primary:hover {
  background: var(--green-600);
  box-shadow: var(--shadow-hover);
}

.btn--secondary {
  background: var(--primary-blue);
  color: white;
}

.btn--outline {
  background: transparent;
  border-color: var(--primary-green);
  color: var(--primary-green);
}
```
### Filter Component (dmppartners 스타일)
```css
.filter-container {
  display: flex;
  gap: var(--space-4);
  align-items: center;
  padding: var(--space-4);
  background: var(--gray-50);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-6);
}

.filter-select {
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-sm);
  padding: var(--space-3) var(--space-4);
  min-width: 150px;
  transition: var(--transition-colors);
}

.filter-select:focus {
  outline: none;
  border-color: var(--primary-green);
  box-shadow: var(--shadow-focus);
}

.filter-search {
  flex: 1;
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-sm);
  padding: var(--space-3) var(--space-4);
  transition: var(--transition-colors);
}
```

### Project Card (연구 프로젝트용)
```css
.project-card {
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: var(--transition-transform), box-shadow var(--transition-normal);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.project-card__image {
  aspect-ratio: 16/9;
  background: var(--gray-100);
  border-radius: var(--radius-md) var(--radius-md) 0 0;
}

.project-card__content {
  padding: var(--space-6);
}

.project-card__category {
  display: inline-block;
  background: var(--green-100);
  color: var(--green-700);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-xs);
  font-size: var(--text-sm);
  font-weight: 500;
  margin-bottom: var(--space-3);
}

.project-card__title {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--space-2);
  line-height: var(--leading-tight);
}

.project-card__description {
  color: var(--gray-600);
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
  margin-bottom: var(--space-4);
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.project-card__tag {
  background: var(--blue-50);
  color: var(--blue-700);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-xs);
  font-size: var(--text-xs);
}
```
## 📱 Responsive Breakpoints
```css
/* 모바일 퍼스트 접근 */
--breakpoint-sm: 640px;   /* 모바일 가로 */
--breakpoint-md: 768px;   /* 태블릿 */
--breakpoint-lg: 1024px;  /* 데스크톱 */
--breakpoint-xl: 1280px;  /* 대형 데스크톱 */
--breakpoint-2xl: 1536px; /* 초대형 화면 */
```

## 🎯 사용 가이드라인

### 1. 컬러 사용 원칙
- **그린 (#8BC34A)**: 메인 액션, 성공 상태, 브랜드 강조
- **블루 (#1E4788)**: 보조 액션, 정보 전달, 신뢰성 표현
- **그레이 (#757B7A)**: 중성적 요소, 텍스트, 비활성 상태

### 2. 둥근 모서리 적용
- **작은 요소** (버튼, 태그): 8px
- **카드**: 16px
- **모달, 큰 컨테이너**: 20-24px
- **프로필 이미지**: 완전한 원형

### 3. 그림자 사용
- **기본 카드**: shadow-sm
- **호버 상태**: shadow-lg
- **중요한 요소**: shadow-xl
- **포커스**: 브랜드 컬러 기반 focus shadow

### 4. 타이포그래피
- **헤딩**: 굵은 폰트 (600-700)
- **본문**: 일반 폰트 (400-500)
- **캡션**: 작은 크기 + 연한 색상

## 🖼️ 컴포넌트 예시

### 연구 분야별 컬러 코딩
```css
/* 연구 분류별 컬러 */
.category--국책연구 { border-color: var(--primary-blue); }
.category--위탁연구 { border-color: var(--primary-green); }
.category--사내연구 { border-color: var(--gray-500); }
.category--기술개발 { border-color: #f59e0b; }
.category--사업화 { border-color: #8b5cf6; }
.category--특허 { border-color: #ef4444; }
.category--논문연구 { border-color: #06b6d4; }
.category--컨설팅 { border-color: #84cc16; }
```

### 상태별 컬러
```css
.status--planning { 
  background: var(--gray-100); 
  color: var(--gray-700); 
}
.status--ongoing { 
  background: var(--blue-100); 
  color: var(--blue-700); 
}
.status--completed { 
  background: var(--green-100); 
  color: var(--green-700); 
}
.status--paused { 
  background: var(--warning-bg); 
  color: #92400e; 
}
```

---
*디자인 시스템 v1.0 - 2025.06.26*
*기반: EAN테크놀로지 CI 컬러 + 애플 스타일 디자인*