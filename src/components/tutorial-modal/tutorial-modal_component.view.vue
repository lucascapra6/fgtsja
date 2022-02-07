<template>
    <div v-show="info" class="modal-simule flex">
          <div class="closeSimule"  @click="$emit('link')"></div>
          <div class="modal-tutorial-container align-center">
            <div class="container-tittle">
              <span class="nextStep">Passos</span>
              <h1 class="tittleText"> para contratar o serviço:</h1>
            </div>
            <div class="lineNoMargin">
            </div>
            <div class="container-text">
              <p class="passo-1">Passo<span> {{passoAtual}}</span></p>
              <div class="container-passos">
                <p class="text">{{passos[passoAtual - 1]}}</p>
              </div>
              <div class="flex space-between">
                <button class="button-steps-tutorial" @click="controller.voltarPasso()">Passo Anterior</button>
                <button class="button-steps-tutorial" @click="controller.avancarPasso()">Próximo Passo</button>
              </div>
              <p @click="$emit('link')" class="fechar-pagina">Ok, obrigado</p>
            </div>
          </div>
    </div>
</template>

<script>
import TutorialModalController from "./tutorial-modal_component.controller"
export default {
    name: 'TutorialModal',
    props: {
        info: Boolean
    },
    data:() =>({
      controller: null,
      passos: [
        "Baixe o aplicativo FGTS no seu celular. Baixe na Google Play e também na App Store.",
        "Aperte no botão ”Meus saques” e escolha a modalidade “Saque aniversário”.",
        "No aplicativo, autorize o acesso do QI SOCIEDADE DE CRÉDITO às informações do seu saque de aniversário.",
        "Simule e entre em contato com nossa equipe para envio de documentos e assinatura do contrato"
      ],
      passoAtual: 1
    }),
    beforeMount() {
      this.controller = new TutorialModalController(this)
    },
}
</script>

<style scoped>
.modal-tutorial::before {
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(31, 45, 39, 0.9);
}
.modal-tutorial {
  height: 100vh;
  justify-content: center;
  align-items: flex-end;
}
.modal-tutorial-container {
  position: absolute;
  padding: 20px;
  width: 375px;
  height: 380px;
  background: white;
  border-radius: 20px;
}

.closeSimule{
  position: fixed;
  top: 0;
  background: rgba(31, 45, 39, 0.9);
  height: 100%;
  width: 100vw;
}
.modal-simule {
  content: "";
  position: fixed;
  top: 0vh;
  left: 0px;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: flex-end;
  z-index: 5;
}
.container-tittle {
  max-width: 300px;
  margin: 0 auto;
}
.nextStep {
  margin-top: 20px;
  color: #11bb77;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
}
.tittleText{
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 38px;
  text-align: center;
  color: #1f2d27;
}
.lineNoMargin{
  margin: auto;
  margin-top: 4px;
  max-width: 302px;
  height: 1px;
  background: rgba(0, 0, 0, 0.2);
}
.container-passos {
  height: 100px;
  margin-bottom: 10px;
}
.passo-1 {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */
  letter-spacing: 0.02em;
  color: #1f2d27;
  text-align: left;
  margin-left: 30px;
  margin-top: 14px;
}
.passo-1 span {
  color: #11bb77;
}
.button-steps-tutorial {
    width: 150px;
    height: 50px;
    background: #11BB77;
    box-shadow: 0px 3.15551px 31.5551px rgba(231, 234, 238, 0.07);
    border-radius: 16.8294px;
}
.fechar-pagina {
    cursor: pointer;
    margin-top: 5px;
    margin-bottom: 0;
    padding: 10px;
    font-weight: bold;
}
.tutorial-link{
  margin-bottom: 150px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  text-decoration-line: underline;

  color: #11BB77;
}
</style>