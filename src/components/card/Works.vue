<template>
  <v-card>
    <v-card-title :class="['bg-' + item.color]">
      <h2 class="text-white font-weight-light">{{ item.title }}</h2>
    </v-card-title>
    <v-card-text class="pt-4 text-black">{{ item.text }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'cardWorks',
  props: ['item']
}
</script>
