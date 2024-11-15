interface ModalMessage {
  title?: string | null;
  message?: string | null;
  redirect?: Redirect | null;
  btnText?: string;
  type?: string
}

interface Redirect {
  link: string | null;
  btnText: string | null;
}

export const useModalStore = defineStore('modal', {
  state: () => ({
    show: false,
    message: {
      title: '',
      message: '',
      redirect: {
        link: '',
        btnText: ''
      },
      btnText: '',
      type: ''
    } as ModalMessage
  }),
  actions: {
    showModal(value: ModalMessage) {  
      this.show = true;
      this.message = value
      if(process.client) {
        document.body.style.overflow = 'hidden';
      }
    },
    closeModal() {
      this.show = false
      if(process.client) {
        document.body.style.overflow = '';
      }
    }
  },
})