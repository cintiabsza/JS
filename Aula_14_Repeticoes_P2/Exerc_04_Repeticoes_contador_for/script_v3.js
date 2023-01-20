function contar() {
  var tx = document.getElementById('txti')
  var tf = document.getElementById('txtf')
  var tp = document.getElementById('txtp')
  var res = document.getElementById('res')

    if (tx.value.length == 0 || tf.value.length == 0 || tp.value.length == 0) {
      window.alert('Erro! Verifique os seus dados e tente novamente')
      res.innerHTML= 'Impossível calcular!'
    }

    else {
      res.innerHTML= 'Contando: <br>'
      var i = Number(tx.value)
      var f = Number(tf.value)
      var p = Number(tp.value)

      if (i < f){
        for (var c = 1; c <= 10; c ++){
        res.innerHTML += ` ${c} x ${f} = ${c*f} <br>`
        //res.innerHTML += `\u{1F606}`
        }

      } else {
        for (var c = 10; c >= 1; c--){
        res.innerHTML += ` ${c} x ${f} = ${c*f} <br> `
        //res.innerHTML += `\u{1F606}`
        }

      }

    }
}
