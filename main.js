var mainText = document.querySelector(".mainText")



var mainImage = document.querySelector(".mainImage")





//When Website loads
mainImage.classList.add("fadeFromRight")

const onLoad = () => {

    setTimeout(function() {
        mainText.classList.add("fadeFromLeft")

    }, 1500);



}
onLoad()