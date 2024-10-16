"use client";
import React from "react";
import { useState, useEffect } from "react";

interface Photo {
  id: number;
  title: string;
  url: string;
  description: string;
}

export default function PhotoDetails({ params }: { params: { id: string } }) {
  const [photo, setPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    if (params.id) {
      fetch(`http://localhost:5000/api/photos/${params.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => setPhoto(data))
        .catch((error) => console.error("Error fetching photo:", error));
    }
  }, [params.id]);

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-5">{photo.title}</h1>
      <img
        src={photo.url}
        alt={photo.title}
        className="w-1/2 h-1/2 mx-auto object-cover"
      />
      <p className="mt-5">{photo.description}</p>
    </div>
  );
}
