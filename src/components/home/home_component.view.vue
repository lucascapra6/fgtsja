<template>
  <section class="home">
    <div class="container">
      <h1 class="tittle" @click="$emit('simulation')">Antecipação<br> <span>Saque-Aniversário</span></h1>
      <p class="container-text">Antecipe você mesmo seu saldo do FGTS 100% On-line.</p>
      <img class="imagemFlat" src="../../assets/flatArt.png" alt="dois_caras_apertando_as_mãos">
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>








.container-text p {

}

.imagemFlat {
  width: 324px;
  height: 316px;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>