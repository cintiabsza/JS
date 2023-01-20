function contar() {
  var tx = document.getElementById('txti')
  var tf = document.getElementById('txtf')
  var tp = document.getElementById('txtp')
  var res = document.getElementById('res')
  if (tx.value.length == 0 || tf.value.length == 0 || tp.value.length == 0 ){
    window.alert('Erro! Verifique seus dados e tente novamente')
    res.innerHTML ='Impossível contar!'
    } else {
    res.innerHTML='Contando'
    var i = Number(tx.value)
    var f = Number(tf.value)
    var p = Number(tp.value)

      if (i < f){
      for (var c = i; c <= f; c += p) {
      res.innerHTML += `${c} \u{1F606} `
      }

      } else {
      for (var c = i; c >= f; c -= p) {
      res.innerHTML += `${c} \u{1F606} `
      }

      }

    }
res.innerHTML += `\u{1F44D}`
}
