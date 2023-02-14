const consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'w', 'z'];
let senhaCriptografada = "cronoinonioreniw";
let quant_letras =0, quant_consoantes =0, chave = 0;
  
for (const letra of senhaCriptografada) { 
const found = consoantes.find(element => element === letra); 
if (found === letra) {quant_consoantes+=1;} quant_letras+=1;
}

chave = (quant_consoantes*quant_letras);
console.log(chave);
