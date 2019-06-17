import rp from 'request-promise-native';
import env from '../env';
import { USER_TOKEN_KEY } from '../contexts/AuthContext';

export default class ApiService {
  apiUrl = `${env.apiUrl}/api`;

  constructor() {
    const token = localStorage.getItem(USER_TOKEN_KEY);

    if (!token) {
      throw new Error('User is not authenticated');
    }

    this.baseRequest = rp.defaults({
      headers: {
        'x-api-token': token,
        'content-type': 'application/json',
      },
      json: true,
    });
  }

  async get(path) {
    return this.baseRequest({
      method: 'get',
      uri: `${this.apiUrl}${path}`,
    });
  }

  async post(path, body) {
    return this.baseRequest({
      method: 'post',
      uri: `${this.apiUrl}${path}`,
      body,
    });
  }

  async put(path, body) {
    return this.baseRequest({
      method: 'put',
      uri: `${this.apiUrl}${path}`,
      body,
    });
  }

  async delete(path) {
    return this.baseRequest({
      method: 'delete',
      uri: `${this.apiUrl}${path}`,
    });
  }
}
