export function setItem<T>(key: string, value: T): void {
  return localStorage.setItem(key, JSON.stringify(value))
}

export function getItem<T>(key: string): T | null {
  const data = localStorage.getItem(key)
  if (!data) return null
  return JSON.parse(data) as T
}

export function removeItem(key: string): void {
  return localStorage.removeItem(key)
}

export function removeItems(keys: string[]): void {
  return keys.forEach(key => localStorage.removeItem(key))
}
