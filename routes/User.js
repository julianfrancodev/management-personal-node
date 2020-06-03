import routerx from 'express-promise-router';
import UserController from '../controllers/UserController';
import Auth from '../middlewares/Auth';

const router = routerx();

router.post('/v1/add',UserController.add);
router.get('/v1/query',Auth.verifyAdmin,UserController.query);
router.get('/v1/list',Auth.verifyAdmin,UserController.list);
router.put('/v1/update',UserController.update);
router.delete('/v1/delete',Auth.verifyAdmin,UserController.remove);
router.put('/v1/activate',Auth.verifyAdmin,UserController.activate);
router.put('/v1/deactivate',UserController.deactivate);
router.post('/v1/login',UserController.login);

export default router;

