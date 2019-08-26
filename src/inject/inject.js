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
    return element ? parseFloat(element.innerText.replace(',-', '')) : null;
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

    const heurekaPrice = parseFloat(foundProduct.price.replace('Kč', ''));

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
