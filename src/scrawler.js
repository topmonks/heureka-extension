// Just DOM helpers
const select = selector => document.querySelector(selector);
const text = ehm =>
  ((typeof ehm === "string" ? select(ehm) : ehm) || {}).innerText;

const create = ({ className, tag = "div" } = {}) => {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  return element;
};

const price = (...selectors) => {
  let element = selectors.find(selector => select(selector));
  return element ? parsePrice(text(element)) : null;
};

const append = (selector, attributes) => {
  // 1. find place nearby the buy button
  const originBuyButtonContainer = select(selector);
  if (!originBuyButtonContainer) return null; // nah
  // 2. create box container
  const root = create(attributes);
  // 3. paste box container to proper place
  originBuyButtonContainer.after(root);
  return root;
};

// All supported eshop brands has to have record here
const __eshop_scraws = {
  alza: {
    get isProductPage() {
      return Boolean(select("#detailItem"));
    },

    get productName() {
      return text("h1");
    },

    get productPrice() {
      return price(".price_withVat", "#prices .c2");
    },

    createRootElement: ({ className }) => {
      return append(".priceDetail", { className });
    }
  },

  czc: {
    get isProductPage() {
      return Boolean(select("#product-detail"));
    },
    get productName() {
      return text("h1");
    },
    get productPrice() {
      return price(".price .price-vatin");
    },
    createRootElement: ({ className }) => {
      return append(".pd-price-delivery", { className });
    }
  },

  datart: {
    get isProductPage() {
      return Boolean(select("#product-detail-info"));
    },
    get productName() {
      return text("h1");
    },
    get productPrice() {
      return price(".product-detail-price");
    },
    createRootElement: ({ className }) => {
      return append(".product-detail-compare-box", { className });
    }
  },

  kasa: {
    get isProductPage() {
      return Boolean(select(".product-detail"));
    },
    get productName() {
      return text("h1");
    },
    get productPrice() {
      return price("#real_price");
    },
    createRootElement: ({ className }) => {
      return append(".product-summary-tools", { className });
    }
  },

  lekarna: {
    get isProductPage() {
      return Boolean(select(".detail-top"));
    },
    get productName() {
      return text("h1");
    },
    get productPrice() {
      return select("[itemprop=price").getAttribute("content");
    },
    createRootElement: ({ className }) => {
      return append(".product__price-and-form", { className });
    }
  },

  mall: {
    get isProductPage() {
      return Boolean(select(".price-wrapper"));
    },
    get productName() {
      return text('h1[itemprop="name"]');
    },
    get productPrice() {
      return price("[itemprop=price]");
    },
    createRootElement: ({ className }) => {
      return append(".product-footer", { className });
    }
  },

  mironet: {
    get isProductPage() {
      return Boolean(select(".product_detail"));
    },
    get productName() {
      return text("h1");
    },
    get productPrice() {
      return price(".product_cena_box .product_dph");
    },
    createRootElement: ({ className }) => {
      return append(".product_kosik_info", { className });
    }
  },

  mock: {
    get isProductPage() {
      return Boolean(select("#product-detail"));
    },
    get productName() {
      return text("h1");
    },
    get productPrice() {
      return price(".price");
    },
    createRootElement: ({ className }) => {
      return append(".selector", { className });
    }
  }
};

/**
 * Used in inject.js script
 *  to get info about product on given page (location)
 *  and to insert products box as a DOM element nearby the buy button
 *
 * @param {*} location
 */
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
