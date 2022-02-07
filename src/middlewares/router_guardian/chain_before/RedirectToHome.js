import AbstractUrlHandler from './AbstractUrlHandler';

class RedirectToHome extends AbstractUrlHandler {

  accepts({to, from, next}) {
    return (to.path == '/login' ||  to.path == '/') && localStorage.getItem('Authorization');
  }

  process({to, from, next}) {

    const role = localStorage.getItem('Role')
    if (!role) localStorage.setItem('Role', 'user');
    role == 'admin' ? next({name: 'AdminHome'}) : next({name: 'UserHome'});
  }

}


export default new RedirectToHome();