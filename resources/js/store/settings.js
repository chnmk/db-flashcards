import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => {
    return {
      panelDisplay: "Collections",
      currentUser: "All Users",
      currentCollection: "Welcome",
    };
  },
});
