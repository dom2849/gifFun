export default function UserInterfaceHelper(){

}


UserInterfaceHelper.prototype.appendMasonryItem = function(imageUrl){
    let masonryGrid = document.querySelector(".masonry-grid");
    let masonryGridItem = createMasonryGridItem(imageUrl);
    masonryGrid.appendChild(masonryGridItem);
}

function createMasonryGridItem(imageUrl){
    let gridItem = document.createElement("div");
    let gridImage = document.createElement("img");
    
    gridItem.classList = "masonry-grid__grid-item";
    gridImage.src = imageUrl;
    gridImage.classList = "masonry-grid__image"
    
    gridItem.appendChild(gridImage);
    
    return gridItem;   
}

UserInterfaceHelper.prototype.clearAllMasonryItems = function(){
    let masonryGrid = document.querySelector(".masonry-grid");

    while (masonryGrid.firstChild){
        masonryGrid.removeChild(masonryGrid.firstChild)
    }
}