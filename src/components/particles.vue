<template>
  <vue-particles
      color="#111"
      :particleOpacity="0.7"
      :particlesNumber="30"
      shapeType="circle"
      :particleSize="4"
      linesColor="#111"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="particles"
  >
  </vue-particles>
</template>

<script>
export default {
  name: "particles"
}
</script>

<style scoped>
.particles {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 0;
}
</style>
