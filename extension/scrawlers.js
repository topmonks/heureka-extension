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
    price: ".price_withVat, #prices .c2, .price-box__price",
    render: { target: ".priceDetail, .price-detail" },
    origin: "https://www.alza.{cz,sk}",
    exampleProductPath: "iphone-11?dq=5669250",
    exampleListingPath: "",
  },
  czc: {
    test: "#product-detail",
    name: "h1",
    price: ".price .price-vatin",
    render: { target: ".pd-price-delivery" },
    origin: "https://www.czc.cz",
    exampleProductPath: "apple-iphone-11-64gb-black/269718/produkt",
    exampleListingPath: "",
  },
  datart: {
    test: ".product-detail-essential",
    name: "h1",
    price: ".product-price-main",
    render: { target: ".product-availability" },
    origin: "https://www.datart.{cz,sk}",
    exampleProductPath: "iphone-11-64gb-black-mwlt2cn-a.html",
    exampleListingPath: "",
  },
  kasa: {
    test: ".product-detail",
    name: "h1",
    price: "#real_price",
    render: { target: ".product-summary-tools" },
    origin: "https://www.kasa.cz",
    exampleProductPath: "mobilni-telefon-apple-iphone-12-64-gb-black-mgj53cn-a/",
    exampleListingPath: "",
  },
  lekarna: {
    test: "[itemtype='https://schema.org/Product']",
    name: "h1",
    price: () => document.querySelector("[itemprop=price]").getAttribute("content"),
    render: { target: "#offers" },
    origin: "https://www.lekarna.cz",
    exampleProductPath: "ibalgin-rapidcaps-400mg-cps.mol.20/",
    exampleListingPath: "",
  },
  mall: {
    test: "[data-sel=catalog-number]",
    name: "h1.detail__title",
    price: ".price__wrap__box__final",
    render: { target: ".detail__additional-info-wrapper, .product-footer" },
    origin: "https://www.mall.{cz,sk}",
    exampleProductPath: "mobilni-telefony/apple-iphone-11-64gb-black",
    exampleListingPath: "",
  },
  mironet: {
    test: ".product_detail",
    name: "h1",
    price: ".product_cena_box .product_dph",
    render: { target: ".product_pravy", position: "beforeend" },
    origin: "https://www.mironet.cz",
    exampleProductPath: "apple-iphone-11-64gb-cerna-61quot-hexacore-4gb-64gb-12mp12mp12mp-ios13+dp409453/",
    exampleListingPath: "",
  },
  mountfield: {
    test: ".box-detail__info",
    name: "h1",
    price: () => document.querySelector("[itemprop=price]").getAttribute("content"),
    render: { target: ".box-detail__info", position: "beforeend" },
    origin: "https://www.mountfield.{cz,sk}",
    exampleProductPath: "sekera-patriot-l-73-cm/1900-g-1zst4100",
    exampleListingPath: "",
  },
  tsbohemia: {
    test: "#stoitem_detail",
    name: "h1",
    price: ".price",
    render: { target: ".product-tools", style: "width: 100%;" },
    origin: "https://www.tsbohemia.cz",
    exampleProductPath: "apple-iphone-12-64gb-black-mgj53cn-a-_d364434.html",
    exampleListingPath: "",
  },
  alfa: {
    test: ".prodinfo",
    name: "h1",
    price: ".pvat",
    render: { target: "table.prodinfo", style: "float: right; min-width: 400px" },
    origin: "https://www.alfa.cz",
    exampleProductPath: "product.php?eid=105160006000000509O",
    exampleListingPath: "",
  },
  "ab-com": {
    test: "meta[itemprop=sku]",
    name: "h1",
    price: ".box-detail-add__prices__item--main",
    render: { target: ".js-product-detail-main-add-to-cart-wrapper" },
    origin: "https://www.ab-com.cz",
    exampleProductPath: "apple-ipad-9-7-2018-wi-fi-128gb-gold/",
    exampleListingPath: "",
  },
  electroworld: {
    test: ".product-box__parameters",
    name: "h1",
    price: ".product-top__prices .typo-complex-lg-32",
    render: { target: "#product-detail-actions" },
    origin: "https://www.electroworld.cz",
    exampleProductPath: "apple-iphone-11-64-gb-cerny",
    exampleListingPath: "",
  },
  softcom: {
    test: "#stoitem_detail",
    name: "#stoitem_detail h1",
    price: "#stoitem_detail .price",
    render: { target: "#stoitem_detail .inetstock", style: "clear: both;" },
    origin: "https://www.electroworld.cz",
    exampleProductPath: "apple-iphone-11-64-gb-cerny",
    exampleListingPath: "",
  },
  bscom: {
    ...bsshop,
    origin: "https://www.bscom.cz",
    exampleProductPath: "mobilni-telefon-apple-iphone-11-64gb-cerna-mwlt2cn-a_d932983/",
    exampleListingPath: "",
  },
  drmax: {
    test: "[itemprop=mainEntity]",
    name: "h1",
    price: ".product-box__price",
    render: { target: ".product-box" },
    origin: "https://www.drmax.cz",
    exampleProductPath: "ibalgin-rapidcaps",
    exampleListingPath: "",
  },
  knihcentrum: {
    test: ".product-details-page",
    name: "h1",
    price: ".stock-price-part .product-price",
    render: { target: ".contexts-wrapper", style: "margin-top: -32px;" },
    origin: "https://www.knihcentrum.cz",
    exampleProductPath: "maly-princ-25",
    exampleListingPath: "",
  },
  megaknihy: {
    test: "#product_details",
    name: "h1", // ISBN: `[itemprop=isbn]`
    price: "#our_price_display",
    render: { target: "#pb-right-column", position: "beforeend" },
    origin: "https://www.megaknihy.cz",
    exampleProductPath: "pohadky/73024-maly-princ.html",
    exampleListingPath: "",
  },
  booktook: {
    test: "[itemprop=productID]",
    name: "h1",
    price: "#price_selling_vat",
    render: { target: ".price-block-container" },
    origin: "https://www.booktook.cz",
    exampleProductPath: "p/maly-princ-9788074514258/",
    exampleListingPath: "",
  },
  kolokram: {
    test: "body.ProductDetailState",
    name: "h1",
    price: "#PDTable .primary.user",
    render: { target: "#PDVariantSelector", position: "beforeend", style: "clear: both;" },
    origin: "https://www.kolokram.cz",
    exampleProductPath: "rukavice/185110-rukavice-specialized-body-geometry-sport-gel-black-l.html",
    exampleListingPath: "",
  },
  velosport: {
    test: ".product-detail",
    name: ".product-detail h1",
    price: ".product-detail [itemprop=offers]",
    render: { target: ".description", position: "beforeend" },
    origin: "https://www.velosport.cz",
    exampleProductPath: "cs/eshop/textil-obuv/cyklo-obleceni/rukavice/kratkoprste-panske/bravo-127667.html",
    exampleListingPath: "",
  },
  cycology: {
    ...bsshop,
    render: { target: "#PDMaster .right", position: "beforeend" },
    origin: "https://www.cycology.cz/",
    exampleProductPath: "bryle-oakley-radar-ev-patch-arctic-surf-prizm-ruby-p1190251/",
    exampleListingPath: "",
  },
  "bike-eshop": {
    test: ".center_right_prdet_top_right_kod_produkt",
    name: "#center_right_prdet_top_right h1",
    price: "#center_right_prdet_top_right_kosik [itemprop=price]",
    render: { target: "#center_right_prdet_top_right", position: "beforeend", style: "clear: both;" },
    origin: "https://www.bike-eshop.cz",
    exampleProductPath: "cyklisticke-prilby/prilba-giro-chronicle-mips-mat-black-gloss-black",
    exampleListingPath: "",
  },
  sport95: {
    test: ".col-main-detail",
    name: ".col-main-detail h1",
    price: "#recite_par",
    render: { target: ".row-detail-cols .col-h-2 .row-2" },
    origin: "https://www.sport95.cz",
    exampleProductPath: "cyklisticka-helma-giro-fixture-mat-grey-vel-54-61-cm.html",
    exampleListingPath: "",
  },
  koloshop: {
    test: "#detail",
    name: "h1",
    price: ".sell-price",
    render: { target: "#customer-info", position: "beforebegin", style: "padding-right: 30px;" },
    origin: "https://www.koloshop.cz",
    exampleProductPath: "prilby-silnicni-mtb-enduro-361/Giro-Fixture-XL-MTB-prilba-mat-black-vel.-Uni.html",
    exampleListingPath: "",
  },
  mojekolo: {
    test: ".productDetail",
    name: "h1",
    price: ".productPrice__priceVat",
    render: { target: ".productDetail__price__addToCart", position: "beforeend", style: "clear: both;" },
    origin: "https://www.mojekolo.cz",
    exampleProductPath: "giro-fixture-xl-mat-black/",
    exampleListingPath: "",
  },
  "kola-online": {
    test: "#itemDetail",
    name: "h1",
    price: ".priceProduct",
    render: { target: ".customerPanel" },
    origin: "https://www.kola-online.cz",
    exampleProductPath: "superior-team-27-issue-2020/d69520",
    exampleListingPath: "",
  },
  kolasvorada: {
    test: ".main-product",
    name: "h1",
    price: ".detail__price [itemprop=price]",
    render: { target: ".main-product__header--right", position: "beforeend", style: "width: 100%;" },
    origin: "https://www.kolasvorada.cz",
    exampleProductPath: "helma-specialized-align-mips-matte-black-sm",
    exampleListingPath: "",
  },
  cyklobella: {
    test: ".p-detail",
    name: "h1",
    price: ".price-final-holder",
    render: { target: ".social-buttons-wrapper" },
    origin: "https://www.cyklobella.cz",
    exampleProductPath: "prilby-na-enduro-mtb/cyklisticka-helma-r2-trail-ath08k-2/",
    exampleListingPath: "",
  },
  progresscycle: {
    test: ".col-price-detail-end",
    name: "h1",
    price: ".col-price-detail-end",
    render: { target: "#WebPart_gwpupdatePanelProductPrice", position: "beforeend" },
    origin: "https://eshop.progresscycle.cz",
    exampleProductPath: "giro-chronicle-mips-mat-black-glos-black-l/",
    exampleListingPath: "",
  },
  "bike-life": {
    test: "#itemDetail",
    name: "h1",
    price: ".priceProduct",
    render: { target: "form.addToCart" },
    origin: "https://www.bike-life.cz",
    exampleProductPath: "cyklisticka-helma-r2-rock-ath11e/d16195",
    exampleListingPath: "",
  },
  bikero: {
    ...bsshop,
    origin: "https://www.bikero.cz",
    exampleProductPath: "poc-octal-modra-p337456/?cid=5636",
    exampleListingPath: "",
  },
  kupkolo: {
    test: ".content-block-product.main",
    name: "h1",
    price: ".price-final",
    render: { target: ".content-block-product:not(.main)", position: "beforeend" },
    origin: "https://www.kupkolo.cz",
    exampleProductPath: "helma-met-20-miles-bila_z97037/",
    exampleListingPath: "",
  },
  "online-sport": {
    test: "#listing-all .detail",
    name: "h1",
    price: ".detail-right-price-price b",
    render: { target: ".detail-top", position: "beforeend" },
    origin: "https://www.online-sport.cz",
    exampleProductPath: "batohy/turisticke-batohy/osprey-ariel-ag-55-lady-tidal-blue-wm/",
    exampleListingPath: "",
  },
  benu: {
    test: "#product-detail",
    name: "h1",
    price: ".buy-box__big-price",
    render: { target: ".product-desc", position: "beforeend" },
    origin: "https://www.benu.cz",
    exampleProductPath: "ibalgin-400-peroralni-potahovane-tablety-36x400mg",
    exampleListingPath: "",
  },
  pilulka: {
    test: ".product-detail__header",
    name: ".product-detail__header",
    price: "[class*='js-product-price-']",
    render: { target: "[class^='product-detail'] .bg-grey-light.rounded", position: "afterend" },
    origin: "https://www.pilulka.cz",
    exampleProductPath: "ibalgin-rapidcaps-400mg-cps-mol-30x400mg",
    exampleListingPath: "",
  },
  itesco: {
    test: ".product-details-page",
    name: "h1",
    price: ".price-per-sellable-unit .value",
    render: { target: ".product-controls__wrapper", position: "afterend", style: "clear: both; padding: 6px;" },
    origin: "https://nakup.itesco.cz",
    exampleProductPath: "groceries/cs-CZ/products/2001020019786",
    exampleListingPath: "",
  },
  kosik: {
    test: "[data-tid='product-detail']",
    name: "h1.product-name",
    price: ".product-price",
    render: { target: ".product-header-box", position: "afterend", style: "clear: both; width: 100%;" },
    origin: "https://www.kosik.cz",
    exampleProductPath: "produkt/calvo-tunak-v-olivovem-oleji-3x80g",
    exampleListingPath: "",
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
      // eslint-disable-next-line max-len
      // const name = document.querySelector("h1 [class*=Brand]").innerText + " " + document.querySelector("h1 [class*=Span]").innerText;
      // eslint-disable-next-line max-len
      // const variant = document.querySelector("#pdSelectedVariant [class*=Name]") ? " " + document.querySelector("#pdSelectedVariant [class*=Name]").innerText : "";
      // return name + variant;

      // TODO: Not ideal, does not work with variants all the time
      return document.title.split("|")[0].trim();
    },
    price: "#pd-price",
    render: {
      target: () => document.querySelector("#pdAddToCart").parentElement,
      position: "afterend",
      style: "clear: both;"
    },
    origin: "https://www.notino.cz",
    exampleProductPath: "calvin-klein/euphoria-parfemovana-voda-pro-zeny/",
    exampleListingPath: "",
  },
  chainreactioncycles: {
    test: ".singleproductpdpd",
    name: "h1",
    price: ".crcPDPPriceCurrent",
    render: { target: ".pdp-buying-guide" },
    origin: "https://www.chainreactioncycles.com",
    exampleProductPath: "garmin-edge-530-gps-cycling-computer/rp-prod187218",
    exampleListingPath: "",
  },
  "bike-discount": {
    test: ".product--detail-upper",
    name: "h1",
    price: "#netz-price",
    render: { target: ".product--buybox--inner" },
    origin: "https://www.bike-discount.de",
    exampleProductPath: "en/garmin-edge-530-gps-bike-computer",
    exampleListingPath: "en/bike/electronics/cycle-computer/",
  },
  "bike-components": {
    test: ".product-detail",
    name: "h1",
    price: "[data-test='auto-product-price']",
    // Sidebar is too narrow to render properly, so taking a little bit of artistic liberty and moving it above description
    // render: { target: "[data-test='auto-product-detail']", position: "beforeend" },
    render: { target: ".descriptioncol", position: "afterbegin" },
    origin: "https://www.bike-components.de",
    exampleProductPath: "en/Garmin/Edge-530-GPS-Bicycle-Computer-p71218/",
    exampleListingPath: "en/accessories/gps-bicycle-computers/gps-navigation/",
  },
  bike24: {
    test: ".product-page",
    name: "h1",
    price: ".product-detail-price .price__value",
    render: { target: ".product-detail-information-area__body", position: "beforeend" },
    origin: "https://www.bike24.com",
    exampleProductPath: "p2328789.html",
    exampleListingPath: "bike-computers.html"
  },

  /*
  template: {
    test: "",
    name: "",
    price: "",
    render: { target: "" },
    origin: "",
    exampleProductPath: "",
    exampleListingPath: "
,  },
  */
};

if (typeof require !== "undefined" && require.main !== module) { // module required via require(…) - from Cypress
  module.exports = scrawlers;
}
