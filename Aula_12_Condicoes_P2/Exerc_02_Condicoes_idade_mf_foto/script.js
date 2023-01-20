function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || fano.value > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var gênero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
          gênero = 'homem'
          if (idade >=0 && idade <12) {
              //Criança
              img.setAttribute('src','foto-crianca-masculino.png')
          } else if (idade >=12 && idade <21) {
              //Jovem
              img.setAttribute('src', 'foto-jovem-masculino.png')
          } else if (idade >=21 && idade <60) {
              //Adulto
              img.setAttribute('src','foto-adulto-masculino.png')
          } else (idade >60){
              //Idoso
              img.setAttribute('src', 'foto-idoso-masculino.png')
          }
      } else if (fsex[1].checked){
          gênero = 'mulher'
          if (idade >=0 && idade <12) {
              //Criança
              img.setAttribute('src','foto-crianca-feminino.png')
          } else if (idade >=12 && idade <21) {
              //Jovem
              img.setAttribute('src', 'foto-jovem-feminino.png')
          } else if (idade >=21 && idade <60) {
              //Adulto
              img.setAttribute('src','foto-adulto-feminino.png')
          } if (idade >60){
              //Idoso
              img.setAttribute('src', 'foto-idoso-feminino.png')
          }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos`,
      res.appendChild(img)

    }
}
