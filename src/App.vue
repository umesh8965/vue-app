<template>
  <div id="app">
    <Header/>
    <div class="container md:mx-auto box-border">
       <router-view />
    </div>
  </div>
</template>

<script>

import Header from "./components/Header"

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

