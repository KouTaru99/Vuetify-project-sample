import { createI18n } from "vue-i18n";
import { en, vi } from "vuetify/locale";
export const i18n = createI18n({
  locale: 'en',
  messages: {
    en: en,
    vi: vi,
  },
});
