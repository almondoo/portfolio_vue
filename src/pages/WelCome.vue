<template>
  <v-img class="img" :src="require('../assets/background.jpg')">
    <div class="content">welcome to portfolio</div>
  </v-img>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: white;
  z-index: 2;
  @media screen and (max-width: 600px) {
    font-size: 4rem;
  }
}

.img {
  width: 100%;
  height: 100%;
}
</style>
