import { Request } from "express";
import multer from "multer";
import path from "path";

class imagesUploader {
  private URL: string = path.join("./src/upload");

  private storage(): multer.StorageEngine {
    return multer.diskStorage({
      destination: (req: Request, file, cb) => {
        cb(null, this.URL);
      },

      filename: (req: Request, file, cb) => {
        cb(null, file.fieldname + ".png");
      },
    });
  }

  get getConfig(): multer.Options {
    return {
      storage: this.storage(),
      limits: { fileSize: 5 * 1024 * 1024 },
      fileFilter: (req: Request, file, cb) => {
        const validMimeTypes = ["image/jpeg", "image/png", "image/gif"];
        if (validMimeTypes.includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb(new Error("Apenas imagens (JPEG, PNG, GIF) são permitidas."));
        }
      },
    };
  }
}

export const Uploader = new imagesUploader();
