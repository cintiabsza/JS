function contar() {
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')
  //essas caixas de texto, por mais que sejam numéricas, precisam ser convertidas em números//

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('[Erro] Faltam dados!')
    res.innerHTML ='Impossível contar!'
  } else {
    res.innerHTML='Contando'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value) //pega o valor que esta dentro de ini e converte em numero//

      if(i <f) { //contagem crescente//
        for(let c = i; c<= f; c += p) {
        res.innerHTML += `${c} \u{1F606} ` //unicode.org tem o código de todos os emojis - esse código só funciona entre crases - tira o "U+ e colocar a \u e o código entre colchetes
      }

    } else { //contagem decrescente//
      for(let c = i; c>= f; c -= p) {
      res.innerHTML += `${c} \u{1F606} `
  }

  }
  res.innerHTML += `\u{1F44D}`
}

}
