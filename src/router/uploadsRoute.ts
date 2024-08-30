import { Router } from "express";
import { Uploader } from "../util/imageUploader";
import multer from "multer";
import uploadsController from "../controller/uploadsController";

class uploadsRoute {
  uploadsRoutes(Routes: Router) {
    Routes.post(
      "/upload",
      multer(Uploader.getConfig).single("image"),
      uploadsController.uploadImage,
    );
  }
}

export default new uploadsRoute();
