<template>
 <v-app id="app">
  <v-toolbar class="primary" xs12 sm6 >
  <v-toolbar-title>Home</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items>
    <v-btn flat v-if="!this.$store.state.loggedIn">Register </v-btn>
    <v-btn flat v-if="!this.$store.state.loggedIn">Login</v-btn>

    <v-btn flat v-if="this.$store.state.loggedIn">Todo</v-btn>
    <v-btn flat v-if="this.$store.state.loggedIn">Shopping</v-btn>
    <v-btn flat v-if="this.$store.state.loggedIn">Weather</v-btn>
     <v-menu offset-y>
      <v-btn
        flat
        slot="activator"
      >
        Account
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          :to="item.links"
          @click=""
        >
          <v-list-tile-title>{{ item.menu }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    
  </v-toolbar-items>
  </v-toolbar>


 <router-view></router-view>
  <v-footer class="pa-3" id="footer">
   <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }} J-M. Wagner</div>
</v-footer>


 </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "App",
  created: {
    ...mapState({
    loginState: state => state.loggedIn
    })
  },
  methods: {
  
  },
  data: () => ({
  	items: [
    {menu: 'Einstellungen', links: '/settings'},
    {menu: 'Logout', links: '/logout'}
	]
  })
};
</script>

<style>
#footer {
  position:absolute;
   bottom:0;
   width:100%;
   }
#loading {
  position: absolute;
    height: 100px;
    width: 100px;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
    background: url(/link/to/your/image);
    background-size: 100%;
}

</style>
