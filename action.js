const nextIg = document.querySelector(".next")
const imgCt = document.querySelector(".image-cont")
const imgs = document.querySelectorAll("img")
const pre = document.querySelector(".pre")


let currentImg =0
let timeout


updateImage()

function updateImage(){

    if(currentImg >= imgs.length){
        currentImg = 0
    }
    else if(currentImg < 0){
        currentImg = imgs.length - 1
    }

    // imgCt.style.transform = "translateX(-700px)"
    imgCt.style.transform = `translateX(-${currentImg * 700}px)`

    timeout = setTimeout(()=>{
        currentImg++
        updateImage()

    },3000)
}


pre.addEventListener('click' , ()=>{
    currentImg--
    clearTimeout(timeout)
    updateImage()
})


nextIg.addEventListener('click', ()=>{

    currentImg++
    clearTimeout(timeout)
    updateImage()
})