import auth0 from 'auth0-js';
import {
  AUTH_DATA,
  LOGIN_SUCCESS_PAGE,
  LOGIN_FAILURE_PAGE
} from './AuthConstants';

/*eslint no-restricted-globals: 0*/

export default class Auth {
  auth0 = new auth0.WebAuth(AUTH_DATA);

  login = () => {
    this.auth0.authorize();
  };

  handleAuthentication = () => {
    this.auth0.parseHash((error, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken) {
        let expiresAt = JSON.stringify(
          authResults.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem('access_token', authResults.accessToken);
        localStorage.setItem('id_token', authResults.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.hash = '';
        location.pathname = LOGIN_SUCCESS_PAGE;
      } else if (error) {
        location.pathname = LOGIN_FAILURE_PAGE;
        console.log(error);
      }
    });
  };

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  };

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('hash');
    location.pathname = LOGIN_FAILURE_PAGE;
  };
}
