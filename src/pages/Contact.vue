<template>
  <v-container>
    <v-expansion-panels class="mx-auto panel_main">
      <v-expansion-panel>
        <v-expansion-panel-title>{{ item.title }}</v-expansion-panel-title>
        <v-expansion-panel-text>
          <a :href="'mailto:' + item.content" class="pt-4">{{ item.content }}</a>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
      item: {
        title: 'Contact',
        content: 'tabletennisworks@gmail.com'
      }
    }
  }
}
</script>

<style scoped>
.panel_main {
  max-width: 500px;
}
</style>
