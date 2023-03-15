import './App.css';
import React, { useState } from 'react';

function App() {
  const [numAndares, setNumAndares] = useState('');
  const [torre, setTorre] = useState([]);

  const handleChange = (event) => {
    setNumAndares(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Verifica se o número informado é válido
    if (isNaN(numAndares) || numAndares <= 0) {
      setTorre(['Número inválido. Informe um valor inteiro positivo.']);
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
      // Atualiza o estado da torre para exibição na tela
      setTorre(torre);
    }
  }

  return (
    <div className="App">
      <h1>Construa sua Pirâmide</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Número de andares:
          <input type="number" value={numAndares} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Construir</button>
      </form>
      <div>
        {torre.map((linha, index) => (
          <p key={index}>{linha}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
