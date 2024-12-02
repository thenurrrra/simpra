<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./layouts/Header/Header.vue";
import Footer from "./layouts/Footer/Footer.vue";
RouterView;
</script>

<template>
  <div>
    <header>
      <Header />
    </header>
    <main>
      <RouterView></RouterView>
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
