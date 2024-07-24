import express from 'express';
import { getEducationGap } from '../controllers/educationGapController.js';

const router = express.Router();

router.get('/', getEducationGap);

export default router;
