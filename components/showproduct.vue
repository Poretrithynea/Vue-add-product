<template>
<div><br>
<v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Product Code
          </th>
          <th class="text-left">
            Product Name
          </th>
           <th class="text-left">
            Product Price
          </th>     
     <th class="text-left">
            Product Quantity
          </th>
           <th class="text-left">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(product) in products"
          :key="product.code"
        >
          <td>{{ product.code }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price}} </td>
          <td>{{ product.qty}} </td>
          <td>{{ product.price * product.qty}} </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {

  computed: {
    ...mapState(['products'])
  },
  methods: {
  },

  
}
</script>