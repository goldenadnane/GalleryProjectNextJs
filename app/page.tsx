"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Photo {
  id: number;
  title: string;
  url: string;
  description: string;
}

export default function Home() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-10">Galerie Photo</h1>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="border p-4">
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-xl font-semibold mt-2">{photo.title}</h2>
            <Link
              href={`/photos/${photo.id}`}
              className="text-blue-500 hover:underline"
            >
              Voir plus de détails
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
