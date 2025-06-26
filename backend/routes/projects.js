const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const { validationResult, body } = require('express-validator');

// 프로젝트 목록 조회 (필터링 포함)
router.get('/', async (req, res) => {
  try {
    const {
      category,
      status,
      year,
      technology,
      featured,
      search,
      page = 1,
      limit = 10,
      sort = '-start_date'
    } = req.query;

    // 필터 조건 구성
    const filter = {};
    
    if (category && category !== 'all') {
      filter.category = category;
    }
    
    if (status && status !== 'all') {
      filter.status = status;
    }
    
    if (year && year !== 'all') {
      const startYear = new Date(`${year}-01-01`);
      const endYear = new Date(`${year}-12-31`);
      filter.start_date = { $gte: startYear, $lte: endYear };
    }
    
    if (technology) {
      filter.technologies = { $in: [new RegExp(technology, 'i')] };
    }
    
    if (featured === 'true') {
      filter.is_featured = true;
    }
    
    if (search) {
      filter.$text = { $search: search };
    }

    // 페이지네이션 설정
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    const skip = (pageNumber - 1) * limitNumber;

    // 프로젝트 조회
    const projects = await Project.find(filter)
      .populate('researchers', 'name position profile_image')
      .sort(sort)
      .skip(skip)
      .limit(limitNumber)
      .lean();

    // 총 개수 조회
    const total = await Project.countDocuments(filter);

    res.json({
      success: true,
      data: {
        projects,
        pagination: {
          current_page: pageNumber,
          total_pages: Math.ceil(total / limitNumber),
          total_items: total,
          items_per_page: limitNumber
        }
      }
    });

  } catch (error) {
    console.error('프로젝트 목록 조회 오류:', error);
    res.status(500).json({
      success: false,
      message: '프로젝트 목록을 조회하는 중 오류가 발생했습니다.'
    });
  }
});      message: '프로젝트를 조회하는 중 오류가 발생했습니다.'
    });
  }
});

// 프로젝트 생성 (관리자 전용)
router.post('/', [
  auth,
  upload.fields([
    { name: 'images', maxCount: 10 },
    { name: 'documents', maxCount: 5 }
  ]),
  [
    body('title_ko').notEmpty().withMessage('한글 제목은 필수입니다'),
    body('title_en').notEmpty().withMessage('영문 제목은 필수입니다'),
    body('category').isIn(['AERONET', 'PEARNET', 'LEEMO', 'FUMUNET', 'DYPER-NET'])
      .withMessage('유효한 연구 분야를 선택해주세요'),
    body('status').isIn(['planning', 'ongoing', 'completed'])
      .withMessage('유효한 상태를 선택해주세요'),
    body('start_date').isISO8601().withMessage('유효한 시작일을 입력해주세요'),
    body('end_date').isISO8601().withMessage('유효한 종료일을 입력해주세요'),
    body('description').notEmpty().withMessage('프로젝트 설명은 필수입니다')
  ]
], async (req, res) => {
  try {
    // 유효성 검사 오류 확인
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: '입력 데이터가 유효하지 않습니다.',
        errors: errors.array()
      });
    }

    const projectData = {
      ...req.body,
      technologies: req.body.technologies ? req.body.technologies.split(',').map(t => t.trim()) : [],
      researchers: req.body.researchers ? req.body.researchers.split(',') : []
    };

    // 파일 정보 추가
    if (req.files) {
      if (req.files.images) {
        projectData.images = req.files.images.map(file => ({
          filename: file.filename,
          original_name: file.originalname,
          path: file.path,
          size: file.size,
          mimetype: file.mimetype
        }));
      }

      if (req.files.documents) {
        projectData.documents = req.files.documents.map(file => ({
          filename: file.filename,
          original_name: file.originalname,
          path: file.path,
          size: file.size,
          mimetype: file.mimetype
        }));
      }
    }

    const project = new Project(projectData);
    await project.save();

    const populatedProject = await Project.findById(project._id)
      .populate('researchers', 'name position profile_image');

    res.status(201).json({
      success: true,
      message: '프로젝트가 성공적으로 생성되었습니다.',
      data: populatedProject
    });

  } catch (error) {
    console.error('프로젝트 생성 오류:', error);
    res.status(500).json({
      success: false,
      message: '프로젝트 생성 중 오류가 발생했습니다.'
    });
  }
});
// 프로젝트 수정 (관리자 전용)
router.put('/:id', [
  auth,
  upload.fields([
    { name: 'images', maxCount: 10 },
    { name: 'documents', maxCount: 5 }
  ])
], async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: '프로젝트를 찾을 수 없습니다.'
      });
    }

    // 업데이트할 데이터 준비
    const updateData = { ...req.body };
    
    if (req.body.technologies) {
      updateData.technologies = req.body.technologies.split(',').map(t => t.trim());
    }
    
    if (req.body.researchers) {
      updateData.researchers = req.body.researchers.split(',');
    }

    // 새 파일 추가
    if (req.files) {
      if (req.files.images) {
        const newImages = req.files.images.map(file => ({
          filename: file.filename,
          original_name: file.originalname,
          path: file.path,
          size: file.size,
          mimetype: file.mimetype
        }));
        updateData.images = [...(project.images || []), ...newImages];
      }

      if (req.files.documents) {
        const newDocuments = req.files.documents.map(file => ({
          filename: file.filename,
          original_name: file.originalname,
          path: file.path,
          size: file.size,
          mimetype: file.mimetype
        }));
        updateData.documents = [...(project.documents || []), ...newDocuments];
      }
    }

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    ).populate('researchers', 'name position profile_image');

    res.json({
      success: true,
      message: '프로젝트가 성공적으로 수정되었습니다.',
      data: updatedProject
    });

  } catch (error) {
    console.error('프로젝트 수정 오류:', error);
    res.status(500).json({
      success: false,
      message: '프로젝트 수정 중 오류가 발생했습니다.'
    });
  }
});

// 프로젝트 삭제 (관리자 전용)
router.delete('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: '프로젝트를 찾을 수 없습니다.'
      });
    }

    await Project.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: '프로젝트가 성공적으로 삭제되었습니다.'
    });

  } catch (error) {
    console.error('프로젝트 삭제 오류:', error);
    res.status(500).json({
      success: false,
      message: '프로젝트 삭제 중 오류가 발생했습니다.'
    });
  }
});

// 프로젝트 통계 조회
router.get('/stats/overview', async (req, res) => {
  try {
    const stats = await Project.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: 1 },
          ongoing: { $sum: { $cond: [{ $eq: ['$status', 'ongoing'] }, 1, 0] } },
          completed: { $sum: { $cond: [{ $eq: ['$status', 'completed'] }, 1, 0] } },
          planning: { $sum: { $cond: [{ $eq: ['$status', 'planning'] }, 1, 0] } }
        }
      }
    ]);

    const categoryStats = await Project.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 }
        }
      }
    ]);

    res.json({
      success: true,
      data: {
        overview: stats[0] || { total: 0, ongoing: 0, completed: 0, planning: 0 },
        by_category: categoryStats
      }
    });

  } catch (error) {
    console.error('프로젝트 통계 조회 오류:', error);
    res.status(500).json({
      success: false,
      message: '통계 조회 중 오류가 발생했습니다.'
    });
  }
});

module.exports = router;