import routerx from 'express-promise-router';
import PersonController from '../controllers/PersonController';

const router = routerx();

router.post('/v1/add',PersonController.add);
router.get('/v1/query',PersonController.query);
router.get('/v1/list',PersonController.list);
router.put('/v1/update',PersonController.update);
router.delete('/v1/delete',PersonController.remove);
router.put('/v1/activate',PersonController.activate);
router.put('/v1/deactivate',PersonController.deactivate);

export default router;