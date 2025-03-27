import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Document } from '../models/Document';

interface DocumentState {
  documents: Document[];
  loading: boolean;
  error: string | null;
  currentDocumentId: string | null;
}

const initialState: DocumentState = {
  documents: [],
  loading: false,
  error: null,
  currentDocumentId: null,
};

const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
     /**
     * Reducer for document fetch start action
     * Sets loading state and clears any previous errors
     */
    fetchDocumentsStart(state) {
      state.loading = true;
      state.error = null;
    },
     /**
     * Reducer for successful document fetch
     * @param action - Payload containing fetched documents array
     * Updates documents list
     * Sets first document as current by default
     * Clears loading state and errors
     */
    fetchDocumentsSuccess(state, action: PayloadAction<Document[]>) {
      state.documents = action.payload;
      state.loading = false;
      state.error = null;
      if (action.payload.length > 0) {
        state.currentDocumentId = action.payload[0].documentId;
      }
    },
     /**
     * Reducer for failed document fetch
     * @param action - Payload containing error message
     * - Stores error message
     * - Clears loading state
     */
    fetchDocumentsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
      /**
     * Reducer for setting current document
     * @param action - Payload containing document ID to select
     */
    setCurrentDocument(state, action: PayloadAction<string>) {
      state.currentDocumentId = action.payload;
    },
  },
});
// Export generated action creators
export const {
  fetchDocumentsStart,
  fetchDocumentsSuccess,
  fetchDocumentsFailure,
  setCurrentDocument,
} = documentSlice.actions;
// Export the reducer function for the slice
export default documentSlice.reducer;