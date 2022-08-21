<template>
    <div class="w-[700px] mx-auto mt-20 text-center px-7 pt-6 pb-20 bg-gray-300 rounded-lg">
        <div class="font-bold text-2xl mb-5">Tell us about yourself</div>

        <div class="text-sm mb-5">
            <div class="form-control w-[50%] mx-auto text-left">
                <div class="mb-2">
                    <div class="text-lg mb-1">Name</div>
                    <Input v-model="fields.name"/>
                </div>
                <div class="mb-2">
                    <div class="text-lg mb-1">Age</div>
                    <Input v-model="fields.age"/>
                </div>
                <div class="mb-10">
                    <div class="text-lg mb-1">Where do you live</div>
                   <select v-model="fields.location">
                        <option v-for="option in locationOptions" :value="option.name">
                            {{ option.name }}
                        </option>
                    </select>
                </div>
                <div class="mb-10">
                    <div v-for="packageItem in Object.keys(PACKAGES)">
                        <input class="mr-2" type="radio" :value="packageItem" v-model="fields.package" />
                        <label class="capitalize">{{ packageItem }}
                            <span v-if="premium">{{ packageDescription(packageItem) }}</span>
                        </label>
                    </div>
                </div>
                <div class="font-bold text-2xl">
                    Your premium is: {{ `${adjustedPremium}${COUNTRY_CURRENCY_MAP[fields.location].currency}` }}
                </div>
            </div>
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
                @click="onNext"
                :disabled="isNextDisabled"
                size='lg'
                variant='primary'
            >
                Next
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, watch, computed } from 'vue'
import Button from '@/components/common/Button.vue';
import Input from '@/components/common/Input.vue';
import { COUNTRY_CURRENCY_MAP, PACKAGES } from '@/constants';

const emit = defineEmits(['next', 'back']);

const locationOptions = Object.keys(COUNTRY_CURRENCY_MAP).map((loc, index) => ({
   name: loc
}));

const fields = ref({
    name: '',
    age: 0,
    location: 'Hong Kong',
    package: 'standard'
})

const premium = computed<number>(() => 10*fields.value.age*currentLocationRate.value);
const adjustedPremium = computed<number>(() => premium.value*currentPackageRate.value);
const currentCurrency = computed<string>(() => COUNTRY_CURRENCY_MAP[fields.value.location].currency);
const currentLocationRate = computed<number>(() => COUNTRY_CURRENCY_MAP[fields.value.location].rate);
const currentPackageRate = computed<number>(() => PACKAGES[fields.value.package].rate);
const isNextDisabled = computed<boolean>(() => Object.values(fields.value).some(val => val === 0 || val === ''));

const packageDescription = (packageItem) => {
    if(packageItem === fields.value.package) return '';
    const rate = PACKAGES[packageItem].rate - PACKAGES[fields.value.package].rate;
    const packagePremium = premium.value*(1 + rate);
    const pageagePremiumDiff = packagePremium - premium.value;
    const sign = packagePremium > premium.value ? '+' : '';
    const percentageDiff = ((packagePremium/premium.value)-1)*100;
    return `(${sign}${pageagePremiumDiff}${currentCurrency.value}, ${percentageDiff}%)`;
}

const onBack = () => {
    emit('back');
}
const onNext = () => {
    const payload = Object.assign({}, fields.value, { premium: adjustedPremium.value });
    emit('next', payload);
}

</script>

<style lang="scss" scoped>
select {
    @apply w-full px-1 py-3 rounded-lg focus:outline-none
}
</style>