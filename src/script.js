// cria elementos
function criaElemento(element, texto, atributos) {
    // cria o elemento
    const elemento = document.createElement(element);
    // define o conteúdo do elemento, se especificado
    if (texto !== undefined && texto !== null) {
      elemento.textContent = texto;
    }
    // adiciona atributos ao elemento, se especificados
    if (atributos !== undefined && atributos !== null) {
      for (let chave in atributos) {
        elemento.setAttribute(chave, atributos[chave]);
      }
    }
    return elemento;
  }
  
  // encapsula elementos
  function encapsular(pai, filhos) {
    filhos.forEach(filho => {
      pai.appendChild(filho);
    });
    return pai;
  }
  
  // barra de navegação
  function scrollDown() {
    // se rolar para baixo
    if (window.pageYOffset >= 50) {
      document.getElementById('navbar').style.backgroundColor = "#333"
      document.querySelector(".logo").style.color = "#7E57C2";
      document.querySelector("span").style.color = "#fff";
    }
    // se rolar para cima e for menor que 10
    else if (window.pageYOffset <= 100) {
      document.getElementById('navbar').style.backgroundColor = "transparent"
      document.querySelector(".logo").style.color = "#fff";
      document.querySelector("span").style.color = "#7E57C2";
    }
  }
  
  // ajusta o titulo
  function adjustDprt(modalForm,title) {
    // aprende o nome do texto
    let dpto = title.innerText;
    // seleciona o h2 dentro do formulario
    let modalDptoTitle = modalForm.querySelector("h2");
    // altera o h2
    modalDptoTitle.innerText = dpto;
  }
  
  // cria o botão
  function btnCreate(modalForm) {
    //cria o botao
    let div = criaElemento("div",null,{class:'modal-form-btn'});
    let btnModalSend = criaElemento("button",'Enviar',{class:'modal-btn-send'});
    // adiciona o botão do form
    encapsular(modalForm,[div])
    encapsular(div,[btnModalSend] )
  }
  
  document.addEventListener('DOMContentLoaded', function() {
  
  });

//BOTOES BARRA LATERAL
function showCriaGrupo() {
  document.getElementById('box4_1').style.width = '280px'
  document.getElementById('span_box_4_1').style.width = '280px'
}
function hideCriaGrupo() {
  document.getElementById('box4_1').style.width = '40px'
  document.getElementById('span_box_4_1').style.width = '0px'
}

function showCriaUser() {
  document.getElementById('box4_2').style.width = '160px'
  document.getElementById('span_box_4_2').style.width = '160px'
}
function hideCriaUser() {
  document.getElementById('box4_2').style.width = '40px'
  document.getElementById('span_box_4_2').style.width = '0'
}

function showCriaForm() {
  document.getElementById('box4_3').style.width = '190px'
  document.getElementById('span_box_4_3').style.width = '160px'
}
function hideCriaForm() {
  document.getElementById('box4_3').style.width = '40px'
  document.getElementById('span_box_4_3').style.width = '0'
}



/*//////////////////////////////////////////////////////////////////////*/
/*///////////////////////////////CLICKS/////////////////////////////////*/
document.addEventListener('DOMContentLoaded', function() {
    // BOTÃO DE LOGIN
    let botaoLogin = document.getElementById('botaoLogin');
    // se clicar no botão de login, vai rodar a função fazerLogin
    if (botaoLogin) {
        botaoLogin.addEventListener('click', fazerLogin);
    }

    
    // abrir opções ao clicar usuário
    let userIcon = document.getElementById("userIcon");
    let optionsList = document.getElementById("optionsList");
    // se clicar no usuário, vai abrir a lista de opções
    if (userIcon) {
        userIcon.addEventListener("click", () => {
            if (optionsList.style.display === "none" || optionsList.style.display === "") {
                optionsList.style.display = "block";
            } else {
                optionsList.style.display = "none";
            }
        });
        // se clicar fora do painel de opções, some com o painel
        document.addEventListener("click", (e) => {
            if (!e.target.matches("#userIcon") && !e.target.matches("#optionsList li")) {
                optionsList.style.display = "none";
            }
        });
    }
  

    //fecha o modal
    let xis = document.getElementsByClassName("close")[0];
    if (xis) {
      xis.addEventListener("click", () => {
        modal.style.display = "none";
        // remove os elesmentos html do modal
        let modalForm = document.querySelector('#modal-form');
        modalForm.remove();
      });
    }
  
    
    //abrir opção TI
    let btnTi = document.querySelector("#block-ti");
    let modalBlock = document.querySelector(".modal-block");
    btnTi.onclick = function() {
      //abre o modal
      modal.style.display = "block";
      // cria os elementos
      var modalForm = criaElemento('form',null,{id:'modal-form'});
      let titulo = criaElemento('h2','Departamento');
      let labelUsuario = criaElemento('label','Usuário',{for:'nome'});
      let inputUsuario = criaElemento('input',null,{type:'text',id:'nome',name:'nome'});
      let labelSolicitacao = criaElemento('label','Solicitação');
      let selectSolicitacao = criaElemento('select',null,{class:'modal-form-control'});
      let optionAcesso = criaElemento('option','Acesso',{value:'acesso'});
      let optionProblema = criaElemento('option','Problema',{value:'problema'});
      let labelDescricao = criaElemento('label','Descrição',{for:'mensagem'});
      let textDescricao = criaElemento('textarea',null,{rows:'5',id:'mensagem',name:'mensagem'});
      // encapsulamento
      encapsular(modalBlock,[modalForm])
      encapsular(selectSolicitacao,[optionAcesso,optionProblema]);
      encapsular(modalForm,[titulo, labelUsuario, inputUsuario,labelSolicitacao,selectSolicitacao,labelDescricao,textDescricao]);
      // ajusta o titulo
      adjustDprt(modalForm,this.querySelector("h3"));
      // criar o botao enviar
      btnCreate(modalForm);
    }
});