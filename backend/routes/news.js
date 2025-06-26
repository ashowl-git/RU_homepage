const express = require('express');
const router = express.Router();
const News = require('../models/News');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const { validationResult, body } = require('express-validator');

// 뉴스 목록 조회 (공개용)
router.get('/', async (req, res) => {
  try {
    const {
      category,
      featured,
      search,
      page = 1,
      limit = 10,
      sort = '-publish_date'
    } = req.query;

    const filter = { is_published: true, publish_date: { $lte: new Date() } };
    
    if (category && category !== 'all') {
      filter.category = category;
    }
    
    if (featured === 'true') {
      filter.is_featured = true;
    }
    
    if (search) {
      filter.$text = { $search: search };
    }

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    const skip = (pageNumber - 1) * limitNumber;

    const news = await News.find(filter)
      .populate('author', 'name position profile_image')
      .populate('related_projects', 'title_ko title_en category')
      .sort(sort)
      .skip(skip)
      .limit(limitNumber)
      .lean();

    const total = await News.countDocuments(filter);

    res.json({
      success: true,
      data: {
        news,
        pagination: {
          current_page: pageNumber,
          total_pages: Math.ceil(total / limitNumber),
          total_items: total,
          items_per_page: limitNumber
        }
      }
    });

  } catch (error) {
    console.error('뉴스 목록 조회 오류:', error);
    res.status(500).json({
      success: false,
      message: '뉴스 목록을 조회하는 중 오류가 발생했습니다.'
    });
  }
});