<template>
  <head>
    <meta name="description" content="Consent page for application access">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
  </head>
  <div class="fill-height" :class="{ 'd-flex flex-column': isMobile }">
    <v-container :class="{ 'flex-grow-1': isMobile }" class="fill-height" style="min-height: 100vh;">
      <v-row justify="center" align="center" style="min-height: inherit;">
        <v-col cols="12" sm="10" md="8" lg="6" class="d-flex flex-column">
          <!-- Desktop Layout -->
          <v-card v-if="!isMobile" class="pa-8 mb-4" elevation="2" rounded="lg">
            <!-- Card Header -->
            <div class="mb-8">
              <div class="d-flex align-center mb-2">
                <v-img
                  src="/images/Google-Chrome-icon.png"
                  class="mr-3"
                  width="75"
                  height="24"
                  alt="Google"
                />
              </div>
              <div class="text-h6">Đăng nhập bằng Google</div>
            </div>

            <!-- Card Body -->
            <div class="d-flex">
              <!-- Left Column -->
              <div class="mr-8" style="min-width: 200px">
                <v-img
                  v-if="consentStore.consentInfo?.appLogo"
                  :src="consentStore.consentInfo.appLogo"
                  class="mb-4"
                  :width="32"
                  :height="32"
                  loading="lazy"
                  contain
                  :alt="consentStore.consentInfo?.appName"
                />
                <div class="text-h5 mb-4">
                  Đăng nhập vào {{ consentStore.consentInfo?.appName }}
                </div>
              </div>

              <!-- Right Column -->
              <div class="flex-grow-1">
                <div class="text-body-1 mb-6">
                  Nếu bạn tiếp tục, Google sẽ chia sẻ tên, địa chỉ email, lựa chọn ưu tiên về ngôn ngữ và ảnh hồ sơ của bạn với {{ consentStore.consentInfo?.appName }}. Hãy xem
                  <a :href="consentStore.consentInfo?.privacyPolicyUrl" class="text-primary text-decoration-none">
                    Chính sách quyền riêng tư
                  </a>
                  và
                  <a :href="consentStore.consentInfo?.termsOfServiceUrl" class="text-primary text-decoration-none">
                    Điều khoản dịch vụ
                  </a>
                  của {{ consentStore.consentInfo?.appName }}.
                </div>

                <!-- Additional Info -->
                <div class="text-body-2 mb-6">
                  Bạn có thể quản lý tính năng Đăng nhập bằng Google trong
                  <a href="https://myaccount.google.com" class="text-primary text-decoration-none">
                    Tài khoản Google
                  </a>
                  của mình.
                </div>

                <!-- Action Buttons -->
                <div class="d-flex justify-end mt-6">
                  <v-btn
                    variant="text"
                    color="primary"
                    class="mr-4"
                    @click="handleCancel"
                  >
                    Hủy
                  </v-btn>
                  <v-btn
                    color="primary"
                    @click="handleContinue"
                  >
                    Tiếp tục
                  </v-btn>
                </div>
              </div>
            </div>
          </v-card>

          <!-- Mobile Layout -->
          <div v-else class="pa-4">
            <!-- Google Logo & Title -->
            <div class="d-flex align-center mb-4">
              <v-img
                src="/images/Google-Chrome-icon.png"
                width="75"
                height="24"
                alt="Google"
                class="mr-2"
                loading="lazy"
              />
            </div>
            <div class="text-h6 mb-6">Đăng nhập bằng Google</div>

            <!-- App Logo & Name -->
            <div class="mb-6">
              <v-img
                v-if="consentStore.consentInfo?.appLogo"
                :src="consentStore.consentInfo.appLogo"
                class="mb-4"
                :width="32"
                :height="32"
                loading="lazy"
                contain
                :alt="consentStore.consentInfo?.appName"
              />
              <div class="text-h5 mb-4">
                Đăng nhập vào {{ consentStore.consentInfo?.appName }}
              </div>
            </div>
            <!-- Consent Text -->
            <div class="text-body-1 mb-6">
              Nếu bạn tiếp tục, Google sẽ chia sẻ tên, địa chỉ email, lựa chọn ưu tiên về ngôn ngữ và ảnh hồ sơ của bạn với {{ consentStore.consentInfo?.appName }}. Hãy xem
              <a :href="consentStore.consentInfo?.privacyPolicyUrl" class="text-primary text-decoration-none">
                Chính sách quyền riêng tư
              </a>
              và
              <a :href="consentStore.consentInfo?.termsOfServiceUrl" class="text-primary text-decoration-none">
                Điều khoản dịch vụ
              </a>
              của {{ consentStore.consentInfo?.appName }}.
            </div>

            <!-- Mobile Footer Text -->
            <div class="text-body-2 mb-6">
              Bạn có thể quản lý tính năng Đăng nhập bằng Google trong
              <a href="https://myaccount.google.com" class="text-primary text-decoration-none">
                Tài khoản Google
              </a>
              của mình.
            </div>

            <!-- Mobile Actions -->
            <div class="d-flex justify-space-between mt-6">
              <v-btn
                variant="text"
                color="primary"
                @click="handleCancel"
                width="120"
              >
                Hủy
              </v-btn>
              <v-btn
                color="primary"
                @click="handleContinue"
                width="120"
              >
                Tiếp tục
              </v-btn>
            </div>
          </div>

          <!-- Footer - Desktop position -->
          <div v-if="!isMobile" class="text-center">
            <template v-if="consentStore.consentInfo">
              <v-select
                clearable
                chips
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                multiple
                variant="outlined"
                :value="['Florida']"
              />
              <a
                :href="consentStore.consentInfo.privacyPolicyUrl"
                target="_blank"
                class="text-decoration-none text-disabled mr-4"
              >
                Quyền riêng tư
              </a>
              <span class="text-disabled mx-2">•</span>
              <a
                :href="consentStore.consentInfo.termsOfServiceUrl"
                target="_blank"
                class="text-decoration-none text-disabled"
              >
                Điều khoản
              </a>
            </template>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Footer - Mobile position -->
    <div v-if="isMobile" class="py-4 text-center mt-auto">
      <template v-if="consentStore.consentInfo">
        <v-select
          clearable
          chips
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          multiple
          variant="outlined"
          :value="['Florida']"
        />
        <a
          :href="consentStore.consentInfo.privacyPolicyUrl"
          target="_blank"
          class="text-decoration-none text-disabled mr-4"
        >
          Quyền riêng tư
        </a>
        <span class="text-disabled mx-2">•</span>
        <a
          :href="consentStore.consentInfo.termsOfServiceUrl"
          target="_blank"
          class="text-decoration-none text-disabled"
        >
          Điều khoản
        </a>
      </template>
    </div>

    <!-- Loading & Error States -->
    <v-overlay
      :model-value="consentStore.loading"
      class="align-center justify-center"
    >
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      />
    </v-overlay>

    <v-snackbar
      v-model="showError"
      color="error"
      timeout="3000"
      location="top"
    >
      {{ consentStore.error }}
    </v-snackbar>

    <!-- Add preload link for critical resources -->
    <link
      v-if="typeof consentStore.consentInfo?.appLogo === 'string'"
      rel="preload"
      :href="consentStore.consentInfo?.appLogo"
      as="image"
    >
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';
import { useConsentStore } from '@/stores/consent';

const router = useRouter();
const route = useRoute();
const consentStore = useConsentStore();
const { mobile } = useDisplay();
const showError = computed(() => !!consentStore.error);
const isMobile = computed(() => mobile.value);

onMounted(async () => {
  const clientId = route.query.client_id as string;
  if (!clientId) {
    consentStore.error = 'Thiếu thông tin client_id';
    return;
  }
  await consentStore.fetchConsentInfo(clientId);
 debugger
});

const handleContinue = () => {
  // Handle consent acceptance
  console.log('Consent accepted');
};

const handleCancel = () => {
  // Handle consent rejection
  router.push('/');
};
</script>

<route lang="yaml">
meta:
  name: user-consent
  title: User Consent
  layout: consent
</route>

<style scoped>
.v-card {
  border: 1px solid rgba(255, 255, 255, 0.12);
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  position: relative;
  padding-left: 24px;
}

li::before {
  content: "•";
  position: absolute;
  left: 8px;
}
</style>
