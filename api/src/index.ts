import express, { Router } from "express";
import cors from "cors";

const app = express();
const router = Router();
const PORT = 8001;

router.get("/", (req: express.Request, res: express.Response) =>
  res.json({ message: "IP Geolocator" })
);

app.use(cors());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`🖥 [server]: server is running at http://localhost:${PORT}`);
});
