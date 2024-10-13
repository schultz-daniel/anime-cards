const listaSelecaoAnimes = document.querySelectorAll(".anime");

listaSelecaoAnimes.forEach(anime => {
    anime.addEventListener("click", () => {
        esconderCartaoAnime();

        const idAnimeSelecionado = mostrarCartaoAnime(anime);

        esconderAnimeNaListagem();

        mostarAnimeNaListagem(idAnimeSelecionado);
    })
})

function mostarAnimeNaListagem(idAnimeSelecionado) {
    const animeSelecionadoNaListagem = document.getElementById(idAnimeSelecionado);
    animeSelecionadoNaListagem.classList.add("ativo");
}

function esconderAnimeNaListagem() {
    const animeAtivoListagem = document.querySelector(".ativo");
    animeAtivoListagem.classList.remove("ativo");
}

function mostrarCartaoAnime(anime) {
    const idAnimeSelecionado = anime.attributes.id.value;
    const idDoCartaoAnimeParaAbrir = "cartao-" + idAnimeSelecionado;
    const cartaoAnimeParaAbrir = document.getElementById(idDoCartaoAnimeParaAbrir);
    cartaoAnimeParaAbrir.classList.add("aberto");
    return idAnimeSelecionado;
}

function esconderCartaoAnime() {
    const cartaoAnimeAberto = document.querySelector(".aberto");
    cartaoAnimeAberto.classList.remove("aberto");
}
