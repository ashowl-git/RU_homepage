const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, '사용자명은 필수입니다'],
    unique: true,
    trim: true,
    minlength: [3, '사용자명은 최소 3자 이상이어야 합니다'],
    maxlength: [30, '사용자명은 30자를 초과할 수 없습니다']
  },
  email: {
    type: String,
    required: [true, '이메일은 필수입니다'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      '유효한 이메일 주소를 입력해주세요'
    ]
  },
  password: {
    type: String,
    required: [true, '비밀번호는 필수입니다'],
    minlength: [6, '비밀번호는 최소 6자 이상이어야 합니다']
  },
  role: {
    type: String,
    enum: {
      values: ['super_admin', 'admin', 'editor'],
      message: '{VALUE}는 유효하지 않은 권한입니다'
    },
    default: 'editor'
  },
  is_active: {
    type: Boolean,
    default: true
  },
  last_login: {
    type: Date
  },
  profile: {
    name: {
      type: String,
      trim: true
    },
    avatar: {
      filename: String,
      path: String
    }
  },
  permissions: [{
    type: String,
    enum: ['projects', 'researchers', 'news', 'users', 'settings']
  }]
}, {
  timestamps: true
});
// 인덱스 설정
userSchema.index({ username: 1 });
userSchema.index({ email: 1 });
userSchema.index({ role: 1 });

// 비밀번호 해싱 미들웨어
userSchema.pre('save', async function(next) {
  // 비밀번호가 변경되지 않았다면 넘어감
  if (!this.isModified('password')) return next();
  
  try {
    // 비밀번호 해싱
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// 비밀번호 검증 메서드
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// 마지막 로그인 시간 업데이트
userSchema.methods.updateLastLogin = async function() {
  this.last_login = new Date();
  return await this.save();
};

// 권한별 기본 permission 설정
userSchema.statics.getDefaultPermissions = function(role) {
  const permissionMap = {
    super_admin: ['projects', 'researchers', 'news', 'users', 'settings'],
    admin: ['projects', 'researchers', 'news'],
    editor: ['projects', 'researchers', 'news']
  };
  return permissionMap[role] || [];
};

// JSON 출력 시 비밀번호 제외
userSchema.methods.toJSON = function() {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

module.exports = mongoose.model('User', userSchema);