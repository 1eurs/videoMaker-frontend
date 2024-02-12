import express from "express";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Allow GET, POST, OPTIONS requests
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow Content-Type header
  next();
});

app.get("/proxy", async (req, res) => {
  const { url } = req.query;
  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer",
    });
    res.status(200).send(response.data);
  } catch (error) {
    console.error("Error fetching resource:", error);
    res.status(500).send("Error fetching resource");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
