<template>
  <div class="container mt-4">
    <!-- <img width="150px" src="@/assets/gl_logo.png" alt="GL Vue Cart Logo" /> -->
    <v-row>
      <div class="col-md-7">
        <v-row>
          <div v-for="product in products" :key="product.id" class="col-md-4">
            <product
              :is-in-cart="isInCart(product)"
              :product="product"
              @add-to-cart="addToCart(product)"
            ></product>
          </div>
        </v-row>
      </div>
      <div class="col-md-5 my-5">
        <cart
          :items="cart"
          @pay="pay()"
          @remove-from-cart="removeFromCart($event)"
        ></cart>
      </div>
    </v-row>
  </div>
</template>

<script>
import products from '@/components/products.json'
import Product from '@/components/Product.vue'
import Cart from '@/components/Cart.vue'

export default {
  name: 'App',
  components: {
    Product,
    Cart,
  },
  data() {
    return {
      products,
      cart: [],
    }
  },
  methods: {
    addToCart(product) {
      this.cart.push(product)
    },
    isInCart(product) {
      const item = this.cart.find((item) => item.id === product.id)
      if (item) {
        return true
      }
      return false
    },
    removeFromCart(product) {
      this.cart = this.cart.filter((item) => item.id !== product.id)
    },
    pay() {
      this.cart = []
      alert('Thanks! Shopping successfully completed. ')
    },
  },
}
</script>

<style>
body {
  background-color: #dcdcdc;
}
</style>
