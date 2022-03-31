/**
 * @param selectorOrEl
 * @param {('beforebegin'|'afterbegin'|'beforeend'|'afterend')} position
 * @param attributes
 * @param attributes.style
 * @param attributes.tag
 * @param attributes.className
 */
const insert = (selectorOrEl, position = "afterend", attributes) => {
  const target = typeof selectorOrEl === "string" ? document.querySelector(selectorOrEl) : selectorOrEl;
  const el = document.createElement("div");
  el.setAttribute("id", "HeurekaContainer");
  if (attributes.style) el.setAttribute("style", attributes.style);
  target.insertAdjacentElement(position, el);
  return el;
};


/**
 * parse-price - returns a Number from a localized price string
 * Beware that:
 *  parsePrice("") => 0
 *  parsePrice(null) => 0
 *  parsePrice() => 0
 *
 * @version 1.1.8
 * @link https://github.com/caiogondim/parse-price.js#readme
 * @author Caio Gondim
 * @license MIT
 */
/* eslint-disable */
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
/* eslint-enable */

function getTlds() {
  const originalTld = location.hostname.split(".").reverse()[0];
  let heurekaTld = originalTld;
  if (!["cz", "sk"].includes(originalTld)) heurekaTld = "cz";
  return {
    originalTld,
    heurekaTld,
  };
}

function log(...args) {
  console.log("[EXTENSION POROVNÁNÍ CEN]", ...args);
}

module.exports = {
  insert,
  parsePrice,
  log,
  getTlds
};
