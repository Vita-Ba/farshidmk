export function toLocaleDate(date) {
  try {
    let locale = new Date(date).toLocaleDateString();
    return locale;
  } catch (error) {
    return "invalid date";
  }
}
