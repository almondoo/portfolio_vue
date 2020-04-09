<template>
  <v-container>
    <v-card class="mx-auto slideInRight" max-width="400">
      <v-card-title>{{ item.title }}</v-card-title>
      <v-card-text class="grey--text text--darken-3">{{item.answer}}</v-card-text>
    </v-card>
  </v-container>
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

<style scoped lang="scss">
.slideInRight {
  animation-name: slideInLeft;
  animation-duration: 1s;
  animation-timing-function: ease;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-150px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
