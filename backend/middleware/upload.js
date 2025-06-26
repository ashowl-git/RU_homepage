const multer = require('multer');
const path = require('path');
const fs = require('fs');

// 업로드 디렉토리 확인 및 생성
const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// 파일 저장 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath = 'uploads/';
    
    // 파일 타입에 따른 폴더 분류
    if (file.fieldname === 'profile_image') {
      uploadPath += 'profiles/';
    } else if (file.fieldname === 'images') {
      uploadPath += 'projects/images/';
    } else if (file.fieldname === 'documents') {
      uploadPath += 'projects/documents/';
    } else if (file.fieldname === 'featured_image') {
      uploadPath += 'news/';
    } else {
      uploadPath += 'misc/';
    }

    ensureDirectoryExists(uploadPath);
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // 파일명: 타임스탬프_랜덤숫자_원본파일명
    const timestamp = Date.now();
    const randomNum = Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);
    
    cb(null, `${timestamp}_${randomNum}_${basename}${ext}`);
  }
});

// 파일 필터링
const fileFilter = (req, file, cb) => {
  // 이미지 파일 확인
  if (file.fieldname === 'profile_image' || file.fieldname === 'images' || file.fieldname === 'featured_image') {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('이미지 파일만 업로드 가능합니다.'), false);
    }
  }
  // 문서 파일 확인
  else if (file.fieldname === 'documents') {
    const allowedMimeTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    ];
    
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('PDF, Word, Excel, PowerPoint 파일만 업로드 가능합니다.'), false);
    }
  }
  else {
    cb(null, true);
  }
};

// Multer 설정
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE) || 10 * 1024 * 1024, // 10MB
    files: 10 // 최대 10개 파일
  }
});

module.exports = upload;