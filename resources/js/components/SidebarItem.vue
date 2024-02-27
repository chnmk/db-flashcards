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
import { mapWritableState, mapState } from 'pinia'
import { useSettingsStore } from '../store/settings'
import { useUsersStore } from '../store/users'
import { useCollectionsStore } from '../store/collections'

export default {
    props: ['name', 'type'],
    computed: {
        ...mapWritableState(useSettingsStore, ['panelDisplay', 'currentUser', 'currentUserId', 'currentCollection', 'currentCollectionId']),
        ...mapState(useUsersStore, ['getUserByName']),
        ...mapState(useCollectionsStore, ['getColByName'])
        // https://stackoverflow.com/questions/74936421/how-do-i-pass-a-parameter-to-pinia-getter-in-vue
    },
    methods: {
        changeState(t, n) {
            if (t === 'user') {
                this.currentUser = n
                this.currentUserId = this.getUserByName(n).id
            } else if (t === 'col') {
                this.currentCollection = n
                this.currentCollectionId = this.getColByName(n).id
            }
            this.$router.push({ name: 'home', params: { user: this.currentUserId, id: this.currentCollectionId } })
        }
    }
}
</script>
