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

//Pantera Negra//
function alterarConteudo5() {
  document.getElementsByClassName("words")[2].innerHTML = "<img src='avimg/8.png' height='130px'>"
}


function alterarConteudo6() {
  document.getElementsByClassName("words")[2].innerHTML = "Conheça a história de T'Challa, príncipe do reino de Wakanda, que perde o seu pai e viaja para os Estados Unidos, onde tem contato com os Vingadores.Entre as suas habilidades estão a velocidade, inteligência e os sentidos apurados."
}

//Vingadores//
function alterarConteudo7() {
  document.getElementsByClassName("words")[3].innerHTML = "<img src='avimg/7.png' height='130px'>"
}

function alterarConteudo8() {
  document.getElementsByClassName("words")[3].innerHTML = "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes.Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade."
}
