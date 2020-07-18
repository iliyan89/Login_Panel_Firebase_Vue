<template>
  <div>
    <slot name="user" :user="this.user"></slot>
  </div>
</template>

<script>
import { auth } from "../firebase";
import { ref } from "@vue/composition-api";

export default {
  data() {
    return {
      user : ref(null)
    };
  },
  setup() {
    const user = this.data().user;
    const unsubscribe = auth.onAuthStateChanged(
      firebaseUser => (user.value = firebaseUser)
    );
    return {
      user,
      unsubscribe
    };
  },
  destroyed() {
    this.unsubscribe();
  }
};
</script>