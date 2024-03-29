import { defineStore } from "pinia";

export const useCollectionsStore = defineStore("collections", {
  state: () => {
    return {
      collections: [
        {
          id: 0,
          name: "Welcome",
          owner: "All Users",
          cards: [
            {
              Name: "Hello, World!",
              Description: "This is a description.",
              Tags: ["default"],
              Contents: [
                {
                  Category: "Example category",
                  Entries: ["Example entry"],
                },
              ],
            },
          ],
        },
        {
          id: 1,
          name: "My Collection",
          owner: "Edward",
          cards: [
            {
              Name: "Artist 1",
              Description: "Description 1",
              Tags: ["Tag 1-1", "Tag 1-2"],
              Contents: [
                {
                  Category: "Album 1-1",
                  Entries: ["Song 1-1-1"],
                },
              ],
            },
            {
              Name: "Artist 2",
              Description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              Tags: ["Tag 2-1"],
              Contents: [
                {
                  Category: "Album 2-1",
                  Entries: ["Song 2-1-1", "Song 2-1-2"],
                },
                {
                  Category: "Album 2-2",
                  Entries: ["Song 2-2-1", "Song 2-2-2"],
                },
              ],
            },
            {
              Name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              Description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              Tags: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "Tag 3-2",
              ],
              Contents: [
                {
                  Category:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                  Entries: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          name: "Default Edward",
          owner: "Edward",
          cards: [
            {
              Name: "aba",
            },
          ],
        },
        {
          id: 3,
          name: "Default",
          owner: "Serj",
        },
        {
          id: 4,
          name: "Short",
          owner: "Serj",
        },
        {
          id: 5,
          name: "Scroll 1",
          owner: "Serj",
        },
        {
          id: 6,
          name: "Scroll 2",
          owner: "Serj",
        },
        {
          id: 7,
          name: "Scroll 3",
          owner: "Serj",
        },
        {
          id: 8,
          name: "Very Long Name Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          owner: "Serj",
        },
        {
          id: 9,
          name: "Scroll 4",
          owner: "Serj",
        },
        {
          id: 10,
          name: "Scroll 5",
          owner: "Serj",
        },
        // TODO: check why collections stop displaying properly here
        {
          id: 11,
          name: "Scroll 6",
          owner: "Serj",
        },
        {
          id: 12,
          name: "Scroll 7",
          owner: "Serj",
        },
      ],
    };
  },
  getters: {
    getColByName: (state) => {
      return (colName) => state.collections.find((col) => col.name === colName);
    },
    getColsByUser: (state) => {
      return (userName) =>
        state.collections.filter((col) => col.owner === userName);
    },
    getCardsByCol: (state) => {
      return (col) => state.collections.find((cards) => cards.id === col).cards;
    },
    getColById: (state) => {
      return (colId) => state.collections.find((col) => col.id === colId);
    },
    getUsersWithCols: (state) => {
      return [...new Set(state.collections.map((col) => col.owner))];
    },
  },
});
