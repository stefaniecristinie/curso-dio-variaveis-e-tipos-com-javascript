// solução 1
function verificaPalindromo(string) {
	if (!string) return;
	return string.split('').reverse().join('') === string;//join = junta todos os elementos do array.
}
console.log(verificaPalindromo('ovo'));

// solução 2
function varificaPalindromo2(string) {
	if (!string) return;

	for (let i = 0; i < string.length / 2; i++) {//2 = comparar 2 caracteres ao mesmo tempo. Percorrer metade da String, metade dos loops.
		if (string[i] !== string[string.length - 1 - i]) {//-1 = porque indice começa no 0.
			return false;
		}
	}
	return true;
}

console.log(varificaPalindromo2('asa'));