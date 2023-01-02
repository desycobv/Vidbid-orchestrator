const express = require('express');
const errorMiddleware = require("../middleware/errorMiddleware");


const apiRouter = express.Router();

apiRouter.use("/api",require('./VidBid'));
apiRouter.use(require('./health'));

// API response handling
apiRouter.use((req, res, next) => {
    if (!req.route) {
        res.status(404);
    } else {
        res.status(200);
        res.json({status: "success", data: req.data});
        return;
    }
    next();
});

apiRouter.use(errorMiddleware);


module.exports = apiRouter;
