import express from 'express';
import { encrypt } from '../controllers/encryptionController.js';

const router = express.Router();

router.get('/encryption', encrypt);

export default router;
