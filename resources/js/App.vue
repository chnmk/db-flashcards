<template>
    <div>
        <div class="fixed inset-x-0 top-0 h-16 bg-indigo-500">
            <div class="my-4 mx-6">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    @click="sidebarOpen = !sidebarOpen">
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
            </div>
            <div class="text-center">test</div>
        </div>
        <transition enter-from-class="translate-x-[-100%] opacity-0" leave-to-class="translate-x-[-100%] opacity-0"
            enter-active-class="transition duration-500" leave-active-class="transition duration-500">
            <div class="fixed inset-y-0 top-16 w-64 h-full bg-yellow-200" v-if="sidebarOpen">
                <div class="text-center">
                    <div class="my-4" v-if="sidebarOpen">test sidebar</div>
                    <div class="my-4" v-if="sidebarOpen">test sidebar</div>
                </div>
            </div>
        </transition>
        <div class="grid grid-cols-3 gap-16 my-32">
            <div class="bg-emerald-200 hover:bg-emerald-500 col-start-2 transition duration-300 ease-in-out">
                <div class="text-xl text-center p-16">test1</div>
            </div>
            <div class="bg-emerald-200 hover:bg-emerald-500 col-start-2 transition duration-300 ease-in-out">
                <div class="text-xl text-center p-16">test2</div>
            </div>
            <div class="bg-emerald-200 hover:bg-emerald-500 col-start-2 transition duration-300 ease-in-out">
                <div class="text-xl text-center p-16">test3</div>
            </div>
            <div class="bg-emerald-200 hover:bg-emerald-500 col-start-2 transition duration-300 ease-in-out">
                <div class="text-xl text-center p-16">test4</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sidebarOpen: false,
        };
    },
};
</script>
