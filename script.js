// Interação do botão "Quero participar!"
const btnParticipar = document.getElementById('btn-participar');

btnParticipar.addEventListener('click', () => {
    alert('Que ótimo! Fale com seu professor(a) ou responsável para inscrever seu projeto no Programa Agrinho!');
});

// Validação e envio do formulário de ideias
const form = document.getElementById('form-mensagem');
const mensagemResposta = document.getElementById('mensagem-resposta');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que a página recarregue

    const nome = document.getElementById('nome').value;
    const ideia = document.getElementById('ideia').value;

    // Exibe uma mensagem de agradecimento
    mensagemResposta.textContent = `Obrigado, ${nome}! Sua ideia ("${ideia}") foi registrada e vai ajudar a transformar nossa comunidade! 🌱`;

    // Limpa o formulário
    form.reset();
});
