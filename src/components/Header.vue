<template>
  <div>
    <v-app-bar color="black" dense dark fixed>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="require('../assets/logo.png')"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>T M</v-list-item-title>
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

const items = [
  {
    title: 'WELCOME',
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
  },
  {
    title: 'NOT FOUND',
    url: '/' + Math.random().toString(36).slice(-8)
  }
]

const getCurrentURLFromTitle = () => {
  let path = location.pathname
  path = path.replace('/portfolio_vue', '')
  path = path.substr(1)
  let title
  if (path === '') {
    title = 'WELCOME'
  } else {
    title = 'NOT FOUND'
    items.forEach(function (val) {
      if (path === val.title.toLowerCase()) {
        title = val.title
      }
    })
  }

  return title
}

export default {
  name: 'Header',
  data () {
    return {
      drawer: null,
      title: '',
      items: items
    }
  },
  watch: {
    '$route': function (to, from) {
      if (to.path !== from.path) {
        const title = getCurrentURLFromTitle()
        this.title = title
      }
    }
  },
  created: function () {
    const title = getCurrentURLFromTitle()
    this.title = title
  }
}
</script>
