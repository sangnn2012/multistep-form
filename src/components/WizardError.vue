<template>
    <div class="w-[50%] mx-auto mt-20 text-center px-7 pt-6 pb-20 bg-gray-300 rounded-lg">
        <div class="font-bold text-2xl mb-5">Oops</div>

        <div class="text-sm mb-5">Your age is over our accepted limit.</div>
        <div class="text-sm mb-5">We are sorry but we cannot insure you now</div>

        <Button
            class="m-auto w-[120px]"
            @click="onReset"
            size='lg'
            variant='primary'
        >
            OK :(
        </Button>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import Button from '@/components/common/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const onReset = () => {
    router.push({ name: 'Wizard', hash: '#0' });
}
</script>