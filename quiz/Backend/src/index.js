import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: "./.env",
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'quiz-questions.json'));
});

app.use(cors())
connectDB()
  .then(() => {
    app.on("errror", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port :${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !!!", err);
  });
