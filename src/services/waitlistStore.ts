export type WaitlistEntry = {
  name: string
  workshop: string
  phone: string
  email: string
  createdAt: string
}

const storageKey = 'nova-waitlist-entries'

export function saveWaitlistEntry(entry: Omit<WaitlistEntry, 'createdAt'>) {
  const storedEntries = window.localStorage.getItem(storageKey)
  const entries: WaitlistEntry[] = storedEntries
    ? JSON.parse(storedEntries)
    : []

  if (!Array.isArray(entries)) {
    throw new Error('Os cadastros locais estão em um formato inválido.')
  }

  const newEntry: WaitlistEntry = {
    ...entry,
    createdAt: new Date().toISOString(),
  }

  window.localStorage.setItem(
    storageKey,
    JSON.stringify([...entries, newEntry]),
  )
}
