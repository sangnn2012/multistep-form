<template>
  <div>
    <!-- handle intro page -->
    <page1 v-if="currentPage === 0" @start="handleStart"/>
    <!-- handle summary page -->
    

    <!-- handle form pages -->
    <page2 v-if="currentPage === 1" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Page1 from '@/components/Page1.vue';
import Page2 from '@/components/Page2.vue';
import { useRoute, useRouter } from 'vue-router'
import { COUNTRY_CURRENCY_MAP } from '@/constants';

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
        value: null
    },
    location: {
        label: 'Country',
        value: 'Hong Kong'
    },
    packages: {
        label: '',
        value: 'safe'
    }
}
const currentPage = ref(1);
const pages = ref([
    'intro',
    'step-1',
    'summary'
]);
const handleStart = () => {
    console.log('handle start!');
    currentPage.value = 1;
}
</script>

<style lang="scss" scoped>
</style>
