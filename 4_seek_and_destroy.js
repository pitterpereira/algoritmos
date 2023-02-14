// Remove todos os elementos do array inicial que são do mesmo valor que os próximos argumentos passados

// Função que recebe um número x de argumentos
function destroyer(arr) {

  // Pega todos os argumentos após o primeiro, que será o vetor
  const valsToRemove = Object.values(arguments).slice(1);

  const filteredArray = [];

  // Analisa cada elemento do vetor
  for (let i = 0; i < arr.length; i++) {

    let removeElement = false;

    // Analisa cada um dos valores após o vetor
    for (let j = 0; j < valsToRemove.length; j++) {

      // Se algum valor do vetor for igual aos valores que devem ser removidos
      if (arr[i] === valsToRemove[j]) {
        removeElement = true; // marca para remover
      }
    }

    // Se não estiver marcado para ser removido
    if (!removeElement) {

      // Coloca o elemento no novo vetor filtrado
      filteredArray.push(arr[i]); 
    }
  }

  return filteredArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1,1]