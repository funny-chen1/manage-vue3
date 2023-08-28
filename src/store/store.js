import { defineStore } from "pinia";
import { getLocal } from "@/utils/index"

export const useStore = defineStore({
  id: "globalState",
  state: () => ({
    count: 1,
    info: getLocal('token'),
    data: {
      name: "funny",
    },
  }),

  getters: {
    doubleCount: (state) => state.count * 2,

    tripleCount() {
      return this.count * 3;
    }
  },

  actions: {
    updateData (newVal, count) {
        this.count = count;
        this.data = { ...newVal }
    }
  }
});
