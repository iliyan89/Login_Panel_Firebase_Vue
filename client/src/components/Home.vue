<template>
  <div>
    <h3>Home</h3>
    <User v-slot:user="{ user }">
      <div v-if="user">
        <h3>User Profile</h3>
        <UserProfile :user="user" :key="api_key"/>
      </div>
      <Login v-else/>
    </User>
  </div>
</template>

<script>
import Login from "./Login.vue";
import User from "./User";
import UserProfile from "./UserProfile";
import { apiKey } from "../firebase";

const api_key = apiKey();

export default {
  data(){
    return {
      key: api_key
      }
  },
  components: {
    Login,
    User,
    UserProfile
  }
};
</script>