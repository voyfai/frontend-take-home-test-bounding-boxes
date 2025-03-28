import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import DocumentsTable from "./DocumentsTable";
import SvgDocument from "./SvgDocument";

const DocumentViewer: React.FC = () => {
  // Get document data from Redux store
  const { documents, currentDocumentId, loading, error } = useSelector(
    (state: RootState) => state.document
  );

  // State for managing document item selection and display
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [selectedOrigin, setSelectedOrigin] = useState<string | null>(null);
  const [showAllBoxes, setShowAllBoxes] = useState<boolean>(true);

  // Get current document and filter items for first page
  const currentDocument = documents.find(
    (doc) => doc.documentId === currentDocumentId
  );
  const page1Items = currentDocument?.items?.filter((item) => item.pageNumber === 1) || [];

  /* Handles selection/deselection of document items
   *  itemId - ID of the selected item
   *  origin -  Origin of the selected item (Optional)
   * 
   * Behavior:
   * - If clicking the same item that's already selected, deselects it and shows all boxes
   * - If clicking a different item, selects it and shows only that item
   */
  const handleSelection = (itemId: string, origin?: string) => {
    // If clicking the same item, toggle selection
    if (selectedItemId === itemId && selectedOrigin === origin) {
      setSelectedItemId(null);
      setSelectedOrigin(null);
      setShowAllBoxes(true);
    } else {
      // Select new item and show only this one
      setSelectedItemId(itemId);
      setSelectedOrigin(origin || null);
      setShowAllBoxes(false);
    }
  };

   /**
   * Toggles between showing all bounding boxes or just the selected one
   * 
   * Behavior:
   * - When switching to "Show All", clears any current selection
   * - When switching to "Show Selected", maintains current selection
   */

  const toggleShowAllBoxes = () => {
    const newShowAll = !showAllBoxes;
    setShowAllBoxes(newShowAll);
    if (newShowAll) {
      // When showing all, clear selection
      setSelectedItemId(null);
      setSelectedOrigin(null);
    }
  };
 
    // Render loading/error states if needed
  if (loading) return <div className="loading">Loading document...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!currentDocument) return <div>Please select a document</div>;
  if (!currentDocument.body) return <div>No image data available</div>;

  return (
    <div className="document-viewer">
      <div className="document-header">
        <h3>Document ID: {currentDocument.documentId}</h3>
      </div>

      <div className="document-content">
         {/* Table showing document items */}
        <DocumentsTable
          items={page1Items}
          selectedItemId={selectedItemId}
          selectedOrigin={selectedOrigin}
          onSelectItem={handleSelection}
          showAllBoxes={showAllBoxes}
          onToggleShowAll={toggleShowAllBoxes}
        />
        
          {/* SVG document viewer with bounding boxes */}
        <SvgDocument
          documentBody={currentDocument.body}
          items={page1Items}
          selectedItemId={selectedItemId}
          selectedOrigin={selectedOrigin}
          showAllBoxes={showAllBoxes}
          onSelectItem={handleSelection}
        />
      </div>
    </div>
  );
};

export default DocumentViewer;