const prompt = require("prompt-sync")();
let categorias = [];//Array de categorias

// Função para adicionar atividade
function adicionarAtividade(descricao, data, hora, duracao, categoria, notas) {
  let novaAtividade = {
    descricao: descricao,
    data: data,
    hora: hora,
    duracao: duracao,
    notas: notas
  }; //Adiciona um objeto com as informações da atividade
  let categoriaExistente = categorias.find(cat => cat.nome === categoria); //verifica se a categoria atual já existe no array categorias
  if (!categoriaExistente) {
    categoriaExistente = { nome: categoria, atividades: [] };
    categorias.push(categoriaExistente);
    //se a categoria não existir, cria uma nova categoria com um array de tividades e a adiciona no array categorias
  }
  categoriaExistente.atividades.push(novaAtividade);//Adiciona a nova atividade a sua categoria
}

// Função para interação com o usuário
function interacao() {
  let loop = true;
  while(loop == true ){
    console.log("--------------------------------------------------")
  let opcao = parseInt(prompt("Digite 1 para adicionar uma nova tarefa ou 2 para visualizar um relatório das atividades registradas: "));

    
  if (opcao === 1) {
    //Solicita os detalhes da categoria
    let categoria = prompt("Qual a categoria da sua atividade? ");
    let descricao = prompt("Descreva a atividade: ");
    let data = prompt("Em que data foi realizada? (nota: utilize o formato dd/mm/aaaa): ");
    let hora = parseInt(prompt("Em que hora foi realizada? "));
    let duracao = parseInt(prompt("Qual o tempo em minutos de duração da sua atividade? "));
    let notas = prompt("Adicione uma nota para sua atividade: ");

    adicionarAtividade(descricao, data, hora, duracao, categoria, notas);

    console.log("Atividade adicionada com sucesso!");

  }else if(opcao==2){
    //Chama a função que exibe as categorias
    exibirCategorias();
  }
  }
}
//Função para exibir todos os registros.
function exibirCategorias() {
  console.log("Categorias e Atividades: \n ");
  let qt_att_geral = 0 //quantidade geral de atts
  let tempogeral = 0
  categorias.forEach(categoria => {
    let tempogasto = 0
    let qt_atv = 0 //quant. de atts nesta categoria
    categoria.atividades.forEach(atv=>{
      tempogasto+=atv.duracao 
      tempogeral+=atv.duracao
      qt_atv++
      qt_att_geral++
    })
    console.log(`Categoria: ${categoria.nome}`);
    console.log(`Tempo Gasto: ${tempogasto} minutos`)
    console.log(`${qt_atv} atividades realizadas`)
    console.log("Atividades:");
    categoria.atividades.forEach(atividade => {
      console.log(`Descrição: ${atividade.descricao}`);
      console.log(`Data: ${atividade.data}`);
      console.log(`Hora: ${atividade.hora}`);
      console.log(`Duração: ${atividade.duracao} minutos`);
      console.log(`Notas: ${atividade.notas}`);
      console.log('**********')
    });

  });
  console.log(`${qt_att_geral} realizadas no total.`)
  let att_por_hora = qt_att_geral/tempogeral*1/60 //converte o tempo de min para horas
  console.log(`Você realizou em média ${att_por_hora} atividades por hora, considerando as horas que praticou as atividades.`)
  if(att_por_hora<5){
    console.log("Realize mais atividades, você está paia. ")
  }else if(att_por_hora <8){
    console.log("Razoável.")
  }else if(att_por_hora>=8){
    console.log("Você está indo bem.")
  }else{
    console.log("Sem comentários.")
  }
}

// Interação
interacao();



