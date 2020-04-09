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
          title: 'PHP/Laravel/FuelPHP',
          answer: 'もっとも使用している言語です。LaravelとFuelphpのフレームワークは、現場で使用した経験があります。'
        },
        {
          title: 'Javascript/jQuery/Vue.js',
          answer: '生jsを始め、jQuery等を利用して動き・Apiを動かしています。Vue.jsは実務で使用していきたいと考えているので独学しています。'
        },
        {
          title: 'HTML/CSS',
          answer: 'ほとんどの案件でバックとフロントを兼する場所が多かったので、使用頻度は高いです。cssに関してはscssで書くことが多いです。使用したことあるライブラリは、Vutifyのみです。'
        },
        {
          title: 'MySQL',
          answer: 'DBはMySQLのみ実務経験があります。基本コマンドは使えます。DB構築も経験したことがあります。'
        },
        {
          title: 'Redis',
          answer: 'ある案件でページの高速化するために使用しました。こちら基本動作は使えます。'
        },
        {
          title: 'GCP/AWS',
          answer: '案件で両方とも使用したことがあります。GCPは、サーバの作成からデプロイまでCLIで行っていました。AWSは、CloudWacth等のモニタリングで異常がないか確認程度でしか、利用したことがありません。'
        },
        {
          title: 'バージョン管理ツール/Git/AWS(CodeCommit)',
          answer: '2つのバージョン管理ツールを使用したことがあります。CLIでもGUI(SourceTree)でも使用できます。基本はGUIを使ってます。'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
