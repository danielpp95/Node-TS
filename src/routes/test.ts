import { Router } from 'express';
import { testController } from '../controllers/TestController';
const router = Router();

router.get('/', testController.index);

router.get('/api', testController.api);

export default router;