<template>
  <div>
    <div v-show="botaoAtivado" class="modal-simule flex">
      <div v-show="!realizarSimulacao" class="modal-simule-container align-center">
        <h1 class="tittle">Simule</h1>
        <div class="line"></div>
        <p class="saldo-question">Qual o seu saldo FGTS?</p>
        <input v-model="saqueSolicitado" class="saldo-input" placeholder="R$" type="number">
        <div class="month">
          <p class="saldo-question">Qual mês você faz aniversário?</p>
          <select v-model="valorMesSelecionado" class="selectMonth">
            <option v-for="(option, index) in opcoesMes" :key="index" :value="option.value">{{ option.mes }}
            </option>
          </select>
          <a class="acess-fgts-app" href="https://www.instagram.com/fgtsja.oficial/">Saiba mais!</a>
        </div>
        <p class="saldo-question2">Não lembra de suas informações?</p>
        <button class="botao-simular" @click="controller.simular()">Simular</button>
        <p class="fechar-pagina" @click="controller.mudaStatusAtivo()">Não, obrigado</p>
      </div>

      <div v-show="realizarSimulacao" class="modal-simule-container align-center">
        <h1 class="tittle">Você tem direito a:</h1>
        <div class="line"></div>
        <p class="saldo">{{ valorDisponivel | currencyFilter}}</p>
        <p class="saldo-question">Você gostaria de antecipar quantos anos do saque-aniversário?</p>
        <select v-model="anoSelecionado" class="selectMonth" @change="controller.simular()">
          <option v-for="(option, index) in opcoesAno" :key="index" :value="option.value">{{ option.label }}</option>
        </select>
        <p class="saldo-question">Quer saber como resgatar? Fale com os nossos representantes!</p>
        <div class="flex">
          <button class="botao-simular"><a :href="url" class="linkRepresentante" target="_blank">Quero agora!</a>
          </button>
        </div>
        <p class="fechar-pagina" @click="realizarSimulacao=false">Ressimular</p>
      </div>
      <div class="closeSimule" @click="controller.mudaStatusAtivo()"></div>
    </div>
    <ButtonSimule @simulation="controller.mudaStatusAtivo()"/>
    <Navigation @simulation="controller.mudaStatusAtivo()"></Navigation>
  </div>
</template>

<script>
import ButtonSimule from '../button-simule/button-simule_component.view';
import {differenceInDays} from 'date-fns';
import ModalComponentController from './modal_component.controller'
import {currencyFilter} from '$services/converters_service.services';
import Navigation from "../navigation/navigation_component.view"

export default {
  name: 'Modal',
  components: {
    ButtonSimule,
    Navigation
  },
  filters: {
    currencyFilter
  },
  data() {
    return {
      controller: null,
      botaoAtivado: false,
      realizarSimulacao: false,
      valueSimulate: '',
      valorMesSelecionado: 0,
      anoSelecionado: 5,
      saqueSolicitado: '',
      valorDisponivel: 0,
      opcoesMes: [
        {mes: 'Janeiro', value: 0},
        {mes: 'Fevereiro', value: 1},
        {mes: 'Março', value: 2},
        {mes: 'Abril', value: 3},
        {mes: 'Maio', value: 4},
        {mes: 'Junho', value: 5},
        {mes: 'Julho', value: 6},
        {mes: 'Agosto', value: 7},
        {mes: 'Setembro', value: 8},
        {mes: 'Outubro', value: 9},
        {mes: 'Novembro', value: 10},
        {mes: 'Dezembro', value: 11},
      ],
      opcoesAno: [
        {label: '1 aniversário', value: 1},
        {label: '2 aniversário', value: 2},
        {label: '3 aniversário', value: 3},
        {label: '4 aniversário', value: 4},
        {label: '5 aniversário', value: 5},
      ]
    };
  },
  computed: {
    url() {
      return `https://www.wppredirect.tk/go/?p=5527999011449&m=Gostaria%20de%20sacar%20R$%20${this.saqueSolicitado},%20meu%20anivers%C3%A1rio%20%C3%A9%20${this.opcoesMes[this.valorMesSelecionado].mes}.${this.anoSelecionado}`
    }
  },
  beforeMount() {
    this.controller = new ModalComponentController(this);
  }
}
</script>

<style scoped>
.flex {
  display: flex;
}
.align-center {
  text-align: center;
}

.selectMonth {
  margin-top: 7px;
  margin: auto;
  display: block;
  width: 300px;
  height: 50px;
  background: #ffffff;
  opacity: 0.5;
  border: 3px solid #244d3b;
  box-sizing: border-box;
  box-shadow: 0px 13px 24px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
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
  z-index: 6;
}

.modal-simule-container {
  padding: 20px;
  position: absolute;
  width: 375px;
  height: 450px;
  background: white;
  border-radius: 20px;
  position: absolute;
  z-index: 6;
}

.line {
  margin: auto;
  margin-top: 4px;
  max-width: 302px;
  height: 1px;
  background: rgba(0, 0, 0, 0.2);
}

/****************************************/
.tittle {
  margin-top: 15px;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  color: #1f2d27;
}

.saldo-question {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */
  letter-spacing: 0.02em;
  color: #1f2d27;
}
.saldo-input {
  margin-top: 7px;
  margin: auto;
  display: block;
  width: 300px;
  height: 50px;
  background: #ffffff;
  opacity: 0.5;
  border: 3px solid #244d3b;
  box-sizing: border-box;
  box-shadow: 0px 13px 24px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
}

.saldo-question2 {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 160%;
  text-align: center;
  color: #1f2d27;
}

.acess-fgts-app {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 160%;
  text-align: center;
  margin-top: 5px;
  text-decoration-line: underline;
  color: #3877bb;
}

.saldo {
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 0.02em;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #11bb77;
}

button {
  display: block;
  margin: auto;
}

.modal-simule::before {
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(58, 83, 72, 0.1);
}

.saldo-question {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 160%;
  text-align: center;
  color: #1f2d27;
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 0 20px;
}

.acess-fgts-app {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 160%;
  text-align: center;
  text-decoration-line: underline;
  color: #3877bb;
}

button {
  display: block;
  margin: auto;
}

.month {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.botao-simular {
  cursor: pointer;
  color: white;
  font-size: 19px;
  width: 320px;
  height: 63px;
  background: #11bb77;
  box-shadow: 0px 3.15551px 31.5551px rgba(231, 234, 238, 0.07);
  border-radius: 16.8294px;
  margin-top: 10px;
  border: none;
}

.buttons-simulate {
  cursor: pointer;
  color: white;
  font-size: 19px;
  width: 160px;
  height: 63px;
  background: #11bb77;
  box-shadow: 0px 3.15551px 31.5551px rgba(231, 234, 238, 0.07);
  border-radius: 16.8294px;
  margin-top: 14px;
  border: none;
}

.fechar-pagina {
  cursor: pointer;
  width: 121px;
  margin: 16.94px auto 26.94px auto;
  padding: 10px;
  font-weight: bold;
  margin-top: 5px;
  padding: 10px 0;
}

.linkRepresentante {
  text-decoration: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 21px;
  text-align: center;

  color: #FFFFFF;
}

body,
h1,
p,
h2,
ul,
li {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}

* {
  box-sizing: border-box;
}

.closeSimule {
  position: fixed;
  top: 0;
  z-index: 4;
  background: rgba(31, 45, 39, 0.9);
  height: 100%;
  width: 100vw;
}
</style>
