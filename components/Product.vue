<template>
  <v-card>
    <div class="card-title">{{ product.title }}</div>
    <div class="text-muted card-text">
      {{ Number(product.price).toFixed() }} Bath
    </div>
    <v-btn
      :disabled="isInCart"
      class="btn btn-info form-control"
      @click="$emit('add-to-cart', product)"
    >
      {{ isInCart ? 'Added to cart' : 'Add to Cart' }}
    </v-btn>
  </v-card>
</template>

<script>
export default {
  props: ['product', 'isInCart'],
}
</script>
