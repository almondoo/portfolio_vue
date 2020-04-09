<template>
  <v-container>
    <v-expansion-panels class="mx-auto panel_main" focusable>
      <v-expansion-panel>
        <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
        <a :href="'mailto:' + item.content">
          <v-expansion-panel-content class="pt-4">{{ item.content }}</v-expansion-panel-content>
        </a>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  name: 'contact',
  data () {
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
