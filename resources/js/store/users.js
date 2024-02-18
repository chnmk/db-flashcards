import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
    state: () => {
        return {
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
