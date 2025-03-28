import { Router } from 'express';
import documentData from '../document.json';
import fs from 'fs';
import path from 'path';

const router = Router();

router.get('/getDocument', (req, res) => {
    const documentData = JSON.parse(fs.readFileSync(path.join(__dirname, '../document.json'), 'utf8'));
    res.json(documentData);
});
export default router; 