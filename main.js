let listaDeItens = []

const form = document.getElementById('form-itens')
const itensInput = document.getElementById('receber-item')

form.addEventListener('submit', function (evento) {
    evento.preventDefault()
    salvarItem()
})

function salvarItem() {
    const comprasItem = itensInput.value
    const chegarDuplicado = listaDeItens.some((elemento) =>elemento.valor.toUpperCase() === comprasItem.toUpperCase())

    if (chegarDuplicado) {
        alert('Item já adicionado')
    }   else {

        listaDeItens.push ({
            valor: comprasItem
        })
}

        console.log(listaDeItens)
}