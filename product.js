let MainImg = document.getElementById("MainImg");
let SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = ()=>{
    MainImg.src = SmallImg[0].src
}

SmallImg[1].onclick = ()=>{
    MainImg.src = SmallImg[1].src
}

SmallImg[2].onclick = ()=>{
    MainImg.src = SmallImg[2].src
}

SmallImg[3].onclick = ()=>{
    MainImg.src = SmallImg[3].src
}
