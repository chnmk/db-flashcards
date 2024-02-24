<template>
    <router-link :to="{
        name: 'home', params: { user: 1, id: 1 }
    }">
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
export default {
    props: ['name']
}
</script>
