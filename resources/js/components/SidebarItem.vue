<template>
    <router-link :to="{
        name: 'home', params: { user: 0, id: 0 }
    }" @click="changeState(type, name)">
        <div v-if="name !== 'All Users'"
            class="my-4 mx-10 py-2 border-b-2 border-yellow-300 text-center cursor-pointer hover:bg-yellow-300 transition duration-300 ease-in-out">
            {{ name }}
        </div>
        <div v-else
            class="my-4 mx-10 py-2 border-b-2 font-semibold border-yellow-500 text-center cursor-pointer hover:bg-yellow-300 transition duration-300 ease-in-out">
            {{ name }}
        </div>
    </router-link>
</template>

<script>
import { mapWritableState } from 'pinia'
import { useSettingsStore } from '../store/settings'

export default {
    props: ['name', 'type'],
    computed: {
        ...mapWritableState(useSettingsStore, ['panelDisplay', 'currentUser', 'currentCollection'])
    },
    methods: {
        changeState(t, n) {
            if (t === 'user') {
                this.currentUser = n
            } else if (t === 'col') {
                this.currentCollection = n
            }
        }
    }
}
</script>
