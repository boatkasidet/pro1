<template>
  <v-card class="mx-auto" width="500" height="320" outlined>
    <h1 align="center">Login</h1>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="email" name="input-10-1" label="Email">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            @click:append="show1 = !show1"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row
        ><v-col>
          <nuxt-link to="register"
            ><v-btn block elevation="2" large x-small color=""
              >Register</v-btn
            ></nuxt-link
          >
        </v-col>
        <v-col>
          <v-btn
            block
            elevation="2"
            large
            x-small
            color="primary"
            @click="singin"
            >LOGIN</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
import 'firebase/auth'
export default {
  data() {
    return {
      show1: false,
      email: '',
      password: '',
      error: '',
      user: null,
    }
  },
  methods: {
    singin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user) /* eslint-disable-line no-console */
          this.$router.push('/home')
          this.$store.commit('login', false)
        })
        .catch((error) => {
          this.error = error
          alert(error)
        })
      this.getuser()
    },
    getuser() {
      db.collection('User')
        .where('email', '==', this.email)
        .onSnapshot((querySnapshot) => {
          /* eslint no-var: */
          var data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
          })
          this.user = data
          this.$store.commit('user', this.user)
          console.log(this.user)
        })
    },
  },
}
</script>
