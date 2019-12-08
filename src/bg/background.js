// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });
console.log("alive");

chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
  const { query, payload } = request;
  callToHeureka(query, payload).then(sendResponse);

  return true;
});

async function callToHeureka(query, payload) {
  switch (query) {
    case "Najdi mi prosimtě tohle zbožíčko": {
      return await searchProductsOnHeureka(payload);
    }
  }
}

async function searchProductsOnHeureka(term) {
  // Hack: Using Heureka's autocomplete suggestions
  const result = await fetch(
    // ... but now its regular api, ❤️ Heureka
    `https://api.heureka.cz/head-gateway/search?term=${term}`
  );

  try {
    const {
      products: { result: foundProducts },
    } = await result.json();
    console.log("Products found on Heureka", foundProducts);

    // return all found products
    return foundProducts;
  } catch (error) {
    console.error(`It seems like  Heureka's API has change`);
  }
}
