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
import { mapState, mapWritableState } from 'pinia'
import { useSettingsStore } from '../store/settings'
import { useCollectionsStore } from '../store/collections'
import { useUsersStore } from '../store/users'

export default {
    components: {
        SingleDatacard
    },
    computed: {
        ...mapWritableState(useSettingsStore, ['currentCollectionId', 'currentUserId', 'currentCollection', 'currentUser']),
        ...mapState(useCollectionsStore, ['getCardsByCol', 'getColById']),
        ...mapState(useUsersStore, ['getUserById']),
    },
    mounted() {
        this.currentCollectionId = Number(this.$route.params.id)
        this.currentUserId = Number(this.$route.params.user)
        this.currentCollection = this.getColById(Number(this.$route.params.id)).name
        this.currentUser = this.getUserById(Number(this.$route.params.user)).name
    }
};
</script>
