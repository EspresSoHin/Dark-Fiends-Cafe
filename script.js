const BGM = new Audio('assets/magiccityshoppingstreet.mp3');

let isBGMPlayed = false;

BGM.loop = true;
BGM.volume = 0.5;

 function playBGM() {            
        BGM.play();
        isBGMPlayed = true;
    }

document.body.onclick = ()=>{
    if(isBGMPlayed) return ;
    playBGM();
}

document.addEventListener('scroll', ()=>{
    if(isBGMPlayed) return ;
    playBGM();
})


//bouton pour activer, toggle le son ou désactiver le son

let soundOn = document.getElementById("musicIconOn");
let soundOff = document.getElementById("musicIconOff");

let soundbutton = document.querySelector(".musicToggle");


let isMuted = false;
BGM.muted = isMuted;
    
soundbutton.addEventListener("click", () => {

    isMuted = !isMuted; // Toggle the mute state
    BGM.muted = isMuted;

    soundOn.style.display = isMuted ? "none" : "block";
    soundOff.style.display = isMuted ? "block" : "none";
  });


//ou 
//soundbutton.src = soundOff
//<input type="range"> et le relier à BGM.volume. C'est très pratique pour laisser les visiteurs régler leur propre ambiance sonore. 🎶