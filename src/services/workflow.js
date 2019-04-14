import ApiService from './api';

class WorkflowService extends ApiService {
  async list() {
    return this.get('/workflows');
  }
}

export default WorkflowService;
