# Optimize Performance Checklist

1. **Tối ưu Assets** (src/data/mock-apps.ts):
```typescript
export const MOCK_APPS: Record<string, ConsentInfo> = {
  'client_123': {
    appName: 'Gmail',
    appLogo: '/images/Gmail-icon.png',  // ✅ Đường dẫn tĩnh từ public folder
    // ...
  }
}
```

2. **Tối ưu Image Loading** (src/pages/user-consent.vue):
```vue
<v-img
  v-if="consentStore.consentInfo?.appLogo"
  :src="consentStore.consentInfo.appLogo"  // ✅ Bỏ lazy-src để tránh blur
  class="mb-4"
  width="40"
  height="40"
  contain  // ✅ Đảm bảo tỷ lệ ảnh
/>
```

3. **Tối ưu Vuetify** (src/plugins/vuetify.ts):
```typescript
import { createVuetify } from 'vuetify'
import { VApp, VMain, VContainer /* ... */ } from 'vuetify/components'  // ✅ Import có chọn lọc

export default createVuetify({
  components: {
    VApp,
    VMain,
    // ... ✅ Chỉ register components cần thiết
  },
  theme: {
    defaultTheme: 'dark',  // ✅ Chỉ giữ theme cần thiết
    // ...
  }
})
```

4. **Tối ưu Build** (vite.config.mts):
```typescript
export default defineConfig({
  plugins: [
    Vuetify({
      autoImport: false,  // ✅ Tắt autoImport
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    compression()  // ✅ Thêm compression
  ],
  build: {
    cssCodeSplit: true,  // ✅ Tách CSS
    rollupOptions: {
      output: {
        manualChunks: {  // ✅ Tách chunks
          'vendor': ['vue'],
          'vuetify': ['vuetify'],
        }
      }
    },
    minify: 'terser',  // ✅ Minify với terser
    terserOptions: {
      compress: {
        drop_console: true,  // ✅ Loại bỏ console logs
        drop_debugger: true
      }
    }
  }
})
```

5. **Tối ưu Font** (src/styles/settings.scss):
```scss
@font-face {
  font-family: 'Roboto';
  font-display: swap;  // ✅ Tối ưu font loading
}
```

6. **Tối ưu PWA** (vite.config.mts):
```typescript
VitePWA({
  registerType: 'autoUpdate',
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg}']  // ✅ Cache assets
  }
})
```

7. **Cấu trúc thư mục**:
```
public/
  images/  // ✅ Static assets
    Gmail-icon.png
    social-facebook-box-blue-icon.png
    tiktok-icon.png
src/
  plugins/
    vuetify.ts  // ✅ Vuetify optimization
  styles/
    settings.scss  // ✅ Font optimization
```

