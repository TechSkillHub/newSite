// Converte uma string de data ISO 'yyyy-MM-dd' para o formato 'dd/MM/yyyy'
export function formatDate(dateString: string) {
  const date = new Date(dateString);
  let day = date.getDate().toString();
  let month = (date.getMonth() + 1).toString();
  const year = date.getFullYear();

  day = day.length < 2 ? "0" + day : day;
  month = month.length < 2 ? "0" + month : month;

  return `${day}/${month}/${year}`;
}

// Converte uma string de data no formato 'dd/MM/yyyy'
// para uma string de data ISO 'yyyy-MM-ddTHH:mm:ss'
export function formatToISO(dateString: string) {
  let date = parseDate(dateString);

  return (
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0") +
    "T00:00:00"
  );
}

// Converte string de data no formato 'dd/MM/yyyy' para objeto Date
export const parseDate = (dateStr: string): Date => {
  const dateParts = dateStr.split("/");
  return new Date(
    Number(dateParts[2]),
    Number(dateParts[1]) - 1,
    Number(dateParts[0]),
  );
};
