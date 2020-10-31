<template>
  <div>
    <ul class="list-group">
      <v-list v-for="item in items" :key="item.id">
        {{ item.title }} - {{ item.price }}
        <v-btn
          class="btn badge badge-warning float-right"
          @click="$emit('remove-from-cart', item)"
        >
          Remove
        </v-btn>
      </v-list>
    </ul>
    <div class="card p-3 my-5">
      <h4 class="text-center">Total {{ total }} Bath</h4>
    </div>
    <v-btn
      :disabled="items.length === 0"
      class="btn btn-info form-control"
      @click="addData"
    >
      Pay Now
    </v-btn>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  props: ['items'],
  computed: {
    total() {
      return this.items.reduce((acc, item) => acc + Number(item.price), 0)
    },
  },
  methods: {
    addData() {
      // เก็บข้อมูล Input Text ใน collection MyText (มีหลาย document ข้อมูลจะเพิ่มขึ้นเรื่อย ๆ )
      const dataText = {
        total: this.total,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }
      db.collection('zxc')
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
