class Filme {
    constructor(titulo, ano, genero, duracao) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = false;
        this.avaliacao = null;
    }

    exibirDetalhes() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Gênero: ${this.genero}`);
        console.log(`Duração: ${this.duracao} minutos`);
        console.log(`Assistido: ${this.assistido ? 'Sim' : 'Não'}`);
        console.log(`Avaliação: ${this.avaliacao !== null ? this.avaliacao : 'Não avaliado'}`);
    }

    marcarComoAssistido() {
        this.assistido = true;
    }

    avaliar(nota) {
        if (nota >= 0 && nota <= 10) {
            this.avaliacao = nota;
        } else {
            console.log("Nota inválida. A avaliação deve ser entre 0 e 10.");
        }
    }
}

module.exports = Filme;


// const filme1 = new Filme("InterEstrelar", 2010, "Ficção Científica", 148);
// const filme2 = new Filme("tres e demais", 1972, "Drama", 175);
// const filme3 = new Filme("Toy Story", 1995, "Animação", 81);

// filme1.exibirDetalhes();
// console.log('-------------------');
// filme2.exibirDetalhes();
// console.log('-------------------');
// filme3.exibirDetalhes();

// filme1.marcarComoAssistido();
// filme1.avaliar(9);

// filme2.marcarComoAssistido();
// filme2.avaliar(10);

// console.log('-------------------');
// filme1.exibirDetalhes();
// console.log('-------------------');
// filme2.exibirDetalhes();
