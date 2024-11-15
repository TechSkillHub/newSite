import type { User } from "~/utils/types/User";

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    role: null as string | null,
    name: null as string | null,
    id: null as string | null,    
  }),
  actions: {
    setUser(user: User) {      
      this.user = user
      this.role = user.role
      this.name = user.name
      this.id = user.id
      this.name.split(' ').slice(0, -1).join(' ')
    },

    clearUserData() {
      this.user = null
      this.role = null
      this.name = null
      this.id = null
    },
  },
  persist: true
});
