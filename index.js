const verificarDiaSemanaAtual = require('./verificaDia');
const montarCorpoEmail = require('./montaEmail');
const enviarEmail = require('./enviaEmail');
const listaClientes = require('./listaClientes');

if (verificarDiaSemanaAtual()) {
    const corpoEmail = montarCorpoEmail();
    listaClientes.forEach(cliente => {
        if (cliente.receiveMarketingEmails) {
            const resultadoEnvio = enviarEmail(cliente.email, "Novidades na CarStore", corpoEmail);
            if (resultadoEnvio === "success") {
                console.log(`E-mail enviado para ${cliente.email} com sucesso!`);
            } else {
                console.log(`Erro ao enviar e-mail para ${cliente.email}: ${resultadoEnvio}`);
            }
        } else {
            console.log(`O cliente ${cliente.email} optou por não receber comunicações de marketing.`);
        }
    });
} else {
    console.log("Hoje não é segunda feira. Não será enviado nenhum e-mail.");
}
