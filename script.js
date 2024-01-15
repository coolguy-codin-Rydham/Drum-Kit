let leng = document.querySelectorAll('.drum').length;

for(let i=0; i<leng;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        let buttonInnerHtml=this.innerHTML;
        makeSound(buttonInnerHtml)
        ButtonAnimation(buttonInnerHtml)
        
    });
}


document.addEventListener('keypress',function(event){
    
    makeSound(event.key);
    // buttonInnerHtml(event.key)
    ButtonAnimation(event.key)

});
function makeSound(key){
    switch (key) {
        case "w":
          let newsound1 = new Audio("./sounds/crash.mp3");
          newsound1.play();
          break;
        case "a":
          let newsound2 = new Audio("./sounds/kick-bass.mp3");
          newsound2.play();
          break;
        case "s":
          let newsound3 = new Audio("./sounds/snare.mp3");
          newsound3.play();
          break;
        case "h":
          let newsound4 = new Audio("./sounds/tom-1.mp3");
          newsound4.play();
          break;
        case "j":
          let newsound5 = new Audio("./sounds/tom-2.mp3");
          newsound5.play();
          break;
        case "k":
          let newsound6 = new Audio("./sounds/tom-3.mp3");
          newsound6.play();
          break;
        case "l":
          let newsound7 = new Audio("./sounds/tom-4.mp3");
          newsound7.play();
          break;
        default:
          console.log("Not Valid");
          break;
      }
}

function ButtonAnimation(key){
    let activeButton=document.querySelector('.'+key);

    activeButton.classList.add('pressed');

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}