<template>
  <v-img class="img" :src="backgroundImage">
    <div class="content">welcome to portfolio</div>
  </v-img>
</template>

<script>
import backgroundImage from '../assets/background.jpg'

export default {
  name: 'welcome',
  data() {
    return {
      backgroundImage: backgroundImage
    }
  }
}
</script>

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
  width: 100vw;
  height: 88vh;
}
</style>
