import rp from 'request-promise-native';
import env from '../env';

export default class ApiService {
  apiUrl = `${env.apiUrl}/api`;

  constructor(token) {
    this.token = token;
    this.baseRequest = rp.defaults({
      headers: {
        'x-api-token': token,
      },
      json: true,
    })
  }

  get(path) {
    return this.baseRequest({
      method: 'get',
      uri: `${this.apiUrl}/${path}`,
    });
  }

  post(path, body) {
    return this.baseRequest({
      method: 'post',
      uri: `${this.apiUrl}/${path}`,
      body,
    });
  }

  put(path, body) {
    return this.baseRequest({
      method: 'put',
      uri: `${this.apiUrl}/${path}`,
      body,
    });
  }

  delete(path) {
    return this.baseRequest({
      method: 'delete',
      uri: `${this.apiUrl}/${path}`,
    });
  }
}
