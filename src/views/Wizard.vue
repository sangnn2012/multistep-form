<template>
  <div>
    CoverGo Wizard
    <intro />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Intro from '@/components/Intro.vue';
import { useRoute, useRouter } from 'vue-router'
import { COUNTRY_CURRENCY_MAP } from '@/constants';
console.log({COUNTRY_CURRENCY_MAP})
const router = useRouter();
const route = useRoute();

const { hash } = route;

const fields = {
    name: {
        label: 'Name',
        value: ''
    },
    age: {
        label: 'Age',
        value: ''
    },
    location: {
        label: 'Country',
        value: 'Hong Kong'
    },
}
const steps = ref([
    'intro',
    'step-1',
    'summary'
]);
</script>

<style lang="scss" scoped>
</style>
