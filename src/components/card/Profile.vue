<template>
  <v-container>
    <v-card class="mx-auto" max-width="400" elevation="12">
      <v-list-item class="bg-grey">
        <v-list-item-title class="text-h6">{{ item.title }}</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>{{ item.answer }}</v-list-item-title>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'cardProfile',
  props: ['item']
}
</script>
