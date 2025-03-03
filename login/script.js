document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    
    // Aqui você pode adicionar a validação que desejar
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Simulação de login bem-sucedido
    if(username && password) {
        // Redireciona para a página da área do cliente
        window.location.href = 'area_cliente.html';
    } else {
        alert('Usuário não encontrado');
    }
});
