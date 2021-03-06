// `test`, `name`, and `price` properties accepts either string or function
// Check `liveTimeBaby` function in `inject.js` for implementation

// `render` property accepts object with target, position, style, and tag properties
// Check helpers.js for implementation

const bsshop = {
  test: "#PDMaster",
  name: "h1",
  price: ".PDTable .price.primary.user",
  render: { target: "#PDAvailabilityPanel, #PDActionPanel", style: "margin-top: -32px; margin-bottom: -32px;" },
};

const scrawlers = {
  alza: {
    test: "#detailItem",
    name: "h1",
    price: ".price_withVat, #prices .c2",
    render: { target: ".priceDetail" },
    origin: "https://www.alza.{cz,sk}",
    exampleProductPath: "iphone-11?dq=5669250",
  },
  czc: {
    test: "#product-detail",
    name: "h1",
    price: ".price .price-vatin",
    render: { target: ".pd-price-delivery" },
    origin: "https://www.czc.cz",
    exampleProductPath: "apple-iphone-11-64gb-black/269718/produkt",
  },
  datart: {
    test: "#product-detail-info",
    name: "h1",
    price: ".product-detail-price",
    render: { target: ".product-detail-compare-box" },
    origin: "https://www.datart.{cz,sk}",
    exampleProductPath: "iphone-11-64gb-black-mwlt2cn-a.html",
  },
  kasa: {
    test: ".product-detail",
    name: "h1",
    price: "#real_price",
    render: { target: ".product-summary-tools" },
    origin: "https://www.kasa.cz",
    exampleProductPath: "mobilni-telefon-apple-iphone-11-64-gb-black-mwlt2cn-a/",
  },
  lekarna: {
    test: ".detail-top",
    name: "h1",
    price: () => document.querySelector("[itemprop=price]").getAttribute("content"),
    render: { target: ".product__price-and-form" },
    origin: "https://www.lekarna.cz",
    exampleProductPath: "ibalgin-rapidcaps-400mg-cps.mol.20/",
  },
  mall: {
    test: "[data-sel=catalog-number]",
    name: "h1[itemprop=name]",
    price: "[itemprop=price]",
    render: { target: ".detail-prices-wrapper, .product-footer" },
    origin: "https://www.mall.{cz,sk}",
    exampleProductPath: "mobilni-telefony/apple-iphone-11-64gb-black",
  },
  mironet: {
    test: ".product_detail",
    name: "h1",
    price: ".product_cena_box .product_dph",
    render: { target: ".product_kosik_info" },
    origin: "https://www.mironet.cz",
    exampleProductPath: "apple-iphone-11-64gb-cerna-61quot-hexacore-4gb-64gb-12mp12mp12mp-ios13+dp409453/",
  },
  mountfield: {
    test: ".productDetail",
    name: "h1",
    price: ".actionPrice.val",
    render: { target: ".btnBuy" },
    origin: "https://www.mountfield.{cz,sk}",
    exampleProductPath: "sekera-patriot-l-73-cm/1900-g-1zst4100",
  },
  tsbohemia: {
    test: "#stoitem_detail",
    name: "h1",
    price: ".price",
    render: { target: ".product-tools", style: "width: 100%;" },
    origin: "https://www.tsbohemia.cz",
    exampleProductPath: "apple-iphone-11-64gb-purple-mwlx2cn-a-_d333467.html",
  },
  alfa: {
    test: ".prodinfo",
    name: "h1",
    price: ".pvat",
    render: { target: "table.prodinfo", style: "float: right; min-width: 400px" },
    origin: "https://www.alfa.cz",
    exampleProductPath: "product.php?eid=105160006000000509O",
  },
  "ab-com": {
    test: "meta[itemprop=sku]",
    name: "h1",
    price: ".box-detail-add__prices__item--main",
    render: { target: ".js-product-detail-main-add-to-cart-wrapper" },
    origin: "https://www.ab-com.cz",
    exampleProductPath: "apple-ipad-9-7-2018-wi-fi-128gb-gold/",
  },
  electroworld: {
    test: ".product-top__title",
    name: ".product-top__title",
    price: ".product-top__price strong",
    render: { target: ".product-top__cta" },
    origin: "https://www.electroworld.cz",
    exampleProductPath: "apple-iphone-11-64-gb-cerny",
  },
  softcom: {
    test: "#stoitem_detail",
    name: "#stoitem_detail h1",
    price: "#stoitem_detail .price",
    render: { target: "#stoitem_detail .inetstock", style: "clear: both;" },
    origin: "https://www.electroworld.cz",
    exampleProductPath: "apple-iphone-11-64-gb-cerny",
  },
  bscom: {
    ...bsshop,
    origin: "https://www.bscom.cz",
    exampleProductPath: "mobilni-telefon-apple-iphone-11-64gb-cerna-mwlt2cn-a_d932983/",
  },
  drmax: {
    test: "[itemprop=mainEntity]",
    name: "h1",
    price: ".product-box__price",
    render: { target: ".product-box" },
    origin: "https://www.drmax.cz",
    exampleProductPath: "ibalgin-rapidcaps",
  },
  knihcentrum: {
    test: ".product-details-page",
    name: "h1",
    price: ".stock-price-part .product-price",
    render: { target: ".contexts-wrapper", style: "margin-top: -32px;" },
    origin: "https://www.knihcentrum.cz",
    exampleProductPath: "maly-princ-25",
  },
  megaknihy: {
    test: "#product_details",
    name: "h1", // ISBN: `[itemprop=isbn]`
    price: "#our_price_display",
    render: { target: "#pb-right-column", position: "beforeend" },
    origin: "https://www.megaknihy.cz",
    exampleProductPath: "pohadky/73024-maly-princ.html",
  },
  booktook: {
    test: "[itemprop=productID]",
    name: "h1",
    price: "#price_selling_vat",
    render: { target: ".price-block-container" },
    origin: "https://www.booktook.cz",
    exampleProductPath: "p/maly-princ-9788074514258/",
  },
  kolokram: {
    test: "body#product",
    name: "h1",
    price: "#our_price_display",
    render: { target: ".pb-center-column", position: "beforeend", style: "clear: both;" },
    origin: "https://www.kolokram.cz",
    exampleProductPath: "rukavice/185110-rukavice-specialized-body-geometry-sport-gel-black-l.html",
  },
  velosport: {
    test: ".detail_produkt_hd",
    name: ".detail_produkt_hd h1",
    price: ".detail_produkt_hd .cena-detail-s",
    render: { target: ".detail-atributy .row" },
    origin: "https://www.velosport.cz",
    exampleProductPath: "cs/eshop/textil-obuv/cyklo-obleceni/rukavice/kratkoprste-panske/bravo-127667.html",
  },
  cycology: {
    ...bsshop,
    render: { target: "#PDMaster .right", position: "beforeend" },
    origin: "https://www.cycology.cz/",
    exampleProductPath: "bryle-oakley-radar-ev-patch-arctic-surf-prizm-ruby-p1190251/",
  },
  "bike-eshop": {
    test: ".center_right_prdet_top_right_kod_produkt",
    name: "#center_right_prdet_top_right h1",
    price: "#center_right_prdet_top_right_kosik [itemprop=price]",
    render: { target: "#center_right_prdet_top_right", position: "beforeend", style: "clear: both;" },
    origin: "https://www.bike-eshop.cz",
    exampleProductPath: "cyklisticke-prilby/prilba-giro-chronicle-mips-mat-black-gloss-black",
  },
  sport95: {
    test: ".col-main-detail",
    name: ".col-main-detail h1",
    price: "#recite_par",
    render: { target: ".row-detail-cols .col-h-2 .row-2" },
    origin: "https://www.sport95.cz",
    exampleProductPath: "cyklisticka-helma-giro-fixture-mat-grey-vel-54-61-cm.html",
  },
  koloshop: {
    test: "#detail",
    name: "h1",
    price: ".sell-price",
    render: { target: "#customer-info", position: "beforebegin", style: "padding-right: 30px;" },
    origin: "https://www.koloshop.cz",
    exampleProductPath: "prilby-silnicni-mtb-enduro-361/Giro-Fixture-XL-MTB-prilba-mat-black-vel.-Uni.html",
  },
  mojekolo: {
    test: ".productDetail",
    name: "h1",
    price: ".productPrice__priceVat",
    render: { target: ".productDetail__price__addToCart", position: "beforeend", style: "clear: both;" },
    origin: "https://www.mojekolo.cz",
    exampleProductPath: "giro-fixture-xl-mat-black/",
  },
  "kola-online": {
    test: "#itemDetail",
    name: "h1",
    price: ".priceProduct",
    render: { target: ".customerPanel" },
    origin: "https://www.kola-online.cz",
    exampleProductPath: "superior-team-27-issue-2020/d69520",
  },
  kolasvorada: {
    test: ".main-product",
    name: "h1",
    price: ".detail__price [itemprop=price]",
    render: { target: ".main-product__header--right", position: "beforeend", style: "width: 100%;" },
    origin: "https://www.kolasvorada.cz",
    exampleProductPath: "helma-specialized-align-mips-matte-black-sm",
  },
  cyklobella: {
    test: ".p-detail",
    name: "h1",
    price: ".price-final-holder",
    render: { target: ".social-buttons-wrapper" },
    origin: "https://www.cyklobella.cz",
    exampleProductPath: "prilby-na-enduro-mtb/cyklisticka-helma-r2-trail-ath08k-2/",
  },
  progresscycle: {
    test: ".col-price-detail-end",
    name: "h1",
    price: ".col-price-detail-end",
    render: { target: "#WebPart_gwpupdatePanelProductPrice", position: "beforeend" },
    origin: "https://eshop.progresscycle.cz",
    exampleProductPath: "giro-chronicle-mips-mat-black-glos-black-l/",
  },
  "bike-life": {
    test: "#itemDetail",
    name: "h1",
    price: ".priceProduct",
    render: { target: "form.addToCart" },
    origin: "https://www.bike-life.cz",
    exampleProductPath: "cyklisticka-helma-r2-rock-ath11e/d16195",
  },
  bikero: {
    ...bsshop,
    origin: "https://www.bikero.cz",
    exampleProductPath: "poc-octal-modra-p337456/?cid=5636",
  },
  kupkolo: {
    test: ".content-block-product.main",
    name: "h1",
    price: ".price-final",
    render: { target: ".content-block-product:not(.main)", position: "beforeend" },
    origin: "https://www.kupkolo.cz",
    exampleProductPath: "helma-met-20-miles-bila_z97037/",
  },
  "online-sport": {
    test: "#listing-all .detail",
    name: "h1",
    price: ".detail-right-price-price b",
    render: { target: ".detail-top", position: "beforeend" },
    origin: "https://www.online-sport.cz",
    exampleProductPath: "batohy/turisticke-batohy/osprey-ariel-ag-55-lady-tidal-blue-wm/"
  },
  benu: {
    test: "#product-detail",
    name: "h1",
    price: ".buy-box__big-price",
    render: { target: ".product-desc", position: "beforeend" },
    origin: "https://www.benu.cz",
    exampleProductPath: "ibalgin-400-peroralni-potahovane-tablety-36x400mg"
  },
  pilulka: {
    test: ".product-detail__header",
    name: ".product-detail__header",
    price: "[class*='js-product-price-']",
    render: { target: "[class^='product-detail'] .bg-grey-light.rounded", position: "afterend" },
    origin: "https://www.pilulka.cz",
    exampleProductPath: "ibalgin-rapidcaps-400mg-cps-mol-30x400mg"
  },
  itesco: {
    test: ".product-details-page",
    name: "h1",
    price: ".price-per-sellable-unit .value",
    render: { target: ".product-controls__wrapper", position: "afterend", style: "clear: both; padding: 6px;" },
    origin: "https://nakup.itesco.cz",
    exampleProductPath: "groceries/cs-CZ/products/2001020019786"
  },
  kosik: {
    test: ".product-detail__main-info",
    name: "h1.product-detail__main-info__name",
    price: ".price__actual-price",
    render: { target: ".product-detail__main-info", position: "beforeend", style: "clear: both; padding: 6px;" },
    origin: "https://www.kosik.cz",
    exampleProductPath: "produkt/calvo-tunak-v-olivovem-oleji-3x80g"
  },
  notino: {
    test: cb => {
      const testElem = document.querySelector("#pdHeader");
      if (!testElem) return;

      let lastUrl = null;
      new MutationObserver((() => {
        if (location.pathname !== lastUrl) {
          lastUrl = location.pathname;
          cb();
        }
      })).observe(document.body, {
        characterData: true,
        subtree: true
      });

      cb();
    },
    name: () => {
      const name = document.querySelector("h1 [class*=Brand]").innerText + " " + document.querySelector("h1 [class*=Span]").innerText;
      const variant = document.querySelector("#pdSelectedVariant [class*=Name]") ? " " + document.querySelector("#pdSelectedVariant [class*=Name]").innerText : "";
      return name + variant;
    },
    price: "#pd-price",
    render: { target: "#pdAddToCart", position: "afterend" },
    origin: "https://www.notino.cz",
    exampleProductPath: "calvin-klein/euphoria-parfemovana-voda-pro-zeny/"
  },

  /*
  template: {
    test: "",
    name: "",
    price: "",
    render: { target: "" },
    origin: "",
    exampleProductPath: "",
  },
  */
};

if (typeof require !== "undefined" && require.main !== module) { // module required via require(…) - from Cypress
  module.exports = scrawlers;
}
