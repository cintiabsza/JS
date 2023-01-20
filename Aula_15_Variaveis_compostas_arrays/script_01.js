function tabuada() {
  let tab = document.getElementById('seltab')
  let valores = [8, 2, 7, 4, 2, 9]
  tab.innerHTML = ' '
  for (let pos = 0; pos < valores.length; pos++){
    let iten = document.createElement('option')
    iten.text = `A posição ${pos} é igual ao valor ${valores[pos]}`
    tab.appendChild(iten)
  }

}
