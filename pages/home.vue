<template>
  <v-app id="gg">
    <v-form ref="form" v-model="valid" lazy-validation>
      <div class="text-center">
        <nuxt-link to="order">
          <v-btn
            elevation="7"
            color="primary"
            class="center ma-4 mt-12"
            x-large
            @click="order"
          >
            Order
          </v-btn>
        </nuxt-link>
        <nuxt-link to="stock">
          <v-btn elevation="7" color="error" class="center ma-4 mt-12" x-large>
            Stock
          </v-btn>
        </nuxt-link>
      </div>
    </v-form>
    <v-card elevation="24" width="1200" class="mx-auto mt-9">
      <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </v-card>
  </v-app>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      items: [
        {
          src: 'https://images6.alphacoders.com/345/thumb-1920-345794.jpg',
        },
        {
          src: 'https://wallpaperaccess.com/full/1889536.jpg',
        },

        {
          src: 'https://images6.alphacoders.com/345/thumb-1920-345794.jpg',
        },
        {
          src: 'https://images.alphacoders.com/652/thumb-1920-652722.jpg',
        },
        {
          src: 'https://images.alphacoders.com/553/thumb-1920-553518.jpg',
        },
        {
          src: 'https://images8.alphacoders.com/653/thumb-1920-653597.jpg',
        },
      ],
    }
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.replace('/login')
      }
    })
  },
}
</script>

<style>
#gg {
  /* background-image: url(https://c.pxhere.com/images/9f/e8/c0a5bd1ecdbb7118d16639db37be-1437379.jpg!d); */
  background-size: cover;
  margin: auto;
}
</style>
