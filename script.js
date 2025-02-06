function imprimirCurriculo() {
    const url = './assets/Currículo-Lucas-Nascimento.pdf'; // Caminho do PDF
    const win = window.open(url, '_blank'); // Abre o PDF em uma nova aba
}

const container = document.querySelector(".projetos-container");
const btnAnterior = document.querySelector(".anterior");
const btnProximo = document.querySelector(".proximo");

let index = 0; 
const totalProjetos = document.querySelectorAll(".projeto").length;
const visiveis = 3; 
const larguraProjeto = document.querySelector(".projeto").offsetWidth + 32; // Largura do projeto + gap (2rem = 32px)

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
    const deslocamento = index * larguraProjeto; // Deslocamento em pixels
    container.style.transform = `translateX(-${deslocamento}px)`;
}
