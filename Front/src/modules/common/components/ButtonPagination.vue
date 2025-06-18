<template>
  <div class="flex justify-center gap-3 py-10 bg-gray-100">
    <button
      :disabled="isFirstPage"
      @click="$router.push({ query: { page: page - 1 } })"
      class="flex items-center space-x-1.5 rounded-lg px-4 py-1.5 text-white bg-blue-500 disabled:bg-gray-300 cursor-pointer hover:bg-blue-400 transition-all"
    >
      <ArrowLeft />
      <span>Anteriores</span>
    </button>
    <button
      :disabled="hasMoreData"
      @click="$router.push({ query: { page: page + 1 } })"
      class="flex items-center space-x-1.5 rounded-lg px-4 py-1.5 text-white bg-blue-500 disabled:bg-gray-300 cursor-pointer hover:bg-blue-400 transition-all"
    >
      <span> Siguientes</span>
      <ArrowRight />
    </button>
  </div>
</template>

<script setup lang="ts">
import ArrowLeft from '@/icons/ArrowLeft.vue';
import ArrowRight from '@/icons/ArrowRight.vue';

interface Props {
  page: number;
  isFirstPage: boolean;
  hasMoreData: boolean;
}

defineProps<Props>();
</script>
