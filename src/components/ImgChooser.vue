<template>
  <span class="imgchooser-wrapper">
    <input type="file" @change="handlefile">
  </span>
</template>

<script>
import ImgChooser from './ImgChooser.vue'
export default {
  methods: {
    handlefile(e) {
      if (e.target.files[0] != null) {
	let rdr = new FileReader()
	rdr.onload = (ev) => {
	  let img = new Image()
	  img.onload = (ev) => {
	    this.$emit('input', img)
	  }
	  img.src = ev.target.result
	}
	rdr.readAsDataURL(e.target.files[0])
      }
    }
  },
}
</script>
