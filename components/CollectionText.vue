<template>
  <v-card class="mt-5">
    <v-list
      v-for="(item, key) in textList"
      :key="key"
      class="pa-2"
      outlined
      tile
    >
      ชื่อสินค้า : {{ item.NameProduct }} // จำนวน : {{ item.Quantity }} //
      วันที่ซื้อมา : {{ item.ProDate }} // วันหมดอายุ : {{ item.ExpDate }}
    </v-list>
  </v-card>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      textList: [],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      db.collection('Stock')
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
