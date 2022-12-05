
// Pega o checkbox
const botaoDark = document.getElementById('botao-dark');

// Verifica se tem no localStorage seleção do dark theme
if (localStorage.getItem('data-theme') == 'dark') {
  botaoDark.checked = true;
}

//A propriedade .checked define ou retorna o estado marcado de uma caixa de seleção.Um booleano, retorna verdadeiro se a caixa de seleção estiver marcada e falso se a caixa de seleção não estiver marcada

// Liga a função ao checkbox
botaoDark.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme'); // Recuperar dados salvos no localStorage
    if (!botaoDark.checked){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }
});

// O evento change ocorre quando o valor de um elemento é alterado.Por exemplo, Quando um <input type="checkbox"> elemento é marcado ou desmarcado (clicando ou usando o teclado).

// O método getItem() retorna o valor do item de objeto de armazenamento especificado.
