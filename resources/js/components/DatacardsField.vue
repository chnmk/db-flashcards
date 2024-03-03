<template>
    <div>
        <div v-if="getCardsByCol(currentCollectionId)" class="flex flex-col items-center gap-16 my-32">
            <SingleDatacard v-for="c in getCardsByCol(currentCollectionId)" :key="c.Name" :Name="c.Name"
                :Description="c.Description" :Tags="c.Tags" :Contents="c.Contents" />
        </div>
        <div v-else class="flex flex-col items-center gap-16 my-32">
            <SingleDatacard :Name="'Nothing Here Yet!'" />
        </div>
    </div>

</template>

<script>
import SingleDatacard from './SingleDatacard.vue'
import { mapState } from 'pinia'
import { useSettingsStore } from '../store/settings'
import { useCollectionsStore } from '../store/collections'

export default {
    components: {
        SingleDatacard
    },
    computed: {
        ...mapState(useSettingsStore, ['currentCollectionId']),
        ...mapState(useCollectionsStore, ['getCardsByCol']),
    },
};
</script>
