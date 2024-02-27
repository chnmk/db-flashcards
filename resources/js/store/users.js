import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => {
    return {
      users: [
        {
          id: 0,
          name: "All Users",
        },
        {
          id: 1,
          name: "Edward",
        },
        {
          id: 2,
          name: "Serj",
        },
      ],
    };
  },
  getters: {
    getUserByName: (state) => {
      return (userName) => state.users.find((user) => user.name === userName);
    },
  },
});
