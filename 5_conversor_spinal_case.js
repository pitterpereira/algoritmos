// Spinal Case é uma string toda em minúsculo unida por hífens

function spinalCase(str) {

    return str
        // Split onde houver espaço '/s', underline '_', letra maiúscula (?=[A-Z])
       .split(/\s|_|(?=[A-Z])/)
       // Juntar usando hífen
       .join("-")
       // Colocar em minúsculo
       .toLowerCase();
}

console.log(spinalCase("OláSpinal_Tappers doBrasil"));