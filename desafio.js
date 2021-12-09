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

// Boas Vindas
alert(`Olá! Bem vindo à versão virtual do jogo de cartas BLACKJACK`)
let iniciarPartida = confirm(`Deseja jogar uma partida?`)

if (!iniciarPartida) {
    alert(`Sem problemas. Volte sempre que quiser jogar!`)
} else {
    // explico as regras

    alert(`Ok! Então vamos lá! Você irá jogar contra o computador. Cada um receberá, inicialmente, 2 cartas. Em seguida, será lhe mostrado o resultado parcial e você poderá escolher se deseja mais uma carta ou não. 
   Ganha quem tiver a maior pontuação que não ultrapasse 21 pontos.`)

    // primeiro vou construir o deck de cartas

    const numeraisCartas = [
        { numeral: "A", valor: 11 },
        { numeral: "2", valor: 2 },
        { numeral: "3", valor: 3 },
        { numeral: "4", valor: 4 },
        { numeral: "5", valor: 5 },
        { numeral: "6", valor: 6 },
        { numeral: "7", valor: 7 },
        { numeral: "8", valor: 8 },
        { numeral: "9", valor: 9 },
        { numeral: "10", valor: 10 },
        { numeral: "J", valor: 10 },
        { numeral: "Q", valor: 10 },
        { numeral: "K", valor: 10 }
    ]

    const naipesCartas = [
        { naipe: "♥️", nome: "copas" },
        { naipe: "♣️", nome: "paus" },
        { naipe: "♦️", nome: "ouros" },
        { naipe: "♠️", nome: "espada" }
    ]

    let baralho = []

    for (let num of numeraisCartas) {
        for (let naipe of naipesCartas) {
            carta = num.numeral + naipe.naipe
            valor = num.valor
            numeral = num.numeral
            naipe = naipe.nome
            combinacao = {
                carta: carta,
                valor: valor,
                numeral: numeral,
                naipe: naipe
            }
            baralho.push(combinacao)
        }
    }

    /* dar as cartas INICIAIS (2 cartas para cada jogador)
       lógica de randomização
       Math.floor(Math.random() * 52) = 0 a 51
       lógica para não repetir cartas numa mesma rodada
       loop com if. A sacada é deixar o incremento de i dentro da condicional de carta não repetida. 
       Isso faz com que o loop rode até que os jogadores tenham recebido cartas não repetidas na quantidade certa.


       criar funções darCartas() */

    let cartasP1 = []
    let cartasMesa = []
    let cartasEmJogo = []

    function darCartasIniciais() {
        let i = 0
        while (i < 4) {
            let x = Math.min(Math.floor(Math.random() * 52), 51)
                // console.log(x)
            if (!cartasEmJogo.includes(baralho[x])) {

                cartasEmJogo.push(baralho[x])

                if (i % 2 === 0) {
                    cartasP1.push(baralho[x])
                    cartasNumeralP1 = cartasP1.map((carta) => {
                        return carta.numeral
                    })
                } else {
                    cartasMesa.push(baralho[x])
                    cartasNumeralMesa = cartasMesa.map((carta) => {
                        return carta.numeral
                    })
                }
                i++
            }
        }
    }

    // função darCartasAdicionaisP1
    function darCartasAdicionaisP1() {
        let x = Math.min(Math.floor(Math.random() * 52), 51)

        if (!cartasEmJogo.includes(baralho[x])) {

            cartasEmJogo.push(baralho[x])

            cartasP1.push(baralho[x])
        } else { darCartasAdicionaisP1() }
    }

    // função darCartasAdicionaisMesa
    function darCartasAdicionaisMesa() {
        while (pontosMesa < pontosP1 && pontosMesa < 22) {
            let x = Math.min(Math.floor(Math.random() * 52), 51)
            if (!cartasEmJogo.includes(baralho[x])) {

                cartasEmJogo.push(baralho[x])

                cartasMesa.push(baralho[x])

                avaliarResultadoParcial()
            }
        }
    }

    // função para resultado parcial
    function avaliarResultadoParcial() {
        // resumo das cartas P1
        cartasP1Simplificado = cartasP1.map((carta) => {
            return carta.carta
        })

        valoresP1 = cartasP1.map((carta) => {
            return carta.valor
        })

        pontosP1 = 0
        for (i = 0; i < valoresP1.length; i++) {
            pontosP1 += valoresP1[i]
        }

        // resumo das cartas Mesa
        cartasMesaSimplificado = cartasMesa.map((carta) => {
            return carta.carta
        })

        valoresMesa = cartasMesa.map((carta) => {
            return carta.valor
        })

        pontosMesa = 0
        for (i = 0; i < valoresMesa.length; i++) {
            pontosMesa += valoresMesa[i]
        }
    }

    // função de recolherCartas
    function recolherCartas() {
        cartasP1 = []
        cartasMesa = []
        cartasEmJogo = []
        valoresP1 = []
        valoresMesa = []
        pontosP1 = 0
        pontosMesa = 0
    }

    // função exibirResultadoParcial
    function exibirResultadoParcial() {
        if (pontosP1 <= 21 && pontosMesa <= 21) {
            return desejaOutraCarta = confirm(`Suas cartas: ${cartasP1Simplificado} | ${pontosP1} pontos
         Carta Revelada Mesa: ${cartasMesaSimplificado[0]} | ${valoresMesa[0]} pontos
         Deseja mais uma carta?`)
        } else {
            return desejaOutraCarta = false
        }
    }

    // sequencia de rodadas
    let desejaJogarNovamente = true

    while (desejaJogarNovamente) {

        recolherCartas()

        // 1ª rodada
        darCartasIniciais()

        avaliarResultadoParcial()

        if (pontosP1 < 22 || pontosMesa < 22) {

            exibirResultadoParcial()

            // 2ª rodada e adicionais
            while (desejaOutraCarta) {

                darCartasAdicionaisP1()

                avaliarResultadoParcial()

                exibirResultadoParcial()

            }

            darCartasAdicionaisMesa()

            // mensagem com resultado
            if ((pontosP1 > pontosMesa && pontosP1 <= 21) || (pontosMesa > 21 && pontosP1 <= 21)) {
                mensagem = `Você ganhou!!
            Suas cartas: ${cartasP1Simplificado} | ${pontosP1} pontos
            Cartas Mesa: ${cartasMesaSimplificado} | ${pontosMesa} pontos`
            } else if (pontosP1 === pontosMesa) {
                mensagem = `Ok, deu empate. 
            Suas cartas: ${cartasP1Simplificado} | ${pontosP1} pontos
            Cartas Mesa: ${cartasMesaSimplificado} | ${pontosMesa} pontos`
            } else {
                mensagem = `Poxa, não foi dessa vez. =/
            Suas cartas: ${cartasP1Simplificado} | ${pontosP1} pontos
            Cartas mesa: ${cartasMesaSimplificado} | ${pontosMesa} pontos`
            }

            alert(mensagem)

            // confirmação de nova rodada
            desejaJogarNovamente = confirm(`Deseja jogar mais uma partida?`)
        } else {
            mensagem = `Ok, um dos jogadores saiu com dois A. 
            Suas cartas: ${cartasP1Simplificado} | ${pontosP1} pontos
            Cartas Mesa: ${cartasMesaSimplificado} | ${pontosMesa} pontos
            
            Por conta disso, esta rodada não valeu.`

            alert(mensagem)

            desejaJogarNovamente = confirm(`Deseja jogar mais uma partida?`)
        }
    }

    alert(`Ok! Nos vemos na próxima! Obrigado por jogar BLACKJACK! =)`)

    // fim do jogo   
}