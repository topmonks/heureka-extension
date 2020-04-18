// `test`, `name`, and `price` properties accepts either string or function
// Check `liveTimeBaby` function in `inject.js` for implementation

// `render` property accepts object with target, position, style, className, and tag properties
// Check helpers.js for implementation

const scrawlers = {
  alza: {
    test: "#detailItem",
    name: "h1",
    price: ".price_withVat, #prices .c2",
    render: { target: ".priceDetail" },
  },

  czc: {
    test: "#product-detail",
    name: "h1",
    price: ".price .price-vatin",
    render: { target: ".pd-price-delivery" },
  },

  datart: {
    test: "#product-detail-info",
    name: "h1",
    price: ".product-detail-price",
    render: { target: ".product-detail-compare-box" },
  },

  kasa: {
    test: ".product-detail",
    name: "h1",
    price: "#real_price",
    render: { target: ".product-summary-tools" },
  },

  lekarna: {
    test: ".detail-top",
    name: "h1",
    price: () => document.querySelector("[itemprop=price]").getAttribute("content"),
    render: { target: ".product__price-and-form" },
  },

  mall: {
    test: "[data-sel=catalog-number]",
    name: "h1[itemprop=name]",
    price: "[itemprop=price]",
    render: { target: ".detail-prices-wrapper" },
  },

  mironet: {
    test: ".product_detail",
    name: "h1",
    price: ".product_cena_box .product_dph",
    render: { target: ".product_kosik_info" },
  },

  mountfield: {
    test: ".productDetail",
    name: "h1",
    price: ".actionPrice.val",
    render: { target: ".btnBuy" },
  },

  tsbohemia: {
    test: "#stoitem_detail",
    name: "h1",
    price: ".price",
    render: { target: ".product-tools" },
  },

  alfa: {
    test: ".prodinfo",
    name: "h1",
    price: ".pvat",
    render: { target: "table.prodinfo", style: "float: right; min-width: 400px" },
  },

  "ab-com": {
    test: "meta[itemprop=sku]",
    name: "h1",
    price: ".box-detail-add__prices__item--main",
    render: { target: ".js-product-detail-main-add-to-cart-wrapper" },
  },

  electroworld: {
    test: ".product-top__title",
    name: ".product-top__title",
    price: ".product-top__price strong",
    render: { target: ".product-top__cta" },
  },

  softcom: {
    test: "#stoitem_detail",
    name: "#stoitem_detail h1",
    price: "#stoitem_detail .price",
    render: { target: "#stoitem_detail .inetstock", style: "clear: both;" },
  },

  bscom: {
    test: "#PDMaster",
    name: "h1",
    price: ".PDTable .price.primary",
    render: { target: "#PDAvailabilityPanel", style: "margin-top: -32px; margin-bottom: -32px;" },
  },

  drmax: {
    test: "[itemprop=mainEntity]",
    name: "h1",
    price: ".product-box__price",
    render: { target: ".product-box" }
  },

  knihcentrum: {
    test: ".product-details-page",
    name: "h1",
    price: ".stock-price-part .product-price",
    render: { target: ".contexts-wrapper", style: "margin-top: -32px;" },
  },

  megaknihy: {
    test: "#product_details",
    name: "h1", // ISBN: `[itemprop=isbn]`
    price: "#our_price_display",
    render: { target: "#pb-right-column", position: "beforeend" },
  },

  booktook: {
    test: "[itemprop=productID]",
    name: "h1",
    price: "#price_selling_vat",
    render: { target: ".price-block-container" },
  }

  // mock: {
  //   test: "#product-detail",
  //   name: "h1",
  //   price: ".price",
  //   render: ({ className }) => append(".selector", { className })
  // }
};
