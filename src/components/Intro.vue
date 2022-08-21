<template>
    <div class="w-[70%] mx-auto mt-20 text-center px-7 pt-6 pb-20 bg-gray-300 rounded-lg">
        <div class="font-bold text-xl mb-5">Hello there!</div>

        <div class="text-sm mb-5">Let's buy some insurance. It is going to take only a few steps.</div>

        <Button class="m-auto" @click="handleStart">Start</Button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/common/Button.vue';

const handleStart = () => {
    console.log('Start!')
}
</script>