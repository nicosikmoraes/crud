import { Login } from '../FakeApi/model/login.js';
import { LoginService } from '../FakeApi/service/login.service.js';

/**
 * Habilita ou desabilita o botão de enviar de acordo com o estado do formulário.
 */
function manageSubmitButton() {
  const form = document.querySelector('#login-form');
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  form.addEventListener('input', () => {
    if (form.checkValidity()) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
}

/**
 * Trata o evento de submit.
 * Cadastra o paciente no JSON Server
 */
function submitHandler() {
  let loginService = new LoginService();
  document
    .getElementById('login-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('nomeInput2').value;
      const email = document.getElementById('emailInput2').value;
      var password, element = document.getElementById('senhaInput2');
      if (element != null) {
        password = element.value;
    }
    else {
        password = null;
    }
   

      //cadastra o paciente com os dados validados
      let user = new Login(name, email, password);

      //uso do Fetch API
         loginService
           .insertUserWithFetch(user)
           .then((response) => response.json())
           .then((data) => {
             console.log('Successo:', data);
             alertify.success('Usuário cadastrado com sucesso!');
             document.getElementById('login-form').reset(); // Limpa o formulário após o cadastro
             manageSubmitButton(); // Verifica o estado do botão novamente após resetar o formulário
             showLoginTable(); // Atualiza a tabela de pacientes após o cadastro
           })
           .catch((error) => {
             console.error('Erro:', error);
            alertify.error('Erro ao cadastrar paciente.');
           });
       });

      //uso do JQuery
      /*patientService
        .insertPatientWithJqueryAjax(patient)
        .done((data) => {
          console.log('Sucesso:', data);
          alertify.success('Paciente cadastrado com sucesso!');
          document.getElementById('patient-form').reset(); // Limpa o formulário após o cadastro
          manageSubmitButton();
          showPatientTable();
        })
        .fail((error) => {
          console.error('Erro:', error);
          alertify.error('Erro ao cadastrar paciente.');
        });
    });*/
}

/**
 * Mostra a tabela preenchida com os pacientes.
 */
function showLoginTable() {
  let loginService = new LoginService();

  loginService
    .listUser()
    .then((usuario) => {
      console.log(usuario);

      // Obtém a referência ao container que conterá as linhas da tabela
      const loginBodyTable = document.getElementById('table-login-body');

      // Limpa a lista antes de adicionar os registros
      loginBodyTable.innerHTML = '';
      let loginTableContent = '';
      // Itera sobre os pacientes e os adiciona à tabela no HTML
      for (let i = 0; i < usuario.length; i++) {
        const conta = usuario[i];

        let tableRow = `
        <tr>
          <td>${conta.name}</td>
          <td>${conta.email}</td>
        </tr>
      `;

        loginTableContent += tableRow;
      }
      loginBodyTable.innerHTML = loginTableContent;

      document.querySelector('#login-spinner').style.display = 'none';
      if (usuario.length == 0) {
        document.querySelector('#table-container').style.display =
          'none';
          document.querySelector('#no-result').style.display = 'block';
        } else {
          document.querySelector('#login-amount-span').textContent =
            usuario.length;
          document.querySelector('#no-result').style.display = 'none';
        document.querySelector('#table-container').style.display =
          'block';
      }
    })
    .catch((error) => {
      alertify.error('Não foi possível buscar os pacientes.');
    });
}

/**
 * Trata do evento de carregamento da página
 */
document.addEventListener('DOMContentLoaded', function () {
  //Cadastra evento de gerenciar o estado do botão de enviar
  manageSubmitButton();

  //registra o evento de onsubmit
  submitHandler();

  // Inicializa o serviço de pacientes
  showLoginTable();
});