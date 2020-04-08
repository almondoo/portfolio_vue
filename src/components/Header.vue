<template>
  <div>
    <v-app-bar color="black" dense dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <img src="../assets/logo.png" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Tsubasa Morikawa</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.url">
          <v-list-item-icon>
            <v-icon>{{ item.title }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    drawer: null,
    title: 'Titleが入る',
    items: [
      {
        title: 'WELLCOME',
        url: '/'
      },
      {
        title: 'PROFILE',
        url: '/profile'
      },
      {
        title: 'SKILL',
        url: '/skill'
      },
      {
        title: 'WORKS',
        url: '/works'
      },
      {
        title: 'CONTACT',
        url: '/contact'
      }
    ]
  })
}
</script>
