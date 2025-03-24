import { createSlice } from '@reduxjs/toolkit';
import IDocument from '../../models/Document';

interface FilesState {
  documents: IDocument[];
  loading: boolean;
  error: string | null;
}

const initialState: FilesState = {
  documents: [],
  loading: false,
  error: null,
};

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: { }   
});

export const { } = filesSlice.actions;
export default filesSlice.reducer;