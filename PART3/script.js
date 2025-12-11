function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var msg = document.querySelector('div#msg')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } 
    else {
       var fsex = document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
        msg.innerHTML= `Idade calculada: ${idade} anos.`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')
        if (fsex[0].checked){
            gênero = 'homem'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', '/ATIVIDADE3/imgs/bebe_homem.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', '/ATIVIDADE3/imgs/jovem_homem.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', '/ATIVIDADE3/imgs/adulto_homem.jpg')
            } else {
                //Idoso
                 img.setAttribute('src', '/ATIVIDADE3/imgs/idoso_homem.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'mulher'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', '/ATIVIDADE3/imgs/bebe_mulher.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', '/ATIVIDADE3/imgs/jovem_mulher.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', '/ATIVIDADE3/imgs/adulto_mulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', '/ATIVIDADE3/imgs/idoso_mulher.jpg')

            }
        }
        msg.style.textAlign = 'center'
        msg.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        msg.appendChild(img)
            }
        }