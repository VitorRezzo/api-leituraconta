import { NextFunction, Request, Response } from "express";

class uploadsController {
  async uploadImage(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "Nenhum arquivo foi enviado." });
      }
      console.log("Arquivo enviado com sucesso:", req.file);
      return res.status(201).json("image" + "-" + req.file.originalname);
    } catch (e) {
      return next(e);
    }
  }
}

export default new uploadsController();
