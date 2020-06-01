import routerx from 'express-promise-router';
import CategoryRouter from './Category';
import PersonRouter from './Person';

const router = routerx();

router.use('/category',CategoryRouter);
router.use('/person',PersonRouter);

export default router;