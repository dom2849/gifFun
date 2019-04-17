
import GiphyClient from '/js/giphyClient.js';

let l = new GiphyClient();

let trendingUrl = l.trendingUrl;
let searchForUrl = l.getSearchForUrl("HELLO");
console.log(trendingUrl);
console.log(searchForUrl);


l.fetchData(searchForUrl, 0);





