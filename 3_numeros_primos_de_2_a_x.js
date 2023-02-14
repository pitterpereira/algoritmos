// Encontra todos os números primos de um número x >= 2 até y.

function numerosPrimos(numero) {
    let primos = [];
    
    for(let i=2; i<=numero; i++){
        let ePrimo = true;

        // Testa se há algum divisor de 2 até o iterador atual
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                ePrimo = false; // Se houver algum, não pode ser considerado primo
                break;
            }
        }
        
        if(ePrimo)
            primos.push(i);
        
    }
    return primos;   
}