import express from 'express';
import { getCode } from '../controllers/codeController.js';

const router = express.Router();

router.get('/', getCode);

export default router;
