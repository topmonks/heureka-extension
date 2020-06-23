browser.runtime.onMessage.addListener(async msg => {
  switch (msg.query) {
    case "SEARCH":
      return await searchProductsOnHeureka(msg.payload);
  }
});

async function searchProductsOnHeureka({ name, apiUrl }) {
  // Hack: Using Heureka's autocomplete suggestions
  const response = await fetch(`${apiUrl}/head-gateway/search?term=${name}`);
  const json = await response.json();
  return json.products.result;
}
