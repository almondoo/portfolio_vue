<template>
  <div>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title">
        <card v-bind="{item}" />
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import Card from '../components/card/Skill'
export default {
  name: 'skill',
  components: {
    card: Card
  },
  data () {
    return {
      items: [
        {
          title: 'Name',
          answer: '森川 翼'
        },
        {
          title: 'Birth Day',
          answer: '1997年05月09日'
        },
        {
          title: 'Gender',
          answer: '男性'
        },
        {
          title: 'Address',
          answer: '東京'
        },
        {
          title: 'Works',
          answer: 'バックエンドエンジニア'
        },
        {
          title: 'Engineer Carrer',
          answer: '2017年6月〜'
        },
        {
          title: 'Favorite',
          answer: 'ランニング スマホゲーム プログラミング 音楽'
        },
        {
          title: 'Goal',
          answer: '自作サイトを立ち上げて、月間PV数100万'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
