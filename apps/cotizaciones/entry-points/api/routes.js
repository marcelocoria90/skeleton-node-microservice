 
// apps/component-a/entry-points/api/routes.js
import { Router } from 'express';
import { getSomeData } from './controllers';

const router = Router();

router.get('/data', getSomeData);

export default router;
