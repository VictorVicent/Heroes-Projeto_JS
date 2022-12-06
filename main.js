// API // 

// variaveis criadas pra serem usadas na requisição da api//
const publickey = "2e6fd32baa56e3d1b899b6d7260f69ac";
const privatekey = "eaa7da5fdea5f190db80969d34eecdf7036d6a5b";
const ts = "1670091531";
const hash = "0d29f77379f7b12fc91b7c8265211346";

//função usada no botao de adicionar personagem//
function adicionar(){
  //pegando o valor do input com o nome do personagem que vai ser pesquisado//
  let personagem = document.getElementById("name").value;

  //fazendo request na api//
  fetch(`https://gateway.marvel.com:443/v1/public/characters?name=`+ personagem +`&ts=`+ ts +`&apikey=`+ publickey +`&hash=`+ hash
  //primeira promeça que retorna a resposta da request em .json//
).then((response)=>{
  return response.json();
  //segunda promeça que retorna o json com parse no console log (o conceito em si eu n entendo mas basicamente aparece como objeto com os valores e etc)//
}).then((jsonParsed) => {
  console.log(jsonParsed);
  //criando uma variavel para div principal que vai adicionar as outras divs//
  const divprincipal = document.querySelector('#personagenss');

//aqui estamos "caminhando" dentro  do json, o .data.results é são os caminhos do object que foi criado com as informações da api, o foreach serve pra fazermos isso repetidas vezes//
  jsonParsed.data.results.forEach(element => {
    //aqui as consts estão "caminhando" no json tambem, mas elas estao computando informações especificas, por exemplo a const info esta computando o valor da description que no caso é a biografia do personagem//
    const info = element.description
    //aqui aquele ponto ta separado pra concatenar a imagem com a extensão dela pra fazer aparecer no html corretamente//
    const srcimg = element.thumbnail.path + '.' + element.thumbnail.extension
    const heroname = element.name

    //aqui finalizo a div chamando outra div que foi usado o tranverse//
    createDivHero (info, srcimg, heroname, divprincipal);
  })
})
}


function createDivHero (info, srcimg, heroname, divtoappend3) {

  //aqui basicamente estou criando elementos que vou trabalhar mais pra frente//
  const divprincipal1 = document.createElement('div')
  //aqui estou setando uma id pro meu elemento//
  divprincipal1.setAttribute('id','divheroisflex')


  const divpai = document.createElement('div')
  const divfilho = document.createElement('div')
  const textname = document.createElement('text')
  const img = document.createElement('img')
  img.setAttribute("id", "fotosdosherois")

  //aqui estou setando valor para o meu elemento//
  textname.textContent = heroname
  img.src = srcimg

  //aqui é o tranverse, a primeira linha basicamente esta dizendo "a const divfilho.vaiabrigar(const img)", a segunda linha "a const divfilho.vaiabrigar(const textname)" e a terceita linha "a const divpai.vaiabrigar(const divfilh(que esta abrigando as outras duas ja))"//
  divfilho.appendChild(img)
  divfilho.appendChild(textname)
  divpai.appendChild(divfilho)
  //aqui estou adicionando uma class na divpai//
  divpai.classList.add("infos")


  const divpai2 = document.createElement('div')
  const divfilho2 = document.createElement('div')
  const textname2 = document.createElement('text')

  textname2.textContent = info

  divfilho2.appendChild(textname2)
  divpai2.appendChild(divfilho2)
  divpai2.classList.add('infos');


  const divpai3 = document.createElement('div')
  const divfilho3 = document.createElement('div')

  const editar = document.createElement('button')
  editar.setAttribute('class', 'botaopers')
  

  const excluir = document.createElement('button')
  excluir.setAttribute('class', 'botaopers')
  excluir.setAttribute('onclick', 'excluir()')

  
  excluir.textContent = 'Excluir'
 

  divfilho3.appendChild(excluir)
  divpai3.appendChild(divfilho3)
  divpai3.classList.add('infos')
  

  divprincipal1.appendChild(divpai)
  divprincipal1.appendChild(divpai2)
  divprincipal1.appendChild(divpai3)

//aqui estou adicionando a divprincipal1 que contei as informações anteriores na divtoappend3 que é a div que existe no html sem o js//
  divtoappend3.appendChild(divprincipal1)

}

function excluir() {
  document.querySelector("#divheroisflex").outerHTML = "";
}









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

function trailer1() {
  document.getElementsByClassName('words')[0].innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/Vo9l81vSZn0' title='YouTube video player'></iframe>'"
}

function alterarConteudo2() {
  document.getElementsByClassName("words")[0].innerHTML = "Tony Stark é um industrial bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora. Em vez disso, ele constrói uma armadura blindada e enfrenta seus sequestradores.Ao voltar para os EUA, Stark aprimora a armadura e a utiliza para combater o crime."
}

//Guerra Civil//

function alterarConteudo3() {
  document.getElementsByClassName("words")[1].innerHTML = "<img src='avimg/9.png' height='130px'>"
}

function trailer2() {
  document.getElementsByClassName('words')[1].innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/FRLYZn5PGuA' title='YouTube video player'></iframe>'"
}

function alterarConteudo4() {
  document.getElementsByClassName("words")[1].innerHTML = "Depois do ataque de Ultron, os políticos decidem controlar os Vingadores, já que suas ações afetam toda a humanidade.A decisão coloca o Capitão América em rota de colisão com o Homem de Ferro."
}

//Pantera Negra//
function alterarConteudo5() {
  document.getElementsByClassName("words")[2].innerHTML = "<img src='avimg/8.png' height='130px'>"
}

function trailer3() {
  document.getElementsByClassName('words')[2].innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/wL4a4MafSjQ' title='YouTube video player'></iframe>'"
}


function alterarConteudo6() {
  document.getElementsByClassName("words")[2].innerHTML = "Conheça a história de T'Challa, príncipe do reino de Wakanda, que perde o seu pai e viaja para os Estados Unidos, onde tem contato com os Vingadores.Entre as suas habilidades estão a velocidade, inteligência e os sentidos apurados."
}

//Vingadores//
function alterarConteudo7() {
  document.getElementsByClassName("words")[3].innerHTML = "<img src='avimg/7.png' height='130px'>"
}

function trailer4() {
  document.getElementsByClassName('words')[3].innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/KeNEGtsCWEk' title='YouTube video player'></iframe>'"
}

function alterarConteudo8() {
  document.getElementsByClassName("words")[3].innerHTML = "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes.Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade."
}

//Thor: Ragnarok//
function alterarConteudo9() {
  document.getElementsByClassName("words")[4].innerHTML = "<img src='avimg/6.png' height='130px'>"
}

function trailer5() {
  document.getElementsByClassName('words')[4].innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/UvNnqWLruXA' title='YouTube video player'></iframe>'"
}
  
function alterarConteudo10() {
  document.getElementsByClassName("words")[4].innerHTML = "Após anos afastado, Thor retorna para casa e descobre que seu pai, Odin, rei de Asgard, está desaparecido. Após encontrá-lo, ele toma conhecimento de sua irmã mais velha, Hela, a poderosa e implacável deusa da morte. Com o auxílio de Loki, ele enfrenta Hela, mas durante a batalha, Thor acaba preso em Sakaar, um planeta do outro lado do universo.Agora, ele precisa correr contra o tempo para voltar a Asgard e impedir o Ragnarok, a destruição de seu mundo."
}

//Guardiões da Galaxia//
function alterarConteudo11() {
  document.getElementsByClassName("words")[5].innerHTML = "<img src='avimg/5.png' height='130px'>"
}

function trailer6() {
  document.getElementsByClassName('words')[5].innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/8VN_l57QWyQ' title='YouTube video player'></iframe>'"
}
  
function alterarConteudo12() {
  document.getElementsByClassName("words")[5].innerHTML = "O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres.Quando Quill descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, ele e seu grupo deverão proteger o objeto para salvar o futuro da galáxia."
}

//Spider//
function alterarConteudo13() {
  document.getElementsByClassName("words")[6].innerHTML = "<img src='avimg/4.png' height='130px'>"
}

function trailer7() {
  document.getElementsByClassName('words')[6].innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/CyiiEJRZjSU' title='YouTube video player'></iframe>'"
}
  
function alterarConteudo14() {
  document.getElementsByClassName("words")[6].innerHTML = "Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho.Quando um feitiço para reverter o evento não sai como o esperado, o Homem-Aranha e seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso."
}

//Capitão America 2//
function alterarConteudo15() {
  document.getElementsByClassName("words")[7].innerHTML = "<img src='avimg/3.png' height='130px'>"
}

function trailer8() {
  document.getElementsByClassName('words')[7].innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/CTdvZwwShqM' title='YouTube video player'></iframe>'"
}
  
function alterarConteudo16() {
  document.getElementsByClassName("words")[7].innerHTML = "Após os eventos catastróficos em Nova York com Os Vingadores, Steve Rogers, também conhecido como Capitão América, segue tentando se ajustar ao mundo moderno. Porém, quando um colega da agência S.H.I.E.L.D. é atacado, Steve se vê preso em uma rede de intrigas que ameaça colocar o mundo em risco.Em parceria com a Viúva Negra e Falcão, seu novo aliado, o Capitão América tem que enfrentar um misterioso e inesperado inimigo, o Soldado Invernal."
}

//Ultimato//
function alterarConteudo17() {
  document.getElementsByClassName("words")[8].innerHTML = "<img src='avimg/2.png' height='130px'>"
}

function trailer9() {
  document.getElementsByClassName('words')[8].innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/4QRdB4RAQMs' title='YouTube video player'></iframe>'"
}
  
  
function alterarConteudo18() {
  document.getElementsByClassName("words")[8].innerHTML = "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos.Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco."
}

//Guerra Infinita//
function alterarConteudo19() {
  document.getElementsByClassName("words")[9].innerHTML = "<img src='avimg/1.png' height='130px'>"
}

function trailer10() {
  document.getElementsByClassName('words')[9].innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/t_ULBP6V9bg' title='YouTube video player'></iframe>'"
}
  
function alterarConteudo20() {
  document.getElementsByClassName("words")[9].innerHTML = "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos.Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade."
}
