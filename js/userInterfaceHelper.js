export default function UserInterfaceHelper(){

}


UserInterfaceHelper.prototype.appendMasonryItem = function(imageUrl){
    let masonryGrid = document.querySelector(".gifs__masonry-grid");
    let gridItem = createGridItem(imageUrl);
    masonryGrid.appendChild(gridItem);
}

function createGridItem(imageUrl){
    let gridItem = document.createElement("div");
    let gridImage = document.createElement("img");
    
    gridItem.classList = "gifs__grid-item";
    gridImage.src = imageUrl;
    gridImage.classList = "gifs__image"
    
    gridItem.appendChild(gridImage);
    
    return gridItem;   
}

UserInterfaceHelper.prototype.clearAllMasonryItems = function(){
    let masonryGrid = document.querySelector(".gifs__masonry-grid");

    while (masonryGrid.firstChild){
        masonryGrid.removeChild(masonryGrid.firstChild)
    }
}