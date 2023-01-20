  let num = document.getElementById('fnun')
  let lista = document.getElementById('flista')
  let dres = document.getElementById('res')
  let valores = []

function isNumero(n) {
  if(Number(n)>= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista (n,l) {
  if (l.indexOf(Number(n)) != - 1) {
      return true
  } else {
    return false
  }
}


function adicionar () {
  if(isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item)
    dres.innerHTML = ' '// precisa limpar o dres quando um número novo é adicionado
  } else {
    window.alert ('Valor inválido ou já encontrado na lista')
  }
  num.value = ''
  num.focus()
}
/* Não dá pra disparar um alert usando o lista.value.lenght. Provavelmente, porque a lista é um "select" e não um "input"*/

/*A primeira parte do exercício se refere à inclusão dos números na lista` com a função "adicionar()"*/

/*A segunda parte do exercício se refere à analise e manipulação dos números da lista e a exibição do resultado no "dres" com a função "finalizar()"*/

function finalizar(){
  if(valores.length == 0){
    window.alert('Erro! Adicione valores antes de finalizar')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
      for (let pos in valores){
        soma += valores[pos]

        if(valores[pos] > maior){
          maior = valores[pos]
        if(valores[pos] < menor)
          menor = valores[pos]
        }
      }
    media = soma / tot
    dres.innerHTML = ' ' //se vc não zerar antes do início da frase, ele vai gerar uma frase nova pra cada número adicionado
    dres.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados</p>`
    dres.innerHTML += `<p>O maior número é ${maior}<p>`
    dres.innerHTML += `<p>O menor número é ${menor}<p>`
    dres.innerHTML += `<p>A soma dos valores é igual a ${soma}<p>`
    dres.innerHTML += `<p>A média dos valores é igual a ${media}<p>`
    }
  }
