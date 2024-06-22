const t = document.getElementById('loginForm')
if (t) {
    t.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (!username || !password) {
            showError("Por favor, preencha todos os campos.");
            return;
        }
        if (username === "usuarioteste" && password === "senha") {

            alert("Login bem-sucedido!");

        } else {
            showError("Nome de usuário ou senha incorretos.");
        }
    });
}
    function showError(message) {
        document.getElementById('error').textContent = message;
    }









    /*  let n = document
.getElementById("meuformulario")
.addEventListener("submit", (event) => {
    event.preventDefault();

    var banco = [];
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value 

    const acao = event.submitter.innerHTML;
    if (acao == 'enviar'){
        //chamar funcao de validar usuario
        logar (nome, senha)
    }
    else {
        let retorno = salvausuario (nome, senha);
    console.log (retorno)
    
    }

    
    function salvausuario (nome, senha){
       
        if (nome.length >10 && senha){
             
                
        
        banco [nome] = {nome:nome, senha:senha}
            
            console.log(banco)
            return "ok";
        }
    
        return "usuario ou senha errado";
     } 

     function logar (nome, senha){
    const usuario = banco[nome] ? banco[nome] :null;
    console.log (banco)
     }
 });  */