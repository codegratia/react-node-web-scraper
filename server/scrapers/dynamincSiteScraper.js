const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

// console.log('path', path);
const dataDir = path.join(__dirname, "../data/");
// console.log('dataDir', dataDir);
const scrapeDynamicWebpage = () => {
  puppeteer.launch().then(async (browser) => {
    // opening a new page and navigating to provided url(to be scraped).
    const page = await browser.newPage();
    // go to provide url(page)
    await page.goto(
      "https://www.telemart.pk/mobile-and-tablets/mobile-phone/apple-iphones.html"
    );
    // wait for the contents inside specified div etc
    await page.waitForSelector(".grid");
    // Fetch HTML of the page we want to scrape
    const data = await page.content();
    // pass data to processData(function) for further processing using cheerio;
    processData(data);
  });
};

function processData(data) {
  // console.log("Processing Data...", data);
  // Load HTML we fetched
  const $ = cheerio.load(data);
  // console.log(pretty($.html()))
  // after you can target what you want by inspecting page source.
  const list = $(".grid-cols-12");
  // console.log(list.children().first().attr())
  const listItems = $(list.children());
  // console.log('listItems', pretty(listItems.html()))
  const items = [];
  listItems.each(function (idx, ele) {
    // targeting different elements etc using cheerio.
    const targeted = $(ele);
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
    `${dataDir}telemartData.json`,
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

module.exports = scrapeDynamicWebpage;
