export function getIdFromUrl(url: string): string {
  if (!url) return '-1';

  return url
    .split('/')
    .filter(item => item)
    .slice(-1)[0];
}
