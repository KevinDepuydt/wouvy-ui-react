import ApiService from './api';

class WorkflowService extends ApiService {
  async list() {
    return this.get('/workflows');
  }

  async create(workflow) {
    return this.post('/workflows', workflow);
  }
}

export default WorkflowService;
