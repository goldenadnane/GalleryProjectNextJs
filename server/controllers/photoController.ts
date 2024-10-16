import { Request, Response } from 'express';
import { getAllPhotos, getPhotoById } from '../models/photoModel';

const getPhotos = (req: Request, res: Response): void => {
  const photos = getAllPhotos();
  res.json(photos);
};

const getAPhotoById = (req: Request, res: Response): void => {
  const photoId = parseInt(req.params.id, 10);
  const photo = getPhotoById(photoId);

  if (!photo) {
    res.status(404).json({ error: "Photo not found" });
    return;
  }
  res.json(photo);
};

export { getPhotos, getAPhotoById };