<template>
    <section id="benefits">
        <div class="container">
            <h1 class="tittle">Quem pode pegar o <span>saldo do FGTS</span> como empréstimo?</h1>
            <div class="container-text">
                <p class="container-text">Todo trabalhador brasileiro com saldo na conta do FGTS pode obter esse benefício.</p>
                <p class="container-text">O empréstimo consignado FGTS foi feito para o cidadão brasileiro enfrentar esse momento desafiador.</p>
                <p class="container-text">Um crédito de fácil acesso e com as menores taxas.</p>
            </div>
         <ul class="benefits">
            <li>
              <img src="../../assets/money-confirm.png">
              <p class="text-benefits">Dinheiro na sua conta minutos após assinatura eletrônica do contrato</p>
            </li>
           <li>
             <img id="trending-down-img" src="../../assets/trending-down.png">
             <p class="text-benefits">Crédito com as menores taxas do mercado</p>
           </li>
           <li>
             <img src="../../assets/check-circle.png">
             <p class="text-benefits">Pagamentos debitados direto da sua conta do FGTS sem comprometer sua renda mensal</p>
           </li>
           <li>
             <img src="../../assets/mouse.jpg">
             <p class="text-benefits">Contratação em poucos cliques, tudo 100% digital</p>
           </li>
         </ul>
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style scoped>
.text{
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 180%;
/* or 29px */

text-align: center;
letter-spacing: 0.02em;

color: #000000;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    margin-top: 30px;
    width: 300px;
    border-radius: 0px 0px 42px 42px;
}
.container-text {
    max-width: 310px;
    margin: 0 auto;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 180%;
  letter-spacing: 0.02em;
  color: #000000;

}

.tittle-2 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 180%;
  text-align: center;
  letter-spacing: 0.02em;
  margin-top: 49.5px;
  color: #1f2d27;
}
.container-text-2 {
  max-width: 290px;
  margin: 0 auto;
  padding: 23px;
}
.benefits {
  display: flex;
  flex-direction: column;
  text-align: center;
  list-style: none;
  padding: 0;
  margin-top: 40px;
}
.text-benefits {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 180%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
}


</style>