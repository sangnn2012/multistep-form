<template>
    <div class="w-[50%] mx-auto mt-20 text-center px-7 pt-6 pb-20 bg-gray-300 rounded-lg">
        <div class="font-bold text-2xl mb-5">Hello there!</div>

        <div class="text-sm mb-5">Let's buy some insurance. It is going to take only a few steps.</div>

        <Button
            class="m-auto w-[120px]"
            @click="onStart"
            size='lg'
            variant='primary'
        >
            Start
        </Button>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import Button from '@/components/common/Button.vue';

const emit = defineEmits(['start']);

const onStart = () => {
    emit('start');
}
</script>