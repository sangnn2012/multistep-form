<template>
  <div>
    <!-- handle intro page -->
    <page1
        v-if="currentPage === 0"
        @start="handleStart"
    />
    <!-- handle summary page -->
    <page3
        v-if="currentPage === 2"
        :summary="fields"
        @back="previousPage"
        @buy="handleBuy"
    />

    <!-- handle form pages -->
    <page2
        v-if="currentPage === 1"
        @next="handleNext"
        @back="previousPage"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Page1 from '@/components/Page1.vue';
import Page2 from '@/components/Page2.vue';
import Page3 from '@/components/Page3.vue';
import { useRoute, useRouter } from 'vue-router'
import { COUNTRY_CURRENCY_MAP } from '@/constants/index';
import { Form } from '@/types';

const router = useRouter();
const route = useRoute();

const { hash } = route;

const fields = ref<Form>({
    name: '',
    age: 0,
    location: 'Hong Kong',
    package: 'standard'
});

const currentPage = ref(0);
const resetPage = () => {
    currentPage.value = 0;
}
const previousPage = () => {
    currentPage.value--;
}
const nextPage = () => {
    currentPage.value++;
}
const handleStart = () => {
    currentPage.value = 1;
}
const handleNext = (fieldsSubmitted: Form) => {
    if (fieldsSubmitted.age > 100) {
        return router.push({name: 'WizardError'});
    }
    // in case there will be more step in between, everytime the user click next
    // more fields are going to be added to the total fields of Wizard
    fields.value = Object.assign({}, fieldsSubmitted);
    nextPage();
}
const handleBuy = () => {
    // sending some api to buy
    resetPage();
}
</script> 

<style lang="scss" scoped>
</style>
