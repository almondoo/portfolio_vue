<template>
  <v-container>
    <v-card class="mx-auto" max-width="400" elevation="12">
      <v-list-item class="grey">
        <v-list-item-content>
          <v-list-item-title class="headline">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-content>{{ item.answer }}</v-list-item-content>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'cardProfile',
  props: ['item'],
  data: () => ({

  })
}
</script>

<style scoped>
</style>
