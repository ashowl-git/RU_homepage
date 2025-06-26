const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title_ko: {
    type: DataTypes.STRING(200),
    allowNull: false,
    validate: {
      notEmpty: { msg: '한글 제목은 필수입니다' },
      len: { args: [1, 200], msg: '제목은 200자를 초과할 수 없습니다' }
    }
  },
  title_en: {
    type: DataTypes.STRING(200),
    allowNull: false,
    validate: {
      notEmpty: { msg: '영문 제목은 필수입니다' },
      len: { args: [1, 200], msg: '제목은 200자를 초과할 수 없습니다' }
    }
  },
  // 새로운 연구 분류 (연구 유형별)
  category: {
    type: DataTypes.ENUM(
      '국책연구',      // 정부 과제
      '위탁연구',      // 기업 의뢰 연구
      '사내연구',      // 자체 R&D
      '기술개발',      // 기술 개발 프로젝트
      '사업화',        // 사업화 연구
      '특허',          // 특허 관련
      '논문연구',      // 학술 논문
      '컨설팅',        // 기술 컨설팅
      '기타'           // 기타
    ),
    allowNull: false,
    validate: {
      notEmpty: { msg: '연구 분류는 필수입니다' }
    }
  },
  // 기술 분야 (기존 AERONET 등을 기술 태그로 활용)
  technology_fields: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
    comment: 'AERONET, PEARNET, LEEMO, FUMUNET, DYPER-NET 등 기술 분야'
  },
  status: {
    type: DataTypes.ENUM('planning', 'ongoing', 'completed', 'paused'),
    allowNull: false,
    defaultValue: 'planning'
  },
  start_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      notEmpty: { msg: '시작일은 필수입니다' },
      isDate: { msg: '유효한 날짜를 입력해주세요' }
    }
  },
  end_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      notEmpty: { msg: '종료일은 필수입니다' },
      isDate: { msg: '유효한 날짜를 입력해주세요' },
      isAfterStartDate(value) {
        if (value <= this.start_date) {
          throw new Error('종료일은 시작일보다 늦어야 합니다');
        }
      }
    }
  },  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: { msg: '프로젝트 설명은 필수입니다' }
    }
  },
  summary: {
    type: DataTypes.STRING(500),
    comment: '프로젝트 요약 (카드에 표시용)'
  },
  technologies: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
    comment: '사용 기술 키워드'
  },
  budget: {
    type: DataTypes.BIGINT,
    comment: '프로젝트 예산 (원)'
  },
  funding_source: {
    type: DataTypes.STRING(100),
    comment: '지원 기관/기업명'
  },
  project_manager_id: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'Researchers',
      key: 'id'
    },
    comment: '프로젝트 관리자'
  },
  images: {
    type: DataTypes.JSONB,
    defaultValue: [],
    comment: '프로젝트 관련 이미지들'
  },
  documents: {
    type: DataTypes.JSONB,
    defaultValue: [],
    comment: '프로젝트 관련 문서들'
  },
  view_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  is_featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    comment: '메인 페이지 노출 여부'
  },
  progress_percentage: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 100
    }
  },
  external_links: {
    type: DataTypes.JSONB,
    defaultValue: {},
    comment: '외부 링크들 (홈페이지, 발표자료 등)'
  },
  achievements: {
    type: DataTypes.TEXT,
    comment: '주요 성과 및 결과'
  }
}, {
  tableName: 'projects',
  timestamps: true,
  indexes: [
    {
      fields: ['category', 'status', 'start_date']
    },
    {
      fields: ['technology_fields'],
      using: 'gin'
    },
    {
      type: 'FULLTEXT',
      fields: ['title_ko', 'title_en', 'description']
    }
  ]
});

// 가상 필드 - 진행 기간 계산
Project.prototype.getDurationDays = function() {
  if (this.start_date && this.end_date) {
    const diffTime = Math.abs(new Date(this.end_date) - new Date(this.start_date));
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
  return 0;
};

module.exports = Project;