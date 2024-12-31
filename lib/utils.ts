import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  let givenDate: Date

  if (date.toLowerCase() === 'yesterday') {
    givenDate = new Date()
    givenDate.setDate(givenDate.getDate() - 1)
  } else {
    givenDate = new Date(date)
  }

  if (isNaN(givenDate.getTime())) {
    throw new Error(`Invalid date: ${date}`)
  }

  return givenDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
