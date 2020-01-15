/**
 *
 * @param {*} location
 */

const select = selector => document.querySelector(selector);
const text = ehm => (typeof ehm === "string" ? select(ehm) : ehm).innerText;
const create = ({ className }) => {
  const element = select("div");
  if (className) root.classList.add(className);
  return element;
};

const __eshop_scraws = {
  alza: {
    get productName() {
      return text("h1");
    },

    get productPrice() {
      let element = select(".price_withVat");

      if (!element) {
        // Special price, different way how to display price
        element = select("#prices .c2");
      }

      return element ? parsePrice(text(element)) : null;
    },

    createRootElement: ({ className }) => {
      // 1. find place nearby the buy button
      const originBuyButtonContainer = select(".priceDetail");
      if (!originBuyButtonContainer) return null; // nah

      // 2. create box container
      const root = createElement({ className });

      // 3. paste box container to proper place
      originBuyButtonContainer.after(root);

      return root;
    }
  }
};

function scrawler({ hostname }) {
  const [tld, name] = hostname.split(".").reverse();

  return __eshop_scraws[name];
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
