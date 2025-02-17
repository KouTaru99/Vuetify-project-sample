import { defineStore } from 'pinia';
import type { ConsentInfo } from '@/types/consent';
import { consentService } from '@/services/consent';

export const useConsentStore = defineStore('consent', {
  state: () => ({
    loading: false,
    error: null as string | null,
    consentInfo: null as ConsentInfo | null,
  }),

  actions: {
    async fetchConsentInfo(clientId: string) {
      this.loading = true;
      this.error = null;
      try {
        this.consentInfo = await consentService.getConsentInfo(clientId);
      } catch (err) {
        this.error = 'Không tìm thấy thông tin ứng dụng';
        console.error(err);
      } finally {
        this.loading = false;
      }
    }
  }
});
