<template>
    <div
        class="my-4 mx-10 py-2 border-b-2 border-yellow-300 text-center cursor-pointer hover:bg-yellow-300 transition duration-300 ease-in-out">
        {{ name }}
    </div>
</template>

<script>
export default {
    props: ['name']
}
</script>
