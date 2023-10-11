export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    second: "numeric",
    minute: "numeric",
    hour: "numeric",
  });
}
