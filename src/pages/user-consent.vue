<template>
  <div class="fill-height" :class="{ 'd-flex flex-column': isMobile }">
    <v-container :class="{ 'flex-grow-1': isMobile }" class="fill-height">
      <v-row justify="center" align="center" class="h-100">
        <v-col cols="12" sm="10" md="8" lg="6" class="d-flex flex-column">
          <!-- DESKTOP LAYOUT -->
          <template v-if="!isMobile">
            <!-- Card wrapper (header + content) -->
            <v-card class="pa-4 mb-4" elevation="2" rounded="lg">
              <!-- Header -->
              <div class="mb-8">
                <div class="d-flex align-center">
                  <img
                    src="/images/logo.png"
                    class="mr-3 mb-3"
                    alt="Vittel"
                    width="40"
                    height="12"
                  >
                  <span class="text-caption text-medium-emphasis">
                    {{ $t('consent_page.consent_label') }}
                  </span>
                </div>
                <v-divider class="mx-n4" />
              </div>

              <!-- Content -->
              <div class="d-flex">
                <!-- Left Column -->
                <div class="mr-8 min-width-200">
                  <v-img
                    v-if="consentStore.consentInfo?.appLogo"
                    :src="consentStore.consentInfo.appLogo"
                    class="mb-4"
                    width="32"
                    height="32"
                    loading="lazy"
                    :alt="consentStore.consentInfo?.appName"
                  />
                  <div class="text-h6 mb-4">
                    {{ $t('consent_page.consent_title', { appName: consentStore.consentInfo?.appName}) }}
                  </div>
                </div>

                <!-- Right Column -->
                <div class="flex-grow-1">
                  <div class="mb-6">
                    <div class="text-body-2 mb-4">
                      {{ $t('consent_page.consent_notice_text', { appName: consentStore.consentInfo?.appName}) }}
                      <br>
                      <span v-if="consentStore.consentInfo?.scope">
                        {{ $t('consent_page.consent_scope_text', { scope: $t(consentStore.consentInfo?.scope)}) }}
                      </span>
                      <br>
                    </div>
                    <div class="text-body-2 mb-4">
                      {{ $t('consent_page.consent_attention_text', { appName: consentStore.consentInfo?.appName}) }}
                    </div>
                    <div class="text-body-2 mb-4">
                      <span v-if="consentStore.consentInfo?.privacyPolicyUrl">
                        {{ $t('consent_page.please_see') }}
                        <a
                          :href="'123jsdhfkhsdfk'"
                          class="text-decoration-none text-primary"
                        >
                          {{ $t('consent_page.consent_policy_link', { appName: consentStore.consentInfo?.appName}) }}
                        </a>
                      </span>

                      <!-- Action Buttons -->
                      <v-row class="flex-nowrap ga-3 mt-6" no-gutters>
                        <v-col>
                          <v-btn
                            color="secondary"
                            class="mr-4 text-none"
                            width="100%"
                            @click="handleCancel"
                          >
                            {{ $t('consent_page.cancel_btn') }}
                          </v-btn>
                        </v-col>
                        <v-col>
                          <v-btn
                            color="primary text-none"
                            width="100%"
                            @click="handleContinue"
                          >
                            {{ $t('consent_page.accept_btn') }}
                          </v-btn>
                        </v-col>
                      </v-row>
                    </div>
                  </div>
                </div>
              </div>
            </v-card>

            <!-- Desktop Footer (outside card) -->
            <div class="text-center">
              <template v-if="!consentStore.consentInfo">
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <v-select
                      :multiple="false"
                      variant="plain"
                      :width="150"
                      density="compact"
                      :items="languageItems"
                      :hide-details="true"
                      class="vcs-select"
                      @update:model-value="changeLanguage()"
                      value="en"
                    >
                      <template #selection="{ item }">
                        <span>{{ $t(item.props.title) }}</span>
                      </template>

                      <template #item="{ item, props }">
                        <v-list-item
                          v-bind="props"
                          :title="$t(item.title)"
                        />
                      </template>
                    </v-select>
                  </div>
                  <div>
                    <a
                      :href="'123jsdhfkhsdfk'"
                      target="_blank"
                      class="text-decoration-none text-primary text-body-2"
                    >
                      {{ $t('consent_page.TAS_terms_of_service') }}
                    </a>
                  </div>
                </div>
              </template>
            </div>
          </template>

          <!-- MOBILE LAYOUT -->
          <template v-else>
            <!-- Mobile Header (fixed at top) -->
            <div class="d-flex align-center justify-center position-fixed top-0 right-0 left-0 bg-surface elevation-1">
              <div class="w-100 pa-4 border-b">
                <img
                  src="/images/logo.png"
                  alt="Vittel"
                  width="40"
                  height="12"
                  class="mr-3"
                >
                <span class="text-caption text-medium-emphasis">
                  {{ $t('consent_page.consent_label') }}
                </span>
              </div>
            </div>

            <!-- Mobile Content (scrollable middle) -->
            <div class="pa-4 mt-16">
              <!-- App Logo & Name -->
              <div class="mb-6">
                <v-img
                  v-if="consentStore.consentInfo?.appLogo"
                  :src="consentStore.consentInfo.appLogo"
                  class="mb-4"
                  width="32"
                  height="32"
                  loading="lazy"
                  :alt="consentStore.consentInfo?.appName"
                />
                <div class="text-h6 mb-4">
                  {{ $t('consent_page.consent_title', { appName: consentStore.consentInfo?.appName}) }}
                </div>
              </div>

              <!-- Consent Text -->
              <div class="mb-6">
                <div class="text-body-2 mb-4">
                  {{ $t('consent_page.consent_notice_text', { appName: consentStore.consentInfo?.appName}) }}
                  <br>
                  <span v-if="consentStore.consentInfo?.scope">
                    {{ $t('consent_page.consent_scope_text', { scope: $t(consentStore.consentInfo?.scope)}) }}
                  </span>
                  <br>
                </div>
                <v-divider class="my-4" />
                <div class="text-body-2 mb-4">
                  {{ $t('consent_page.consent_attention_text', { appName: consentStore.consentInfo?.appName}) }}
                </div>
                <div class="text-body-2 mb-4">
                  <span v-if="consentStore.consentInfo?.privacyPolicyUrl">
                    {{ $t('consent_page.please_see') }}
                    <a
                      :href="'123jsdhfkhsdfk'"
                      class="text-decoration-none text-primary"
                    >
                      {{ $t('consent_page.consent_policy_link', { appName: consentStore.consentInfo?.appName}) }}
                    </a>
                  </span>
                </div>
              </div>

              <!-- Mobile Action Buttons (with space for footer) -->
              <v-row class="flex-nowrap ga-3 mb-16 mt-28" no-gutters>
                <v-col>
                  <v-btn
                    color="secondary text-none"
                    class="mr-4"
                    width="100%"
                    @click="handleCancel"
                  >
                    {{ $t('consent_page.cancel_btn') }}
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn
                    color="primary text-none"
                    width="100%"
                    @click="handleContinue"
                  >
                    {{ $t('consent_page.accept_btn') }}
                  </v-btn>
                </v-col>
              </v-row>
            </div>

            <!-- Mobile Footer (fixed at bottom) -->
            <div class="d-flex justify-center align-center position-fixed bottom-0 right-0 left-0 bg-surface elevation-1">
              <div class="w-100 pa-4 border-t">
                <template v-if="!consentStore.consentInfo">
                  <div class="d-flex justify-space-between align-center">
                    <div>
                      <v-select
                        :multiple="false"
                        variant="plain"
                        :width="150"
                        density="compact"
                        :items="languageItems"
                        :hide-details="true"
                        class="vcs-select"
                        @update:model-value="changeLanguage()"
                        value="en"
                      >
                        <template #selection="{ item }">
                          <span>{{ $t(item.props.title) }}</span>
                        </template>

                        <template #item="{ item, props }">
                          <v-list-item
                            v-bind="props"
                            :title="$t(item.title)"
                          />
                        </template>
                      </v-select>
                    </div>
                    <a
                      :href="'123jsdhfkhsdfk'"
                      target="_blank"
                      class="text-decoration-none text-primary text-body-2"
                    >
                      {{ $t('consent_page.TAS_terms_of_service') }}
                    </a>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </v-col>
      </v-row>
    </v-container>

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
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useDisplay } from "vuetify";
import { useConsentStore } from "@/stores/consent";
// import { useLocaleStore } from "@/stores/locale";
// import type { Language } from "@/types/locale";
import router from "@/router";
// import { consentService } from "@/services/consent";

const route = useRoute();
const consentStore = useConsentStore();
// const localeStore = useLocaleStore();
const { mobile } = useDisplay();
const isMobile = computed(() => mobile.value);

// localeStore.getLanguages();
// const languageItems: Array<Language> = localeStore.languages;
const languageItems = ref([]);
const applicationName = ref("");
const scope = ref("");

onMounted(async () => {
  applicationName.value = route.query.application as string;

  if (!applicationName.value) {
    router.push('/errors/401')
    return;
  }
  scope.value = route.query.scope as string;
  if (!scope.value) {
    router.push('/errors/401')
    return;
  }

  // await consentStore.fetchConsentInfo(applicationName.value, scope.value);
  // consentService.getAuth();
  // localeStore.getLocale();
});

const handleContinue = () => {
  // consentService.handleUserConsent('openid', true)
};

const handleCancel = () => {
  // consentService.handleUserConsent('openid', false)
};

const changeLanguage = () => {
  // localeStore.setLocale(e);
};
</script>

<style scoped>
.min-width-200 {
  min-width: 200px;
}

.border-b {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.border-t {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
