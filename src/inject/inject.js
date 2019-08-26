chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === 'complete') {
            clearInterval(readyStateCheckInterval);

            liveTimeBaby();
        }
    }, 10);
});

const scrapeProductName = () => document.querySelector('h1').innerText;
const scrapeProductPrice = () => {
    const element = document.querySelector('.price_withVat');
    return element ? parsePrice(element.innerText) : null;
};

// Works just on Alza.cz for now
const onBuyButtonClick = callback => {
    /*
			We can hook every button on page ...

			const buttons = [
					document.querySelector('a[href="javascript:detailOrder();"]'),
					document.querySelector('a[href="^javascript:boxOrder]'),
			].filter(Boolean);

			buttons.forEach(button => button.addEventListener('click', callback));

			... but for now we need just handle homePage
		*/

    document
        .querySelector('a[href="javascript:detailOrder();"]')
        .addEventListener('click', callback);
};

async function liveTimeBaby() {
    const productName = scrapeProductName();
    const productPrice = scrapeProductPrice();

    if (!productName) {
        console.log('Product name not found.');
        return;
    }

    const foundProduct = await callToBackgroundScript(
        'Najdi mi prosimtě tohle zbožíčko',
        productName,
    );

    const heurekaPrice = parsePrice(foundProduct.price);

    console.log({ productName, productPrice, heurekaPrice });

    if (heurekaPrice >= productPrice) {
        console.log('Product is not cheaper');
        return;
    }

    onBuyButtonClick(event => {
        const userWantIt = confirm(
            'Na Heurece je tohle zboží levnější, chcete to raději koupit tam?',
        );

        if (userWantIt) {
            event.preventDefault();
        }

        location.href = foundProduct.desktop_url;
    });
}

function callToBackgroundScript(query, payload) {
    return new Promise(resolve => {
        chrome.extension.sendMessage({ query, payload }, resolve);
    });
}

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
