// Cria duas listas, uma armazenar as duas escolhas e outra pra armazenar as corretas
const escolhas = [];
const escolhasCorretas = [];

// Seleciona todas as cartas e adiciona um evento, e ao clicar retorna uma função exibeCartas
const cartas = document.querySelectorAll(".card");
cartas.forEach((carta) =>{
    carta.addEventListener("click", () => exibeCartas(carta))      
})

// Cria uma função assíncrona chamada exibeCartas
async function exibeCartas(carta){
    // Desabilita o clique na carta, impedindo o usuário de clicar duas vezes na mesma carta
    carta.style.pointerEvents = "none";
    
    // Captura o nome do pokémon a partir de seu alt
    const nomeDoPokemonClicado = carta.firstElementChild.alt;

    // guarda os dados do pokémon clicado
    dados = dadosCarregados[`${nomeDoPokemonClicado}`];

    // A partir do json, captura o diretório da imagem do pokémon
    const imagemDoPokemon = dados.imagem;
    // Altera o conteúdo da carta, atribuindo a foto do pokémon e seu nome
    carta.innerHTML = `
        <img class="card-imagem" src="${imagemDoPokemon}" alt="${nomeDoPokemonClicado}">
        <p class="card-titulo">${nomeDoPokemonClicado.charAt(0).toUpperCase() + nomeDoPokemonClicado.substring(1)}</p>
    `;
    // Adiciona a carta clicada em uma lista
    escolhas.push(carta)
    // Muda a borda da carta para amarelo enquanto ela não possui um par
    carta.style.borderColor = "#FFCC01"
    
    // Se a lista de escolhas tiver duas cartas
    if(escolhas.length === 2){
        // Seleciona essas cartas
        let primeiraEscolha = escolhas[0];
        let segundaEscolha = escolhas[1];
        // Desativa o clique em todas as cartas
        cartas.forEach((cadaCarta) =>{
            cadaCarta.style.pointerEvents = "none";
        })
        // Chama a função validaJogada para avaliar a jogada
        validaJogada(primeiraEscolha, segundaEscolha)
    }
}
