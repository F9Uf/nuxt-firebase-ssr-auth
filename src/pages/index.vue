<template>
  <section class="container">
<<<<<<< HEAD
    <h2>index</h2>
    <div>
      <nuxt-link to="/login">LOGIN</nuxt-link> | 
      <nuxt-link to="/admin">ADMIN</nuxt-link>
=======
    <div>
      <app-logo/>
      <h1 class="title">
        Nuxt.js * Firebase PWA
      </h1>
      <h2 class="subtitle">
        Nuxt.js * Firebase = SPA * SSR * PWA * Serverless
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
>>>>>>> 8acbe69e0cd73ecd7d12b019e83aa61b8233826c
    </div>
  </section>
</template>

<script>
<<<<<<< HEAD

export default {
  components: {
=======
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
>>>>>>> 8acbe69e0cd73ecd7d12b019e83aa61b8233826c
  }
}
</script>

<style>
.container {
  min-height: 100vh;
<<<<<<< HEAD
  /* display: flex; */
  margin-top: 100px;
=======
  display: flex;
>>>>>>> 8acbe69e0cd73ecd7d12b019e83aa61b8233826c
  justify-content: center;
  align-items: center;
  text-align: center;
}

<<<<<<< HEAD
=======
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
>>>>>>> 8acbe69e0cd73ecd7d12b019e83aa61b8233826c
</style>
