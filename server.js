const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImY5ZDBjY2Y0LTdhZjUtNDRkOC1iZjg0LTk1YWNlYTg5YjM2YiIsImlhdCI6MTc3MjA0MTQwMCwic3ViIjoiZGV2ZWxvcGVyLzFkYTg5YTk2LTNhM2MtMjkzZS1iODg5LWY4ZDg5NTg4YjFmNCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMC4wLjAuMCIsIjg5Ljg2LjE0Ni4xMyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.08sgN-ahZmVbk0TRCbPw2sT7aH7cKZPDCN2Okveo0FB-RK-XYGIvdTo-NVhYwYjnTjkJkp71MyFwoMJvtYaSgg";

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

app.listen(3000, () => {
    console.log("Serveur lancé sur le port 3000");
});