let cardUser = [(comprarCarta()), (comprarCarta())]
let cardComp = [(comprarCarta()), (comprarCarta())]

let fristTurn = () => {
   let cardUser = [(comprarCarta()), (comprarCarta())]
   let cardComp = [(comprarCarta()), (comprarCarta())]
   let checkCard = true


   while (checkCard === true) {
      if (cardUser[0].valor === 11 && cardUser[1].valor === 11 || cardComp[0].valor === 11 && cardComp[1].valor === 11) {
         console.log("loop")
         cardUser = []
         cardComp = []
         cardUser = [(comprarCarta()), (comprarCarta())]
         cardComp = [(comprarCarta()), (comprarCarta())]
      } else {
         console.log("noloop")
         checkCard = false
      }
   }
}

let check = true

let pontosJogador = 0

let pontosPC = 0

let userGame

let compGame

const addPoints = () => {
   pontosJogador = 0
   pontosPC = 0
   for (let i = 0; i < cardUser.length; i++) {
      pontosJogador += cardUser[i].valor
   }
   for (let i = 0; i < cardComp.length; i++) {
      pontosPC += cardComp[i].valor
   }
}


const maisCartas = () => {
   if (confirm(`Estas são suas cartas: ${userGame} \n Deseja comprar mais uma carta?`)) {
      cardUser.push(comprarCarta())
      checkUserGame()
      addPoints()
   } else {
      while (pontosPC < pontosJogador) {
         cardComp.push(comprarCarta())
         checkCompGame()
         addPoints()
      }
      check = false
   }
}


const resultados = () => {
   let mensagem = ""
   if (pontosJogador === pontosPC) {
      mensagem = "Empatou!"
   } else if (pontosPC > 21 || (pontosJogador > pontosPC && pontosJogador <= 21)) {
      mensagem = `\n Parabéns, você ganhou!!!`
   } else if (pontosJogador > 21 || (pontosPC > pontosJogador && pontosPC <= 21)) {
      mensagem = "Não foi dessa vez, tente novamente!"
   }

   alert(`Estas são suas cartas ${ userGame }. Somando uma pontuação de : ${ pontosJogador }.
   \n As cartas do rival são ${ compGame }. Seu rival somou ${ pontosPC }.\n ${ mensagem }`)
}
const checkUserGame = () => {
   userGame = ""
   for (const connection of cardUser) {
      userGame += connection.texto + ""
   }
}
const checkCompGame = () => {
   compGame = ""
   for (const connection of cardComp) {
      compGame += connection.texto + ""
   }
}
addPoints()


const BlackJack = () => {
   if (confirm("Seja Bem-vindo ao jogo BlackJack, Deseja comprar uma carta?")) {
      fristTurn()
      addPoints()
      checkUserGame()
      checkCompGame()
      while (pontosJogador < 21 && check === true) {
         maisCartas()
      }
      resultados()
   } else {
      alert("O jogo Terminou!")
   }
}
BlackJack()

