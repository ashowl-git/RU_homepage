const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, '제목은 필수입니다'],
    trim: true,
    maxlength: [200, '제목은 200자를 초과할 수 없습니다']
  },
  content: {
    type: String,
    required: [true, '내용은 필수입니다']
  },
  excerpt: {
    type: String,
    maxlength: [300, '요약은 300자를 초과할 수 없습니다']
  },
  category: {
    type: String,
    required: [true, '카테고리는 필수입니다'],
    enum: {
      values: ['연구소소식', '연구성과', '협력소식', '행사', '채용', '기타'],
      message: '{VALUE}는 유효하지 않은 카테고리입니다'
    }
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Researcher',
    required: [true, '작성자는 필수입니다']
  },
  publish_date: {
    type: Date,
    default: Date.now
  },
  end_date: {
    type: Date
  },
  featured_image: {
    filename: String,
    original_name: String,
    path: String,
    size: Number,
    mimetype: String
  },
  attachments: [{
    filename: {
      type: String,
      required: true
    },
    original_name: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    mimetype: {
      type: String,
      required: true
    }
  }],  is_published: {
    type: Boolean,
    default: false
  },
  is_featured: {
    type: Boolean,
    default: false
  },
  view_count: {
    type: Number,
    default: 0
  },
  tags: [{
    type: String,
    trim: true,
    maxlength: [30, '태그는 30자를 초과할 수 없습니다']
  }],
  meta_title: {
    type: String,
    maxlength: [60, 'SEO 제목은 60자를 초과할 수 없습니다']
  },
  meta_description: {
    type: String,
    maxlength: [160, 'SEO 설명은 160자를 초과할 수 없습니다']
  },
  slug: {
    type: String,
    unique: true,
    sparse: true,
    lowercase: true,
    trim: true
  },
  related_projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
}, {
  timestamps: true
});

// 인덱스 설정
newsSchema.index({ category: 1, publish_date: -1 });
newsSchema.index({ is_published: 1, publish_date: -1 });
newsSchema.index({ title: 'text', content: 'text', excerpt: 'text' });
newsSchema.index({ tags: 1 });
newsSchema.index({ slug: 1 });

// Pre-save 미들웨어 - slug 자동 생성
newsSchema.pre('save', function(next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9가-힣]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }
  next();
});

// 가상 필드 - 읽기 시간 추정 (분)
newsSchema.virtual('reading_time').get(function() {
  if (this.content) {
    const wordsPerMinute = 200;
    const wordCount = this.content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }
  return 0;
});

// 정적 메서드 - 공개된 뉴스만 조회
newsSchema.statics.findPublished = function(filter = {}) {
  return this.find({ 
    is_published: true, 
    publish_date: { $lte: new Date() },
    ...filter 
  })
  .populate('author', 'name position profile_image')
  .sort({ publish_date: -1 });
};

// JSON 출력 시 가상 필드 포함
newsSchema.set('toJSON', { virtuals: true });
newsSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('News', newsSchema);