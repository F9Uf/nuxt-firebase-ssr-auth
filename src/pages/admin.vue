<template>
    <section class="container">
        <h2>admin</h2>
        <div>
            <nuxt-link to="/">Home</nuxt-link>
        </div>
    </section>
</template>

<script>
export default {
    middleware: 'authcheck'
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
