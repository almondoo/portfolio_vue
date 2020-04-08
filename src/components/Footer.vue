<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="black">
        <strong>other links! :D</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          class="mx-4"
          :href="icon.url"
          dark
          icon
          target="_blank"
          rel="noopener"
        >
          <v-icon size="24px" class="icon">{{ icon.name }}</v-icon>
        </v-btn>
      </v-card-title>

      <!-- <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} —
        <strong>PORTFOLIO</strong>
      </v-card-text>-->
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    icons: [
      {
        name: 'fab fa-facebook',
        url: 'https://ja-jp.facebook.com/people/%E6%A3%AE%E5%B7%9D%E7%BF%BC/100017080203404'
      },
      {
        name: 'fab fa-twitter',
        url: 'https://twitter.com/5rAmLM8ozdUoM3W'
      },
      {
        name: 'fab fa-instagram',
        url: 'https://www.instagram.com/engineer_tsubasa/'
      },
      {
        name: 'fab fa-github',
        url: 'https://github.com/tsubasa111/'
      }

    ]
  })
}
</script>

<style scoped>
</style>
