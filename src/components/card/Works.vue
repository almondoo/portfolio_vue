<template>
  <v-container>
    <div id="demo">
      <button v-on:click="show = !show">Toggle</button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'cardSkill',
  data () {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
</style>
