const palavrasContainer = document.querySelector('.palavras-container');

const geraIndiceAleatorio = (arrayLength) => {
    return Math.floor(Math.random() * (arrayLength + 1));
}

const popularContainer = () => {
    for (let i = 0; i < palavras.length; i++) {
        let span = `<span>${palavras[geraIndiceAleatorio(palavras.length)]}</span>`;
        palavrasContainer.innerHTML += span;
    }
}

window.onload = popularContainer;

addEventListener('keydown', () => {
    document.querySelector('#input-texto').focus();
})