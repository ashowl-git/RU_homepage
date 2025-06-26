const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Researcher = sequelize.define('Researcher', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: { msg: '연구원 이름은 필수입니다' },
      len: { args: [1, 50], msg: '이름은 50자를 초과할 수 없습니다' }
    }
  },
  name_en: {
    type: DataTypes.STRING(100),
    comment: '영문 이름'
  },
  position: {
    type: DataTypes.ENUM('CEO', '부사장', '본부장', '선임연구원', '연구원', '인턴'),
    allowNull: false,
    validate: {
      notEmpty: { msg: '직급은 필수입니다' }
    }
  },
  specialization: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
    comment: '전문 분야'
  },
  email: {
    type: DataTypes.STRING(100),
    validate: {
      isEmail: { msg: '유효한 이메일 주소를 입력해주세요' }
    }
  },
  phone: {
    type: DataTypes.STRING(20),
    validate: {
      is: { args: /^[0-9-+().\s]+$/, msg: '유효한 전화번호를 입력해주세요' }
    }
  },
  profile_image: {
    type: DataTypes.JSONB,
    defaultValue: null,
    comment: '프로필 이미지 정보'
  },
  bio: {
    type: DataTypes.TEXT,
    comment: '약력'
  },
  education: {
    type: DataTypes.JSONB,
    defaultValue: [],
    comment: '학력 정보'
  },  publications: {
    type: DataTypes.JSONB,
    defaultValue: [],
    comment: '논문/출간물'
  },
  awards: {
    type: DataTypes.JSONB,
    defaultValue: [],
    comment: '수상 경력'
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  join_date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  },
  social_links: {
    type: DataTypes.JSONB,
    defaultValue: {},
    comment: 'LinkedIn, ORCID 등 소셜 링크'
  },
  display_order: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    comment: '표시 순서'
  },
  research_interests: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
    comment: '연구 관심 분야'
  }
}, {
  tableName: 'researchers',
  timestamps: true,
  indexes: [
    {
      fields: ['position', 'display_order']
    },
    {
      fields: ['is_active']
    },
    {
      type: 'FULLTEXT',
      fields: ['name', 'bio']
    },
    {
      fields: ['specialization'],
      using: 'gin'
    }
  ]
});

// 직급별 순서 정의
const positionOrder = {
  'CEO': 1,
  '부사장': 2,
  '본부장': 3,
  '선임연구원': 4,
  '연구원': 5,
  '인턴': 6
};

// 인스턴스 메서드 - 직급 순서 가져오기
Researcher.prototype.getPositionOrder = function() {
  return positionOrder[this.position] || 999;
};

// 정적 메서드 - 활성 연구원 조회 (직급 순서대로)
Researcher.findActiveByPosition = function() {
  return this.findAll({
    where: { is_active: true },
    order: [
      [sequelize.literal(`CASE 
        WHEN position = 'CEO' THEN 1
        WHEN position = '부사장' THEN 2
        WHEN position = '본부장' THEN 3
        WHEN position = '선임연구원' THEN 4
        WHEN position = '연구원' THEN 5
        WHEN position = '인턴' THEN 6
        ELSE 999 END`), 'ASC'],
      ['display_order', 'ASC'],
      ['name', 'ASC']
    ]
  });
};

module.exports = Researcher;