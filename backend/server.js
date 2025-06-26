const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { sequelize, testConnection } = require('./config/database');
require('dotenv').config();

const app = express();

// 보안 미들웨어
app.use(helmet());

// CORS 설정
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:8080',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: (process.env.RATE_LIMIT_WINDOW || 15) * 60 * 1000, // 15분
  max: process.env.RATE_LIMIT_MAX || 100 // 요청 제한
});
app.use('/api', limiter);

// Body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// 정적 파일 서빙
app.use('/uploads', express.static('uploads'));

// 데이터베이스 연결 및 동기화
const initializeDatabase = async () => {
  try {
    await testConnection();
    
    // 개발 환경에서만 테이블 동기화 (프로덕션에서는 마이그레이션 사용)
    if (process.env.NODE_ENV === 'development') {
      await sequelize.sync({ alter: true });
      console.log('✅ 데이터베이스 테이블 동기화 완료');
    }
  } catch (error) {
    console.error('❌ 데이터베이스 초기화 실패:', error);
    process.exit(1);
  }
};

// 라우트 설정
// app.use('/api/projects', require('./routes/projects'));
// app.use('/api/researchers', require('./routes/researchers'));
// app.use('/api/news', require('./routes/news'));
// app.use('/api/auth', require('./routes/auth'));

// 기본 라우트
app.get('/', (req, res) => {
  res.json({
    message: 'EAN테크놀로지 부설 기술연구소 API 서버',
    version: '1.0.0',
    status: 'running',
    database: 'PostgreSQL',
    features: {
      research_categories: [
        '국책연구', '위탁연구', '사내연구', '기술개발', 
        '사업화', '특허', '논문연구', '컨설팅'
      ],
      technology_fields: [
        'AERONET', 'PEARNET', 'LEEMO', 'FUMUNET', 'DYPER-NET'
      ]
    }
  });
});

// 404 에러 핸들링
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: '요청한 리소스를 찾을 수 없습니다.'
  });
});

// 전역 에러 핸들링
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' 
      ? '서버 내부 오류가 발생했습니다.'
      : error.message
  });
});

const PORT = process.env.PORT || 3000;

// 서버 시작
const startServer = async () => {
  await initializeDatabase();
  
  app.listen(PORT, () => {
    console.log(`🚀 서버가 포트 ${PORT}에서 실행 중입니다.`);
    console.log(`📍 환경: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🗄️  데이터베이스: PostgreSQL`);
    console.log(`📊 프로젝트 분류: 연구 유형별 (국책/위탁/사내/개발/사업화/특허/논문/컨설팅)`);
  });
};

startServer().catch(error => {
  console.error('❌ 서버 시작 실패:', error);
  process.exit(1);
});