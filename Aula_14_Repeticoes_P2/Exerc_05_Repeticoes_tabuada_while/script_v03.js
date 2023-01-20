function tabuada(){
  var tn = document.getElementById('txtn')
  var n = Number(tn.value)
  var tab = document.getElementById('seltab')

  for(var c = 1; c <=10; c++ ) {
    var iten = document.createElement('option')
    iten.text = `${c} x ${n} = ${c*n}`
    tab.appendChild(iten)
 }

}
