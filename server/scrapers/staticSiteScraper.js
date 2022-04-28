const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const pretty = require("pretty");
const axios = require("axios");
const { contains } = require("cheerio");

const dataDir = path.join(__dirname, "../data/");

// URL of the page we want to scrape
const url =
  "https://www.ishopping.pk/electronics/laptops-computers/laptop.html";

const scrapeStaticWebpage = async () => {
  try {
    const { data } = await axios.get(url);
    // pass data to processData(function) for further processing using cheerio;
    processData(data);
  } catch (err) {
    console.log("error", err);
  }
};

function processData(data) {
  // console.log("Processing Data...", data);
  // Load HTML we fetched
  const $ = cheerio.load(data);
  //   console.log(pretty($.html()));
  // after you can target what you want by inspecting page source.
  const list = $(".col-xs-6");
  console.log(list.length);
  const listItems = $(list.children());
  // console.log("listItems", pretty(listItems.html()));
  const items = [];
  list.each(function (idx, ele) {
    // targeting different elements etc using cheerio.
    const targeted = $(ele);
    // console.log("lists", idx, ele);
    const link = targeted.find("a").attr("href");
    const img = targeted.find("img").attr("src");
    // trim is used to remove extra spaces.
    const name = targeted.find("h4").text().trim();
    const price = targeted.find("span.text-green-600").text().trim();
    const item = {
      id: idx + 1,
      name: name,
      link: link,
      img: img,
      price: price,
    };
    items.push(item);
  });
  // Logs items array to the console
  // console.dir(items);
  // Write items array in itemsData.json file
  fs.writeFile(
    `${dataDir}ishoppingData.json`,
    JSON.stringify(items, null, 2),
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Successfully written data to file");
    }
  );
}

module.exports = scrapeStaticWebpage;
