import { defineRule, configure } from "vee-validate";
// import { parseDate } from "~/utils/functions/formatDate.function";
// import { convertToNumber } from "~/utils/functions/currency.function";

export default defineNuxtPlugin(() => {
    
  defineRule("required", (value: string) => {
    if (!value || !value.length) {
      return "Este campo é obrigatório";
    }
    return true;
  });

  defineRule("noNumbers", (value: string) => {
    // Expressão regular para verificar se há números
    if (/\d/.test(value)) {
      return "Não pode conter números";
    }
    return true;
  });

  defineRule("noSpecialCharacters", (value: string) => {
    if (!/^[\w\sáéíóúâêîôûàèìòùãẽĩõũçÁÉÍÓÚÂÊÎÔÛÀÈÌÒÙÃẼĨÕŨÇ]*$/i.test(value)) {
      return "Apenas letras (incluindo acentos) são permitidas";
    }
    return true;
  });

  // // Verifica se o e-mail é valido
  defineRule("email", (value: string) => {
    // Verifica se o e-mail é válido
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return "Por favor, digite um e-mail válido";
    }
    return true;
  });

  // // Verifica se a senha é válida
  // // A senha deve conter no mínimo 6 caracteres, com pelo menos uma letra e um número.
  defineRule("password", (value: string) => {
    if (value.length < 6) {
      return "A senha deve conter no mínimo 6 caracteres.";
    }
    // A senha deve conter pelo menos uma letra.
    if (!/[a-zA-Z]/.test(value)) {
      return "A senha deve conter pelo menos uma letra.";
    }
    // A senha deve conter pelo menos um número.
    if (!/\d/.test(value)) {
      return "A senha deve conter pelo menos um número.";
    }
    return true;
  });

  // // Verifica se há espaços em branco no início
  // defineRule("noLeadingWhitespace", (value: string) => {
  //   if (value && /^\s+/.test(value)) {
  //     return "Não pode haver espaços em branco no início";
  //   }

  //   return true;
  // });

  

  // // Regra de validação de mínimo de caracteres
  // defineRule(
  //   "min",
  //   (
  //     value: string,
  //     [
  //       length,
  //       message = `Este campo deve ter pelo menos ${length} caracteres`,
  //     ]: [number, string],
  //   ): string | true => {
  //     if (value && value.length < length) {
  //       return message;
  //     }
  //     return true;
  //   },
  // );

  // // Regra de validação de máximo de caracteres
  // defineRule(
  //   "max",
  //   (
  //     value: string,
  //     [length, message = `Este campo não deve exceder ${length} caracteres`]: [
  //       number,
  //       string,
  //     ],
  //   ): string | true => {
  //     if (value && value.length > length) {
  //       return message;
  //     }
  //     return true;
  //   },
  // );

  // // Regra de validação de DDD
  // defineRule("ddd", (value: string) => {
  //   let ddd = value.replace(/[^0-9]+/g, "").substring(0, 2);

  //   // Lista de DDDs do Brasil
  //   let validDDDs = [
  //     "11",
  //     "12",
  //     "13",
  //     "14",
  //     "15",
  //     "16",
  //     "17",
  //     "18",
  //     "19",
  //     "21",
  //     "22",
  //     "24",
  //     "27",
  //     "28",
  //     "31",
  //     "32",
  //     "33",
  //     "34",
  //     "35",
  //     "37",
  //     "38",
  //     "41",
  //     "42",
  //     "43",
  //     "44",
  //     "45",
  //     "46",
  //     "47",
  //     "48",
  //     "49",
  //     "51",
  //     "53",
  //     "54",
  //     "55",
  //     "61",
  //     "62",
  //     "63",
  //     "64",
  //     "65",
  //     "66",
  //     "67",
  //     "68",
  //     "69",
  //     "71",
  //     "73",
  //     "74",
  //     "75",
  //     "77",
  //     "79",
  //     "81",
  //     "82",
  //     "83",
  //     "84",
  //     "85",
  //     "86",
  //     "87",
  //     "88",
  //     "89",
  //     "91",
  //     "92",
  //     "93",
  //     "94",
  //     "95",
  //     "96",
  //     "97",
  //     "98",
  //     "99",
  //   ];

  //   if (!validDDDs.includes(ddd)) {
  //     return "Por favor, insira um DDD válido";
  //   }

  //   return true;
  // });

  // defineRule("cellphone", (value: string) => {
  //   const cleanValue = value.replace(/[^0-9]+/g, "");
  //   const thirdDigit = cleanValue.charAt(2);

  //   if (thirdDigit !== "9") {
  //     return "Número de celular inválido";
  //   }

  //   return true;
  // });


  // // Campos iguais
  // defineRule("confirmed", (value: string, [target]: string) => {
  //   if (value === target) {
  //     return true;
  //   }

  //   return "Dados divergentes";
  // });

  // // Verifica se o CNPJ é válido
  // defineRule("validCNPJ", (value: string) => {
  //   // Remove tudo o que não é dígito
  //   let cnpj = value.replace(/[^\d]+/g, "");

  //   // Verifica se o CNPJ possui 14 dígitos
  //   if (cnpj.length !== 14) return "CNPJ deve ter 14 dígitos";

  //   // Verifica se todos os dígitos são iguais, o que invalidaria o CNPJ
  //   if (/^(\d)\1+$/.test(cnpj)) return "CNPJ inválido";

  //   // Validação do primeiro dígito verificador
  //   let tamanho = cnpj.length - 2;
  //   let numeros = cnpj.substring(0, tamanho);
  //   let digitos = cnpj.substring(tamanho);
  //   let soma = 0;
  //   let pos = tamanho - 7;

  //   for (let i = tamanho; i >= 1; i--) {
  //     soma += numeros.charAt(tamanho - i) * pos--;
  //     // Se a posição for menor que 2, resetar para 9
  //     if (pos < 2) pos = 9;
  //   }

  //   // Realiza o cálculo para saber o dígito verificador
  //   let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  //   // Compara o resultado com o primeiro dígito verificador
  //   if (resultado != digitos.charAt(0)) return "CNPJ inválido";

  //   // Validação do segundo dígito verificador
  //   tamanho = tamanho + 1;
  //   numeros = cnpj.substring(0, tamanho);
  //   soma = 0;
  //   pos = tamanho - 7;

  //   for (let i = tamanho; i >= 1; i--) {
  //     soma += numeros.charAt(tamanho - i) * pos--;
  //     // Se a posição for menor que 2, resetar para 9
  //     if (pos < 2) pos = 9;
  //   }

  //   // Realiza o cálculo para saber o segundo dígito verificador
  //   resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  //   // Compara o resultado com o segundo dígito verificador
  //   if (resultado != digitos.charAt(1)) return "CNPJ inválido";

  //   return true;
  // });

  // // Verifica se o CPF é válido
  // defineRule("validCPF", (value: string) => {
  //   let cpf = value.replace(/[.-]/g, "");
  //   let numeros, digitos, soma, i, resultado, digitos_iguais;
  //   digitos_iguais = 1;
  //   if (cpf.length < 11) return "CPF incompleto";

  //   for (i = 0; i < cpf.length - 1; i++)
  //     if (cpf.charAt(i) != cpf.charAt(i + 1)) {
  //       digitos_iguais = 0;
  //       break;
  //     }

  //   if (!digitos_iguais) {
  //     numeros = cpf.substring(0, 9);
  //     digitos = cpf.substring(9);
  //     soma = 0;
  //     for (i = 10; i > 1; i--) soma += numeros.charAt(10 - i) * i;
  //     resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  //     if (resultado != digitos.charAt(0)) return "CPF inválido";

  //     numeros = cpf.substring(0, 10);
  //     soma = 0;
  //     for (i = 11; i > 1; i--) soma += numeros.charAt(11 - i) * i;
  //     resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  //     if (resultado != digitos.charAt(1)) return "CPF inválido";

  //     return true;
  //   } else {
  //     return "CPF com dígitos repetidos";
  //   }
  // });

  // // Regra para validar as extensões de arquivo suportadas
  // defineRule(
  //   "fileType",
  //   (value: string, [file, allowedTypes]: [File, string[]]) => {
  //     if (file && file.name) {
  //       const fileExtension = file.name.split(".").pop()?.toLowerCase();
  //       if (fileExtension && !allowedTypes.includes(fileExtension)) {
  //         // Formata a lista de tipos permitidos
  //         const formattedTypes =
  //           allowedTypes.slice(0, -1).join(", ") +
  //           " ou " +
  //           allowedTypes.slice(-1);
  //         return `O arquivo deve ser do tipo: ${formattedTypes}`;
  //       }
  //     }
  //     return true;
  //   },
  // );

  // // Regra para validar o tamanho do arquivo de imagem
  // defineRule(
  //   "fileSize",
  //   (value: string, [file, maxSize]: [File, number]): string | true => {
  //     if (file && file.size > maxSize) {
  //       return `O tamanho do arquivo não deve exceder ${(maxSize / 1000000).toFixed()} MB`;
  //     }
  //     return true;
  //   },
  // );

  // defineRule("dateValid", (value: string) => {
  //   let re =
  //     /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  //   if (!re.test(String(value))) {
  //     return "Insira uma data válida.";
  //   }

  //   return true;
  // });

  // defineRule("minAge", (value: string, [minAge]: number[]) => {
  //   const birthDate = parseDate(value);
  //   const today = new Date();
  //   let age = today.getFullYear() - birthDate.getFullYear();
  //   const m = today.getMonth() - birthDate.getMonth();

  //   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //     age--;
  //   }

  //   if (age < minAge) {
  //     return `Você deve ter mais de ${minAge} anos`;
  //   }

  //   return true;
  // });

  // // Validação para data mínima
  // defineRule("dateMin", (value: string, [minDateStr]: string[]) => {
  //   const minDate = parseDate(minDateStr);
  //   const inputDate = parseDate(value);

  //   if (inputDate < minDate) {
  //     return "Data fora do período de participação";
  //   }

  //   return true;
  // });

  // // Validação para data posterior à atual
  // defineRule("dateNotFuture", (value: string) => {
  //   const today = new Date();
  //   today.setHours(0, 0, 0, 0); // Ignorar horas, minutos e segundos para comparação de apenas data

  //   const inputDate = parseDate(value);

  //   if (inputDate > today) {
  //     return "Data superior a atual";
  //   }

  //   return true;
  // });

  // // Regra de validação de valor mínimo
  // defineRule("valueMin", (value: string, [minValue]: string[]) => {
  //   const numericValue = convertToNumber(value);
  //   const numericMinValue = convertToNumber(minValue);
  //   if (numericValue < numericMinValue) {
  //     return `O valor mínimo é de R$ ${minValue},00`;
  //   }
  //   return true;
  // });

  // // Regra de validação de valor máximo
  // defineRule("valueMax", (value: string, [maxValue]: string[]) => {
  //   const numericValue = convertToNumber(value);
  //   const numericMaxValue = convertToNumber(maxValue);
  //   if (numericValue > numericMaxValue) {
  //     return `O valor máximo é de R$ ${maxValue},00`;
  //   }
  //   return true;
  // });

  // defineRule("currency", (value: string) => {
  //   const regex = /^R\$ \d{1,3}(.\d{3})*(,\d{2})?$/;
  //   return (
  //     regex.test(value) || "O valor inserido não é um formato de moeda válido."
  //   );
  // });
  configure({
    validateOnInput: true, // Habilita a validação em cada input
  });
});
