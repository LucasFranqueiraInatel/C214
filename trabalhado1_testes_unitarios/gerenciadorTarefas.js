const readline = require('readline-sync');

let tarefas = [];

function limparTerminal() {
    process.stdout.write('\x1B[2J\x1B[0;0f');
}

function exibirMenu() {
    console.log('1. Adicionar uma nova tarefa');
    console.log('2. Visualizar a lista de tarefas');
    console.log('3. Atualizar o status de uma tarefa');
    console.log('4. Excluir uma tarefa');
    console.log('5. Sair');
}

function adicionarTarefa() {
    const titulo = readline.question('Titulo da tarefa: ');
    const descricao = readline.question('Descricao da tarefa: ');

    const tarefa = {
        titulo,
        descricao,
        status: 'A fazer'
    };

    tarefas.push(tarefa);
    console.log('Tarefa adicionada com sucesso!');
}

function visualizarTarefas() {
    if (tarefas.length > 0) {
        console.log('------------------------------')
        for (let i = 0; i < tarefas.length; i++) {
            console.log(`${i + 1}. ${tarefas[i].titulo} - ${tarefas[i].descricao} - ${tarefas[i].status}`);
        }
        console.log('------------------------------')
        console.log('\n')
    } else {
        console.log('Nenhuma tarefa registrada')
    }

}

function atualizarStatus() {
    if (tarefas.length > 0) {
        visualizarTarefas();
        let numero
        while (true) {
            numero = readline.questionInt('Numero da tarefa que voce deseja atualizar: ') - 1;
            if (tarefas[numero]) {
                break;
            }

            console.log('Numero invalido, tente novamente')
        }
        const novoStatus = readline.question('Novo status (A fazer, Em andamento, Concluida): ');

        tarefas[numero].status = novoStatus;
        console.log('Status atualizado com sucesso!');
    } else {
        console.log('Nenhuma tarefa encontrada\n')
    }
}

function excluirTarefa() {
    if (tarefas.length > 0) {
        visualizarTarefas();
        let numero
        while (true) {
            numero = readline.questionInt('Numero da tarefa que voce deseja excluir: ') - 1;

            if (tarefas[numero]) {
                break
            }
        }

        tarefas.splice(numero, 1);
        limparTerminal();
        console.log('Tarefa excluída com sucesso!');
    } else {
        console.log('Nenhuma tarefa encontrada\n')
    }
}

while (true) {
    exibirMenu();
    const opcao = readline.questionInt('Escolha uma opcao: ');
    limparTerminal();

    switch (opcao) {
        case 1:
            adicionarTarefa();
            break;
        case 2:
            visualizarTarefas();
            break;
        case 3:
            atualizarStatus();
            break;
        case 4:
            excluirTarefa();
            break;
        case 5:
            console.log('Ate logo!');
            process.exit(0);
        default:
            console.log('Opcao invalida');
    }
}
