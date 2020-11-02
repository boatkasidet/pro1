<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      color="green"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" dense fixed app color="green">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- button home -->
      <nuxt-link to="/home">
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn></nuxt-link
      >
      <!-- button logout -->
      <v-btn icon @click="signOut">
        <v-icon>mdi mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase'
require('firebase/auth')
export default {
  data() {
    return {
      name: '',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Menu',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Login',
          to: '/login',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Register',
          to: '/register',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Home',
          to: '/home',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Order',
          to: '/order',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Table',
          to: '/table',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Stock',
          to: '/stock',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Test',
          to: '/App',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Test',
          to: '/',
        },
      ],
      miniVariant: false,
      title: 'Le Café',
    }
  },
  computed: {
    login: {
      get() {
        return this.$nuxt.$store.state.login
      },
    },
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('/login')
        })
    },
  },
}
</script>
<style>
.theme--dark.v-application {
  /* background-image: url('https://www.blognone.com/sites/default/files/externals/9cf5c7bb9ee6e04947a8317525edb04d.jpg');
  background-size: cover; */
  background-color: black;
}
</style>
