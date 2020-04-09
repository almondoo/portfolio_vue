<template>
  <v-card>
    <v-card-title :class="item.color">
      <!-- <v-icon dark size="42" class="mr-4">mdi-magnify</v-icon> -->
      <h2 class="white--text font-weight-light">{{ item.title }}</h2>
    </v-card-title>
    <v-card-text class="pt-4 black--text">{{ item.text }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'cardSkill',
  props: ['item'],
  data () {
    return {

    }
  }
}
</script>

<style scoped>
</style>
