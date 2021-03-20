// ┌─────────┐
// │   (1)   │	
// └─────────┘
const olElements = document.querySelector("ol").querySelectorAll("li");

olElements.forEach(element => {
    element.addEventListener("click", textToChangeLineThrough)
})

function textToChangeLineThrough(){
    lineThrough(event.target);
}

// ┌─────────┐
// │   (2)   │	
// └─────────┘
const ulElements = document.querySelector("ul").querySelectorAll("li");

ulElements.forEach(element => {
    element.addEventListener("click", textToChangeOpacity)
})

function textToChangeOpacity(){
    opacityChange(event.target);
}

// ┌─────────┐
// │   (3)   │	
// └─────────┘
const allImages = document.querySelectorAll("img");

allImages.forEach(element => {
    element.addEventListener("click", imageToRemove)
})

function imageToRemove(){
    removeImage(event.target)
}

// ┌─────────┐
// │   (4)   │	
// └─────────┘
const meteorButton = document.querySelector("button")

meteorButton.addEventListener("click", meteor)

function meteor(){
    olElements.forEach(element => {
        lineThrough(element);
    })
    ulElements.forEach(element => {
        opacityChange(element);
    })
    allImages.forEach(element => {
        removeImage(element);
    })
}

// ┌──────────────────────┐
// │   Helper Functions   │	
// └──────────────────────┘

function lineThrough(text){
    text.style.textDecoration = "line-through";
}

function opacityChange(text){
    text.style.opacity = 0;
}

function removeImage(image){
    image.style.width = 0;
}