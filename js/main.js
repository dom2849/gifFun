import GiphyClient from './giphyClient.js';
import UserInterfaceHelper from './userInterfaceHelper.js';

const giphyClient = new GiphyClient();
const uiHelper = new UserInterfaceHelper();
const myApp = { offset : 0 };

loadEventListeners()

function loadEventListeners() {
    window.addEventListener('scroll', handleBottomOfThePageScroll);
    window.addEventListener('load', handleTrendingGifsDisplay);
}

function handleBottomOfThePageScroll() {
    if ((window.innerHeight + window.scrollY + 150) >= document.body.offsetHeight) {
        myApp.offset += 25
        handleTrendingGifsDisplay(myApp.offset)
    }
}

function handleTrendingGifsDisplay(offset) {
    giphyClient.fetchData(giphyClient.trendingUrl, offset)
        .then((gifs) => {
            addGifs(gifs.data);
        })
        .catch((error) => {
            console.log(error);
        })
}

function addGifs(gifs) {
    gifs.forEach((element) => {
        let imageUrl = element.images.original.url;
        uiHelper.appendMasonryItem(imageUrl)
    })
}




