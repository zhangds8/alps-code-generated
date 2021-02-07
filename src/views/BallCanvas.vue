<template>
  <div id="app">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import { init, animate } from '@/assets/lib/canvas'
export default {
  data () {
    return {
      canvas: '',
      ctx: '',
      width: '',
      height: '',
      words: [],
      text: '',
      textx: ''
    }
  },
  mounted () {
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.width = this.canvas.width = window.innerWidth
    this.height = this.canvas.height = window.innerHeight
    init(this.width, this.height, this.ctx)
    animate()
  }
}
</script>

<style lang="scss">
body {
  overflow: hidden;
}
</style>
