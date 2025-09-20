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


document.getElementById("correct-count").textContent = localStorage.getItem("correct");
document.getElementById("wrong-count").textContent = localStorage.getItem("incorrect");

const tbody = document.getElementById("answers-table");
combinations.forEach(r => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${r.c}</td><td>${r.a}</td>`;
    tbody.appendChild(row);
});

function restartGame() {
    window.location.href = "../game/";
}

function goHome() {
    window.location.href = "../";
}