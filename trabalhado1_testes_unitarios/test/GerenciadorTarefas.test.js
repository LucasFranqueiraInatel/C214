const {expect} = require('chai');
const {
  exibirMenu,
  adicionarTarefa,
  visualizarTarefas,
  atualizarStatus,
  excluirTarefa,
} = require('../gerenciadorTarefas');

describe ('Testes gerenciador de tarefas',() =>{

  it('deve exibir uma lista de tarefas com o título, descrição e status', () => {
    // Criar algumas tarefas
    tarefas.push({
      tiulo: 'Tarefa 1',
      descricao: 'Descrição da tarefa 1',
      status: 'A fazer',
    });
    tarefas.push({
      tiulo: 'Tarefa 2',
      descricao: 'Descrição da tarefa 2',
      status: 'Em andamento',
    });
    tarefas.push({
      tiulo: 'Tarefa 3',
      descricao: 'Descrição da tarefa 3',
      status: 'Concluída',
    });
  
    // Executar a função
    visualizarTarefas();
  
    // Assertivas
    expect(console.log).toHaveBeenCalledWith(
      chalk.blue('------------------------------'),
      chalk.bold('1. Tarefa 1 - Descrição da tarefa 1 - A fazer'),
      chalk.bold('2. Tarefa 2 - Descrição da tarefa 2 - Em andamento'),
      chalk.bold('3. Tarefa 3 - Descrição da tarefa 3 - Concluída'),
      chalk.blue('------------------------------')
    );
  });

   



})