import { Router, Request, Response } from 'express';
import { handleContactMe } from '../controller/contact_controller';

const router = Router();

router.post('/', handleContactMe);

export default router;
