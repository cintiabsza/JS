function tabuada() {
var tn = document.getElementById('txtn')
var tab = document.getElementById('seltab')

  if (tn.value.length == 0){
  window.alert('Erro! Verifique os dados e tente novamente')
} else {
  var n = Number(tn.value)
  var c = 1
  tab.innerHTML = ' '
  while (c <= 10){
    var iten = document.createElement('option')
    iten.text = `${c} x ${n} = ${c*n}`
    tab.appendChild(iten) // o appendChild tem que ficar dentro do while
    c++
  }

}


}
