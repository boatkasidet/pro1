<template>
  <v-container>
    <v-card class="mx-auto" width="500" @submit.prevent="addData">
      <h1 align="center">Stock</h1>
      <v-text-field
        v-model="NameProduct"
        label="Name Product"
        class="ma-2"
      ></v-text-field>
      <v-text-field
        v-model="ProDate"
        label="Production Date"
        class="ma-2"
      ></v-text-field>
      <v-text-field
        v-model="ExpDate"
        label="Expiration Date"
        class="ma-2"
      ></v-text-field>
      <v-text-field
        v-model="Quantity"
        label="Quantity"
        class="ma-2"
      ></v-text-field>
      <v-btn color="success" @click="addD">Submit</v-btn>
      <!-- <v-btn color="warning" class="mr-4" @click="reset"> Reset Form </v-btn> -->
    </v-card>
    <CollectionText />
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import CollectionText from '~/components/CollectionText.vue'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  components: {
    CollectionText,
  },
  dataz() {
    return {
      NameProduct: '',
      ProDate: '',
      ExpDate: '',
      Quantity: '',
    }
  },
  methods: {
    addD() {
      // เก็บข้อมูล Input Text ใน collection MyText (มีหลาย document ข้อมูลจะเพิ่มขึ้นเรื่อย ๆ )
      const dataText = {
        NameProduct: this.NameProduct,
        ProDate: this.ProDate,
        ExpDate: this.ExpDate,
        Quantity: this.Quantity,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }
      db.collection('Stock')
        .doc()
        .set(dataText)
        .then(function () {
          console.log('Document successfully written! -> MyText')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    reset() {},
    beforeCreate() {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          this.$router.replace('/login')
        }
      })
    },
  },
}
</script>

<style></style>
