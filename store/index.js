export const state = () => ({
    products: [],
})

export const mutations = {
    saveProduct(state, product) {
        state.products.push(product)
    },
    deleteProduct(state, product, index) {
        state.products.splice(product, index)
    }
}