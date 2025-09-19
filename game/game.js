let playerAnswers = Array();
let availableConnections = Array.from({length: 10}, (_, i) => i + 1); 
let usedConnections = Array();
const TOTAL_COLORS = 10; // número de cores disponíveis no CSS
function submitAnswer(){

    let concept = document.querySelectorAll(".selected")[0];
    let answer = document.querySelectorAll(".selected")[1];

    if (!concept || !answer) {
        alert("Selecione um conceito e uma resposta primeiro.");
        return;
    }

    if (isConnected(concept.innerText, answer.innerText)) {
        alert("Esses elementos já estão conectados...");
        return;
    }

    if (availableConnections.length === 0) {
        alert("Você já usou todas as cores disponíveis!");
        return;
    }

    // pega o primeiro número disponível
    usedConnections.push(availableConnections[0])
    availableConnections.shift();
    let lastIndex = usedConnections.length-1;
    let connectionNumber = usedConnections[lastIndex];
    console.clear();
    playerAnswers.push({ c: concept, a: answer, n: connectionNumber });
    console.log(connectionNumber)
    connect();

    // console.clear();
    // console.log(playerAnswers);
}


function removeAnswer(){

    let concept = document.querySelectorAll(".selected")[0];
    let answer = document.querySelectorAll(".selected")[1];

    // procura dentro de playerAnswers o par que tenha o mesmo n
    let pair = playerAnswers.find(item => 
        item.c === concept || item.a === answer
    );


    let connNumberToRemove = pair.n
    availableConnections.push(usedConnections[usedConnections.indexOf(connNumberToRemove)]);





    if (!pair) {
        alert("Nenhuma conexão encontrada para esses elementos.");
        return;
    }

    // garante que são do mesmo conjunto (mesmo n)
    if (pair.c === concept && pair.a === answer) {
        playerAnswers = playerAnswers.filter(item => item.n !== pair.n);
        disconnect(concept, answer);
    } else {
        alert("Os elementos não pertencem à mesma conexão.");
    }

    console.clear();
    console.log(connNumberToRemove)
    console.log(availableConnections)
    
}


function getConnectionNumberClass(element){
    let classArray = element.classList;
    if (!classArray) alert("Elementos não possuem conexão.");
    let newClassArray = Array();
    
    classArray.forEach(className => {
        newClassArray.push(className);  
    })
    
    let indexOfConnectionNumber = newClassArray.indexOf(newClassArray.find(className => className.includes("connection-")));
    let connectionNumberClass = classArray[indexOfConnectionNumber];
    
    return connectionNumberClass;
}

function connect(){
    let lastIndex = playerAnswers.length - 1;
    if (lastIndex < 0) return;

    let { c, a, n } = playerAnswers[lastIndex];

    // calcula a cor ciclicamente
    let colorIndex = ((n - 1) % TOTAL_COLORS) + 1;
    let className = "connection-" + colorIndex;

    c.classList.add(className);
    a.classList.add(className);
}


function disconnect(concElement, ansElement){
    concElement.classList.remove(getConnectionNumberClass(concElement));
    ansElement.classList.remove(getConnectionNumberClass(ansElement));
}

function isConnected(c, a){
    return playerAnswers.some(item => 
        item.c.innerText === c || item.a.innerText === a
    );
}


function checkAnswers(){
    let correct = 0;

    playerAnswers.forEach(pair => {
        let conceptText = pair.c.innerText.trim();
        let answerText = pair.a.innerText.trim();

        let match = combinations.find(item => 
            item.c.trim() === conceptText && item.a.trim() === answerText
        );

        if (match) {
            correct++;
        }
    });

    return {
        total: playerAnswers.length,
        correct: correct,
        wrong: playerAnswers.length - correct,
        finished: playerAnswers.length === combinations.length
    };
}

function finish(){

    if(playerAnswers.length < 10){
        alert("Há Elementos sem conexão.")
    }else{
        let result = checkAnswers();
        // alert(`Acertos: ${result.correct}, Erros: ${result.wrong}`);
        if(result.finished){
            alert("Jogo finalizado!");
        }
        window.location.href = "../feedback"
    }
}

