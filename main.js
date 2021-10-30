var mainText = document.querySelector(".mainText")


var social = document.querySelector(".social")

var mainImage = document.querySelector(".mainImage")




const onLoad1 = () => {

    setTimeout(function() {
        mainImage.classList.add("fadeFromRight")

    }, 50);



}



//When Website loads


const onLoad = () => {

    setTimeout(function() {
        mainText.classList.add("fadeFromLeft")

    }, 1600);



}

const onLoad2 = () => {

    setTimeout(function() {
        social.classList.add("fadeFromBottom")

    }, 2600);



}
onLoad()
onLoad1()
onLoad2()