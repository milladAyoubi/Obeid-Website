var mainText = document.querySelector(".mainText")



var mainImage = document.querySelector(".mainImage")




const onLoad1 = () => {

        setTimeout(function() {
            mainImage.classList.add("fadeFromRight")

        }, 100);



    }
    //When Website loads


const onLoad = () => {

    setTimeout(function() {
        mainText.classList.add("fadeFromLeft")

    }, 1600);



}
onLoad()
onLoad1()