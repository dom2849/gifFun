// rCBafqJTrxUTFK9rBlem9uvYUHA6D3LE API KEY!!!!

import Giphy from '/giphy.js';

let l = new Giphy();


// let myApp = {
//     trendingUrl : "http://api.giphy.com/v1/gifs/trending?",
//     getSearchForUrl : (phrase) => `http://api.giphy.com/v1/gifs/search?q=${phrase}`
// }

let trendingUrl = l.trendingUrl;
let searchForUrl = l.getSearchForUrl("hello");
console.log(trendingUrl);
console.log(searchForUrl);


l.fetchData(searchForUrl, 0);





