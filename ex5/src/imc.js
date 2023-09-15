function calcularIMC(peso, altura) {
  if (altura === 0) {
    return 'NaN'; // Retorna "NaN" se a altura for igual a zero
  }

  if (peso < 0 || altura < 0) {
    return 'Valores inválidos'; // Retorna uma mensagem para valores de peso ou altura negativos
  }

  const alturaMetros = altura / 100; // Converte altura de centímetros para metros
  return (peso / (alturaMetros * alturaMetros)).toFixed(2); // Calcula o IMC com duas casas decimais
}

module.exports = { calcularIMC }; // Exporta a função calcularIMC
