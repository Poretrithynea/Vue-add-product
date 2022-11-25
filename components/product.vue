<template>
<div>
    <h1 align="center">WELCOME TO CAMBODIA RICE</h1><br>
    <label>Product Code</label>
    <v-text-field v-model="code" placeholder="Enter Code"></v-text-field>
    <label>Product Name</label>
    <v-text-field v-model="name" placeholder="Enter Name"></v-text-field>
    <label>Product Price</label>
    <v-text-field v-model="price" placeholder="Enter Price"></v-text-field>
    <label>Product Quantity</label>
    <v-text-field v-model="qty" placeholder="Enter Quantity"></v-text-field>
    <v-btn @click="save()">Save</v-btn><br><br>
        
</div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
    data: () =>({
       
        code :"",
        name: "",
        price: "",
        qty: ""
    }),

    methods: {
        ...mapMutations([
            'saveProduct'
            ,'deleteProduct'
        ]),
        save(){
            let product = {
                code: this.code,
                name: this.name,
                price: this.price,
                qty: this.qty
            }
            this.saveProduct(product)
        },
        delete(index){
            let product = {
                code: this.code,
                name: this.name,
                price: this.price,
                qty: this.qty
            }
            this.deleteProduct.splice(product,index)
        }
    },
}
</script>