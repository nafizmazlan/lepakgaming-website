export function calculateReadingTime(content: string): number {
  // Remove markdown syntax and HTML tags for accurate word count
  const plainText = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/#{1,6}\s/g, '') // Remove markdown headings
    .replace(/[*_~]/g, '') // Remove markdown formatting
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links to just text
    .trim();

  // Count words (split by whitespace)
  const words = plainText.split(/\s+/).filter(word => word.length > 0).length;

  // Average reading speed: 200 words per minute
  const readingTime = Math.ceil(words / 200);

  // Minimum 1 minute
  return Math.max(1, readingTime);
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}