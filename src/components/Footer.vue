<template>
  <v-footer class="bg-black">
    <v-row no-gutters align="center">
      <v-col cols="auto" class="d-none d-sm-flex">
        <strong class="text-white">other links! :D</strong>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          class="mx-2"
          :href="icon.url"
          icon
          variant="text"
          target="_blank"
          rel="noopener"
        >
          <v-icon size="24" color="white">{{ icon.name }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
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
    }
  }
}
</script>
