<template>
  <div class="canvas-wrapper">

    <!-- drawing canvas -->
    <canvas ref="canv"></canvas>

    <div class="tools">
      <!-- image chooser -->
      <img-chooser @input="setImg"></img-chooser>

      <!-- iteration count -->
      <select id="iter" v-model="iterations" @change="makemosaik" v-if="img != null">
	<option>0</option>
	<option>1</option>
	<option>2</option>
	<option>3</option>
	<option>4</option>
	<option>5</option>
      </select>

      <select id="axises" v-model="axis" @change="makemosaik" v-if="img != null">
	<option value="0">Vertical & Horizontal</option>
	<option value="1">Vertical only</option>
	<option value="2">Horizontal only</option>
      </select>

      <br>
    </div>
  </div>
</template>

<script>
import ImgChooser from './ImgChooser.vue'
import _ from 'lodash'

export default {

  components: {
    ImgChooser
  },

  methods: {

    // sets new image
    setImg(img){
      this.img = img
      this.clear()
      this.makemosaik()
    },

    reset(){
      this.provider.context.drawImage(this.img,0,0)
    },

    // clears canvas
    clear(){
      this.w = this.img.width
      this.h = this.img.height
      this.$refs['canv'].width = this.w
      this.$refs['canv'].height = this.h
      this.iterations = 0
      this.axis = 0
      this.reset()
    },

    // slices canvas by height and stacks every even, odd
    partition(data, chunksize){
      return _(data)
      // in chunks of rgba
      .chunk(4 * chunksize)

      // get index
      .map((v,i) => [v,i])

      // partition by even,odd
      .partition((a) => a[1] % 2 === 0)

      // flatten partitions
      .flatten()

      // get value back from pair
      .map((a) => a[0])

      // flatten rgba chunks
      .flatten()

      // resolve chained value
      .value()
    },

    partitionHorizontal(data, w0, w){
      return _(data)
      // in chunks of row
      .chunk(w * 4)
      .map((row) => this.partition(row,w0))
      .flatten()
      .value()
    },

    // makes mosaik
    makemosaik(){
      console.log("making mosaic...")
      this.reset()

      let ctx = this.provider.context
      let data = ctx.getImageData(0,0,this.w,this.h).data

      for(let i=0; i < this.iterations; i++) {
	console.log("pass: ", i)

	// process data
	if ([0,1].includes(_.toNumber(this.axis)))
	  data = this.partition(data, Math.floor(this.h / (this.iterations + 1)) * this.w)
	if ([0,2].includes(_.toNumber(this.axis)))
	  data = this.partitionHorizontal(data, Math.floor(this.w / (this.iterations + 1)), this.w)
      }

      // put to canvas
      const imgdata = new ImageData(new Uint8ClampedArray(data), this.w, this.h)
      ctx.putImageData(imgdata,0,0)

      console.log("Done!")
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

      w: Number,
      h: Number,
      axis: Number,
      iterations: Number,
      img: null,
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
