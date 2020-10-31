<template>
  <v-card class="mx-auto" width="500" outlined>
    <nuxt-link to="login">
      <v-btn>Back to Login</v-btn>
    </nuxt-link>
    <v-container
      ><h1 align="center">SignUp</h1>
      <v-row>
        <v-col>
          <v-text-field
            v-model="name"
            name="input-10-1"
            label="ชื่อ"
            :rules="[
              (v) => !!v || 'Name is required',
              (v) =>
                (v && v.replace(/[^0-9/*-+.!@#$%&*():}{}<>,]/g, '') < 1) ||
                'Please enter only characters.',
            ]"
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="lastname"
            name="input-10-1"
            label="นามสกุล"
            :rules="[
              (v) => !!v || 'Lastname is required',
              (v) =>
                (v && v.replace(/[^0-9/*-+.!@#$%&*():}{}<>,]/g, '') < 1) ||
                'Please enter only characters.',
            ]"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <!-- <v-row>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="วัน/เดือน/ปีเกิด"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            ref="picker"
            v-model="date"
            :max="new Date().toISOString().substr(0, 10)"
            min="1950-01-01"
            @change="save"
          ></v-date-picker>
        </v-menu>
      </v-row> -->
      <v-row>
        <v-col>
          <v-text-field
            v-model="ID"
            name="input-13"
            label="เลขประจำตัวประชาชน 13 หลัก"
            :rules="[(v) => !!v || 'ID Card is required']"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="email"
            name="input-10-1"
            label="Email"
            :rules="[(v) => /.+@.+\..+/.test(v) || 'Types must be valid']"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <!-- <v-row>
        <v-col>
          <v-text-field
            v-model="user"
            name="input-10-1"
            label="User  Name"
            :rules="[
              (v) => !!v || 'Username is required',
              (v) =>
                (v && v.replace(/[^0-9/*-+.!@#$%&*():}{}<>,]/g, '') < 1) ||
                'Please enter only characters.',
            ]"
          >
          </v-text-field>
        </v-col>
      </v-row> -->
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
      <v-row>
        <v-col>
          <v-btn
            block
            elevation="2"
            large
            x-small
            color="brown darken-4"
            @click="singup"
            >SUBMIT</v-btn
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
      name: '',
      lastname: '',
      // date: '',
      ID: '',
    }
  },
  methods: {
    singup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
          this.$router.push('/')
        })
        .catch((error) => {
          this.error = error
          alert(error)
          this.$router.push('/')
        })
      /* eslint no-var: */
      var data = {
        email: this.email,
        name: this.name,
        lastname: this.lastname,
        // date: this.date,
        ID: this.ID,
      }
      db.collection('User')
        .doc(this.email)
        .set(data)
        .then(function () {
          alert('DONE')
        })
    },
  },
}
</script>
