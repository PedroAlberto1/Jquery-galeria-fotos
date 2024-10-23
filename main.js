$(document).ready(function() {
    // Função para mostrar o formulário
    $('header button').click(function() {
        $('form').slideDown();
    });

    // Função para esconder o formulário
    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    // Função que cria e adiciona um novo item à lista
    function adicionarNovoItem(url) {
        const novoItem = $('<li style="display: none"></li>');

        // Cria a imagem com URL fornecida
        $('<img />', {
            src: url,
            alt: 'Imagem adicionada'
        }).appendTo(novoItem);

        // Cria a div de overlay com link
        $(`
            <div class="overlay-imagem-link">
                <a href="${url}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);

        // Adiciona o item à lista e mostra com fadeIn
        $(novoItem).appendTo('ul').fadeIn(1000);
    }

    // Manipulador de evento para o envio do formulário
    $('form').on('submit', function(e) {
        e.preventDefault();

        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val().trim();

        // Validação: Verifica se o campo de URL não está vazio
        if (enderecoDaNovaImagem === '') {
            alert('Por favor, insira o endereço da imagem.');
            return;
        }

        // Adiciona novo item à lista com a URL fornecida
        adicionarNovoItem(enderecoDaNovaImagem);

        // Limpa o campo de entrada após adicionar a imagem
        $('#endereco-imagem-nova').val('');
    });
});
