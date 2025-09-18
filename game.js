
function submitAnswer(){
    let connectionNumber = playerAnswers.length;
    let concept = document.querySelectorAll(".selected")[0];
    let answer = document.querySelectorAll(".selected")[1];
  
    if(  isConnected(concept.innerText, answer.innerText) ){
        alert("Esses elementos já estão conectados...");
    }else{
        playerAnswers.push(
            {c: concept, a: answer}
        );
        connect();
    }
    
}

function isConnected(c, a){
    let repeats = false;
    playerAnswers.forEach(Element => {
        if(Element.a.innerText == a || Element.c.innerText == c){
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
    
    let foundAnswer = playerAnswers.indexOf(playerAnswers.find(item => item.a.innerText == answer.innerText));
    let foundConcept = playerAnswers.indexOf(playerAnswers.find(item => item.c.innerText == concept.innerText));
    
    
    if(foundAnswer == foundConcept){
        playerAnswers.splice(foundAnswer);
        disconnect(concept, answer);
    }else{
        alert("Os elementos não pertencem à mesma conexão");
    }


    
}


function getConnectionNumberClass(element){
    let classArray = element.classList;
    if (!classArray) return alert("Elementos não possuem conexão.");
    let newClassArray = Array();
    
    classArray.forEach(className => {
        newClassArray.push(className);  
    })
    
    let indexOfConnectionNumber = newClassArray.indexOf(newClassArray.find(className => className.includes("connection-")));
    let connectionNumberClass = classArray[indexOfConnectionNumber];
    
    return connectionNumberClass;
}

function connect(){
    
    let conceptElements = conceptSlider.children
    let answerElements = answerSlider.children

    for(let i = 0 ; i < playerAnswers.length ; i++){
      return ;
    }

}


function disconnect(concElement, ansElement){
    return ;
}

render();

conceptSlider.childNodes[3].classList.add("selected")
answerSlider.childNodes[3].classList.add("selected")