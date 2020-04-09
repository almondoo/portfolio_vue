<template>
  <v-container>
    <v-timeline class="timeline mx-auto" :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item v-for="item in items" :key="item.title" :color="item.color">
        <card v-bind="{item}" />
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import Card from '../components/card/Works'

export default {
  name: 'works',
  components: {
    card: Card
  },
  data () {
    return {
      items: [
        {
          title: '採用管理ツールの開発',
          text: 'マイナビやリクナビの媒体で応募者の進捗状況を共有する機能を制作する社内ツールのプロジェクトです。フロントエンドでアサインし、3ヶ月ほど経過した後に同じプロジェクトでバックエンドに切り替わりました。主にバグの改修が多かったです。',
          color: 'primary'
        },
        {
          title: 'メディアWebアプリケーション',
          text: '厳選された人がお店を紹介するメディアサイトを作成するプロジェクトです。このプロジェクトはバックエンドでアサインしました。業務はApiの実装と、管理サイトのcrud機能を追加でした。ベンチャーだったのでほぼ1から実装する箇所がいくつもあり、とても勉強になりました。',
          color: 'teal lighten-1'
        },
        {
          title: '仲介Webサイト',
          text: 'お店を紹介するサイトを制作するプロジェクトです。バック兼フロントで実装を行いました。基本的なタスクは、新機能追加と企画物のページ実装です。当時、サイトの大規模リニューアルに関わり、実装ペースやタスクの優先度を考えて動く経験をしました。',
          color: 'purple lighten-2'
        },
        {
          title: '案件探し中',
          text: '案件を探しております。',
          color: 'orange lighten-1'
        }
      ]
    }
  }
}
</script>

<style scoped>
.timeline {
  max-width: 1300px;
}
</style>
