
const cardanoService = require('../service/CardanoService')
class CardanoController {
  async getTx(req, res, next) {
    try {
      req.data = await cardanoService.getTx(req.params.addr);
      next();
    } catch (err) {
      console.log(err)
      next(err);
    }
  }

  async submitTx(req, res, next) {
    try {
      req.data = await cardanoService.submitTx(req.body);
      next();
    } catch (err) {
      console.log(err)
      next(err);
    }
  }

}
module.exports = new CardanoController();
