export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface ContactResponse {
  message?: string
  error?: string
}

export async function sendContactMessage(
  data: ContactFormData
): Promise<ContactResponse> {
  const response = await fetch('/api/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.error || 'Failed to send message')
  }

  return response.json()
}
