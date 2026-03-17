/**
 * Check if a post is published (publishedAt date is in the past or today)
 */
export function isPublished(dateStr: string | undefined): boolean {
  if (!dateStr) return false;
  const date = new Date(dateStr);
  const now = new Date();
  // Set both dates to start of day for comparison
  date.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  return date <= now;
}

/**
 * Format date string to readable format
 * e.g., "8 March 2026"
 * Returns "Coming Soon" for future dates or invalid dates
 */
export function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return "Coming Soon";
  const date = new Date(dateStr);

  // Check for invalid date
  if (isNaN(date.getTime())) return "Coming Soon";

  // Check if date is in the future
  const now = new Date();
  const dateOnly = new Date(date);
  const nowOnly = new Date(now);
  dateOnly.setHours(0, 0, 0, 0);
  nowOnly.setHours(0, 0, 0, 0);

  if (dateOnly > nowOnly) return "Coming Soon";

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
