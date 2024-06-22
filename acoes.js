  // Função para adicionar um item ao carrinho
  function adicionarItemAoCarrinho(produto) {
    // Aqui você deve implementar a lógica para adicionar o produto ao carrinho
    // Vou usar um exemplo simples
    var tbody = document.getElementById('cart-items');
    var row = document.createElement('tr');
    
    var nome = produto.nome;
    var quantidade = produto.quantidade;
    var precoUnitario = produto.precoUnitario;
    var total = quantidade * precoUnitario;
    
    row.innerHTML = `
      <td>${nome}</td>
      <td>${quantidade}</td>
      <td>R$ ${precoUnitario.toFixed(2)}</td>
      <td>R$ ${total.toFixed(2)}</td>
      <td class="item-actions">
        <button class="btn btn-remove" onclick="removerItemDoCarrinho(this)">Remover</button>
      </td>
    `;
    
    tbody.appendChild(row);
    
    atualizarTotal();
  }
  
  function removerItemDoCarrinho(button) {
    var row = button.closest('tr');
    row.remove();
    
   
    atualizarTotal();
  }
  
  
  function limparCarrinho() {
    var tbody = document.getElementById('cart-items');
    tbody.innerHTML = '';
    
    // Atualizar subtotal e total
    atualizarTotal();
  }
  
  function atualizarTotal() {
    var subtotal = 0;
    var rows = document.querySelectorAll('#cart-items tr');
    
    rows.forEach(function(row) {
      var quantidade = parseInt(row.cells[1].textContent);
      var precoUnitario = parseFloat(row.cells[2].textContent.replace('R$ ', ''));
      subtotal += quantidade * precoUnitario;
    });
    
    var total = subtotal;
    
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
  }
  
  // Exemplo de adição de itens ao carrinho (pode ser feito dinamicamente)
  adicionarItemAoCarrinho({ nome: 'iphone 15', quantidade: 1, precoUnitario: 7199.0 });



/* document

.getElementById("loginform")
.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value 
    
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
    <p>seu nome é: ${nome}</p>
    <p>sua senha esta correta ${senha}</p>


    `
 }); */


/* document
.getElementById("meuformulario")
.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const datadenascimento = document.getElementById("senha").value 
    
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
    <p>seu nome é: ${nome}</p>
    <p>sua senha esta correta ${formatardata(datadenascimento)}</p>


    `
 }); */

 /* document.getElementById("meuformulario")
 .addEventListener("submit", (event) => {
    eventvent.preventDefault();
    var usarname = document.getElementById("nome").value;
    var password = document.getElementById("senha").value; */
    /* let retorno = salvausuario (usarname, password);
        console.log (retorno) */
     /*    console.log("nome:",nome);
        console.log("senha:",senha); */
/*  }) */

/*     function salvausuario (nome, senha){
    let banco = [];
    if (nome.length >10 && senha){
        
        return "ok";
    }

    return "usuario ou senha errado";
 } 
 */