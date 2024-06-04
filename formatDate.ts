export default function formatDate(timestamp: string): string {
  const d = new Date(timestamp);
  const year = d.getFullYear();
  const month = `0${d.getMonth() + 1}`.slice(-2); // months are zero-indexed
  const day = `0${d.getDate()}`.slice(-2);
  return `${year}. ${month}. ${day}`;
}

// Output: 2024. 04. 16
