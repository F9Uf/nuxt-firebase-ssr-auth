<template>
  <section class="container">
    <h2>index</h2>
    <div>
      <nuxt-link to="/login">LOGIN</nuxt-link> | 
      <nuxt-link to="/admin">ADMIN</nuxt-link>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  /* display: flex; */
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
