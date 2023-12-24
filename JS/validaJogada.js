// Função de validar jogada
function validaJogada(primeiraEscolha, segundaEscolha){
    // Caso a primeira escolha do jogador seja igual a segunda
    if(primeiraEscolha.firstElementChild.alt === segundaEscolha.firstElementChild.alt){
        // Adiciona as duas escolhas em um array
        escolhasCorretas.push(primeiraEscolha,segundaEscolha);
        // Muda a cor da borda da carta dos pokémons
        primeiraEscolha.style.borderColor = "#CCFF33";
        segundaEscolha.style.borderColor = "#CCFF33";
        // Remove essas escolhas do outro array
        escolhas.length = 0;
        // Percorre a lista de cartas e desbloqueia o clique nelas
        cartas.forEach((cadaCarta) =>{
            cadaCarta.style.pointerEvents = "auto";
            // Percorre a lista de pares corretos e bloqueia o clique neles
            escolhasCorretas.forEach((parDeEscolhas) =>{
                parDeEscolhas.style.pointerEvents = "none";
            })
        })
        // Caso a lista de pares for igual a 24, ou seja, tenha 12 pares, encerra o jogo
        if(escolhasCorretas.length === 24){
            setTimeout(() =>{
                const popup = document.querySelector(".popup")
                popup.classList.remove("desabilita-popup")
                popup.classList.add("habilita-popup")
            }, 500)
        }
    }
    // Caso as escolhas sejam diferentes
    else{
        // Muda a cor da borda das duas cartas escolhidas para vermelho, indicando que está errado
        primeiraEscolha.style.borderColor = "#F3543F";
        segundaEscolha.style.borderColor = "#F3543F";
        // Adiciona uma função para ocorrer após 1 segundo
        setTimeout(() =>{
            // Percorre a lista de cartas escolhidas
            escolhas.forEach((carta) =>{
                // Muda o conteúdo da carta, voltando a imagem inicial
                carta.innerHTML = `
                <img class="card-back" src="./imagens/back.jfif" alt="${carta.firstElementChild.alt}">
                `;
                // Retorna o estilo de borda antigo
                carta.style.borderColor = "#1D9E30";
            })
            // Remove as cartas da lista de escolhas
            escolhas.length = 0;
            // Habilita o clique em qualquer carta novamente, exceto as desblouqueadas
            cartas.forEach((cadaCarta) =>{
                cadaCarta.style.pointerEvents = "auto";
            })
        }, 1000);
    }
}