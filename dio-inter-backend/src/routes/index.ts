import { Router } from 'express';
import userRouter from './user.routes';
import pixRouter from './pix.routes';
import cors from 'cors'
const routes = Router();

// routes.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type:application/json, Accept");
//   next();
// });
routes.use(cors())
routes.use('/user', userRouter);
routes.use('/pix', pixRouter);

export default routes