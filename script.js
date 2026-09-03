const botaolike = document.querySelector(".like");
const botaodeslike = document.querySelector(".deslike");

botaolike.addEventListener("click",clicklike);
botaodeslike.addEventListener("click",clickDeslike);


function clicklike () {

    console.log("fui clicado");
    let texto1=botaolike.querySelector("span");
    texto1.textContent++;

   
}

function clickDeslike () {


      console.log ("fui clicado");
      let texto2=botaodeslike.querySelector("span");
      texto2.textContent++;




}