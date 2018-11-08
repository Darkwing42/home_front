<template>
  <v-container>
    <h1>Login</h1>

    <v-text-field
      v-model="username"
      label="Username"
      required
      :rules="usernameRules"
    ></v-text-field>
    <v-text-field
      v-model="password"
      required
      type="password"
      label="Password"
      :rules="passwordRules"
    ></v-text-field>
    <v-btn flat @click="loginUser" class="primary">Login</v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    username: "",
    usernameRules: [v => !!v || "Usename ist ein Pflichtfeld!"],
    password: "",
    passwordRules: [
      v => !!v || "Password ist ein Pflichtfeld!",
      v => v.lenght <= 8 || "Passwort muss mind. 8 Zeichen haben"
    ]
  }),
  methods: {
    loginUser() {
      const userData = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch("LOGIN", {
        username: userData.username,
        password: userData.password
      });
    }
  }
};
</script>

<style scoped></style>
