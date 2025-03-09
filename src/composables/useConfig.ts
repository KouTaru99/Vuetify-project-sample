interface AppConfig {
  API_URL: string;
  // Các config khác...
}

declare global {
  interface Window {
    appConfig: AppConfig;
  }
}

export function useConfig() {
  return {
    get apiUrl() {
      return window.appConfig?.API_URL || import.meta.env.VITE_API_URL || 'https://default-api.example.com';
    }
  };
}
