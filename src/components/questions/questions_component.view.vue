<template>
  <section class="frequent-questions" id="questions">
    <h1 class="tittle"><span>Perguntas</span> Frequentes</h1>
    <div @click="changeActive" class="container-question">
      <div :class="questionStatus">
        <p>Como funciona a antecipação Saque-Aniversário?</p>
      </div>
      <div v-show="statusAnswer" class="answer">
        <div class="questions-inside-container" v-for="(question, index) in questions.question1" :key="index">
          <h1>{{ question.tittle }}</h1>
          <p>{{ question.paragraph }}</p>
        </div>
      </div>
    </div>
    <div @click="changeActive2" class="container-question">
      <div :class="questionStatus2">
        <p>Como funciona a antecipação Saque-Aniversário?</p>
      </div>
      <div v-show="statusAnswer2" class="answer">
        <div class="questions-inside-container" v-for="(question, index) in questions.question2" :key="index">
          <h1>{{ question.tittle }}</h1>
          <p>{{ question.paragraph }}</p>
        </div>
      </div>
    </div>
    <div @click="changeActive3" class="container-question">
      <div :class="questionStatus3">
        <p>Onde baixar o App FGTS?</p>
      </div>
      <div v-show="statusAnswer3" class="answer">
        <div class="questions-inside-container" v-for="(question, index) in questions.question3" :key="index">
          <h1>{{ question.tittle }}</h1>
          <p>{{ question.paragraph }}</p>
        </div>
        <ol>
          <li v-for="questionList in questions.question3List ">{{questionList}}</li>
        </ol>
      </div>
    </div>
    <a :href="url" target="_blank" class="linkQuestions">Mais Perguntas</a>
  </section>
</template>

<script>
export default {
  data() {
    return {
      questionStatus: 'question',
      statusAnswer: '',
      questionStatus2: 'question2',
      statusAnswer2: '',
      questionStatus3: 'question3',
      statusAnswer3: '',
      questionStatus4: 'question4',
      statusAnswer4: '',
      questionStatus5: 'question5',
      statusAnswer5: '',
      questionStatus6: 'question6',
      statusAnswer6: '',

      questions: {
        question1: [{
          tittle: 'Quem pode contratar?',
          paragraph: 'Todos os trabalhadores com carteira assinada ou com contas inativas do FGTS que optarem pelo\n' +
              '            saque-aniversário poderão solicitar essa modalidade de crédito.'
        },
          {
            tittle: 'Negativados do SPC/SERASA podem antecipar o saque-aniversário do FGTS?',
            paragraph: 'Sim! Mesmo com restrições no SPC/SERASA, é possível contratar essa modalidade de crédito.\n' +
                '            Isso acontece porque essa não é uma linha de crédito comum, é uma antecipação com juros de um dinheiro que é\n' +
                '            seu e está no FGTS. Inclusive, você pode solicitar a Antecipação do Saque-Aniversário para quitar dívidas emergenciais e ficar\n' +
                '            com o nome limpo no mercado. O único impedimento sobre nome negativado para contratação é no caso se seu CPF\n' +
                '            estiver com restrição na Secretaria da Fazenda.'
          },
          {
            tittle: 'Diferença entre Saque-Aniversário e Antecipação Saque-Aniversário',
            paragraph: 'O saque-aniversário é uma modalidade de saque do FGTS. Já a Antecipação do Saque-Aniversário é a\n' +
                '            possibilidade de crédito tendo como garantia o saldo do FGTS.'
          },
          {
            tittle: 'Qual o tempo de espera para solicitar a antecipação?',
            paragraph: 'Assim que optar pelo saque-aniversário, você já pode imediatamente fazer a solicitação de antecipação das\n' +
                '            suas parcelas.'
          },
          {
            tittle: 'Como pagar as parcelas do empréstimo?',
            paragraph: 'As parcelas são debitadas uma vez ao ano, automaticamente da sua conta FGTS em que o saldo foi usado como\n' +
                '            garantia de crédito. Anualmente, quando o seu saque-aniversário for depositado, o valor da parcela mais\n' +
                '            juros serão descontados.'
          },],

        question2: [{
          tittle: 'Qual a taxa de juros?',
          paragraph: 'A taxa de juros para fazer a antecipação saque-aniversário na FGTS-JA é de 1,99% a.m.'
        },
          {
            tittle: 'Quantas parcelas posso antecipar?',
            paragraph: 'Com a FGTS-JA você poderá antecipar até 5 parcelas anuais do seu saque-aniversário.'
          },
          {
            tittle: 'Como autorizar a FGTS-JA a consultar meu saldo?',
            paragraph: 'Esse passo é necessário para que a gente consiga confirmar o seu saldo no FGTS e liberar a antecipação saque-aniversário com as melhores condições. Não se preocupe, pois é completamente seguro e nós só iremos conferir o valor na sua conta, nada mais.\n' +
                '\n' +
                'Após baixar o aplicativo do FGTS e fazer seu login, vá na opção "Autorizar Bancos a consultarem o seu FGTS".\n' +
                'Você vai ser direcionado para a tela "Selecionar instituição financeira". Clique em "Instituição Financeira" e você verá um campo de busca para digitar nome.\n' +
                'Digite "FIDUCIA SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR" na tela de busca da instituição. Essa é a nossa parceira nessa modalidade de crédito.\n' +
                'Em seguida, confirme sua seleção e clique em "Sim" para autorizar a FGTS-JA a consultar o seu saldo do FGTS. Pronto!'
          },
        ],
        question3: [{
          tittle: 'Onde baixar o App FGTS?',
          paragraph: 'Nas lojas oficiais Play Store e Apple Store você pode baixar o aplicativo FGTS para aproveitar os benefícios. Lembre que não é bom confiar em outras fontes para baixar o aplicativo, então siga do jeito mais seguro e baixe nas lojas oficiais.'
        },
          {tittle: 'Como fazer o cadastro no app FGTS?',}],
         question3List: ['Abra o aplicativo e clique na opção “cadastre-se”;', 'Preencha todos os campos solicitados. Aqui terão informações como nome completo, CPF, data de nascimento e email. Revise após preencher;', 'Cadastre uma senha numérica de 6 dígitos. É importante que seja uma senha forte, então evite data de aniversário ou sequências lógicas;',
          'Clique no botão “não sou um robô”;', 'Chegará um email de confirmação para você. Abra seu email e clique no link da mensagem que foi enviada;', 'Agora faça o login com seu CPF e com a senha cadastrada;', 'Aparecerão algumas perguntas, responda para verificação;',
          'Leia as condições de uso e marque a caixinha “li e concordo”, depois clique em continuar.']
      },
    }
  },
  methods: {
    changeActive() {
      if (this.statusAnswer == true) {
        this.statusAnswer = false;
        this.questionStatus = 'question';
      } else {
        this.statusAnswer = true;
        this.questionStatus = 'question active';
      }
    },
    changeActive2() {
      if (this.statusAnswer2 == true) {
        this.statusAnswer2 = false;
        this.questionStatus2 = 'question';
      } else {
        this.statusAnswer2 = true;
        this.questionStatus2 = 'question active';
      }
    },
    changeActive3() {
      if (this.statusAnswer3 == true) {
        this.statusAnswer3 = false;
        this.questionStatus3 = 'question';
      } else {
        this.statusAnswer3 = true;
        this.questionStatus3 = 'question active';
      }
    },
    changeActive4() {
      if (this.statusAnswer4 == true) {
        this.statusAnswer4 = false;
        this.questionStatus4 = 'question';
      } else {
        this.statusAnswer4 = true;
        this.questionStatus4 = 'question active';
      }
    },
    changeActive5() {
      if (this.statusAnswer5 == true) {
        this.statusAnswer5 = false;
        this.questionStatus5 = 'question';
      } else {
        this.statusAnswer5 = true;
        this.questionStatus5 = 'question active';
      }
    },
    changeActive6() {
      if (this.statusAnswer6 == true) {
        this.statusAnswer6 = false;
        this.questionStatus6 = 'question';
      } else {
        this.statusAnswer6 = true;
        this.questionStatus6 = 'question active';
      }
    },
  },
  computed: {
    url() {
      return 'https://www.wppredirect.tk/go/?p=5527999011449&m=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre.'
    }
  },
  created() {
    this.statusAnswer = false;
    this.statusAnswer2 = false;
    this.statusAnswer3 = false;
    this.statusAnswer4 = false;
    this.statusAnswer5 = false;
    this.statusAnswer6 = false;
  },
}
</script>

<style scoped>
.questions-inside-container ul {
  padding: 0;
}

.questions-inside-container ul li {
  list-style: none;
  margin: 10px 0;
}

.frequent-questions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.container-question {
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 360px;
  margin: auto;
  padding-bottom: 20px;
}

.question {
  display: flex;
  justify-content: center;
  align-content: center;
  background: linear-gradient(to right, #11bb77 6px, #ffffff 6px);
  width: 320px;
  height: 56px;
  padding: 6px 15.99px 6px 19px;
  margin: auto;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 136%;
  letter-spacing: 0.02em;
  box-shadow: 0px 3px 17px rgba(31, 45, 39, 0.4);
  border-radius: 8px;
  color: #1f2d27;
}

.question p {
  align-self: center;
  margin-bottom: 0;
}

.frequent-questions h1 {
  margin-top: 10px;
}

.question:last-child {
  margin-bottom: 39px;
}

.question.active {
  color: #ffffff;
  position: relative;
  z-index: 2;
  background: linear-gradient(
      to right,
      rgba(31, 45, 39, 1) 6px,
      rgba(17, 187, 119, 1) 6px
  );
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 136%;
  letter-spacing: 0.02em;
  box-shadow: 0px 3px 17px rgba(31, 45, 39, 0.4);
  border-radius: 8px;
}

.question2 {
  display: flex;
  text-align: center;
  justify-content: center;
  background: linear-gradient(to right, #11bb77 6px, #ffffff 6px);
  width: 320px;
  height: 56px;
  padding: 6px 15.99px 6px 19px;
  margin: auto;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 136%;
  letter-spacing: 0.02em;
  box-shadow: 0px 3px 17px rgba(31, 45, 39, 0.4);
  border-radius: 8px;
  color: #1f2d27;
}

.question2:last-child {
  margin-bottom: 39px;
}

.question2.active {
  color: #ffffff;
  position: relative;
  z-index: 2;
  background: linear-gradient(
      to right,
      rgba(31, 45, 39, 1) 6px,
      rgba(17, 187, 119, 1) 6px
  );
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 136%;
  letter-spacing: 0.02em;
  box-shadow: 0px 3px 17px rgba(31, 45, 39, 0.4);
  border-radius: 8px;
}

.question3 {
  background: linear-gradient(to right, #11bb77 6px, #ffffff 6px);
  width: 320px;
  height: 56px;
  padding: 6px 15.99px 6px 19px;
  margin: auto;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 136%;
  letter-spacing: 0.02em;
  box-shadow: 0px 3px 17px rgba(31, 45, 39, 0.4);
  border-radius: 8px;
  color: #1f2d27;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
}

.question3:last-child {
  margin-bottom: 39px;
}

.question3.active {
  color: #ffffff;
  position: relative;
  z-index: 2;
  background: linear-gradient(
      to right,
      rgba(31, 45, 39, 1) 6px,
      rgba(17, 187, 119, 1) 6px
  );
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 136%;
  letter-spacing: 0.02em;
  box-shadow: 0px 3px 17px rgba(31, 45, 39, 0.4);
  border-radius: 8px;
}

.question4 {
  background: linear-gradient(to right, #11bb77 6px, #ffffff 6px);
  width: 320px;
  height: 56px;
  padding: 6px 15.99px 6px 19px;
  margin: auto;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 136%;
  letter-spacing: 0.02em;
  box-shadow: 0px 3px 17px rgba(31, 45, 39, 0.4);
  border-radius: 8px;
  color: #1f2d27;
}

.question4:last-child {
  margin-bottom: 39px;
}

.question4.active {
  color: #ffffff;
  position: relative;
  z-index: 2;
  background: linear-gradient(
      to right,
      rgba(31, 45, 39, 1) 6px,
      rgba(17, 187, 119, 1) 6px
  );
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 136%;
  letter-spacing: 0.02em;
  box-shadow: 0px 3px 17px rgba(31, 45, 39, 0.4);
  border-radius: 8px;
}

.question5 {
  background: linear-gradient(to right, #11bb77 6px, #ffffff 6px);
  width: 320px;
  height: 56px;
  padding: 6px 15.99px 6px 19px;
  margin: auto;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 136%;
  letter-spacing: 0.02em;
  box-shadow: 0px 3px 17px rgba(31, 45, 39, 0.4);
  border-radius: 8px;
  color: #1f2d27;
}

.question5:last-child {
  margin-bottom: 39px;
}

.question5.active {
  color: #ffffff;
  position: relative;
  z-index: 2;
  background: linear-gradient(
      to right,
      rgba(31, 45, 39, 1) 6px,
      rgba(17, 187, 119, 1) 6px
  );
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 136%;
  letter-spacing: 0.02em;
  box-shadow: 0px 3px 17px rgba(31, 45, 39, 0.4);
  border-radius: 8px;
}

.question6 {
  background: linear-gradient(to right, #11bb77 6px, #ffffff 6px);
  width: 320px;
  height: 56px;
  padding: 6px 15.99px 6px 19px;
  margin: auto;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 136%;
  letter-spacing: 0.02em;
  box-shadow: 0px 3px 17px rgba(31, 45, 39, 0.4);
  border-radius: 8px;
  color: #1f2d27;
}

.question6:last-child {
  margin-bottom: 39px;
}

.question6.active {
  color: #ffffff;
  position: relative;
  z-index: 2;
  background: linear-gradient(
      to right,
      rgba(31, 45, 39, 1) 6px,
      rgba(17, 187, 119, 1) 6px
  );
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 136%;
  letter-spacing: 0.02em;
  box-shadow: 0px 3px 17px rgba(31, 45, 39, 0.4);
  border-radius: 8px;
}

.answer {
  display: flex;
  flex-direction: column;
  width: 320px;
  height: fit-content;
  background: #ffffff;
  box-shadow: 0px 13px 24px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0 20px 20px;
  padding: 20px;
  z-index: 1;
}

.answer p {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 180%;
  letter-spacing: 0.02em;
  color: #000000;
}

.linkQuestions {
  margin-top: 20px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 160%;
  text-align: center;
  text-decoration-line: underline;
  color: #3877bb;
}
ol li {
  margin-top: 20px;
}

.questions-inside-container h1 {
  text-align: center;
}

.questions-inside-container p {
  text-align: justify;
}

.questions-inside-container ol li {
  margin: 20px 0;
}
</style>