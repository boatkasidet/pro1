<template>
  <div class="col-md-7" @submit.prevent="addData">
    <!-- Input -->
    <v-row>
      <v-col cols="5" md="4">
        <h1>Name</h1>
        <v-text-field v-model="name" required />
      </v-col>
      <v-col cols="5" md="4">
        <h1>Phone</h1>
        <v-text-field v-model="Phone" required />
      </v-col>
    </v-row>
    <!-- Product list (รายการสินค้า) -->
    <div>
      <template>
        <v-container fluid>
          <h1>Product list (รายการสินค้า)</h1>
          <v-radio-group v-model="Product" :mandatory="false">
            <v-radio label="Espresso (เอสเพรสโซ่)" value="Espresso" />
            <v-radio label="Americano (อเมริกาโน่)" value="Americano" />
            <v-radio label="Latte (ลาเต้)" value="Latte" />
            <v-radio label="Cappuccino (คาปูชิโน)" value="Cappuccino" />
            <v-radio label="Mocha (มอคค่า)" value="Mocha" />
          </v-radio-group>
        </v-container>
      </template>
      <!-- Category (ประเภท) -->
      <template>
        <v-container fluid>
          <h1>Category (ประเภท)</h1>
          <v-radio-group v-model="Category" :mandatory="false">
            <v-radio label="Hot (ร้อน)" value="Hot" />
            <v-radio label="Iced (เย็น)" value="Iced" />
            <v-radio label="Blended (ปั่น)" value="Blended" />
          </v-radio-group>
        </v-container>
      </template>
      <!-- Sweetness level (ระดับความหวาน) -->
      <template>
        <v-container fluid>
          <h1>Sweetness level (ระดับความหวาน)</h1>
          <v-radio-group v-model="Sweet" :mandatory="false">
            <v-radio label="Normal (หวานปกติ)" value="Normal" />
            <v-radio label="Medium (หวานปานกลาง)" value="Medium" />
            <v-radio label="Not Sweet (ไม่หวาน)" value="No Sweet" />
          </v-radio-group>
        </v-container>
      </template>
      <!-- Quantity (จำนวนแก้ว) -->
      <v-row>
        <v-col cols="5" md="6">
          <h1>Quantity (จำนวนแก้ว)</h1>
          <v-text-field v-model="Quantity" number required />
        </v-col>
      </v-row>
      <v-col>
        <v-btn color="success" class="mr-6" @click="addData"> Submit </v-btn>
      </v-col>
      <!-- End input -->
      <h1>Total {{ Total }} Bath</h1>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      name: '',
      Phone: '',
      Product: null,
      Category: null,
      Sweet: null,
      Quantity: '',
      Total: 0,
    }
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.replace('/')
      }
    })
  },
  methods: {
    addData() {
      this.Total = 50 * this.Quantity
      const dataText = {
        name: this.name,
        Phone: this.Phone,
        Product: this.Product,
        Category: this.Category,
        Sweet: this.Sweet,
        Quantity: this.Quantity,
        Total: this.Total,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }
      db.collection('Order')
        .doc()
        .set(dataText)
        .then(function () {
          console.log('Document successfully written! -> MyText')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
  },
}
</script>
