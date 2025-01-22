<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'; // Import useI18n

const dropdownOpen = ref(false);
const languages = ref([
  { code: 'EN', label: 'English' },
  { code: 'FA', label: 'فارسی' },
]);

const { locale } = useI18n(); // Access i18n locale

const toggleLanguage = (langCode: string) => {
  locale.value = langCode; // Set the selected locale
  dropdownOpen.value = false; // Close dropdown
};
</script>

<template>
  <li class="relative">
    <!-- Language Selector Button -->
    <button
      class="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
      @click.prevent="dropdownOpen = !dropdownOpen"
    >
      <span class="text-sm">{{ locale === 'fa' ? 'فارسی' : 'English' }}</span>
    </button>

    <!-- Dropdown Start -->
    <div
      v-show="dropdownOpen"
      class="absolute -right-27 mt-2.5 flex w-40 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0"
    >
      <ul class="flex flex-col">
        <li
          v-for="lang in languages"
          :key="lang.code"
          class="px-4 py-2 hover:bg-gray-200 dark:hover:bg-meta-4"
        >
          <button
            class="w-full text-left text-sm text-bodydark2 dark:text-white"
            @click="toggleLanguage(lang.code)"
          >
            {{ lang.label }}
          </button>
        </li>
      </ul>
    </div>
    <!-- Dropdown End -->
  </li>
</template>
