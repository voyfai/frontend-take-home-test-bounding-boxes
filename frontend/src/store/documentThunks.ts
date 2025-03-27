import { AppThunk } from '.';
import { fetchDocuments } from '../services/documentService';
import {
  fetchDocumentsStart,
  fetchDocumentsSuccess,
  fetchDocumentsFailure,
} from './documentSlice';

// Thunk action to fetch documents asynchronously
// Dispatches start, success, and failure actions based on API response
export const fetchDocumentsData = (): AppThunk => async (dispatch) => {
  try {
    // Dispatch start action to set loading state
    dispatch(fetchDocumentsStart());
    // Fetch documents from API
    const documents = await fetchDocuments();
    // Dispatch success action with fetched documents
    dispatch(fetchDocumentsSuccess(documents));
  } catch (error: unknown) {
    // Dispatch failure action with error message
    dispatch(fetchDocumentsFailure( 
      error instanceof Error ? error.message : "An unexpected error occurred"
    ));
  }
};