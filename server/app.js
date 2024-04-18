const PORT = 8000;
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const fs = require("fs");
const path = require("path");

const scrapeDynamicWebpage = require("./scrapers/dynamincSiteScraper");
const scrapeStaticWebpage = require("./scrapers/staticSiteScraper");

var folder = "./data";

if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
  console.log("Folder Created Successfully.");
}
app.get("/", function (req, res) {
  res.send("Happy web scraping");
});

app.get("/api/v1/items", function (req, res) {
  fs.readdir("./data", (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      let data = [];
      files.forEach((file) => {
        const filePath = path.join("./data", file);
        const fileData = JSON.parse(fs.readFileSync(filePath, "utf8"));
        data = data.concat(fileData);
      });
      res.json(data);
    }
  });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

// scrapeDynamicWebpage();
scrapeStaticWebpage();
scrapeDynamicWebpage();
