<template>
  <div>
    <v-card class="mx-auto" width="500" outlined>
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
        <v-col>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="200px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="ปีเกิด/เดือน/วัน"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                dense
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
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
            <v-btn block elevation="2" large x-small color="" @click="singup"
              >SUBMIT</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
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
          this.$router.push('/login')
        })
        .catch((error) => {
          this.error = error
          alert(error)
          this.$router.push('/login')
        })
      /* eslint no-var: */
      var data = {
        email: this.email,
        name: this.name,
        lastname: this.lastname,
        date: this.date,
        password: this.password,
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
