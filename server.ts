import express from "express";
import cors from "cors";
import photoRoutes from "./server/routes/photoRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/photos", photoRoutes);

app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
