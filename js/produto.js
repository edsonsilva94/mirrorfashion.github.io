var inputTamanho = document.querySelector('[name=tamanho]')
var outputTamanho = document.querySelector('[name=valortamanho]')

function mostraTamanho() {
	outputTamanho.value = inputTamanho.value
	outputTamanho.textContent = event.target.value
}

inputTamanho.oninput = mostraTamanho
inputTamanho.onchange = mostraTamanho

// FUNÇÃO ANÔNIMA, PODENDO SUBSTITUIR AS 5 LINHAS ACIMA DE CÓDIGO
// inputTamanho.oninput = function() {
// 	outputTamanho.value = inputTamanho.value
// }