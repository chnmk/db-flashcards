import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => {
    return {
      panelDisplay: "Collections",
      currentUser: "All Users",
      currentUserId: 0,
      currentCollection: "Welcome",
      currentCollectionId: 0,
    };
  },
});
