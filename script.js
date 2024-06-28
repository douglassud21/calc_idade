
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''

        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '300px'  // Defina a largura desejada
        img.style.height = '300px'  // Defina a altura desejada

        if (fsex[0].checked) {
            gênero = 'Homem'

            if (idade < 2) {
                //Bebê
                img.setAttribute('src', 'bbm.jpg')
            } else if (idade < 12) {
                //Criança
                img.setAttribute('src', 'cm.jpg')
            } else if (idade < 18) {
                //Adolescente
                img.setAttribute('src', 'am.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adm.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'im.jpg')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'

            if (idade < 2) {
                //Bebê
                img.setAttribute('src', 'bbf.jpg')
            } else if (idade < 12) {
                //Criança
                img.setAttribute('src', 'cf.jpg')
            } else if (idade < 18) {
                //Adolescente
                img.setAttribute('src', 'af.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adf.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'if.jpg')
            }

        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos um(a) ${gênero} com ${idade} anos.`;
        res.appendChild(img)
    }
}
