function edit(idx) {
    document.getElementsByTagName('input')[idx].removeAttribute('readonly')
    document.getElementsByTagName('input')[idx].focus()
    console.log('Editando ' + idx)
}

function setAttr(idx) {
    document.getElementsByTagName('input')[idx].setAttribute('readonly', '')
}

function feito(idx) {
    console.log('feito ' + idx)
}

function apagar(idx) {
    console.log(idx.parentNode.parentElement.remove())
}

function criar() {
    let index = document.getElementsByTagName('input').length 
    let secao = document.createElement('section')
    let divisao = document.createElement('div')
    let divisaoDois = document.createElement('div')

    divisao.setAttribute('class', 'tarefa')
 
    let entrada = document.createElement('input')
    entrada.setAttribute('type', 'text')
    entrada.setAttribute('readonly', '')
    entrada.setAttribute('onblur', `setAttr(${index})`)
    secao.appendChild(divisao)
    divisao.appendChild(entrada)
    secao.appendChild(divisaoDois)
    divisaoDois.setAttribute('class','botoes')

    let btnEdit = document.createElement('button')
    btnEdit.setAttribute('onclick', `edit(${index})`)
    let btnFeito = document.createElement('button')
    btnFeito.setAttribute('onclick', `feito(${index})`)
    let btnApagar = document.createElement('button')
    btnApagar.setAttribute('onclick', `apagar(this)`)

    divisaoDois.appendChild(btnEdit)
    divisaoDois.appendChild(btnFeito)
    divisaoDois.appendChild(btnApagar)

    let imgUm = document.createElement('img')
    imgUm.setAttribute('src','./src/editar-arquivo.png')
    let imgDois = document.createElement('img')
    imgDois.setAttribute('src','./src/trabalho-feito.png')
    let imgTres = document.createElement('img')
    imgTres.setAttribute('src','./src/botao-de-deletar.png')

    btnEdit.appendChild(imgUm)
    btnFeito.appendChild(imgDois)
    btnApagar.appendChild(imgTres)

    let cx = document.querySelector('.toDo')

    cx.appendChild(secao)
}

function concluidos() {
    console.log('concluido')
}