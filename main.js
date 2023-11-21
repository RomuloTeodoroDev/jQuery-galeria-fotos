$(document).ready(function() {//função criada para chamar o jQuery
    $('header button').click(function(){// criando uma função com o click do botão
        $('form').slideDown()//transição de cima para baixo
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp()//transição de baixo para cima
    })

    $('form').on('submit', function(e) {
        e.preventDefault()//função para não atualizar a página
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()
        const novoItem = $('<li style= "display: none"></li>')//função para sumir com imagem adicionada para ser inserida em uma transição
        $(`<img src ="${enderecoDaNovaImagem}"/>`).appendTo(novoItem)//criando elemento HTML que vai ser inserido
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real"> 
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)//fadeIn serve para a imagem surgir como uma transição e (1000) é o tempo em milisegundos
        $('#endereco-imagem-nova').val('')//função para limpar o formulário após teermos preenchido
    })
})