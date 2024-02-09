<template>
    <div class="bg-emerald-200 hover:bg-emerald-500 col-start-2 transition duration-300 ease-in-out">
        <div class="text-xl text-center p-16">
            {{ title }}
            <br>
            {{ text }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'text']
}
</script>

