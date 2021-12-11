import { Router } from 'express';
import userRouter from './user.routes';
import pixRouter from './pix.routes';
import cors from 'cors';
const routes = Router();

routes.use(cors());
routes.use('/user', userRouter);
routes.use('/pix', pixRouter);

export default routes;
