<template>
    <div class="bg-emerald-200 hover:bg-emerald-500 col-start-2 transition duration-300 ease-in-out">
        <div class="text-xl text-center p-16">
            <h1>
                <strong>{{ Name }}</strong>
            </h1>
            <p>
                {{ Description }}
            </p>
            <p v-for="tag in Tags" :key="tag">
                {{ tag }}
            </p>
            <dl v-for="dl in Contents" :key="dl.Category">
                <dt>
                    <strong>
                        {{ dl.Category }}
                    </strong>
                </dt>
                <dd v-for="entry in dl.Entries" :key="entry">
                    {{ entry }}
                </dd>
            </dl>
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

