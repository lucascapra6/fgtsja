<template>
  <section class="moreInfo" id="description">
    <h1 class="tittle">O que é a Antecipação <span>Saque aniversário?</span></h1>
    <p class="container-text">É uma nova modalidade de crédito ao trabalhador que tem saldo FGTS e opta pela antecipação
      do Saque-Aniversário</p>
    <v-carousel 
      class="d-flex justify-center align-center" 
      height="fit-content" 
      hide-delimiters 
      data-v-carousel
      color="red"
    >
      <v-carousel-item
          height="fit-content"
          width="fit-content"
          v-for="(item,index) in items"
          :key="index"
      >
        <div class="img background-img">
          <img class="iconBox" :src="item.src" alt="">
        </div>
        <div class="container-box">
          <div class="itemsStyle">
            <div class="carousel">
              <h2 class="tittle-2">{{ item.tittle }}</h2>
              <p class="text">{{ item.text }}</p>
            </div>
          </div>

        </div>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          tittle: 'Empréstimo Saque-Aniversário',
          text: 'Use seu crédito sem comprometer a sua renda mensal com prestações, pois o desconto é anual e feito diretamente no saldo do FGTS.',
          src: 'https://icon-library.com/images/calendar-icon-white/calendar-icon-white-20.jpg',
        },
        {
          tittle: 'Antecipe até 5 parcelas',
          text: 'Antecipe até 5 parcelas anuais do seu Saque-Aniversário, contrate a partir de R$300,0 com taxas de 1,99% a.m.',
          src: 'https://www.pngkey.com/png/full/235-2350076_gmw-host-clipart-library-people-icon-png-white.png',
        },
        {
          tittle: 'Disponível para trabalhador!',
          text: 'Já disponível para trabalhador com carteira assinada ou quem tem saldo FGTS em conta inativa.',
          src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUAAAD8/vz///9aW1q3ubepqqnn6efh4+EpKik6OzpjZGNqamq8vrz19/WHiIfR09Gam5p5ennLzcvu8O4SEhJub24jIyPc3dwZGRnIysgLCwtLS0svLy9fYF9VVlXCw8JBQUGhoqEzMzOAgYBopVzgAAADL0lEQVR4nO3d23LaMBRGYVkJECinkBMp0JD2/d+xZDq9KJF3I9hCv5i17o38jaQ4Dh4nBLP1XaW29nn5dLNYvc5irVbfiwM3H+N01YrDCwDr8S5CnFUGHogPk5LAaXVg6VlcCAi72I2vXHhYqOWEKwlhQeK2Nu1vxfbiWGMKu3JEHWGphSokLDSLSsIyRClhEeKx8FJ3FH1E/714JIzz3eQi9RKnj4WFP5w/v6/ezeG+UI+FN86f31f/9o9vvrOoJzwsVNeRBIVdXKwdR1IUdnHpOFJ1YfLC4XnRqC2Mq0mXMDpeNKoLp2GfJA69iALCME4SvfaigvBwG16QKCEM+9lnoRdRQxjekz9RXYgiwvBUjKgiDINSC1VGGJaFZlFHGAZliELCQkQlYQ/xzFOSEhaZRS1hkhhn9+eMJCYsQFQT9hCfTx9JTuhO1BP2EE9+7kZQ2EO8O3EkRaHvQpUUus6iptBzL4oKw6vbQlUVPqce1TqJqCoM4SVFHOWPpCt8ThJvs0fSFaafKcwnKgvXLkRlYXhM/qU480ZDWhg2n4GH8r6Jry5MLrqn+Z/uU8DM74hrC//zfEtSmLcT6wuzQ3gUwlIhRPj1EJbqjGc1GxE+fft6u2FsUJjVCKEVQokQmiGUCKEZQokQmiGUCKEZQokQmiGUCKEZQonOEv68euH86oXTqxfeIlQIoRlCiRCaIZQIoRlCiRCaIZQIoRlCiRCaIZQIoRlCiRCaIZQIoRlCiRCaIZQIoRlCiRCaIZQIoRlCiRCaIZQIoRlCiRCaIZQIoVmLwkXWwQ0Ku5h1MEKJEJohlAihGUKJEJohlAihGUKJEJohlAihGUKJEJohlAihGUKJEJohlOgsYYNvUcoU7q5e2ODbzDKFDb6RDuFRCCVCaIZQIoRmCCVCaIZQIoRmCCVCaIZQIoRmDQrjQ9bBLQr57w//hlAihGYIJUJohlAihGYIJXIVbgqd5Fm5CoeKdZ2fsIuKuQobKFMYXpoj5goXCOVCiFC/XOGyPeE0TzhpTzjJE+5rn3BucZQHDGHY1iTGbpsr3LZFnL3nAsPHL24N9esEYBgP2mnez/gNy+1a/aqOqnsAAAAASUVORK5CYII=',
        },
      ],
    }
  }
}
</script>

<style scoped>
.itemsStyle {
  width: 280px;
  text-align: center;
}

.carousel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.moreInfo {
  padding-top: 40px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.img {
  text-align: center;
  border-radius: 10px;
}

.iconBox {
  width: 35px;
  height: 35px;
  position: relative;
  top: 20px;
}

.background-img {
  position: relative;
  top: 40px;
  width: 75px;
  height: 75px;
  background: #1f2d27;
  margin: auto;
}

.container-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 325px;
  height: 325px;
  background: #ffffff;
  border: 2px solid #1f2d27;
  box-sizing: border-box;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}

.text {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 180%;
  /* or 29px */

  text-align: center;
  letter-spacing: 0.02em;

  color: #000000;
}

.container-text-2 {
  max-width: 290px;
  margin: 0 auto;
  padding: 23px;
}
</style>