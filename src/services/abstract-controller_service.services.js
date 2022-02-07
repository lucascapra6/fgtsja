import router from '@/routes.js';

class AbstractController {
  constructor(scope) {
    this.scope = scope;
    this.router = router;
  }
}
export default AbstractController;
