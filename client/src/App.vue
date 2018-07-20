<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>view_list</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <!-- <v-list-tile-title :to="{name: products}">Products</v-list-tile-title> -->
          </v-list-tile-content>
        </v-list-tile> 
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Vuetify Posts CRUD</v-toolbar-title>
      <v-btn icon :to="{name: 'home'}">
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn icon :to="{name: 'AddPost'}">
        <v-icon>add</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex text-xs-center>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="blue" app>
      <span class="white--text pl-2">&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      drawer: false
    }),

    props: {
      source: String
    }
  }
</script>
