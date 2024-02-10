<template>
    <div class="grid grid-cols-3 gap-16 my-32">
        <SingleDatacard v-for="card in cards" :key="card.id" :title="card.title" :dl="card.dl" />
    </div>
</template>

<script>
import SingleDatacard from './SingleDatacard.vue'

export default {
    data() {
        return {
            cards: [
                {
                    id: 1, title: 'Title 1', dl: {
                        dt: "dt 1",
                        dd: "dd 1",
                    }
                },
                {
                    id: 1, title: 'Title 2', dl: {
                        dt: "dt 2",
                        dd: "dd 2",
                    }
                },
                {
                    id: 1, title: 'Title 3', dl: {
                        dt: "dt 3",
                        dd: "dd 3",
                    }
                },
            ]
        };
    },
    components: {
        SingleDatacard
    }
};
</script>
