import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'public/product_images');
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    const fileName = file.fieldname + '-' + uniqueSuffix + ext;
    callback(null, fileName);
  },
});

const fileFilter = (req, file, callback) => {
  const ext = path.extname(file.originalname);
  if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
    callback(null, false);
    return callback(new Error('Only .png, .jpg and .jpeg format allowed!'));
  }
  callback(null, true);
};

export default multer({ storage, fileFilter });
