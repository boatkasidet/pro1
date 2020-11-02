<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <h1 class="text-center">La Café</h1>
    <div>Tax ID : {{ randomNumber }}</div>
    <div>Date : 03/11/2020</div>
    ------------------------------------------------------------------------------------<br />
    <p class="text-left">Order</p>
    <div v-for="(item, key) in textList" :key="key">{{ item.name }}</div>
    ------------------------------------------------------------------------------------<br />
    <div>Total {{ Total }}</div>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve"> Print </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      randomNumber: '',
      textList: [],
    }
  },
  created() {
    this.getData()
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.replace('/')
      }
    })
  },
  methods: {
    getData() {
      this.randomNumber = Math.floor(Math.random() * Math.floor(10000))
      db.collection('Order')
        .orderBy('timestamp')
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
          })
          this.textList = data
        })
    },
  },
}
</script>

<style></style>
