// Backend API configuration
export const API_CONFIG = {
  BASE_URL: 'https://backend5-59e7dfh4s-minhpnkse183507-9685s-projects.vercel.app',
  ENDPOINTS: {
    CHAT: '/api/chat',
    CHAT_STREAM: '/api/chat/stream',
    HEALTH: '/api/health'
  }
};

export const getApiUrl = (endpoint: keyof typeof API_CONFIG.ENDPOINTS) => {
  return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS[endpoint]}`;
};