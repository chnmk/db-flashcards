<template>
    <div class="flex flex-col items-center gap-16 my-32">
        <SingleDatacard v-for="c in cards" :key="c.Name" :Name="card.Name" :Description="card.Description" :Tags="card.Tags"
            :Contents="card.Contents" />
    </div>
</template>

<script>
import SingleDatacard from './SingleDatacard.vue'
import { mapState } from 'pinia'
import { useCollectionsStore } from '../store/collections'

export default {
    components: {
        SingleDatacard
    },
    computed: {
        ...mapState(useCollectionsStore, ['collections']),
    },
};
</script>
