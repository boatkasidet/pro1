<template>
  <div>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      :search="search"
      :headers="this.$store.state.headers"
      :items="(this.data = data)"
      :items-per-page="10"
      class="elevation-1"
    />
  </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      data: [],
      headers: [],
      search: '',
    }
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.replace('/login')
      }
    })
  },
  mounted() {
    this.data = this.$store.state.data
    this.header = this.$store.state.headers
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      db.collection('ORDER')
        .orderBy('timestamp')
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
          })
          this.data = data
        })
    },
  },
}
</script>
