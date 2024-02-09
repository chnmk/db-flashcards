<template>
    <div class="grid grid-cols-3 gap-16 my-32">
        <SingleDatacard v-for="card in cards" :key="card.id" :title="card.title" :text="card.text" />
    </div>
</template>

<script>
import SingleDatacard from './SingleDatacard.vue'

export default {
    data() {
        return {
            cards: [
                { id: 1, title: 'Title 1', text: 'Sample text 1' },
                { id: 2, title: 'Title 2', text: 'Sample text 2' },
                { id: 3, title: 'Title 3', text: 'Sample text 3' },
            ]
        };
    },
    components: {
        SingleDatacard
    }
};
</script>
