import routerx from 'express-promise-router';
import CategoryRouter from './Category';
import PersonRouter from './Person';
import UserRouter from './User';

const router = routerx();

router.use('/category', CategoryRouter);
router.use('/person', PersonRouter);
router.use('/user', UserRouter);


export default router;