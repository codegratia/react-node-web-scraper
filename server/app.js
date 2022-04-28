const PORT = 8000;
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const scrapeDynamicWebpage = require("./scrapers/dynamincSiteScraper");
const scrapeStaticWebpage = require("./scrapers/staticSiteScraper");
// const data = require("./data/itemsData.json");

app.get("/", function (req, res) {
  res.send("Happy web scraping");
});

app.get("/items", function (req, res) {
  res.json(data);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

// scrapeDynamicWebpage();
scrapeStaticWebpage();
scrapeDynamicWebpage();
