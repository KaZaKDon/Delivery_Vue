import { restArrey } from "@/constans/rests";
import { reactive } from "vue";

export const store = reactive({
  isOpen: false,
  rests: restArrey,
  toggleModal(value) {
    this.isOpen = value;
  },
});
