// Cria um objeto para carregar os dados
const dadosCarregados = {};

// Cria uma função que será executada ao carregar a página
document.addEventListener('DOMContentLoaded', () =>{
    // Percorre a lista de pokémons
    pokemons.forEach(async function(pokemon){

    // Faz uma requisição para a pokeapi para capturar as informações do pokemon a partir de seu nome
    const requisicao = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    // Recebe os dados da api e converte pra json
    const dados = await requisicao.json();

    // Guarda no objeto os dados da API
    dadosCarregados[pokemon] = {
        nome: dados.name,
        imagem: dados.sprites.front_default,
        };

    })

})
