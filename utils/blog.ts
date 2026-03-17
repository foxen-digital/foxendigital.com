/**
 * Format date string to readable format
 * e.g., "8 March 2026"
 */
export function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return "Coming Soon";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
