import axios from 'axios';
import type { ConsentInfo } from '@/types/consent';

export const consentService = {
  async getConsentInfo(): Promise<ConsentInfo> {
    const response = await axios.get('/api/consent-info');
    return response.data;
  }
};
