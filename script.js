

let combinations = [
    {q: "Enxurradas.", a: "Escoamento superficial da água com alta energia de transporte e poder destrutivo."},
    {q: "Alagamento.", a: "Água da chuva temporariamente acumulada que não consegue escoar devido a problemas da rede de esgoto."},
    {q: "Retificar ", a: "O processo de alterar artificialmente o curso de um rio tornando-o mais reto."},
    {q: "27 de abril de 2024", a: "Uma enchente terrível assolou o estado do rio grande do sul e deixou 184 mortos."},
    {q: "No dia 1° de janeiro de 2025 ", a: "O Jd. Helena e Pantanal amanheceram debaixo d 'água e dezenas de pessoas ficaram desabrigadas."},
    {q: "Ecoansiedade", a: "Resposta emocional às mudanças climáticas, que pode ser definida como uma grande quantidade de angústia e preocupação causados pela crise climática."},
    {q: "Mudanças climáticas ", a: "Transformações a longo prazo nos padrões de temperatura e clima causadas principalmente pelas ações humanas."},
    {q: "Eventos Climáticos extremos", a: "São fenômenos climáticos que ocorrem em volume acentuado e fora dos níveis considerados normais, como ondas de calor, secas, queimadas, enchentes e inundações."},
    {q: "Injustiça Climática", a: "Os 10% mais ricos do mundo são responsáveis por 50% das emissões de carbono na atmosfera, enquanto os mais pobres ( 50%) são responsáveis por apenas 8% das emissões."},
    {q: "Aquecimento Global ", a: "Aumento da temperatura média global da Terra, agravado pela ação humana."}
];

let userAnswers = Array();

let leftCol = document.querySelector(".leftColumn");
let rightCol = document.querySelector(".rightColumn");

let selectedQ = null;
let selectedA = null;


function shuffle(array){
    return array.sort(() => Math.random() - 0.5);

}


function render(){

    shuffle(combinations).forEach(pair => {
        const qDiv = document.createElement("div");
        qDiv.className = "item q";
        qDiv.innerText = pair.q;
        console.log(qDiv)
        leftCol.appendChild(qDiv)
    });

    shuffle(combinations).forEach(pair => {
        const aDiv = document.createElement("div");
        aDiv.className = "item a";
        aDiv.innerText = pair.a;
        rightCol.appendChild(aDiv)
    });

}

function clearSelection(){
    document.querySelectorAll(".item").forEach( element => {
        element.classList.remove("selected");
    });    
}

document.addEventListener("click", e => {
    if(!e.target.classList.contains("item")) return;
    let connectionNumber = userAnswers.length;
    let target = e.target;

    if (target.parentElement.classList.contains("leftColumn")){
        selectedQ = target;
        console.log("Clicou em: " + target);
    }

    if(selectedQ != null){
        clearSelection();
        selectItem(target)
    }

    
})


function selectItem(item){
    item.classList.add("selected")
}

function answer(quest, ans){
    userAnswers.push( {q: quest, a: ans} );
    selectedA = null;
    selectedQ = null;
    console.log(userAnswers);
}

render()





