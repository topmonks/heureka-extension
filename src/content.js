const scrawlers = require("./scrawlers");
const { insert, parsePrice } = require("./helpers");

(async () => {
  console.group("Porovnání cen by TopMonks");

  const scrawler = scrawlers[location.hostname.split(".").reverse()[1]];

  if (!scrawler) {
    console.warn("Website not supported (this shouldn't happen when permissions in manifest.json are correctly configured", { location });
    return; // Do not continue
  }

  document.arrive(scrawler.test, { existing: true }, async () => {
    let name;
    try {
      name = typeof scrawler.name === "function"
        ? scrawler.name()
        : document.querySelector(scrawler.name).innerText;
    } catch (e) {
      console.warn("Getting `name` failed:", e);
      return; // Do not continue
    }

    let price;
    try {
      price = typeof scrawler.price === "function"
        ? scrawler.price()
        : parsePrice(document.querySelector(scrawler.price).innerText).toFixed(0);
    } catch (e) {
      console.warn("Getting `price` failed:", e);
      // Continue even without price
    }

    const tld = window.location.hostname.split(".").reverse()[0];
    const foundProducts = await browser.runtime.sendMessage({
      query: "SEARCH",
      payload: {
        name,
        apiUrl: `https://api.heureka.${tld}`
      }
    });

    if (!foundProducts.length) {
      console.log("No products found.", { name });
    }

    const heurekaPrices =
      foundProducts.length > 0
        ? foundProducts.map(product => parsePrice(product.price))
        : [];

    console.log("Summary", { productName: name, productPrice: price, heurekaPrices, foundProducts });

    const productsAreNotCheaper =
      Boolean(heurekaPrices.find(x => x < price)) === false;

    if (productsAreNotCheaper) {
      console.log("Products are not cheaper", { price });
    }

    let boxRoot;
    try {
      boxRoot = typeof scrawler.render === "function"
        ? scrawler.render() // TODO: Consider providing some useful info for that function
        : insert(
          scrawler.render.target,
          scrawler.render.position,
          {
            id: "HeurekaContainer",
            style: scrawler.render.style
          }
        );
    } catch (e) {
      console.warn("Inserting widget into DOM failed:", e);
      return; // Do not continue
    }

    boxRoot.appendChild(makeHeurekaBox({
      products: foundProducts,
      productsAreNotCheaper,
      productName: name
    }));
  });
})();

/**
 *  Products Box UI
 */

const extensionIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path d="M13.5888 0.922928L20.8164 5.09465C21.7933 5.65854 22.3951 6.70061 22.3951 7.82828V16.1717C22.3951 17.2994 21.7933 18.3415 20.8164 18.9054L13.5888 23.0771C12.6119 23.641 11.4082 23.641 10.4312 23.0771L3.20371 18.9054C2.22676 18.3415 1.625 17.2994 1.625 16.1717V7.82828C1.625 6.70061 2.22676 5.65854 3.20371 5.09464L10.4312 0.922928C11.4082 0.359024 12.6119 0.359024 13.5888 0.922928ZM12.8696 2.16797C12.3377 1.86096 11.6824 1.86096 11.1505 2.16797L3.92299 6.33968C3.39108 6.6467 3.06335 7.21413 3.06335 7.82828V16.1717C3.06335 16.7859 3.39108 17.3533 3.92299 17.6603L11.1505 21.832C11.6824 22.139 12.3377 22.139 12.8696 21.832L20.0971 17.6603C20.629 17.3533 20.9567 16.7859 20.9567 16.1717V7.82828C20.9567 7.21413 20.629 6.6467 20.0971 6.33968L12.8696 2.16797Z" fill="white" stroke="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6122 12.5397C15.8636 12.5421 16.0694 12.7479 16.0719 12.9994L16.0894 14.8205C16.0906 14.9412 16.0437 15.0566 15.9591 15.1411C15.8746 15.2257 15.7592 15.2726 15.6385 15.2714L13.8173 15.2539C13.5658 15.2515 13.3601 15.0457 13.3576 14.7943C13.3552 14.5428 13.5571 14.341 13.8086 14.3434L14.5194 14.3502L11.4856 11.3587L9.99534 12.6593C9.81647 12.8154 9.54453 12.8037 9.37341 12.6326L7.07499 10.3344C6.89548 10.1549 6.8927 9.86659 7.06879 9.69049C7.24488 9.51439 7.53315 9.51714 7.71266 9.69664L9.707 11.6908L11.195 10.3922C11.3729 10.2369 11.6432 10.2476 11.8146 10.4166L15.1684 13.7236L15.1613 12.9906C15.1589 12.7392 15.3608 12.5373 15.6122 12.5397Z" fill="white" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>
`;

const makeHeurekaBox = ({ productName, products, productsAreNotCheaper }) => {
  const box = document.createElement("div");
  const tld = location.hostname.split(".").reverse()[0];

  box.classList.add("HeurekaBox");

  const title = document.createElement("div");
  title.classList.add("HeurekaBox__Header");

  if (!products.length) {
    title.classList.add("HeurekaBox__Header--no-result");
    title.innerHTML = "Ve srovnávači jsme nenašli podobný produkt";
    title.innerHTML += extensionIcon;

    const text = document.createElement("p");
    text.classList.add("HeurekaBox__NotFound");

    text.innerHTML = `Srovnejte jiný produkt, <a href="https://www.heureka.${tld}/?h[fraze]=${productName}">nebo ho vyhledejte manuálně</a>.`;

    box.appendChild(title);
    box.appendChild(text);

    return box;
  }

  if (productsAreNotCheaper) {
    title.classList.add("HeurekaBox__Title--no-result");
    title.innerHTML = "Cena tohoto produktu je ve srovnávači vyšší";
    title.innerHTML += extensionIcon;

    const text = document.createElement("p");
    text.classList.add("HeurekaBox__NotFound");

    text.innerHTML = `Přesvědčte se sami <a href="https://www.heureka.${tld}/?h[fraze]=${productName}">přímo ve srovnávači</a>.`;

    box.appendChild(title);
    box.appendChild(text);
    return box;
  }

  title.innerText = "Ve srovnávači jsme našli tyto produkty";
  title.innerHTML += extensionIcon;

  box.appendChild(title);

  const list = document.createElement("div");
  list.classList.add("HeurekaBox__ProductsList");

  for (const product of products) {
    const productImage = document.createElement("img");
    productImage.src = product.image_url;
    productImage.classList.add("HeurekaBox__ProductImage");

    // eslint-disable-next-line no-shadow
    const productName = document.createElement("h2");
    productName.innerText = product.name;
    productName.classList.add("HeurekaBox__ProductName");

    const productCategory = document.createElement("p");
    productCategory.innerText = product.category_name;
    productCategory.classList.add("HeurekaBox__ProductCategory");

    const productPrice = document.createElement("span");
    productPrice.innerText = product.price + " *";
    productPrice.classList.add("HeurekaBox__ProductPrice");

    const infoColumn = document.createElement("div");
    infoColumn.classList.add("HeurekaBox__ProductInfoColumn");

    infoColumn.appendChild(productName);
    infoColumn.appendChild(productCategory);

    const linkContainer = document.createElement("a");
    linkContainer.classList.add("HeurekaBox__ProductsList__Item");
    linkContainer.href = product.desktop_url;

    linkContainer.appendChild(productImage);
    linkContainer.appendChild(infoColumn);
    linkContainer.appendChild(productPrice);

    list.appendChild(linkContainer);
  }

  box.appendChild(list);

  const footer = document.createElement("div");
  footer.classList.add("HeurekaBox__Footer");
  const footerMoreInfo = document.createElement("div");
  footerMoreInfo.innerHTML = "Více informací na <a href='https://github.com/topmonks/heureka-extension/'>GitHub</a>";
  const footerDisclaimer = document.createElement("div");
  footerDisclaimer.innerHTML = "* cena vč. DPH a nemusí být konečná";
  footer.appendChild(footerMoreInfo);
  footer.appendChild(footerDisclaimer);

  box.appendChild(footer);

  return box;
};
