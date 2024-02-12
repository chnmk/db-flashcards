<template>
    <div class="h-72 col-start-4 col-span-6 bg-emerald-200 hover:bg-emerald-500 transition duration-300 ease-in-out">
        <div>
            <div
                class="my-4 mx-8 py-2 max-h-28 overflow-scroll hover:shadow-md hover:bg-emerald-400 transition duration-300 ease-in-out">
                <h1 class="text-center text-lg">
                    <strong>{{ Name }}</strong>
                </h1>
                <p class="mx-2 py-2">
                    {{ Description }}
                </p>
                <span v-for=" tag in Tags" :key="tag" class="mx-2 text-gray-500">
                    #{{ tag }}
                </span>
            </div>
            <div
                class="my-4 mx-8 py-2 max-h-28 overflow-scroll hover:shadow-md hover:bg-emerald-400 transition duration-300 ease-in-out">
                <dl v-for="dl in Contents" :key="dl.Category" class="my-2">
                    <dt class="mx-2">
                        <strong>
                            {{ dl.Category }}
                        </strong>
                    </dt>
                    <dd v-for="entry in dl.Entries" :key="entry" class="mx-8">
                        {{ entry }}
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['Name', 'Description', 'Tags', 'Contents'],
    mounted() {
        console.log(this.Contents)
    }
}
</script>

