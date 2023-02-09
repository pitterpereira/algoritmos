// Soma todos os números dentro de uma faixa, inclusive o inicial e o final, não importando a ordem deles.

function sumAll(arr) {
    let soma = 0;
  
    // Pega o primeiro e o último número do vetor
    let inicio = arr[0];
    let fim = arr[arr.length-1];
  
    // Se o inicial for menor
    if(inicio < fim)
        do {
            soma += inicio++;
        } while(inicio <= fim);
        else if (inicio > fim) // Se o inicial for maior
            do {
                soma += inicio--;
            } while(inicio >= fim);
            else { // São iguais
                return inicio;
            }
  
    return soma;
  }
  
  sumAll([4, 1]); // 10