// rCBafqJTrxUTFK9rBlem9uvYUHA6D3LE API KEY!!!!
let apiKey = 'rCBafqJTrxUTFK9rBlem9uvYUHA6D3LE';

export default function Giphy() {
    this.httpsRequest = new XMLHttpRequest();
    this.trendingUrl = "http://api.giphy.com/v1/gifs/trending?",
    this.getSearchForUrl = (phrase) => `http://api.giphy.com/v1/gifs/search?q=${phrase}`
}

// http://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}&offset=${offset}
// http://api.giphy.com/v1/gifs/search?q=ryan?&api_key=${apiKey}&offset=${offset}

Giphy.prototype.fetchData = function (url, offset) {
    let self = this;
    self.httpsRequest.open('GET', `${url}&api_key=${apiKey}&offset=${offset}`, 
        false);
        
    self.httpsRequest.onload = () => {
        if (self.httpsRequest.status !== 200){
            console.log('ERROR');
        }
        else{
            let responseText = self.httpsRequest.responseText;
            
            console.log(JSON.parse(responseText));   
        }
    }
    self.httpsRequest.send();
}