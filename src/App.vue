<template>
 <v-app id="app">
 
 <router-view></router-view>
 </v-app>
</template>

<script>


export default {
  name: "App"
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
