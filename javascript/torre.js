const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe o número de andares: ', (numAndares) => {
  // Verifica se o número informado é válido
  if (isNaN(numAndares) || numAndares <= 0) {
    console.log('Número inválido. Informe um valor inteiro positivo.');
    rl.close();
  } else {
    let torre = [];
    let numBlocos = 1;
    let espacos = numAndares - 1;

    // Adiciona um espaço na primeira linha para centralizar o primeiro bloco, e disfarço isso com uma frase informativa para o usuário
    torre.push(' '.repeat(espacos) + 'Aqui está sua pirâmide: ');
    // Monta a torre
    for (let i = 1; i < numAndares; i++) {
      let linha = '';
      // Adiciona espaços à esquerda da linha para centralizá-la
      for (let j = 0; j < espacos; j++) {
        linha += ' ';
      }
      // Adiciona os blocos à linha
      for (let j = 0; j < numBlocos; j++) {
        linha += '*';
      }
      // Adiciona espaços à direita da linha para centralizá-la
      for (let j = 0; j < espacos; j++) {
        linha += ' ';
      }
      // Adiciona a linha à torre
      torre.push(linha);
      // Atualiza as variáveis para a próxima linha
      numBlocos += 2;
      espacos--;
    }
    // Exibe a torre
    console.log(torre.join('\n'));
    rl.close();
  }
});
