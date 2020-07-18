<template>
  <div>
    <div v-if="newUser">
      <h3>Sign Up for a New Account</h3>
      <a href="#" v-on:click="newUser=false">Returning user?</a>
    </div>
    <div v-else>
      <h3>Sign in with E-mail</h3>
      <a href="#" v-on:click="newUser=true">New user?</a>
    </div>

      <div class="container">
        <label for="username">
          <b>Username</b>
        </label>
        <input v-model="email" type="text" placeholder="Enter Username" name="username" required />

        <label for="password">
          <b>Password</b>
        </label>
        <input
          v-model="password"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />

        <button v-on:click="signInOrCreateUser">{{ newUser ? 'Sign up' : 'Login'}}</button>
        
        <p v-if="errorMessage">
          {{errorMessage}}
        </p>
      </div>
  </div>
</template>

<script>
import { auth } from "../firebase";

export default {
  data() {
    return {
      auth,
      newUser: false,
      email: "",
      password: "",
      loading: false,
      errorMessage: ""
    };
  },
  methods: {
    async signInOrCreateUser() {
      this.loading = true;
      this.errorMessage = "";
      try {
        if (this.newUser) {
          await auth.createUserWithEmailAndPassword(this.email, this.password);
        } else {
          await auth.signInWithEmailAndPassword(this.email, this.password);
        }
      } catch (error) {
        this.errorMessage = error.message;
      }

      this.loading = false;
    }
  }
};
</script>

<style>
/* It's in App.vue */
</style>