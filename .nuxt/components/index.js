export { default as Cart } from '../..\\components\\Cart.vue'
export { default as CollectionText } from '../..\\components\\CollectionText.vue'
export { default as Product } from '../..\\components\\Product.vue'

export const LazyCart = import('../..\\components\\Cart.vue' /* webpackChunkName: "components_Cart" */).then(c => c.default || c)
export const LazyCollectionText = import('../..\\components\\CollectionText.vue' /* webpackChunkName: "components_CollectionText" */).then(c => c.default || c)
export const LazyProduct = import('../..\\components\\Product.vue' /* webpackChunkName: "components_Product" */).then(c => c.default || c)
