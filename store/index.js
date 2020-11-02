export const state = () => ({
  data: [],
  headers: [
    {
      text: 'Name',
      align: 'start',
      value: 'name',
    },
    { text: 'Phone', value: 'Phone' },
    { text: 'Product', value: 'Product' },
    { text: 'Category', value: 'Category' },
    { text: 'Size', value: 'Size' },
    { text: 'Sweet', value: 'Sweet' },
    { text: 'Quantity', value: 'Quantity' },
    { text: 'Total', value: 'Total' },
  ],
})
export const mutations = {
  input(
    state,
    { name, Phone, Product, Category, Size, Sweet, Quantity, Total }
  ) {
    state.data.push({
      name,
      Phone,
      Product,
      Category,
      Size,
      Sweet,
      Quantity,
      Total,
    })
  },
}
export const getters = {
  data(state) {
    return state.data
  },
}
