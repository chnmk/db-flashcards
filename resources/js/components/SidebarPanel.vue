<template>
    <transition enter-from-class="translate-x-[-100%] opacity-0" leave-to-class="translate-x-[-100%] opacity-0"
        enter-active-class="transition duration-500" leave-active-class="transition duration-500">
        <div class="fixed inset-y-0 top-16 w-64 h-full bg-yellow-200" v-if="sidebarOpen">
            <SidebarNav />
            <hr class="mx-6 border-yellow-500" />
            <div v-if="panelDisplay == 'Collections' && currentUser !== 'All Users'">
                <SidebarItem v-for="c in getColsByUser(currentUser)" :key="c.id" :name="c.name" :type="'col'" />
            </div>
            <div v-if="panelDisplay == 'Collections' && currentUser === 'All Users'">
                <SidebarItem v-for="c in collections" :key="c.id" :name="c.name" :type="'col'" />
            </div>
            <div v-if="panelDisplay == 'Users'">
                <SidebarItem v-for="u in users" :key="u.id" :name="u.name" :type="'user'" />
            </div>
        </div>
    </transition>
</template>

<script>
import SidebarNav from './SidebarNav.vue'
import SidebarItem from './SidebarItem.vue'
import { mapState, mapWritableState } from 'pinia'
import { useCollectionsStore } from '../store/collections'
import { useUsersStore } from '../store/users'
import { useSettingsStore } from '../store/settings'

export default {
    props: ['sidebarOpen'],
    components: {
        SidebarNav,
        SidebarItem
    },
    computed: {
        ...mapState(useCollectionsStore, ['collections', 'getColsByUser']),
        ...mapState(useUsersStore, ['users']),
        ...mapState(useSettingsStore, ['panelDisplay']),
        ...mapWritableState(useSettingsStore, ['currentUser', 'currentCollection'])
    },
}
</script>
