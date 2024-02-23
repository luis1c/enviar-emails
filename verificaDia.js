function verificarDiaSemanaAtual() {
    const dataAtual = new Date();
    const diaSemana = dataAtual.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    return diaSemana === 1; // Retorna true se for segunda feira, caso contrário, retorna false
    // return true; // Comente o return anterior e tire o comentário deste return para testar mesmo não sendo segunda
}

module.exports = verificarDiaSemanaAtual;