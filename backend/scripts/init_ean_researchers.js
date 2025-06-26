const { Researcher } = require('../models');

// EAN테크놀로지 부설 기술연구소 조직 구성원 정보
const eanResearchers = [
  {
    name: '신지웅',
    name_en: 'Shin Ji-woong',
    position: 'CEO',
    email: 'ceo@eantech.co.kr',
    bio: 'EAN테크놀로지 대표이사로서 회사 전반의 기술 혁신과 사업 전략을 총괄하고 있습니다.',
    specialization: ['기업 전략', '기술 혁신', '사업 개발'],
    research_interests: ['스마트 기술', '산업 혁신', '지속가능한 기술'],
    display_order: 1,
    is_active: true
  },
  {
    name: '김경록',
    name_en: 'Kim Gyeong-rok',
    position: '부사장',
    email: 'vp@eantech.co.kr',
    bio: 'EAN테크놀로지 부사장으로서 연구개발 및 기술 사업화를 담당하고 있습니다.',
    specialization: ['연구개발 관리', '기술 사업화', '프로젝트 관리'],
    research_interests: ['기술 혁신', '산업 응용', '시스템 통합'],
    display_order: 2,
    is_active: true
  },
  {
    name: '안승호',
    name_en: 'Ahn Seung-ho',
    position: '본부장',
    email: 'director@eantech.co.kr',
    bio: 'EAN테크놀로지 부설 기술연구소 본부장으로서 연구소 전반의 연구 방향과 기술 개발을 총괄하고 있습니다.',
    specialization: ['연구소 운영', '기술 개발', '연구 기획'],
    research_interests: ['AI 기술', 'IoT 시스템', '스마트 솔루션'],
    display_order: 3,
    is_active: true
  },
  {
    name: '조현석',
    name_en: 'Jo Hyeon-seok',
    position: '선임연구원',
    email: 'jhs@eantech.co.kr',
    bio: 'EAN테크놀로지 부설 기술연구소 선임연구원으로서 핵심 기술 연구와 개발에 참여하고 있습니다.',
    specialization: ['시스템 개발', '데이터 분석', '알고리즘 연구'],
    research_interests: ['머신러닝', '데이터 사이언스', '시스템 최적화'],
    display_order: 4,
    is_active: true
  },
  {
    name: '김성환',
    name_en: 'Kim Seong-hwan',
    position: '선임연구원',
    email: 'ksh@eantech.co.kr',
    bio: 'EAN테크놀로지 부설 기술연구소 선임연구원으로서 혁신적인 기술 솔루션 개발에 집중하고 있습니다.',
    specialization: ['소프트웨어 개발', '시스템 아키텍처', '기술 연구'],
    research_interests: ['인공지능', '소프트웨어 엔지니어링', '시스템 통합'],
    display_order: 5,
    is_active: true
  },
  {
    name: '이정아',
    name_en: 'Lee Jeong-a',
    position: '선임연구원',
    email: 'lja@eantech.co.kr',
    bio: 'EAN테크놀로지 부설 기술연구소 선임연구원으로서 첨단 기술 연구와 응용에 전념하고 있습니다.',
    specialization: ['연구 분석', '기술 개발', '프로젝트 관리'],
    research_interests: ['IoT 기술', '스마트 시스템', '데이터 분석'],
    display_order: 6,
    is_active: true
  }
];

// 데이터베이스 초기화 함수
async function initializeEANResearchers() {
  try {
    console.log('🚀 EAN테크놀로지 부설 기술연구소 조직 구성원 정보 초기화 중...');
    
    // 기존 데이터 삭제 (필요한 경우)
    await Researcher.destroy({ where: {} });
    console.log('✅ 기존 연구원 데이터 삭제 완료');
    
    // 새로운 조직 구성원 정보 추가
    for (const researcher of eanResearchers) {
      await Researcher.create(researcher);
      console.log(`✅ ${researcher.name} ${researcher.position} 추가 완료`);
    }
    
    console.log('🎉 EAN테크놀로지 부설 기술연구소 조직 구성원 정보 초기화 완료!');
    console.log(`📊 총 ${eanResearchers.length}명의 구성원이 등록되었습니다.`);
    
  } catch (error) {
    console.error('❌ 초기화 중 오류 발생:', error);
    throw error;
  }
}

// 직접 실행 시
if (require.main === module) {
  const sequelize = require('../config/database');
  
  sequelize.sync().then(() => {
    return initializeEANResearchers();
  }).then(() => {
    console.log('🔄 데이터베이스 연결 종료');
    process.exit(0);
  }).catch((error) => {
    console.error('❌ 실행 중 오류:', error);
    process.exit(1);
  });
}

module.exports = initializeEANResearchers; 