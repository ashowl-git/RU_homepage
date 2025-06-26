const express = require('express');
const router = express.Router();
const Researcher = require('../models/Researcher');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const { validationResult, body } = require('express-validator');

// 연구진 목록 조회 (직급별 정렬)
router.get('/', async (req, res) => {
  try {
    const { position, active_only = 'true', search } = req.query;

    const filter = {};
    
    if (position && position !== 'all') {
      filter.position = position;
    }
    
    if (active_only === 'true') {
      filter.is_active = true;
    }
    
    if (search) {
      filter.$text = { $search: search };
    }

    const researchers = await Researcher.find(filter)
      .sort({ 
        position_order: 1, 
        display_order: 1, 
        name: 1 
      })
      .lean();

    res.json({
      success: true,
      data: researchers
    });

  } catch (error) {
    console.error('연구진 목록 조회 오류:', error);
    res.status(500).json({
      success: false,
      message: '연구진 목록을 조회하는 중 오류가 발생했습니다.'
    });
  }
});

// 특정 연구원 조회
router.get('/:id', async (req, res) => {
  try {
    const researcher = await Researcher.findById(req.params.id).lean();

    if (!researcher) {
      return res.status(404).json({
        success: false,
        message: '연구원을 찾을 수 없습니다.'
      });
    }

    res.json({
      success: true,
      data: researcher
    });

  } catch (error) {
    console.error('연구원 조회 오류:', error);
    res.status(500).json({
      success: false,
      message: '연구원을 조회하는 중 오류가 발생했습니다.'
    });
  }
});
// 연구원 생성 (관리자 전용)
router.post('/', [
  auth,
  upload.single('profile_image'),
  [
    body('name').notEmpty().withMessage('이름은 필수입니다'),
    body('position').isIn(['CEO', '부사장', '본부장', '선임연구원', '연구원', '인턴'])
      .withMessage('유효한 직급을 선택해주세요'),
    body('email').optional().isEmail().withMessage('유효한 이메일을 입력해주세요')
  ]
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: '입력 데이터가 유효하지 않습니다.',
        errors: errors.array()
      });
    }

    const researcherData = {
      ...req.body,
      specialization: req.body.specialization ? 
        req.body.specialization.split(',').map(s => s.trim()) : []
    };

    // 프로필 이미지 정보 추가
    if (req.file) {
      researcherData.profile_image = {
        filename: req.file.filename,
        original_name: req.file.originalname,
        path: req.file.path,
        size: req.file.size,
        mimetype: req.file.mimetype
      };
    }

    const researcher = new Researcher(researcherData);
    await researcher.save();

    res.status(201).json({
      success: true,
      message: '연구원이 성공적으로 추가되었습니다.',
      data: researcher
    });

  } catch (error) {
    console.error('연구원 생성 오류:', error);
    res.status(500).json({
      success: false,
      message: '연구원 추가 중 오류가 발생했습니다.'
    });
  }
});

// 연구원 수정 (관리자 전용)
router.put('/:id', [
  auth,
  upload.single('profile_image')
], async (req, res) => {
  try {
    const researcher = await Researcher.findById(req.params.id);
    
    if (!researcher) {
      return res.status(404).json({
        success: false,
        message: '연구원을 찾을 수 없습니다.'
      });
    }

    const updateData = { ...req.body };
    
    if (req.body.specialization) {
      updateData.specialization = req.body.specialization.split(',').map(s => s.trim());
    }

    // 새 프로필 이미지가 업로드된 경우
    if (req.file) {
      updateData.profile_image = {
        filename: req.file.filename,
        original_name: req.file.originalname,
        path: req.file.path,
        size: req.file.size,
        mimetype: req.file.mimetype
      };
    }

    const updatedResearcher = await Researcher.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      message: '연구원 정보가 성공적으로 수정되었습니다.',
      data: updatedResearcher
    });

  } catch (error) {
    console.error('연구원 수정 오류:', error);
    res.status(500).json({
      success: false,
      message: '연구원 정보 수정 중 오류가 발생했습니다.'
    });
  }
});

// 연구원 삭제 (비활성화)
router.delete('/:id', auth, async (req, res) => {
  try {
    const researcher = await Researcher.findById(req.params.id);
    
    if (!researcher) {
      return res.status(404).json({
        success: false,
        message: '연구원을 찾을 수 없습니다.'
      });
    }

    // 실제 삭제 대신 비활성화
    await Researcher.findByIdAndUpdate(req.params.id, { is_active: false });

    res.json({
      success: true,
      message: '연구원이 성공적으로 비활성화되었습니다.'
    });

  } catch (error) {
    console.error('연구원 삭제 오류:', error);
    res.status(500).json({
      success: false,
      message: '연구원 삭제 중 오류가 발생했습니다.'
    });
  }
});

module.exports = router;