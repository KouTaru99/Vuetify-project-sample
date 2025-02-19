import type { ConsentInfo } from '@/types/consent'
import { getMockAppData } from '@/data/mock-apps'

export const consentService = {
  async getConsentInfo(clientId: string): Promise<ConsentInfo> {
    // Trong môi trường development, sử dụng mock data
    // if (import.meta.env.DEV) {
    //   return getMockAppData(clientId)
    // }

    // // Trong môi trường production, gọi API thật
    // const response = await fetch(`/api/consent-info/${clientId}`)
    // if (!response.ok) {
    //   throw new Error('Failed to fetch consent info')
    // }
    // return response.json()

    return getMockAppData(clientId)
  }
}
