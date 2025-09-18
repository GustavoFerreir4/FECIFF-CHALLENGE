

let combinations = [
    {c: "Enxurradas.", a: "Escoamento superficial da água com alta energia de transporte e poder destrutivo."},
    {c: "Alagamento.", a: "Água da chuva temporariamente acumulada que não consegue escoar devido a problemas da rede de esgoto."},
    {c: "Retificar ", a: "O processo de alterar artificialmente o curso de um rio tornando-o mais reto."},
    {c: "27 de abril de 2024", a: "Uma enchente terrível assolou o estado do rio grande do sul e deixou 184 mortos."},
    {c: "No dia 1° de janeiro de 2025 ", a: "O Jd. Helena e Pantanal amanheceram debaixo d 'água e dezenas de pessoas ficaram desabrigadas."},
    {c: "Ecoansiedade", a: "Resposta emocional às mudanças climáticas, que pode ser definida como uma grande quantidade de angústia e preocupação causados pela crise climática."},
    {c: "Mudanças climáticas ", a: "Transformações a longo prazo nos padrões de temperatura e clima causadas principalmente pelas ações humanas."},
    {c: "Eventos Climáticos extremos", a: "São fenômenos climáticos que ocorrem em volume acentuado e fora dos níveis considerados normais, como ondas de calor, secas, queimadas, enchentes e inundações."},
    {c: "Injustiça Climática", a: "Os 10% mais ricos do mundo são responsáveis por 50% das emissões de carbono na atmosfera, enquanto os mais pobres ( 50%) são responsáveis por apenas 8% das emissões."},
    {c: "Aquecimento Global ", a: "Aumento da temperatura média global da Terra, agravado pela ação humana."}
];

let playerAnswers = Array();

let questionSlider = document.querySelector("#concepts-slider");
let answerSlider = document.querySelector("#answers-slider");



function shuffle(array){
    return array.sort(() => Math.random() - 0.5);
}


function render(){

    shuffle(combinations).forEach(pair => {
        const qDiv = document.createElement("div");
        qDiv.className = "slide";
        qDiv.innerText = pair.c;
        questionSlider.appendChild(qDiv);
    });

    shuffle(combinations).forEach(pair => {
        const aDiv = document.createElement("div");
        aDiv.className = "slide";
        aDiv.innerText = pair.a;
        answerSlider.appendChild(aDiv);
    });

}

function initSliders() {
  const buttons = document.querySelectorAll(".slider-controls button");

  buttons.forEach(button => {
    button.onclick = () => {
      const targetId = button.dataset.target;
      const slider = document.getElementById(targetId);
      const slides = slider.querySelectorAll(".slide");

      if (slides.length === 0) return; // no slides to move

      let currentIndex = parseInt(slider.dataset.index) || 0;

      if (button.classList.contains("next")) {
        currentIndex = (currentIndex + 1) % slides.length;
      } else if (button.classList.contains("prev")) {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      }

      slider.dataset.index = currentIndex;


      slides.forEach(Element => {
        Element.classList.add("hide")
        Element.classList.remove("selected")
      })

      slides[currentIndex].classList.remove("hide")
      slides[currentIndex].classList.add("selected")

      
    };
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initSliders();
});

render();

function submitAnswer(){
  let connectionNumber = playerAnswers.length;
  let concept = document.querySelectorAll(".selected")[0];
  let answer = document.querySelectorAll(".selected")[1];
  
  if(  isConnected(concept.innerText, answer.innerText) ){
    alert("Esses elementos já estão conectados...");
  }else{
    concept.classList.add("connection-" + connectionNumber);
    answer.classList.add("connection-" + connectionNumber);
    playerAnswers.push(
      {c: concept.innerText, a: answer.innerText}
    )
  }

}

function isConnected(c, a){
  let repeats = false;
  playerAnswers.forEach(Element => {
    if(Element.a == a || Element.c == c){
      repeats = true;
    }
  })

  if(repeats){
    return true;
  }else{
    return false;
  }
}



function removeAnswer(){

  let connectionNumber = playerAnswers.length;
  let concept = document.querySelectorAll(".selected")[0];
  let answer = document.querySelectorAll(".selected")[1];

  let foundAnswer = playerAnswers.indexOf(playerAnswers.find(item => item.a == answer.innerText));
  let foundConcept = playerAnswers.indexOf(playerAnswers.find(item => item.c == concept.innerText));


  if(foundAnswer == foundConcept && isConnected(foundAnswer.c, foundAnswer.a)){
    playerAnswers.splice(foundAnswer)
    concept.classList.remove(getConnectionNumberClass(concept));
    answer.classList.remove(getConnectionNumberClass(answer));
  }else{
    alert("Os elementos não pertencem à mesma conexão")
  }

}


function getConnectionNumberClass(element){
  let classArray = element.classList;
  let newClassArray = Array();

  classArray.forEach(className => {
    newClassArray.push(className);  
  })

  console.log(newClassArray);

  let indexOfConnectionNumber = newClassArray.indexOf(newClassArray.find(className => className.includes("connection-")));

  let connectionNumberClass = classArray[indexOfConnectionNumber];

  return connectionNumberClass;
}