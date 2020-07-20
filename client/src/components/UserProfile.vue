<template>
  <div>
    Logged in as {{ user.uid }}
    <br />
    Last login was at: {{lastLoginAt}}
    <button @click="auth.signOut()" class="button">Sign Out</button>
  </div>
</template>

<script>
import { auth } from '../firebase';
export default {
  data() {
    return { 
          auth 
    }
  },
  props: ['firebase','user','key'],
  methods: {
    lastLoginAt() {
      const url = "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=" 
      + this.key; 

      const idToken = auth.currentUser.getIdToken(/* forceRefresh */ true);
      
      // Send token to your backend via HTTPS
  const userData = fetch(url,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({idToken: idToken}) // body data type must match "Content-Type" header
  });

      return userData.lastLoginAt;
    }
  }
}
</script>