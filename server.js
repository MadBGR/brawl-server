const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = process.env.API_KEY;

app.get("/player/:tag", async (req, res) => {
    try {
        const tag = encodeURIComponent(req.params.tag);
        const response = await axios.get(
            `https://api.brawlstars.com/v1/players/${tag}`,
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`
                }
            }
        );

        res.json(response.data);
} catch (error) {
    console.log("STATUS:", error.response?.status);
    console.log("FULL ERROR:", error.response?.data);
    res.status(500).json(error.response?.data);
}
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Serveur lancé sur le port 3000");
});