const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
 cloudinary.config({
  cloud_name: process.env.cloudinary_name,
  api_key: process.env.cloud_key,
  api_secret: process.env.cloud_secret
});
 const storage = cloudinaryStorage({
  cloudinary,
  folder: "user-pictures",
  allowedFormat: ["jpg", "png"],
  //to upload things that are not images
  params: {
    resource_type: "raw"
  }
});
 const fileUploader = multer({ storage: storage });
module.exports = fileUploader;