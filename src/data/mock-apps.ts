import type { ConsentInfo } from '@/types/consent'

export const MOCK_APPS: Record<string, ConsentInfo> = {
  'client_123': {
    appName: 'Gmail',
    appLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png',
    scopes: [
      {
        id: 'email',
        name: 'Xem địa chỉ email của bạn',
        description: 'Cho phép ứng dụng xem địa chỉ email chính của bạn'
      },
      {
        id: 'profile',
        name: 'Xem thông tin cơ bản',
        description: 'Bao gồm tên, ảnh đại diện và thông tin công khai khác'
      }
    ],
    privacyPolicyUrl: 'https://policies.google.com/privacy',
    termsOfServiceUrl: 'https://policies.google.com/terms'
  },
  'client_456': {
    appName: 'Spotify',
    appLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png',
    scopes: [
      {
        id: 'user-library',
        name: 'Truy cập thư viện nhạc',
        description: 'Xem và quản lý các bài hát, album đã lưu của bạn'
      },
      {
        id: 'playlist-modify',
        name: 'Chỉnh sửa playlist',
        description: 'Tạo, xóa và quản lý playlist của bạn'
      },
      {
        id: 'listening-history',
        name: 'Lịch sử nghe nhạc',
        description: 'Xem lịch sử bài hát bạn đã nghe'
      }
    ],
    privacyPolicyUrl: 'https://www.spotify.com/legal/privacy-policy/',
    termsOfServiceUrl: 'https://www.spotify.com/legal/end-user-agreement/'
  },
  'client_789': {
    appName: 'Slack',
    appLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png',
    scopes: [
      {
        id: 'channels:read',
        name: 'Xem channels',
        description: 'Xem các channels bạn có quyền truy cập'
      },
      {
        id: 'chat:write',
        name: 'Gửi tin nhắn',
        description: 'Gửi tin nhắn thay mặt bạn'
      },
      {
        id: 'files:read',
        name: 'Xem files',
        description: 'Xem files được chia sẻ trong workspace'
      },
      {
        id: 'users:read',
        name: 'Xem thông tin người dùng',
        description: 'Xem thông tin cơ bản của người dùng khác trong workspace'
      }
    ],
    privacyPolicyUrl: 'https://slack.com/trust/privacy/privacy-policy',
    termsOfServiceUrl: 'https://slack.com/terms-of-service'
  }
}

// Helper function to simulate API call
export const getMockAppData = (clientId: string): Promise<ConsentInfo> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const appData = MOCK_APPS[clientId]
      if (appData) {
        resolve(appData)
      } else {
        reject(new Error('App not found'))
      }
    }, 500) // Giả lập độ trễ mạng 500ms
  })
}
