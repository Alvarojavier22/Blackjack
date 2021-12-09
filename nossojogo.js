/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


// // Boas Vindas
// alert(`Olá! Bem vindo à versão simplificada do jogo de cartas BLACKJACK`)
// let iniciarPartida = confirm(`Deseja jogar uma partida?`)

// if (!iniciarPartida) {
//    alert(`Sem problemas. Volte sempre que quiser jogar!`)
// }
// else {
//    // explico as regras

//    alert(`Ok! Então vamos lá! Você irá jogar contra o computador. Cada um receberá 2 cartas. Quem tiver a maior pontuação ganha.`)

//    // primeiro vou construir o deck de cartas

//    const numeraisCartas = [ 
//       { numeral: "A", valor: 11 }, 
//       { numeral: 2, valor: 2 }, 
//       { numeral: 3, valor: 3 }, 
//       { numeral: 4, valor: 4 }, 
//       { numeral: 5, valor: 5 }, 
//       { numeral: 6, valor: 6 }, 
//       { numeral: 7, valor: 7 }, 
//       { numeral: 8, valor: 8 }, 
//       { numeral: 9, valor: 9 }, 
//       { numeral: 10, valor: 10 }, 
//       { numeral: "J", valor: 10 }, 
//       { numeral: "Q", valor: 10 }, 
//       { numeral: "K", valor: 10 }
//    ]

//    const naipesCartas = [
//       { naipe: "♥️", nome: "copas" }, 
//       { naipe: "♣️", nome: "paus" }, 
//       { naipe: "♦️", nome: "ouros" }, 
//       { naipe: "♠️", nome: "espada" }
//    ]

//    let baralho = []

//    for (let num of numeraisCartas) {
//       for (let naipe of naipesCartas) {
//          carta = num.numeral + naipe.naipe
//          valor = num.valor
//          numeral = num.numeral
//          naipe = naipe.nome
//          combinacao = {
//             carta: carta, 
//             valor: valor, 
//             numeral: numeral,
//             naipe: naipe
//          }
//          baralho.push(combinacao)
//       }
//    }

//    // dar as cartas
//    // lógica de randomização
//    // Math.floor(Math.random() * 52) = 0 a 51
//    // lógica para não repetir cartas numa mesma rodada
//    // loop com if. A sacada é deixar o incremento de i dentro da condicional de carta não repetida. Isso faz com que o loop rode até que os jogadores tenham recebido cartas não repetidas na quantidade certa.
//    let desejaJogarNovamente = true
//    while (desejaJogarNovamente) {
//       let i = 0 
//       let cartasP1 = []
//       let cartasP2 = []
//       let cartasEmJogo = []

//       while ( i < 4 ) {
//          let x = Math.floor( Math.random() * 52 )
//          // console.log(x)
//          if ( !cartasEmJogo.includes( baralho[x] ) ) { 

//             cartasEmJogo.push( baralho[x] )

//             if ( i % 2 === 0 ) {
//                cartasP1.push( baralho[x] )
//             }
//             else {
//                cartasP2.push( baralho[x] )
//             }
//             i++
//          }
//       }

//       // resumo das cartas
//       let cartasP1Simplificado = cartasP1.map((carta) => {
//          return carta.carta
//       })

//       let cartasP2Simplificado = cartasP2.map((carta) => {
//          return carta.carta
//       })

//       // cartas dadas, avaliar e mostrar o resultado
//       let valoresP1 = cartasP1.map((carta) => {
//          return carta.valor
//       })

//       let pontosP1 = 0
//       for ( i = 0 ; i < valoresP1.length ; i++ ) {
//          pontosP1 += valoresP1[i]
//       }

//       let valoresP2 = cartasP2.map((carta) => {
//          return carta.valor
//       })

//       let pontosP2 = 0
//       for ( i = 0 ; i < valoresP2.length ; i++ ) {
//          pontosP2 += valoresP2[i]
//       }

//       if (pontosP1 > pontosP2) {
//          mensagem = `Você ganhou!!\nSuas cartas foram ${cartasP1Simplificado}, que somam ${pontosP1}.\nAs cartas do computador foram ${cartasP2Simplificado}, que somam ${pontosP2}.`
//       }
//       else if (pontosP1 === pontosP2) {
//          mensagem = `Acredita que deu empate?\nSuas cartas foram ${cartasP1Simplificado}, que somam ${pontosP1}.\nAs cartas do computador foram ${cartasP2Simplificado}, que somam ${pontosP2}.`
//       }
//       else {
//          mensagem = `Poxa, não foi dessa vez. =/\nSuas cartas foram ${cartasP1Simplificado}, que somam ${pontosP1}.\nAs cartas do computador foram ${cartasP2Simplificado}, que somam ${pontosP2}.`
//       }

//       alert(mensagem)

//       desejaJogarNovamente = confirm(`Deseja jogar mais uma partida?`)
//    }

// // fim do jogo   
// }