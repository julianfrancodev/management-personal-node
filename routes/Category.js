import routerx from 'express-promise-router';
import CategoryController from '../controllers/CategoryController';
import Auth from '../middlewares/Auth';

const router = routerx();

router.post('/v1/add', Auth.verifyAdmin, CategoryController.add);
router.get('/v1/query', Auth.verifyAdmin, CategoryController.query);
router.get('/v1/list', Auth.verifyAdmin, CategoryController.list);
router.put('/v1/update', Auth.verifyAdmin, CategoryController.update);
router.delete('/v1/delete', Auth.verifyAdmin, CategoryController.remove);
router.put('/v1/activate', Auth.verifyAdmin, CategoryController.activate);
router.put('/v1/deactivate', Auth.verifyAdmin, CategoryController.deactivate);

export default router;

