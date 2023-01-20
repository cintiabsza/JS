function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = window.document.getElementById ('txtano')
  var res = window.document.getElementById ('res')
    if (fano.value.length == 0 || fano.value > ano) {
    window.alert('Erro. Digite o ano corretamente!')
  } else {
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var idade = ano - Number (fano.value)
    var fsex = window.document.getElementsByName('radsex')
    var genero = ''
      if (fsex[0].checked){
        genero = 'homem'
          if (idade < 12){
          img.setAttribute('src', 'foto-crianca-masculino.png')
        } else if (idade >= 12 && idade < 21){
          img.setAttribute('src', 'foto-jovem-masculino.png')
        } else if (idade >= 21 && idade < 60){
          img.setAttribute('src', 'foto-adulto-masculino.png')
        } else {
          img.setAttribute('src', 'foto-idoso-masculino.png')
        }
      } else if  (fsex[1]. checked){
        genero = 'mulher'
          if (idade < 12){
          img.setAttribute('src', 'foto-crianca-feminino.png')
        } else if (idade >= 12 && idade < 21){
          img.setAttribute('src', 'foto-jovem-feminino.png')
        } else if (idade >= 21 && idade < 60) {
          img.setAttribute('src', 'foto-adulto-feminino.png')
        } else {
          img.setAttribute('src', 'foto-idoso-feminino.png')
        }

      }
    res.style.textAlign = 'center'
    res.innerHTML = `Identificamos ${genero} com ${idade} anos`
    res.appendChild(img)

  }

}
