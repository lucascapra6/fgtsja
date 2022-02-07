<template>
    <section class="contract" id="tutorial">
        <div class="container">
            <img class="phone-contract" src="../../assets/phone-contract.png" alt="">
            <h1 class="tittle">Como <span>contratar?</span></h1>
            <p class="container-text">O optante pelo saque aniversário do FGTS pode antecipar até 5 saques-aniversário, recebendo direto em sua conta corrente em até 24h úteis.</p>
            <div class="linkContent">
                <button class="button-tutorial" @click="$emit('link')">Passo a passo</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.phone-contract{
  margin-bottom: 30px;
}

.button-tutorial {
  box-shadow: 0px 3.15551px 31.5551px rgba(231, 234, 238, 0.07);
  width: 200px;
  height: 60px;
  background: #11bb77;
  color: #FFFFFF;
  border-radius: 20px;
  text-decoration: none;
  font-size: 19px;
}
.linkContent{
    display: flex;
    justify-content: center;
}
button{
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 38px;
    text-align: center;
    text-decoration-line: underline;
    margin-bottom: 30px;
    margin-top:20px;
    color: #11BB77;
}
</style>