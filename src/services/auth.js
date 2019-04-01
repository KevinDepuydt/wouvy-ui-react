import rp from 'request-promise-native';
import env from '../env';

export default class AuthService {
  static signin(credentials) {
    return rp({
      uri: `${env.apiUrl}/api/auth/signin`,
      method: 'post',
      body: credentials,
      json: true,
    });
  }

  static signup(credentials) {
    return rp({
      uri: `${env.apiUrl}/api/auth/signup`,
      method: 'post',
      body: credentials,
      json: true,
    });
  }
}
