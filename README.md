# Just PoC
While buying product on Alza.cz this extension will check product price on Heureka.cz and prompt you to buy product on it instead. But only if it's cheaper...

## How it works
1. script ktery bezi na strance, detekuje navstevu detailu produktu a odesila jeho nazev scriptu ktery bezi v rozsireni (protoze rozsireni potrebuje tahat data z jineho webu a CORS policy toto neumoznuje)
2. script rozsireni, ktery (na zaklade nazvu produktu) vraci vysledky hledani produktu na heurece
3. script na webu Alzy (popr. dalsich eshopu), ktery srovna ceny produktu se ziskanymi vysledky hledani na Heurece. V pripade ze najde levnejsi variantu, nabidne uzivateli opustit eshop a nakupu uskutecnit na Heurece  

## How to install to Chrome
1. Download repository as ZIP file
2. Extract ZIP 
3. Open new Chrome tab and go to `chrome://extensions/`
4. In the right corner turn on the Developer mode
5. Press "Load Unpacked" button and select extracted directory
6. Goto [alza.cz](https://alza.cz) and try it out


## Issues
- [ ] With parsing prices of some product with action price
- [ ] Works only on product detail
