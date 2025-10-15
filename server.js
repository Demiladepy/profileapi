import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.get("/me", async (req, res) => {
  try {
    // Fetch a random cat fact
    const catResponse = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000,
    });

    const fact = catResponse.data.fact;

    const timestamp = new Date().toISOString();

    return res.status(200).json({
      status: "success",
      user: {
        email: "ayekudemilade43@gmail.com",
        name: "Ayeku Emmanuel Oluwademiladeogo",
        stack: "Node.js/Express",
      },
      timestamp,
      fact,
    });
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);

    return res.status(200).json({
      status: "success",
      user: {
        email: "ayekudemilade43@gmail.com",
        name: "Ayeku Demilade",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: "Could not fetch a cat fact at this time. Try again later!",
    });
  }
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
