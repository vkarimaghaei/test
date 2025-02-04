// PASTE GENERATED CODE👇
// PASTE GENERATED CODE👇
const puppeteer = require("puppeteer");
const ProgressBar = require("progress");
const prettier = require("prettier");
const fs = require("fs");
const prompts = require("prompts");

(async () => {
  const browser = await puppeteer.launch({
    // Uncomment this line to open the browser 👇
    // headless: false,
    defaultViewport: null,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--window-size=1300,1024",
    ],
  });
  let data;
  try {
    const outputFilename = "golestaneshop.com.json";
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto("https://golestaneshop.com/product/detail/32724/index");

    try {
      await page.waitForSelector(
        "div.product-single-price.text-right span.woocommerce-Price-amount.amount"
      );
    } catch {
      console.log(
        "Couldn't find div.product-single-price.text-right span.woocommerce-Price-amount.amount"
      );
    }

    const variable1 = await page.evaluate(() => {
      const elements = document.querySelectorAll(
        "div.product-single-price.text-right span.woocommerce-Price-amount.amount"
      );
      return [...elements]
        .map(
          (element) =>
            element.textContent.replace(/(\r\n|\n|\r)/gm, "").trim() || null
        )
        .slice(0);
    });
    try {
      await page.waitForSelector(
        "div.post-20.product.type-product.status-publish.has-post-thumbnail.product_cat-best-seller.book_publisher-aceng-press.book_series-series-2.livre-type-book.first.instock.sale.shipping-taxable.purchasable.product-type-simple h1.product__title"
      );
    } catch {
      console.log(
        "Couldn't find div.post-20.product.type-product.status-publish.has-post-thumbnail.product_cat-best-seller.book_publisher-aceng-press.book_series-series-2.livre-type-book.first.instock.sale.shipping-taxable.purchasable.product-type-simple h1.product__title"
      );
    }

    const variable2Eval = () => {
      const element = document.querySelector(
        "div.post-20.product.type-product.status-publish.has-post-thumbnail.product_cat-best-seller.book_publisher-aceng-press.book_series-series-2.livre-type-book.first.instock.sale.shipping-taxable.purchasable.product-type-simple h1.product__title"
      );
      return element.textContent.replace(/(\r\n|\n|\r)/gm, "").trim();
    };
    let variable2 = await page.evaluate(variable2Eval);
    if (variable2 === null || variable2 === "") {
      // The content could be dynamically loaded. Waiting a bit...
      await page.waitForTimeout(4000);
      variable2 = await page.evaluate(variable2Eval);
    }
    let formattedVariable2 = variable2;

    try {
      await page.waitForSelector(" span.col-md-7.last");
    } catch {
      console.log("Couldn't find  span.col-md-7.last");
    }

    const variable3 = await page.evaluate(() => {
      const elements = document.querySelectorAll(" span.col-md-7.last");
      return [...elements]
        .map(
          (element) =>
            element.textContent.replace(/(\r\n|\n|\r)/gm, "").trim() || null
        )
        .slice(0);
    });
    console.log({ variable1, variable2: formattedVariable2, variable3 });
    data = { variable1, variable2: formattedVariable2, variable3 };
    fs.writeFile(
      outputFilename || `./${new Date()}.json`,
      prettier.format(JSON.stringify(data), {
        parser: "json",
      }),
      (err) => {
        if (err) return console.log(err);
      }
    );
    await browser.close();
  } catch (e) {
    await browser.close();
    throw e;
  }
})();
