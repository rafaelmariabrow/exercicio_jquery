
// Aguarda o carregamento completo do documento
$(document).ready(function() {

    // Captura o evento de submissão do formulário
    $('#task-form').on('submit', function(event) {
        event.preventDefault(); //Previne o comportamento padrão do formulário

        //Captura o valor do input com jQuery
        let task = $('#task-input').val();

        //Verifica se o campo de tarefa não está vazio
        if (task !== '') {
            // Adiciona a tarefa à lista (ul) dinamicamente 
            $('#task-list').append('<li>' + task + '</li>');

            // Limpa o campo de input após a adição 
            $('#task-input').val('');
        }
    });

    // Captura o evento de clique nos itens da lista de tarefas (delegação de eventos)
    $('#task-list').on('click','li', function() {
        // Alterna a classe "completed" ao clicar na tarefa
        $(this).toggleClass('completed');
    });
});

// Definindo uma função chamada main
function main() {
    console.log("função main executada!");
}

// Chame a função main para garantir que ela foi definida corretamente
main();
