const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "public/posts/");
  },
  filename: function (req, file, callback) {
    console.log(req.body);
    callback(null, "newimage.png");
  },
});

var upload = multer({ storage: storage });

module.exports = upload;
