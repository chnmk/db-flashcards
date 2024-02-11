<template>
    <div class="grid grid-cols-3 gap-16 my-32">
        <!--
            Return
            Name
            Description
            Tags
        -->
        <SingleDatacard v-for="card in cards" :key="card.Name" :Name="card.Name" :Description="card.Description"
            :Tags="card.Tags" :Contents="card.Contents" />
    </div>
</template>

<script>
import SingleDatacard from './SingleDatacard.vue'

export default {
    data() {
        return {
            cards: [
                {
                    Name: 'Artist 1',
                    Description: "Description 1",
                    Tags: ["Tag 1-1", "Tag 1-2"],
                    Contents: [
                        {
                            Category: "Album 1-1",
                            Entries: ["Song 1-1-1"],
                        }
                    ]
                },
                {
                    Name: 'Artist 2',
                    Description: "Description 2",
                    Tags: ["Tag 2-1"],
                    Contents: [
                        {
                            Category: "Album 2-1",
                            Entries: ["Song 2-1-1", "Song 2-1-2"],
                        },
                        {
                            Category: "Album 2-2",
                            Entries: ["Song 2-2-1", "Song 2-2-2"],
                        }
                    ]
                },
                {
                    Name: 'Artist 3',
                    Description: "Description 3",
                    Tags: ["Tag 3-1", "Tag 3-2"],
                    Contents: [
                        {
                            Category: "Album 3-1",
                            Entries: ["Song 3-1-1"],
                        }
                    ]
                },
            ]
        };
    },
    components: {
        SingleDatacard
    }
};
</script>
