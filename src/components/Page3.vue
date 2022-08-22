<template>
    <div class="w-[700px] mx-auto mt-20 text-center px-7 pt-6 pb-20 bg-gray-300 rounded-lg">
        <div class="font-bold text-2xl mb-5">Summary</div>
        <div class="font-bold text-xl mb-5">{{ summary.name }},</div>
        <div class="text-sm mb-5">
            <div class="mb-4">Name: {{ summary.name }}</div>
            <div class="mb-4">Age: {{ summary.age }}</div>
            <div class="mb-4">Where you live: {{ summary.location }}</div>
            <div class="mb-4 capitalize">Package: {{ summary.package }}</div>
            <div class="mb-4">Premium: {{ `${summary.premium}${currency}` }}</div>
        </div>
        <!-- Button wrapper -->
        <div class="flex justify-center gap-2">
            <Button
                class="w-[100px]"
                @click="onBack"
                size='lg'
            >
                Back
            </Button>
            <Button
                class="w-[100px]"
                @click="onBuy"
                size='lg'
                variant='primary'
            >
                Buy
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, computed } from 'vue';
import Button from '@/components/common/Button.vue';
import { Form } from '@/types';
import { COUNTRY_CURRENCY_MAP } from '@/constants';
import { Currency } from '@/types';

interface Props {
    summary: Form,
}

const emit = defineEmits(['buy', 'back']);
const props = defineProps<Props>();
const currency = computed<string>(() => COUNTRY_CURRENCY_MAP[props.summary.location].currency);

const onBack = () => {
    emit('back');
}
const onBuy = () => {
    emit('buy');
}
</script>