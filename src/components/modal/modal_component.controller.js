import AbstractController from "$services/abstract-controller_service.services";
import SimuladorFGTS from "$business/simuladorFGTS"
import {addYears, differenceInDays, isLeapYear} from "date-fns";
const simuladorFGTS = new SimuladorFGTS(1.99);

class modalComponentController extends AbstractController {

    constructor(scope) {
        super(scope)
        this.numeroSaques = 5
    }

    mudaStatusAtivo() {
        if (this.scope.botaoAtivado == true) {
            this.scope.botaoAtivado = false;
            this.scope.realizarSimulacao = false;
        } else {
            this.scope.botaoAtivado = true;
        }
    }

    simular() {
        this.realizarSimulacao = true;
        const tempoEmMs = Date.now();
        const diaAtual = new Date(tempoEmMs);
        const anoAtual = new Date().getFullYear();
        const mesAniversario = new Date(anoAtual, this.scope.valorMesSelecionado, 1, 0, 0)
        const diferencaEmDiasDoAniversario = differenceInDays(mesAniversario, diaAtual)
        this.numeroSaques = this.scope.opcoesAno[(this.scope.anoSelecionado - 1)].value || this.numeroSaques;
        const listaAnosBissextos = this._criaListaDeAnoBissexto({diaAtual, quantidadeDeAnos: this.numeroSaques})
        this.scope.realizarSimulacao = true;
        this.scope.valorDisponivel = simuladorFGTS.calcular({
            valorDesejado: parseFloat(this.scope.saqueSolicitado),
            diferencaEmDiasDoAniversario: diferencaEmDiasDoAniversario + 1,
            numeroSaques: this.numeroSaques,
            listaAnosBissextos: listaAnosBissextos
        })
    }

    _criaListaDeAnoBissexto({diaAtual, quantidadeDeAnos}) {
        const listaAnoBissexto = []
        let proximaData = diaAtual;
        for (let i = 0; i < quantidadeDeAnos; i++) {
            proximaData = addYears(proximaData, 1)
            listaAnoBissexto.push(isLeapYear(proximaData))
        }
        return listaAnoBissexto;
    }

}


export default modalComponentController
