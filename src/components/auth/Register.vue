<template>
  <v-container>
    <h1>Register</h1>

    <v-text-field v-model="username" label="Username" required></v-text-field>
    <v-text-field v-model="password" required label="Password"></v-text-field>
    <v-btn flat @click="register" class="primary">Register</v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    username: "",
    usernameRules: [v => !!v || "Usename ist ein Pflichtfeld!"],
    password: "",
    passwordRules: [
      v => !!v || "Password ist ein Pflichtfeld!",
      v => v.lenght <= 7 || "Passwort muss mind. 8 Zeichen haben"
    ]
  }),
  methods: {
    register() {
      const formData = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch("REGISTER", {
        username: formData.username,
        password: formData.password
      });
    }
  }
};
</script>

<style></style>
