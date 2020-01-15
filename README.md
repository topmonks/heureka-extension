# Porovnávač cen
Rozšíření vzniklo pro usnadnění vyhledávání a porovnávání cen produktů na českých i slovenských eshopech.

![example](https://github.com/topmonks/heureka-extension/raw/master/example.png)


## Jak to funguje
1. Po otevření produktové stránky na jednom z podporovaných eshopů rozšíření získá uvedenou cenu a název produktu
2. Rozšíření podle získaného názvu vyhledá produkt v porovnávači cen (Heureka.cz nebo .sk)
3. Výsledky vyhledávaní se zobrazují poblíž tlačítka koupit
4. Pokud nebyl nalezen žadný produkt nebo žadný z nalezených nemá nižší cenu, zobrazí se pouze odkaz pro ověření
  
## Podporované eshopy
- [x] alza
- [x] czc
- [x] datart
- [x] kasa
- [x] lekarna
- [x] mall
- [ ] mironet
- [ ] mountfield
- [ ] notino
- [ ] rohlik
- [ ] tsbohemia
- [ ] alfa


### Heureka API
Heureka does not provide a public API so we are using Heureka's search suggestions to find products.
But there is a **limitation**: We cannot guarantee that found product can be ordered on Heureka.

#### Search suggestions
```
GET https://api.heureka.cz/head-gateway/search?term=:query
```

## How to install to Chrome
[Click to install](https://chrome.google.com/webstore/detail/jmhkgcmmgjblnkjkbgjggkaeifacakgi)
or

1. Download repository as ZIP file
2. Extract ZIP
3. Open new Chrome tab and go to `chrome://extensions/`
4. In the right corner turn on the Developer mode
5. Press "Load Unpacked" button and select extracted directory
6. Goto any of supported ecommerce product page 


