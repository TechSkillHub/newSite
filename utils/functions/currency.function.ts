export const convertToNumber = (value: string) => {
  // Remove o símbolo "R$" e espaços em branco
  value = value.replace("R$", "").trim();
  // Remove os pontos dos milhares
  value = value.replace(/\./g, "");
  // Substitui a vírgula decimal por um ponto
  value = value.replace(",", ".");

  return parseFloat(value);
};
