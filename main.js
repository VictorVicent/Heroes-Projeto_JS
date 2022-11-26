/* Função hover (page-sobre)*/
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }

);
//----Pagina Filmes----//

//Homem de Ferro//

function alterarConteudo() {
  document.getElementsByClassName("words")[0].innerHTML = "<img src='avimg/10.png' height='130px'>"
}


function alterarConteudo2() {
  document.getElementsByClassName("words")[0].innerHTML = "Tony Stark é um industrial bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora. Em vez disso, ele constrói uma armadura blindada e enfrenta seus sequestradores.Ao voltar para os EUA, Stark aprimora a armadura e a utiliza para combater o crime."
}

//Guerra Civil//

function alterarConteudo3() {
  document.getElementsByClassName("words")[1].innerHTML = "<img src='avimg/9.png' height='130px'>"
}

function alterarConteudo4() {
  document.getElementsByClassName("words")[1].innerHTML = "Depois do ataque de Ultron, os políticos decidem controlar os Vingadores, já que suas ações afetam toda a humanidade.A decisão coloca o Capitão América em rota de colisão com o Homem de Ferro."
}
