import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req: express.Request, res: express.Response) =>
  res.send("IP Geolocator")
);

app.listen(PORT, () => {
  console.log(`🖥 [server]: server is running at https://localhost:${PORT}`);
});
