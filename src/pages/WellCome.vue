<template>
  <div class="content">wellcome to portfolio</div>
</template>

<script>
export default {
  name: 'wellcome',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: white;
  background-image: url("../assets/background.jpg");
}
</style>
