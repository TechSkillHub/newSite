export const useLoadingStore = defineStore('loading', {
  state: () => ({
    show: false,
  }),
  actions: {
    showLoading() {
      this.show = true
      document.body.style.overflow = 'hidden';
    },
    closeLoading() {
      this.show = false
      document.body.style.overflow = '';
    }
  },
})