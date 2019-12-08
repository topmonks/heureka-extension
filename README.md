# Porovnavac cen
While buying product on Alza.cz this extension will check product price on Heureka.cz and prompt you to buy product on it instead. But only if it's cheaper...

![example](https://github.com/topmonks/heureka-extension/raw/master/example.png)


## How it works
1. The script runs on the product details page and sends its name to the script running in the extension. It's because the extension needs to pull data from another website, and CORS policy doesn't allow it.
2. Script extension scrapes Heureka feed and returns a result based on Heureka search
3. The script compares Heureka price with the price shown on another e-commerce site (Alza, Datart etc.). If the price on Heureka is lower, it shows call-to-action to buy that particular stuff on Heureka  


### Heureka API
Heureka does not provide a public API so we are using Heureka's search suggestions to find products.
But there is a **limitation**: We cannot guarantee that found product can be ordered on Heureka.

#### Search suggestions
```
GET https://api.heureka.cz/head-gateway/search?term=:query
```


## How to install to Chrome
[Download it as Unlisted Chrome extension](https://chrome.google.com/webstore/detail/jmhkgcmmgjblnkjkbgjggkaeifacakgi)
or

1. Download repository as ZIP file
2. Extract ZIP
3. Open new Chrome tab and go to `chrome://extensions/`
4. In the right corner turn on the Developer mode
5. Press "Load Unpacked" button and select extracted directory
6. Goto [alza.cz](https://alza.cz) and try it out



## Issues
- [x] With parsing prices of some product with action price
- [ ] Works only on product detail
- [ ] Prompts even if it is not possible to buy such product on Heureka
