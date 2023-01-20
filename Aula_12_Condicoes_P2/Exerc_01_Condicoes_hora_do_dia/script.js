function  carregar() {
  var msg = window.document.getElementById('mensagem')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  //var hora = data.getHours()
  var hora = '15'
    msg.innerHTML = (`Agora são ${hora} horas.`)
    if (hora >= '0' && hora < '12') {
      img.src = 'fotomanha.png'
      document.body.style.background = 'rgba(125, 184, 238, 0.94)'
  } else if (hora >= '12' && hora < '18') {
      img.src = 'fototarde.png'
      document.body.style.background = 'rgba(195, 167, 177, 0.84)'
  } else {
      img.src = 'fotonoite.png'
      document.body.style.background = 'rgba(123, 98, 139, 0.93)'
  }
    }
