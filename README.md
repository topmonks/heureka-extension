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

### Podporované eshopy
- [x] [alza.cz](https://alza.cz), [alza.sk](https://alza.sk)
- [x] [czc.cz](https://czc.cz)
- [x] [datart.cz](https://datart.cz), [datart.sk](https://datart.sk)
- [x] [kasa.cz](https://kasa.cz)
- [x] [lekarna.cz](https://lekarna.cz)
- [x] [mall.cz](https://mall.cz), [mall.sk](https://mall.sk)
- [x] [mironet.cz](https://mironet.cz)
- [x] [mountfield.cz](https://mountfield.cz), [mountfield.sk](https://mountfield.sk)
- [x] [tsbohemia.cz](https://tsbohemia.cz)
- [x] [alfa.cz](https://alfa.cz)

#### Jak přidat vlastní oblíbený eshop?
Example TBD

### Heureka API
Heureka does not provide a public API so we are using Heureka's search suggestions to find products.
But there is a **limitation**: We cannot guarantee that found product can be ordered on Heureka.

#### Search suggestions
```
GET https://api.heureka.cz/head-gateway/search?term=:query
```
