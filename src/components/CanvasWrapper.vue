<template>
  <div class="canvas-wrapper">

    <!-- drawing canvas -->
    <canvas ref="canv"></canvas>

    <div class="tools">
      <!-- image chooser -->
      <img-chooser @input="setImg"></img-chooser>

      <!-- iteration count -->
      <select id="iter" v-model="iterations" @change="makemosaik">
	<option selected>1</option>
	<option>2</option>
	<option>4</option>
	<option>8</option>
	<option>16</option>
      </select>
    </div>
  </div>
</template>

<script>
import ImgChooser from './ImgChooser.vue'
export default {

  components: {
    ImgChooser
  },

  props: {
    iterations: {
      default: 1,
      type: Number
    }
  },

  methods: {

    // sets new image
    setImg(img){
      this.img = img
      this.clear()
    },

    // clears canvas
    clear(){
      this.$refs['canv'].width = this.img.width
      this.$refs['canv'].height = this.img.height
      this.provider.context.drawImage(this.img,0,0)
      this.iterations = 1
    },

    // makes mosaik
    makemosaik(){
    },
  },

  data() {
    return {
      // By creating the provider in the data property, it becomes reactive,
      // so child components will update when `context` changes.
      provider: {
        // This is the CanvasRenderingContext that children will draw to.
        context: null
      },

      img: Image,
    }
  },

  // Allows any child component to `inject: ['provider']` and have access to it.
  provide () {
    return {
      provider: this.provider
    }
  },

  mounted () {
    // We can't access the rendering context until the canvas is mounted to the DOM.
    // Once we have it, provide it to all child components.
    this.provider.context = this.$refs['canv'].getContext('2d')
  }
}
</script>
