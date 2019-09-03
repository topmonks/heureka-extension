chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === 'complete') {
            clearInterval(readyStateCheckInterval);
            liveTimeBaby();
        }
    }, 10);
});

async function liveTimeBaby() {
    const productName = scrapeProductName();
    const productPrice = scrapeProductPrice();

    if (!productName) {
        console.log('Product name not found.');
        return;
    }

    // Background script returns array of found product but we use just the first one for now
    const [foundProduct] = await callToBackgroundScript(
        'Najdi mi prosimtě tohle zbožíčko',
        productName,
    );

    if (!foundProduct) {
        console.log('No product found.', productName);
    }

    const heurekaPrice = foundProduct
        ? parsePrice(foundProduct.price)
        : Infinity;

    if (productPrice) console.log({ productName, productPrice, heurekaPrice });

    const productIsNotCheaper = heurekaPrice >= productPrice;

    if (productIsNotCheaper) {
        console.log('Product is not cheaper');
    }

    const boxRoot = makeHeurekaRoot();
    if (boxRoot) {
        const box = makeHeurekaBox({
            product: foundProduct,
            productIsNotCheaper,
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
    const originBuyButtonContainer = document.getElementById('pricec');

    if (!originBuyButtonContainer) return null;

    // 2. create box container
    const heurekaContainer = document.createElement('div');
    heurekaContainer.classList.add('HeurekaContainer'); // easy to read, mby use some encryption to impair detection?
    // 3. paste box container above found button
    originBuyButtonContainer.prepend(heurekaContainer);

    return heurekaContainer;
};
const makeHeurekaBox = ({ product, productIsNotCheaper }) => {
    const box = document.createElement('div');

    box.classList.add('HeurekaBox');

    if (!product || productIsNotCheaper) {
        box.classList.add('HeurekaBox--dimmed');
    }

    const title = document.createElement('span');
    title.classList.add('HeurekaBox__Title');

    if (!product) {
        title.innerText = 'Produkt jsme na Heurece nenašli.';
        box.appendChild(title);
        return box;
    }

    if (productIsNotCheaper) {
        title.innerText = 'Levnější variantu jsme na Heurece nenašli.';
    } else {
        title.innerText = 'Produkt je na Heurece levnejší!';
    }

    const productName = document.createElement('h2');
    productName.innerText = product.name;
    productName.classList.add('HeurekaBox__ProductName');

    const productDescription = document.createElement('p');
    productDescription.innerText = product.short_description;
    productDescription.classList.add('HeurekaBox__ProductDescription');

    const productPrice = document.createElement('span');
    productPrice.innerText = product.price;
    productPrice.classList.add('HeurekaBox__ProductPrice');

    const button = document.createElement('a');
    button.innerHTML =
        '<i class="HeurekaBox__ButtonIcon"></i>Zobrazit na Heurece';
    button.classList.add('HeurekaBox__Button');
    button.setAttribute('href', product.desktop_url);
    button.setAttribute('target', '_blank');

    // Yeah, old fashion style
    box.appendChild(title);
    box.appendChild(productName);
    box.appendChild(productDescription);
    box.appendChild(button);
    box.appendChild(productPrice);

    return box;
};

const scrapeProductName = () => document.querySelector('h1').innerText;
const scrapeProductPrice = () => {
    let element = document.querySelector('.price_withVat');

    if (!element) {
        // Special price, different way how to display price
        element = document.querySelector('#prices .c2');
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
        return e.replace(/[^\d]/g, '');
    }
    function n(e) {
        return e.replace(/[^\d.,]/g, '').replace(/[.,]$/, '');
    }
    function o(e) {
        for (
            var r = n(e), t = '0' === r[r.length - 1], o = r.length;
            o > 0;
            o--
        ) {
            if (r.length - o + 1 > 3 && t) return;
            var i = r[o - 1];
            if (-1 !== [',', '.'].indexOf(i)) return i;
        }
    }
    function _parsePrice(e) {
        var r = String(e),
            n = '00',
            i = o(r);
        i && (n = r.split(i)[1]);
        var f = r.split(i)[0];
        return Number(t(f) + '.' + t(n));
    }

    return _parsePrice(string);
}
