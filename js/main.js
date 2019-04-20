import GiphyClient from './giphyClient.js';
import UserInterfaceHelper from './userInterfaceHelper.js';

const giphyClient = new GiphyClient();
const uiHelper = new UserInterfaceHelper();
const mobileScreenSize = 768;
const enterKeyCode = 13;

const myApp = {
    offset: 0,
    currentUrl: giphyClient.trendingUrl
};

loadEventListeners()

function loadEventListeners() {
    window.addEventListener('scroll', handleBottomOfThePageScroll);
    window.addEventListener('load', displayTrendingGifs);
    document.querySelector(".main-navigation__search-icon").addEventListener('click', handleGifSearch);
    document.querySelector(".main-navigation__search").addEventListener('keyup', handleKeyPress);
    document.querySelector(".main-navigation__home-button").addEventListener('click', displayTrendingGifs);
}

function handleKeyPress(event) {
    if (event.code == 'Enter' || event.keyCode == enterKeyCode) {
        handleGifSearch();
    }
}

function cleanUp() {
    uiHelper.clearAllMasonryItems();
    myApp.offset = 0;
    uiHelper.addMessageContent("");
}

function handleGifSearch() {
    cleanUp();

    let userSearch = document.querySelector(".main-navigation__search-input");
    myApp.currentUrl = giphyClient.getSearchForUrl(userSearch.value);

    displayGifs(myApp.currentUrl, 0);
    uiHelper.setGifsTitle(userSearch.value);
    userSearch.value = ''
}

function displayTrendingGifs() {
    cleanUp();
    myApp.currentUrl = giphyClient.trendingUrl;
    displayGifs(myApp.currentUrl, 0);
    uiHelper.setGifsTitle("Trending")
}

function displayGifs(url, offset) {
    uiHelper.addLoader();
    giphyClient.fetchData(url, offset)
        .then((gifs) => {
            addGifs(gifs.data);
            if (gifs.data.length === 0) uiHelper.addMessageContent('No gifs found');
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            uiHelper.removeLoader();
        })
}

function addGifs(gifs) {
    gifs.forEach((element) => {
        let imageUrl = (window.innerWidth <= mobileScreenSize) ?
            element.images.fixed_width_downsampled.url : element.images.original.url;

        uiHelper.appendMasonryItem(imageUrl)
    })
}


function handleBottomOfThePageScroll() {
    if ((window.innerHeight + window.scrollY + 150) >= document.body.offsetHeight) {
        myApp.offset += 25
        displayGifs(myApp.currentUrl, myApp.offset)
    }
}




