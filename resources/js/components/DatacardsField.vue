<template>
    <div class="flex flex-col items-center gap-16 my-32">
        <SingleDatacard v-for="c in getCards[0]" :key="c.Name" :Name="c.Name" :Description="c.Description" :Tags="c.Tags"
            :Contents="c.Contents" />
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
        ...mapState(useCollectionsStore, ['getCards']),
    },
};
</script>
