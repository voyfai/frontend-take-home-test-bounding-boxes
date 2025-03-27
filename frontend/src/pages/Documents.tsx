import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDocumentsData } from "../store/documentThunks";
import DocumentViewer from "../components/DocumentViewer";
import "./Documents.css";
import { AppDispatch } from "../store";

const Documents: React.FC = () => {
  // Initialize Redux dispatch with typed AppDispatch
  const dispatch = useDispatch<AppDispatch>();

   /**
   * Effect hook for fetching document data when component mounts
   * Uses Redux thunk action to handle async data fetching
   * Dependency array ensures it only runs once on mount
   */

  useEffect(() => {
    dispatch(fetchDocumentsData());
  }, [dispatch]);

  return (
    <div className="documents-page">
      {/* Page header section */}
      <header>
        <h1>Document Viewer</h1>
      </header>
      {/* Main document viewing component */}
      <DocumentViewer />
    </div>
  );
};

export default Documents;
