<template>
  <div id="app">
    <h3>Mosaik</h3>
    <canvas-wrapper>
    </canvas-wrapper>
  </div>
</template>

<script>
import CanvasWrapper from './components/CanvasWrapper.vue'

export default {
  name: 'app',
  components: {
    CanvasWrapper
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
