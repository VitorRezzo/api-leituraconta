import { Router } from "express";
import uploadsRoute from "./uploadsRoute";

export const route: Router = Router();

uploadsRoute.uploadsRoutes(route);
