const API = `https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/1/public/full?alt=json`;

const keys = ['ID', 'PRODUCT_NAME', 'MANUFACTURE', 'CATEGORY', 'INGRIDIENTS', 'AMOUNT', 'UNITS', 'PRICE', 'IMG_LINK'];
const count = keys.length;

fetch(API).then(d => d.json()).then(d => {
    console.log(d.feed.entry);
    const data = d.feed.entry.reduce((acc, el, i) => {
        const j = Math.floor(i / count);
        const k = i % count;
        if(k == 0){
            acc[j] = {};
        }
        acc[j][keys[k]] = el.content.$t;

        return acc;
    }, []).slice(1);

    console.log(data);
});