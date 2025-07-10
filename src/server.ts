import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import routes from "./modules/routes";

const app = express();

app.use(cors({
  origin: ['https://library-management-client-mu.vercel.app']
}));
// app.use(cors({
//   origin: ['http://localhost:5175']
// }));
app.use(express.json());

app.use(routes);

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "Welcome to library management system",
  });
});

app.listen(config.port, () => {
  console.log(`✅ Server running on port ${config.port}`);
});

async function server() {
  try {
    await mongoose.connect(config.database_url!);
    console.log("✅ Connected to database");
  } catch (error : any) {
    console.error(`Server error : ${error}`);
  }
}

server();
