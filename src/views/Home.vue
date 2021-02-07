<template>
  <div id="app">
    <p class="word-v-middle" @click="goit">
      <span>{{ typewriter }}</span>
    </p>
    <BallCanvas></BallCanvas>
  </div>
</template>

<script>
import BallCanvas from './BallCanvas.vue'
export default {
  name: 'home',
  components: {
    BallCanvas
  },
  data () {
    return {
      typewriter: '',
      i: 0,
      timer: 0,
      str: 'alps code auto generated.'
    }
  },
  methods: {
    goit () {
      this.$router.replace('/alps')
    },
    typeing () {
      if (this.i <= this.str.length) {
        this.typewriter = this.str.slice(0, this.i++)
        this.timer = setTimeout(() => {
          this.typeing()
        }, 150)
      } else {
        clearTimeout(this.timer)
      }
    }
  },
  mounted () {
    this.typeing()
  },
  created () {
    this.typeing()
  }
}
</script>

<style>

.word-v-middle{
  position: fixed;
  z-index: 999999;
  top: 30%;
  left: 25%;
  color: black;
}
.word-v-middle span{
  font-size: 70px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
