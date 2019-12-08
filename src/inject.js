chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      liveTimeBaby();
    }
  }, 10);
});

async function liveTimeBaby() {
  const productName = scrapeProductName();
  const productPrice = scrapeProductPrice();

  if (!productName) {
    console.log("Product name not found.");
    return;
  }

  // get products
  const foundProducts = await callToBackgroundScript(
    "Najdi mi prosimtě tohle zbožíčko",
    productName
  );

  if (!foundProducts.length) {
    console.log("No products found.", productName);
  }

  const heurekaPrices =
    foundProducts.length > 0
      ? foundProducts.map(product => parsePrice(product.price))
      : [];

  if (productPrice)
    console.log({ productName, productPrice, heurekaPrices, foundProducts });

  const productsAreNotCheaper = Boolean(
    heurekaPrices.find(price => price >= productPrice)
  );

  if (productsAreNotCheaper) {
    console.log("Products are not cheaper");
  }

  const boxRoot = makeHeurekaRoot();
  if (boxRoot) {
    const box = makeHeurekaBox({
      products: foundProducts,
      productsAreNotCheaper,
    });
    boxRoot.appendChild(box);
  }
}

function callToBackgroundScript(query, payload) {
  return new Promise(resolve => {
    chrome.extension.sendMessage({ query, payload }, resolve);
  });
}

/**
 *  Shop page (DOM) modificators
 *  Works just on Alza.cz for now
 *
 *  Heureka = extension namespace
 */

const makeHeurekaRoot = () => {
  // 1. find place above buy button
  const originBuyButtonContainer = document.getElementById("pricec");

  if (!originBuyButtonContainer) return null;

  // 2. create box container
  const heurekaContainer = document.createElement("div");
  heurekaContainer.classList.add("HeurekaContainer"); // easy to read, mby use some encryption to impair detection?
  // 3. paste box container above found button
  originBuyButtonContainer.prepend(heurekaContainer);

  return heurekaContainer;
};
const makeHeurekaBox = ({ products, productsAreNotCheaper }) => {
  const box = document.createElement("div");

  box.classList.add("HeurekaBox");

  const title = document.createElement("div");
  title.classList.add("HeurekaBox__Header");

  if (!products.length) {
    title.classList.add("HeurekaBox__Header--no-result");
    title.innerHTML = `Ve srovnávači jsme nenašli podobný produkt`;
    box.appendChild(title);
    // TODO add link to verify manually
    return box;
  }

  if (productsAreNotCheaper) {
    title.classList.add("HeurekaBox__Title--no-result");
    title.innerHTML = `Cena tohoto produktu je ve srovnávači vyšší.`;
    box.appendChild(title);
    // return box; DO not return, show list anyway
  }

  title.innerText = "Ve srovnávači jsme našli tyto produkty";
  box.appendChild(title);

  const list = document.createElement("div");
  list.classList.add("HeurekaBox__ProductsList");

  for (const product of products) {
    const linkContainer = document.createElement("a");
    linkContainer.classList.add("HeurekaBox__ProductsList__Item");
    linkContainer.href = product.desktop_url;

    const productName = document.createElement("h2");
    productName.innerText = product.name;
    productName.classList.add("HeurekaBox__ProductName");

    const productCategory = document.createElement("p");
    productCategory.innerText = product.category_name;
    productCategory.classList.add("HeurekaBox__ProductCategory");

    const productDescription = document.createElement("p");
    productDescription.innerText = product.short_description;
    productDescription.classList.add("HeurekaBox__ProductDescription");

    const productPrice = document.createElement("span");
    productPrice.innerText = product.price;
    productPrice.classList.add("HeurekaBox__ProductPrice");

    // Yeah, old fashion style
    linkContainer.appendChild(productName);
    linkContainer.appendChild(productDescription);
    linkContainer.appendChild(productPrice);

    list.appendChild(linkContainer);
  }

  box.appendChild(list);

  return box;
};

const scrapeProductName = () => document.querySelector("h1").innerText;
const scrapeProductPrice = () => {
  let element = document.querySelector(".price_withVat");

  if (!element) {
    // Special price, different way how to display price
    element = document.querySelector("#prices .c2");
  }

  return element ? parsePrice(element.innerText) : null;
};

/**
 * parse-price - returns a Number from a localized price string
 *
 * @version 1.1.8
 * @link https://github.com/caiogondim/parse-price.js#readme
 * @author Caio Gondim
 * @license MIT
 */
function parsePrice(string) {
  function t(e) {
    return e.replace(/[^\d]/g, "");
  }
  function n(e) {
    return e.replace(/[^\d.,]/g, "").replace(/[.,]$/, "");
  }
  function o(e) {
    for (var r = n(e), t = "0" === r[r.length - 1], o = r.length; o > 0; o--) {
      if (r.length - o + 1 > 3 && t) return;
      var i = r[o - 1];
      if (-1 !== [",", "."].indexOf(i)) return i;
    }
  }
  function _parsePrice(e) {
    var r = String(e),
      n = "00",
      i = o(r);
    i && (n = r.split(i)[1]);
    var f = r.split(i)[0];
    return Number(t(f) + "." + t(n));
  }

  return _parsePrice(string);
}
