import ApiService from './api';

class UserService extends ApiService {
  async update(user) {
    return this.put(`/users/${user._id}`, user);
  }

  async updatePassword(userId, credentials) {
    return this.put(`/users/${userId}/password`, credentials);
  }
}

export default new UserService();
