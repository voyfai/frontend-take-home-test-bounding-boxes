import { Document } from '../models/Document';

export const fetchDocuments = async (): Promise<Document[]> => {
  const response = await fetch('http://localhost:8080/api/getDocument');
  if (!response.ok) {
    throw new Error('Failed to fetch documents');
  }
  const data = await response.json();
  // Transform the response if needed (assuming response is an array of documents)
  return Array.isArray(data) ? data : [data];
};