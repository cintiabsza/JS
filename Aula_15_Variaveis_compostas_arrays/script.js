function tabuada() {
let num = [2, 8, 3, 5, 9, 3]
num[6] = 2
num.push(7)
let tab = window.document.getElementById('seltab')
let tab01 = window.document.getElementById('seltab01')
let tab02 = window.document.getElementById('seltab02')
tab.innerHTML = ' '
for (let pos = 0; pos < num.length; pos++){
  var iten = document.createElement('option')
  iten.text =  `A posição ${pos} corresponde ao valor ${num[pos]}`
  tab.appendChild(iten) //não tem aspas aqui
}
tab01.innerHTML = ' '
for (let pos = 0; pos < num.length; pos++){
  num.sort()
  var iten = document.createElement('option')
  iten.text =  `A posição ${pos} corresponde ao valor ${num[pos]}`
  tab01.appendChild(iten)
}
tab02.innerHTML = ' '
for (let pos in num){
  num[6] = 1
  var iten = document.createElement('option')
  iten.text =  `A posição ${pos} corresponde ao valor ${num[pos]}`
  tab02.appendChild(iten)
}

}




/* eu preciso criar um elemento option

preciso criar um document.text

preciso criar o appendChild pra jogar o iten

 */
