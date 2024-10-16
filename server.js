const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const photos = [
  {
    id: 1,
    title: "Photo 1",
    url: "/photos/photo1.jpg",
    description:
      "This image reveals the vibrant and dynamic atmosphere of a contemporary art gallery, where an array of colorful abstract paintings are showcased against pristine white gallery walls. The artworks, each with their distinctive color palettes and expressive brushstrokes, invite viewers to a visual feast, casting a lively ambience throughout the space. Reflections on the sleek, polished floor add depth and dimension to the viewing experience, indicating a thoughtfully curated exhibition designed to engage and inspire. The strategic lighting amplifies the vividness of the paintings and creates a serene yet stimulating environment for art lovers.",
  },
  {
    id: 2,
    title: "Photo 2",
    url: "/photos/photo2.jpg",
    description:
      "This image captures the quiet ambiance of a contemporary art gallery, where the focus is on a series of vibrant abstract paintings. The walls, painted in stark white, serve as the perfect backdrop for the explosion of colors featured on the canvases. Each painting is an intricate composition of shapes, hues, and textures that come together to form a visually stimulating collection. The gleaming wooden floors reflect the artworks, enhancing the gallery's spacious and well-lit interior. It's a serene space that invites viewers to contemplate and absorb the creativity on display.",
  },
  {
    id: 3,
    title: "Photo 3",
    url: "/photos/photo3.jpg",
    description:
      "The interior of an art gallery is alive with activity as visitors, including children and adults, browse through an extensive collection of colorful artwork. The gallery features neatly framed drawings and paintings, each showcasing unique styles and vibrant colors. The floor's reflective surface enhances the bright lighting overhead, contributing to the inviting and inspirational atmosphere of the space. As some individuals engage in discussions about the art, others closely observe the details of each piece, making the gallery a hub of cultural exchange and appreciation.",
  },
  {
    id: 4,
    title: "Photo 4",
    url: "/photos/photo4.png",
    description:
      "The Renoir Dancers by Dorit Levinstein is an original hand-painted bronze sculpture inspired by Renoir s famous painting Dance in the Country. This work captures the fluidity, romance, and joy expressed in Renoir s depiction of dancing figures. Levinstein, known for her vibrant use of color and dynamic forms, would have translated the movement and emotion of the original painting into a three-dimensional form. The sculpture, while abstract, conveys the intimate connection and rhythmic harmony of the dancing couple, emphasizing the elegance and spontaneity of their movement. The use of bronze adds a classical dimension to the piece, while the hand-painting infuses it with contemporary energy and a personal narrative. Renoir Dancers is more than a homage to a masterpiece; it s an exploration of the themes of dance, love, and celebration, showcasing Levinstein s ability to reinterpret classic artworks with her unique, modern artistic vision.",
  },
  {
    id: 5,
    title: "Photo 5",
    url: "/photos/photo5.jpg",
    description:
      "New Love by Dorit Levinstein, part of her Typographic Art collection, is a series of original hand-painted sculptures that explore the theme of love through varied colors and patterns, each version paying homage to different inspirations such as places, artists, or colors. Resembling the work of sculptors like Henry Moore and Niki de Saint Phalle, the sculptures extend the word love into space with sinuous, harmonious forms, demonstrating Levinstein's mastery of balancing shapes and emotions. Each unique iteration of New Love encapsulates the complex and abstract nature of love, offering a personal connection to every viewer. This popular series highlights Levinstein's fascination with the interplay of form and content, elegantly combining language and art to convey a universal yet deeply personal message.",
  },
  {
    id: 6,
    title: "Photo 6",
    url: "/photos/photo6.png",
    description:
      "Cactus Kishkashta (Desert Blossom) by Dorit Levinstein is an original hand-painted aluminum sculpture from her Cactus collection, embodying the unique beauty of desert flora. The title Kishkashta evokes a sense of the exotic and mysterious, while Desert Blossom alludes to the vibrant life that emerges in arid landscapes. In this piece, Levinstein's use of bright, lively colors and fluid, sculptural forms brings the essence of a blossoming cactus to life, showcasing her ability to transform a simple plant into a work of art bursting with energy and vitality. The aluminum base offers a modern twist, while her hand-painted details add depth and texture, making Cactus Kishkashta (Desert Blossom) a captivating representation of nature's resilience and beauty.",
  },
];

app.get("/api/photos", (req, res) => {
  res.json(photos);
});

app.get("/api/photos/:id", (req, res) => {
  const photo = photos.find((photo) => photo.id === parseInt(req.params.id));
  if (!photo) {
    res.status(404).send("The photo with the given ID was not found");
  }
  res.json(photo);
});

app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
