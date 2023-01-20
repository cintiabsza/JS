function tabuada() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  let res = document.getElementById('resultado')

    if (num.value.length == 0) {
      window.alert('[Erro] Faltam dados!')
    } else {
    let n = Number(num.value)
    let c = []
    tab.innerHTML = ' '

     () {
        let iten = document.createElement('option') //eu poderia colocar esse 'option' dentro do HTML direto//
        iten.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(iten)

    }

}
}
function {

}
