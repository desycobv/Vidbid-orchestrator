const vidBidService = require("../service/VidBidService");
const { logger } = require("../utils/logger/logger");

class VidBidController {
    async healthcheck(req, res, next) {
        try {
            req.data = await vidBidService.healthcheck();
            next();
        } catch (err) {
            next(err);
        }
    }

}

module.exports = new VidBidController();
