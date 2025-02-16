<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="pa-4" elevation="2">
          <!-- Header with App Logo -->
          <div class="text-center mb-4">
            <v-img
              v-if="consentStore.consentInfo?.appLogo"
              :src="consentStore.consentInfo.appLogo"
              class="mx-auto mb-2"
              max-width="48"
              contain
            />
            <div class="text-h6 font-weight-bold">
              Đăng nhập vào {{ consentStore.consentInfo?.appName }}
            </div>
          </div>

          <!-- User Email Display -->
          <v-chip
            class="mb-4"
            color="primary"
            variant="outlined"
            prepend-icon="mdi-account"
          >
            {{ userEmail }}
          </v-chip>

          <!-- Scopes List -->
          <v-list v-if="consentStore.consentInfo?.scopes">
            <v-list-item
              v-for="scope in consentStore.consentInfo.scopes"
              :key="scope.id"
              :title="scope.name"
              :subtitle="scope.description"
            />
          </v-list>

          <!-- Action Buttons -->
          <v-card-actions class="mt-4">
            <v-spacer />
            <v-btn
              color="grey-darken-1"
              variant="text"
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
          </v-card-actions>

          <!-- Footer Links -->
          <v-card-text class="text-center text-caption mt-2">
            <template v-if="consentStore.consentInfo">
              <a
                :href="consentStore.consentInfo.privacyPolicyUrl"
                target="_blank"
                class="text-decoration-none"
              >
                Quyền riêng tư
              </a>
              <span class="mx-2">•</span>
              <a
                :href="consentStore.consentInfo.termsOfServiceUrl"
                target="_blank"
                class="text-decoration-none"
              >
                Điều khoản
              </a>
            </template>
          </v-card-text>
        </v-card>

        <!-- Loading State -->
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

        <!-- Error State -->
        <v-snackbar
          v-model="showError"
          color="error"
          timeout="3000"
        >
          {{ consentStore.error }}
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useConsentStore } from '@/stores/consent';

const router = useRouter();
const consentStore = useConsentStore();
const showError = computed(() => !!consentStore.error);

// Normally this would come from your auth store or route query
const userEmail = ref('usernamelord@gmail.com');

onMounted(async () => {
  await consentStore.fetchConsentInfo();
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
  border-radius: 8px;
}
</style>
