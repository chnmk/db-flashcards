import { defineStore } from 'pinia'

export const useCollectionsStore = defineStore('counter', {
    state: () => {
        return {
            collections: [
                {
                    id: 1,
                    name: "Default"
                },
                {
                    id: 2,
                    name: "My Collection"
                },
            ],
            users: [
                {
                    id: 1,
                    name: "Edward"
                },
                {
                    id: 2,
                    name: "Serj"
                },
            ]
        }
    },
  })
