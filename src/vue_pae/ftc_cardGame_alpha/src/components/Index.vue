<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.$router.replace('/login')
  }
}
</script>

<style>

</style>
