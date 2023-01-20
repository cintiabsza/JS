  let num = document.getElementById('tnun')
  let lista = document.getElementById('tselect')
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
  } else {
    window.alert ('Valor inválido ou já encontrado na lista')
  }
  num.value = ''
  num.focus()
}


function finalizar(){
  if(valores.length == 0){
    window.alert('Erro! Adicione valores antes de finalizar')
  } else {
    for (let pos in valores){
      valores.sort()
      dres.innerHTML = `Foram encontrados ${valores.length} números na lista<br>
      Os numeros são ${valores}<br>
      O menor número encontrado foi ${valores[0]}<br>
      O maior número encontrado foi ${valores[pos]}`
    }
  }
}
