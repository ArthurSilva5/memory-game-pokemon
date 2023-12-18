// Cria uma lista com os pokémons que serão utilizados no projeto
const pokemons = ["charmander", "squirtle", "bulbasaur", "totodile", "tepig", "cyndaquil", "treecko", "oshawott", "piplup", "snivy"]
const pokemonsDuplicados = pokemons.concat(pokemons);
// Cria uma pequena função para embaralhar os itens do array
function embaralhaPokemons(){
    return pokemonsDuplicados.sort(() => Math.random() - 0.5);
}
// Pega o retorno da função (que será o novo array sorteado), e atribui a uma variável
const listaEmbaralhada = embaralhaPokemons();

// Cria um loop for que irá criar todas as cartas
for (let i=0; i < listaEmbaralhada.length; i++){
    // Acesso o elemento pai do html
    const conteudo = document.querySelector(".tabuleiro")
    // Cria uma div que será a carta
    const card = document.createElement("div");
    // Adiciona conteúdo na carta
    card.innerHTML = `
        <img class="card-back" src="./imagens/back.jfif" alt="${listaEmbaralhada[i]}" data-value="${i}">
    `;
    // Adiciona a classe de estilização da carta
    card.classList.add("card");
    // Adiciona a carta dentro do elemento pai
    conteudo.appendChild(card);
}
