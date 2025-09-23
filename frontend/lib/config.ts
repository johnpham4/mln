const config = {
  // Vercel backend URL sẽ là: https://backend-mln.vercel.app/api
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',

  // API endpoints - thêm /api prefix cho Vercel
  endpoints: {
    chat: '/api/chat',
    chatStream: '/api/chat/stream',
  },

  // Get full API URL
  getApiUrl: (endpoint?: string) => {
    const baseUrl = config.apiUrl
    return endpoint ? `${baseUrl}${endpoint}` : baseUrl
  }
}

export default config