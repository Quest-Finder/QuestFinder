export function normalizeText(value: string) {
  return value
    .normalize('NFKD')
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .toLowerCase()
    .trim()
}
