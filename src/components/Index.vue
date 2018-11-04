<template>
  <v-app id="app">

  <v-toolbar class="primary" xs12 sm6 >
  <v-toolbar-title>Home</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items>
    

    
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

export default {
  name: "App",
  
  data: () => ({
      items: [
        { title: 'Settings' , link: '/settings'},
        { title: 'Logout', link: '/logout'},
        
      ]
    })

 
};
<style>
</style>
