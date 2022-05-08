const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};
//on enregistre sur le disk, schema ...
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },

  //on cree un nom pour l'image selectionner, on evite 
  //les doublons et le bad img avec MIMES_TYPES
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('image');