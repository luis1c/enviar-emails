function enviarEmail(email, assunto, corpo) {
    // Para simulação do envio do e-mail, onde há possibilidade de falha no envio.
    const sucessoEnvio = Math.random() < 0.9; // 90% de chance de sucesso

    if (sucessoEnvio) {
        return "success";
    } else {
        return "Erro ao enviar o e-mail. Tente novamente mais tarde.";
    }
}

module.exports = enviarEmail;
