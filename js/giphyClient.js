let apiKey = 'rCBafqJTrxUTFK9rBlem9uvYUHA6D3LE';

export default function GiphyClient() {
    this.httpsRequest = new XMLHttpRequest();
    this.trendingUrl = "http://api.giphy.com/v1/gifs/trending?",
    this.getSearchForUrl = (phrase) => `http://api.giphy.com/v1/gifs/search?q=${phrase}`
}

GiphyClient.prototype.fetchData = function (url, offset) {
    let self = this;
    return new Promise (function(resolve, reject) {
        self.httpsRequest.open('GET', `${url}&api_key=${apiKey}&offset=${offset}`, 
            true);
            
        self.httpsRequest.onload = () => {
            if (self.httpsRequest.status === 200){
                resolve(JSON.parse(self.httpsRequest.responseText))
            }
            reject('Unable to find url');
        }
        self.httpsRequest.send();
    })
}