import AbstractController from '$services/abstract-controller_service.services'

class TutorialModal extends AbstractController {
    constructor(scope) {
        super(scope)
    }

    avancarPasso() {
        if(this.scope.passoAtual < this.scope.passos.length) {
            this.scope.passoAtual++
        }
    }
    voltarPasso() {
        if(this.scope.passoAtual > 1) {
            this.scope.passoAtual--
        }
    }
}

export default TutorialModal
