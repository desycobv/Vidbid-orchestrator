class DemoService {
  async getDemo() {
    return "This is an awesome DEMO."
  }
}

module.exports = new DemoService();