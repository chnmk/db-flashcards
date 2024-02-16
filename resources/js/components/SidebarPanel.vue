<template>
    <transition enter-from-class="translate-x-[-100%] opacity-0" leave-to-class="translate-x-[-100%] opacity-0"
        enter-active-class="transition duration-500" leave-active-class="transition duration-500">
        <div class="fixed inset-y-0 top-16 w-64 h-full bg-yellow-200" v-if="sidebarOpen">
            <SidebarIcons />
            <hr class="mx-6 border-yellow-500" />
            <div class="text-center">
                <div class="my-4">sample sidebar</div>
                <div class="my-4">sample sidebar</div>
            </div>
        </div>
    </transition>
</template>

<script>
import SidebarIcons from './SidebarIcons.vue'

export default {
    props: ['sidebarOpen'],
    components: {
        SidebarIcons
    }
}
</script>
