



let play = document.getElementById("play");
let pause = document.getElementById("pause");

var sound= new Audio("Naruto-Blue-Bird.mp3");

play.addEventListener("click",()=>{
    sound.play();
});
pause.addEventListener("click",()=>{
    sound.pause();
})