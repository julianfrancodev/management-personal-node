import routerx from 'express-promise-router';
import PersonController from '../controllers/PersonController';
import Auth from '../middlewares/Auth';

const router = routerx();

router.post('/v1/add', Auth.verifyEmployee, PersonController.add);
router.get('/v1/query', Auth.verifyEmployee, PersonController.query);
router.get('/v1/list', Auth.verifyEmployee, PersonController.list);
router.put('/v1/update', Auth.verifyEmployee, PersonController.update);
router.delete('/v1/delete', Auth.verifyEmployee, PersonController.remove);
router.put('/v1/activate', Auth.verifyEmployee, PersonController.activate);
router.put('/v1/deactivate', Auth.verifyEmployee, PersonController.deactivate);

export default router;