const listaSelecaoPokemon = document.querySelectorAll(".pokemon");
console.log(listaSelecaoPokemon);

listaSelecaoPokemon.forEach(pokemon => {
    pokemon.addEventListener("click", () => {

        esconderCartaoPokedev();

        const idPokemonSelecionado = mostrarCartaoPokemonSelecionado(pokemon);

        desativarPokemonNaListagem();

        ativarPokemonSelecionadoNaListagem(idPokemonSelecionado);

    })
})


function ativarPokemonSelecionadoNaListagem(idPokemonSelecionado) {
    const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado);
    pokemonSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokemonNaListagem() {
    const pokemonAtivoNaListagem = document.querySelector(".ativo");
    pokemonAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokemonSelecionado(pokemon) {
    const idPokemonSelecionado = pokemon.attributes.id.value;

    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokemonSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokemonSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
