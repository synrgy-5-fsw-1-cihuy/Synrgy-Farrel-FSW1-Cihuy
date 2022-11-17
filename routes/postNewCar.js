const express = require("express");
const router = express.Router();
const formidableMiddleware = require("formidable");
const cloudinary = require("../config/cloudinary");
const { Cars } = require("../models/cars");

router.use(express.json());

router.post("/", (req, res, next) => {
  try {
    const form = formidableMiddleware({ multiples: true });
    let uploadedFiles = "";

    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }

      console.log(files.files.filepath);
      console.log(fields.name);

      cloudinary.uploader.upload(files.files.filepath, async (err, result) => {
        if (err) {
          next(err);
          return;
        }
        uploadedFiles = result.secure_url;
        console.log(result);
        const price = Number(fields.price);
        fields.price = price;
        fields.foto = result.secure_url;
        await Cars.create(fields);
        res.status(200).json(fields);
      });
    });
    console.log(`ini link nya ${uploadedFiles}`);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
