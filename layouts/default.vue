<template>
  <v-app flat>
    <v-card>
      <v-toolbar>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title class="">BABY <span class="font-weight-light">OUTLET</span></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn>
            <n-link to="/"> Home </n-link>
          </v-btn>
          <v-btn>
            <n-link to="/addproduct"> Add Product </n-link>
          </v-btn>
          <v-btn>
            <n-link to="/show"> Show </n-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>
    <nuxt />
  </v-app>
</template>

<script>
export default {};
</script>