function imprimirCurriculo() {
    const url = './assets/Currículo-Lucas-Nascimento.pdf'; // Caminho do PDF
    const win = window.open(url, '_blank'); // Abre o PDF em uma nova aba
}

const container = document.querySelector(".projetos-container");
const btnAnterior = document.querySelector(".anterior");
const btnProximo = document.querySelector(".proximo");

let index = 0; // Índice do slide atual
const totalProjetos = document.querySelectorAll(".projeto").length;
const visiveis = 3; // Quantidade de projetos visíveis

btnProximo.addEventListener("click", () => {
    if (index < totalProjetos - visiveis) {
        index++;
        atualizarCarrossel();
    }
});

btnAnterior.addEventListener("click", () => {
    if (index > 0) {
        index--;
        atualizarCarrossel();
    }
});

function atualizarCarrossel() {
    const deslocamento = index * (100 / visiveis);
    container.style.transform = `translateX(-${deslocamento}%)`;
}
