<template>
    <section class="container">
        <h2>login</h2>
        <div>
            <nuxt-link to="/">HOME</nuxt-link>
        </div>
        <div>
            <button v-if="!($store.state.user)" @click="login">LOGIN</button>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            user: {
                email: 'admin@tose.com',
                password: '123456789'
            }
        }
    },
    methods: {
        login() {
            this.$store.dispatch('firebaseSignIn', this.user)
        }
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
