let BlackJack =confirm("Estar pronto para jogar Black Jack")

if (BlackJack){

      let fristUser = comprarCarta()

      let secondUser = comprarCarta()

      let fristComp = comprarCarta()

      let secondComp = comprarCarta()

      let pontosUsuario = fristUser.valor + secondUser.valor

      let pontosComp = fristComp.valor + secondComp.valor

      console.log(`Cartas do Usuario: ${fristUser.texto} ${secondUser.texto} pontos ${pontosUsuario}`)
      console.log(`Cartas do Comp: ${fristComp.texto} ${secondComp.texto} pontos ${pontosComp}`)

      if (pontosUsuario > pontosComp){

         console.log("O usuário ganhou!")
         alert(`Você ganhou! \n Cartas do Usuário: ${fristUser.texto} ${secondUser.texto} pontos ${pontosUsuario} \n Cartas do Comp: ${fristComp.texto} ${secondComp.texto} pontos ${pontosComp}`)

      }else if(pontosComp > pontosUsuario){

         console.log("O usuário perdeu!")
         alert(`Você perdeu! \n Cartas do Usuário: ${fristUser.texto} ${secondUser.texto} pontos ${pontosUsuario} \n Cartas do Comp: ${fristComp.texto} ${secondComp.texto} pontos ${pontosComp}`)

      }else if( pontosUsuario === pontosComp){
         
         console.log("Empate!")
         alert(`Empate! \n Cartas do Usuário: ${fristUser.texto} ${secondUser.texto} pontos ${pontosUsuario} \n Cartas do Comp: ${fristComp.texto} ${secondComp.texto} pontos ${pontosComp}`)

      }
   }

else(alert("O jogo terminou !"))