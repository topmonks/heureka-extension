# Porovnávač cen
Rozšíření vzniklo pro usnadnění vyhledávání a porovnávání cen produktů na českých i slovenských eshopech. Celý příběh vzniku Porovnávače cen se dočtete [zde](https://blog.topmonks.com/ako-sme-chceli-dosta%C5%A5-heur%C3%A9ku-do-alzy-c51378799d89).

![example](https://github.com/topmonks/heureka-extension/raw/master/example.png)


## Jak to funguje
1. Po otevření produktové stránky na jednom z podporovaných eshopů rozšíření získá uvedenou cenu a název produktu
2. Rozšíření podle získaného názvu vyhledá produkt v porovnávači cen (Heureka.cz nebo .sk)
3. Výsledky vyhledávaní se zobrazují poblíž tlačítka koupit
4. Pokud nebyl nalezen žadný produkt nebo žadný z nalezených nemá nižší cenu, zobrazí se pouze odkaz pro ověření

### Podporované prohlížeče

- [x] Google Chrome - [click to install](https://chrome.google.com/webstore/detail/jmhkgcmmgjblnkjkbgjggkaeifacakgi)
- [x] Mozila Firefox - [click to install](https://addons.mozilla.org/cs/firefox/addon/porovnani-cen-by-topmonks/)
- [x] Opera - [Install Chrome Extensions](https://addons.opera.com/sk/extensions/details/install-chrome-extensions/) &#8594; [click to install](https://chrome.google.com/webstore/detail/jmhkgcmmgjblnkjkbgjggkaeifacakgi)

### Podporované eshopy

[//]: # (Run `npm run generate-info` to update this)

- [x] [ab-com.cz](https://www.ab-com.cz)
- [x] [alfa.cz](https://www.alfa.cz)
- [x] [alza.cz](https://www.alza.cz), [alza.sk](https://www.alza.sk)
- [x] [benu.cz](https://www.benu.cz)
- [x] [bike-components.de](https://www.bike-components.de)
- [x] [bike-discount.de](https://www.bike-discount.de)
- [x] [bike-eshop.cz](https://www.bike-eshop.cz)
- [x] [bike-life.cz](https://www.bike-life.cz)
- [x] [bike24.com](https://www.bike24.com)
- [x] [bikero.cz](https://www.bikero.cz)
- [x] [booktook.cz](https://www.booktook.cz)
- [x] [bscom.cz](https://www.bscom.cz)
- [x] [chainreactioncycles.com](https://www.chainreactioncycles.com)
- [x] [cycology.cz/](https://www.cycology.cz/)
- [x] [cyklobella.cz](https://www.cyklobella.cz)
- [x] [czc.cz](https://www.czc.cz)
- [x] [datart.cz](https://www.datart.cz), [datart.sk](https://www.datart.sk)
- [x] [drmax.cz](https://www.drmax.cz)
- [x] [electroworld.cz](https://www.electroworld.cz)
- [x] [nakup.itesco.cz](https://nakup.itesco.cz)
- [x] [kasa.cz](https://www.kasa.cz)
- [x] [knihcentrum.cz](https://www.knihcentrum.cz)
- [x] [kola-online.cz](https://www.kola-online.cz)
- [x] [kolasvorada.cz](https://www.kolasvorada.cz)
- [x] [kolokram.cz](https://www.kolokram.cz)
- [x] [koloshop.cz](https://www.koloshop.cz)
- [x] [kosik.cz](https://www.kosik.cz)
- [x] [kupkolo.cz](https://www.kupkolo.cz)
- [x] [lekarna.cz](https://www.lekarna.cz)
- [x] [mall.cz](https://www.mall.cz), [mall.sk](https://www.mall.sk)
- [x] [megaknihy.cz](https://www.megaknihy.cz)
- [x] [mironet.cz](https://www.mironet.cz)
- [x] [mojekolo.cz](https://www.mojekolo.cz)
- [x] [mountfield.cz](https://www.mountfield.cz), [mountfield.sk](https://www.mountfield.sk)
- [x] [notino.cz](https://www.notino.cz)
- [x] [online-sport.cz](https://www.online-sport.cz)
- [x] [pilulka.cz](https://www.pilulka.cz)
- [x] [eshop.progresscycle.cz](https://eshop.progresscycle.cz)
- [x] [electroworld.cz](https://www.electroworld.cz)
- [x] [sport95.cz](https://www.sport95.cz)
- [x] [tsbohemia.cz](https://www.tsbohemia.cz)
- [x] [velosport.cz](https://www.velosport.cz)

#### Development

ℹ️ E-shop specific logic is in `extension/scrawlers.js`

#### Publishing

ℹ️ Automatic publishing from master on git tags starting with `v` (short for version)

* Make changes, test, commit, push
* `npm run update-version` -> will update version in `manifest.json` to current date & time formatted as valid version number, e.g. 22.3.31.1107 (= 2022/03/31 11:07)
* `git commit -m "[bump version]" && git push`
* `npm run tag-version-and-push-to-trigger-publish`

### Heureka API
Heureka does not provide a public API so we are using Heureka's search suggestions to find products.
But there is a **limitation**: We cannot guarantee that found product can be ordered on Heureka.

#### Search suggestions
```
GET https://api.heureka.cz/head-gateway/search/v2?query=:term
```
