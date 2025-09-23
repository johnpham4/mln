const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',

  // API endpoints
  endpoints: {
    chat: '/chat',
    chatStream: '/chat/stream',
  },

  // Get full API URL
  getApiUrl: (endpoint?: string) => {
    const baseUrl = config.apiUrl
    return endpoint ? `${baseUrl}${endpoint}` : baseUrl
  }
}

export default config