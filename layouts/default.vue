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
      <nuxt-link to="/order">
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
          icon: 'mdi-fingerprint',
          title: 'Login',
          to: '/',
        },
        {
          icon: 'mdi-at',
          title: 'Register',
          to: '/register',
        },
        {
          icon: 'mdi-cart',
          title: 'Order',
          to: '/order',
        },
        {
          icon: 'mdi-table',
          title: 'Table',
          to: '/table',
        },
        {
          icon: 'mdi-store',
          title: 'Stock',
          to: '/stock',
        },
        {
          icon: 'mdi-clipboard-outline',
          title: 'Bill',
          to: '/bill',
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
          this.$router.replace('/')
        })
    },
  },
}
</script>
<style>
.theme--dark.v-application {
  background-color: black;
}
</style>
