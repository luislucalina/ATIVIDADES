function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var saudacao = window.document.getElementById('saudacao')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
        if (hora >= 0 && hora < 12){
            saudacao.innerHTML = 'Bom dia! '
            img.src='/atividade2/imgs/manha.jpg'
        } else if (hora >= 12 && hora <= 18){
            saudacao.innerHTML = 'Boa tarde! '
            img.src='/atividade2/imgs/tarde.jpg'
        } else{
            saudacao.innerHTML = 'Boa noite! '
            img.src='/atividade2/imgs/noite.jpg'
        }

}