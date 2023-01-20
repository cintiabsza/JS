function tabuada() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  //essas caixas de texto, por mais que sejam numéricas, precisam ser convertidas em números//

  if (num.value.length == 0) {
    window.alert('[Erro] Faltam dados!')
  } else {
    let n = Number(num.value)
   //pega o valor que esta dentro de num e converte em numero//
    let c = 1
    tab.innerHTML = ' '
    while (c <= 10) {
        let iten = document.createElement('option') //eu poderia colocar esse 'option' dentro do HTML direto//
        iten.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(iten)
        c++
    }

}
}
