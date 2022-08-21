<template>
    <div>
        Hello there!

        Let's buy some insurance. It is going to take only a few steps.

        <button @click="handleStart">Start</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const handleStart = () => {
    console.log('Start!')
}
</script>