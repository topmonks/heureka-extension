// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });
console.log('alive');

chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
    const { query, payload } = request;
    callToHeureka(query, payload).then(sendResponse);

    return true;
});

async function callToHeureka(query, payload) {
    switch (query) {
        case 'Najdi mi prosimtě tohle zbožíčko': {
            return await searchProductOnHeureka(payload);
        }
    }
}

async function searchProductOnHeureka(term) {
    // Hack: Using Heureka's autocomplete suggestions
    const result = await fetch(
        `https://www.heureka.cz/direct/ajax/search-suggester?term=${term}`,
    );

    const {
        products: {
            // only firstProduct can be relevant ...
            result: [firstProduct],
        },
    } = await result.json();

    console.log('This is first found product', firstProduct);

    // ... but only if the name is similar to searched term
    return window.areThoseNamesSimilar(term, firstProduct.name, 0.75)
        ? firstProduct
        : null;
}
