const Filme = require('./Filme');
const prompt = require('prompt-sync')({ sigint: true }); 


const filmes = [];

function menu() {
    console.log("\nMenu:");
    console.log("1 - Adicionar um novo filme");
    console.log("2 - Marcar um filme como assistido");
    console.log("3 - Avaliar um filme");
    console.log("4 - Exibir a lista de filmes");
    console.log("5 - Sair do programa");

    const escolha = parseInt(prompt("Escolha uma opção:"));

    switch (escolha) {
        case 1:
            const titulo = prompt("Digite o título do filme:");
            const ano = parseInt(prompt("Digite o ano do filme:"));
            const genero = prompt("Digite o gênero do filme:");
            const duracao = parseInt(prompt("Digite a duração do filme em minutos:"));
            const filme = new Filme(titulo, ano, genero, duracao);
            filmes.push(filme);
            break;
        case 2:
            if (filmes.length === 0) {
                console.log("Nenhum filme disponível para marcar como assistido.");
            } else {
                filmes.forEach((filme, index) => {
                    console.log(`${index + 1} - ${filme.titulo}`);
                });
                const index = parseInt(prompt("Escolha o número do filme que você assistiu:")) - 1;
                if (filmes[index]) {
                    filmes[index].marcarComoAssistido();
                    console.log("Filme marcado como assistido.");
                } else {
                    console.log("Número inválido.");
                }
            }
            break;
        case 3:
            if (filmes.length === 0) {
                console.log("Nenhum filme disponível para avaliar.");
            } else {
                filmes.forEach((filme, index) => {
                    console.log(`${index + 1} - ${filme.titulo}`);
                });
                const index = parseInt(prompt("Escolha o número do filme que você quer avaliar:")) - 1;
                if (filmes[index]) {
                    const nota = parseFloat(prompt("Digite sua avaliação (0 a 10):"));
                    filmes[index].avaliar(nota);
                    console.log("Filme avaliado.");
                } else {
                    console.log("Número inválido.");
                }
            }
            break;
        case 4:
            if (filmes.length === 0) {
                console.log("Nenhum filme disponível.");
            } else {
                filmes.forEach((filme) => {
                    filme.exibirDetalhes();
                    console.log('-------------------');
                });
            }
            break;
        case 5:
            console.log("Saindo do programa.");
            return;
        default:
            console.log("Opção inválida.");
    }

    menu();
}

menu();