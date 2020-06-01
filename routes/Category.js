import routerx from 'express-promise-router';
import CategoryController from '../controllers/CategoryController';

const router = routerx();

router.post('/v1/add',CategoryController.add);
router.get('/v1/query',CategoryController.query);
router.get('/v1/list',CategoryController.list);
router.put('/v1/update',CategoryController.update);
router.delete('/v1/delete',CategoryController.remove);
router.put('/v1/activate',CategoryController.activate);
router.put('/v1/deactivate',CategoryController.deactivate);

export default router;

