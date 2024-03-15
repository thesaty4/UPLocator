export function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt: string) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}

type DateFormat = 'dd-mm-yyyy' | 'dd/mm/yyyy' | 'yyyy-mm-dd HH:MM:SS'; // Add more formats as needed

export function formatDate(date: Date, format: DateFormat): string {
  const day: number = date.getDate();
  const month: number = date.getMonth() + 1; // Months are zero-based
  const year: number = date.getFullYear();
  const hh: number = date.getHours();
  const mm: number = date.getMinutes();
  const ss: number = date.getSeconds();

  const formatString: string = format
    .replace('dd', day < 10 ? `0${day}` : day.toString())
    .replace('mm', month < 10 ? `0${month}` : month.toString())
    .replace('yyyy', year.toString())
    .replace('HH', hh == 0 ? `0${hh}` : hh.toString())
    .replace('MM', mm == 0 ? `0${mm}` : mm.toString())
    .replace('SS', ss == 0 ? `0${ss}` : ss.toString());

  return formatString;
}
