<template>
  <div class="notfound_content">
    <div class="card">
      <v-img class="img" :src="require('../assets/logo.png')" />
      <h1>Not Found</h1>
      <p>ページが存在しません</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notFound',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.notfound_content {
  width: 100%;
  height: 100%;
  margin-top: 2.5rem;

  .card {
    width: 100%;
    height: auto;
    margin: 2.5rem auto 0;
    text-align: center;

    .img {
      margin: auto;
      width: 200px;
      height: 200px;
    }

    p {
      margin-top: 0.5rem;
      font-size: 1.7rem;
    }
  }
}
</style>
