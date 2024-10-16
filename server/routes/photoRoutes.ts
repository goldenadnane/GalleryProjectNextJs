import { Router } from "express";
import { getPhotos, getAPhotoById } from "../controllers/photoController";

const router = Router();

router.get("/", getPhotos);
router.get("/:id", getAPhotoById);

export default router;
