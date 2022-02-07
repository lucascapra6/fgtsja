<template>
    <section class="rate" id="rating">
            <h1 class="tittle">O que estão dizendo <br> <span>sobre nós?</span></h1>
            <p class="container-text">Avaliações do nosso serviço na Apple Store e Google Play.</p>
      <div class="containerRate">
            <div class="img">
                <img class="rateImg" height="350px" width="320px" src="../../assets/family.png" alt="">
            </div>
            <div class="client-rate">
                <p class="clientComment">Com o dinheiro do empréstimo consegui fazer uma viagem maravilhosa com a familia!</p>
                <div class="flex space-between">
                    <p class="client-name">Sérgio Augusto</p>
                    <img class="stars" src="../../assets/stars.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.rateImg {
    border-radius: 20px;
}

.rate{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.client-rate {
  background: linear-gradient(to right, #11bb77 6px, #ffffff 6px);
  width: 300px;
  height: fit-content;
  padding: 6px 10px 0px 18px;
  margin: auto;
  box-shadow: 0px 3px 17px rgba(31, 45, 39, 0.4);
  border-radius: 8px;
  color: #1f2d27;
  position: relative;
  top: -40px;
}
.containerRate{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
}
.img {
  text-align: center;
  margin-top: 10px;
}
.clientComment {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 136%;
  letter-spacing: 0.02em;
  color: #5f5f7e;
}
.client-name {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 180%;
  color: #5f5f7e;
}
.stars {
    width: 60px;
    height: 10px;
    align-self: center;
}
</style>