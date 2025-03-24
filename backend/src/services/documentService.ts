import fs from 'fs';
import path from 'path';
import { Document } from '../interfaces/Document';

export const getDocument = (): Promise<Document> => {
    return new Promise((resolve, reject) => {
        const filePath = path.join(__dirname, '../document.json');
        
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Failed to read document'));
                return;
            }
    
            try {
                const document = JSON.parse(data) as Document;
                resolve(document);
            } catch (error) {
                reject(new Error('Failed to parse document'));
            }
        });
    });
}; 