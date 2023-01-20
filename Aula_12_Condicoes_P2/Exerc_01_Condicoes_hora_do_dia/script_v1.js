function  carregar() {
  var msg = window.document.getElementById('mensagem')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  //var hora = '20'
    msg.innerHTML = (`Agora são ${hora} horas.`)
      if (hora < '12') {
        img.src = 'fotomanha.png'
        msg.innerHTML += '<p>Bom dia!</p>'
        document.body.style.background = 'rgb(182, 217, 192)'
      } else if (hora >= '12' && hora <'18') {
        img.src = 'fototarde.png'
        msg.innerHTML += '<p>Boa tarde!</p>'
        document.body.style.background = 'rgb(210, 178, 122)'
      } else {
        img.src = 'fotonoite.png'
        msg.innerHTML += '<p>Boa noite!</p>'
        document.body.style.background = 'rgb(39, 12, 46)'
      }

    }
