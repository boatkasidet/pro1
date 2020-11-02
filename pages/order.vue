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
          <!-- <v-radio label="Hot (ร้อน)" value="Hot" /> -->
          <v-radio label="Iced (เย็น)" value="Iced" />
          <v-radio label="Blended (ปั่น)" value="Blended" />
        </v-radio-group>
      </v-container>
    </template>
    <!-- Size (ขนาดของแก้ว) -->
    <template>
      <v-container fluid>
        <h1>Size (ขนาดของแก้ว)</h1>
        <v-radio-group v-model="Size" :mandatory="false">
          <!-- <v-radio
            label="Short (ชอร์ต) 8 Oz. (เฉพาะเครื่องดื่มร้อนเท่านั้น)"
            value="Short"
          /> -->
          <v-radio label="Small (เล็ก) 12 Oz." value="Small" />
          <v-radio label="Medium (กลาง) 16 Oz." value="Medium" />
          <v-radio label="Large (ใหญ่) 20 Oz." value="Large" />
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
          <v-radio label="Not Sweet (ไม่หวาน)" value="Not Sweet" />
        </v-radio-group>
      </v-container>
    </template>
    <!-- Chewy tapioca balls (ไข่มุก) -->
    <template>
      <v-container fluid>
        <div>Chewy tapioca balls (ไข่มุก)</div>
        <v-radio-group v-model="Chewy" :mandatory="false">
          <v-radio label="Yes" value="Yes" />
          <v-radio label="No" value="No" />
        </v-radio-group>
      </v-container>
    </template>
    <!-- Whipped cream (วิปปิ้งครีม) -->
    <template>
      <v-container fluid>
        <div>Whipped cream (วิปปิ้งครีม)</div>
        <v-radio-group v-model="Whipped" :mandatory="false">
          <v-radio label="Yes" value="Yes" />
          <v-radio label="No" value="No" />
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
    <h1>ราคา {{ Total }}</h1>
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
      Size: null,
      Sweet: null,
      Chewy: null,
      Whipped: null,
      Quantity: '',
      Total: 0,
    }
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.replace('/login')
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
        Size: this.Size,
        Sweet: this.Sweet,
        Chewy: this.Chewy,
        Whipped: this.Whipped,
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
      // .then(function () {
      //   alert('ORDER DONE')
      // })
    },
    reset() {},
  },
}
</script>
