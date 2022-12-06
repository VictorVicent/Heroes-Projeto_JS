function editar () {
    //aqui a função ta fazendo com que o event de duplo click em um TD ative outra função//
    $("td").dblclick(function () {
        //aqui a função esta computando o conteudo original do td//
        const conteudoOriginal = $(this).text();
        
        //aqui a função esta adicionando uma classe ao td//
        $(this).addClass("celulaEmEdicao");
        //aqui a função esta adicionando um input de texto para que possamos editar a tabela//
        $(this).html("<input type='text' value='" + conteudoOriginal + "' />");
        $(this).children().first().focus();

        //aqui a função esta pegando o primeiro filho da tabela e vai tratar o evento keypress q é basicamente apertar uma tecla//
        $(this).children().first().keypress(function (e) {
            //o if verifica se a tecla apertada foi o enter, caso tenha sido ele cria a variavel com o novo conteudo digitado pelo usuario//
            if (e.which == 13) {
                const novoConteudo = $(this).val();
                $(this).parent().text(novoConteudo);
                $(this).parent().removeClass("celulaEmEdicao");
            }
        });
//essa função trata o evento blur, que retorna o texto original caso o usuario saia do input sem apertar enter//
	$(this).children().first().blur(function(){
		$(this).parent().text(conteudoOriginal);
		$(this).parent().removeClass("celulaEmEdicao");
	});
    });
};





function adicionarfilme () {
    //aqui esta pegando o valor do input e transformando em variavel//
    let filme = document.querySelector('#name').value;
    //aqui esta pegando o elemento com a id filminho e transformando ele em uma variavel//
    const tbody = document.querySelector('#filminho');

    //aqui esta sendo chamada outras duas funções//
    createtabela(filme, tbody);
    editar();
}

function createtabela (filme, toappend){

    //aqui esta sendo criado os dois elementos que vao se repetir durante a tabela//
    const tr = document.createElement('tr')
    //aqui estou setando uma id pro elemento que esta sendo criado//
    tr.setAttribute('id', 'trfilme')

    const td = document.createElement('td')
    td.setAttribute('id', 'tdfilme')

    //aqui estou dando o valor do elemento td que vai ser criado, que no caso é a variavel filme que foi criada la atras//
    td.textContent = filme

    //aqui novamente é o traverse//
    tr.appendChild(td)
    toappend.appendChild(tr)
}




