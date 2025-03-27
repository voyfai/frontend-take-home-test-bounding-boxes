import React from 'react';
import {DocumentProps} from '../models/Document';

interface DocumentsTableProps extends DocumentProps {
  onToggleShowAll: () => void;
}
/**
 * Table component that displays document items with selection controls
 * Handles item selection and highlighting:
 * - Displays list of document items with IDs and attributes
 * - Allows selection/highlighting of individual items
 * - Provides toggle between showing all or only selected bounding boxes
 * - Synchronizes selection state with document viewer
 */

const DocumentsTable: React.FC<DocumentsTableProps> = ({
  items,
  selectedItemId,
  selectedOrigin,
  onSelectItem,
  showAllBoxes,
  onToggleShowAll,
}) => {
  /**
   * Handles row click events for item selection
   * @param itemId - ID of the clicked item
   * @param origin - Type/attribute of the clicked item
   * @param e - React mouse event
   * 
   * Note: Ignores clicks that originate from buttons to avoid conflict
   */
  const handleRowClick = (itemId: string, origin: string, e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName !== 'BUTTON') {
      onSelectItem(itemId, origin);
    }
  };
 /**
   * Handles highlight button click events
   * itemId - ID of the item to highlight
   * origin - origin of the item
   * 
   * Behavior:
   * Toggles selection state when clicking the same item
   * Selects new item when clicking different items
   */

  const handleButtonClick = (itemId: string, origin: string) => {
    // If clicking the currently selected item, deselect it
    if (selectedItemId === itemId && selectedOrigin === origin) {
      onSelectItem(null, null); // Deselect all
    } else {
      // Otherwise select the clicked item
      onSelectItem(itemId, origin);
    }
  };
   // Early return if no items available
  if (!items || items.length === 0) return <div>No items available</div>;

  return (
    <div className="documents-table">
      <table>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Attribute</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
              // Check if current item is selected
            const isSelected = selectedItemId === item.itemId && selectedOrigin === item.origin;
            
            return (
              <tr
                key={`${item.itemId}-${item.origin}`}
                className={isSelected ? "selected" : ""}
                onClick={(e) => handleRowClick(item.itemId, item.origin, e)} // Handle row click
              >
                <td>{item.itemId}</td>
                <td>{item.origin}</td>
                <td>
                   {/* Highlight/Unhighlight action button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent row click
                      handleButtonClick(item.itemId, item.origin); // Handle button click
                    }}
                    className="highlight-btn"
                  >
                    {isSelected ? 'Unhighlight' : 'Highlight'}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="table-controls">
        <button onClick={onToggleShowAll}>
          {/* Toggle between showing all or only selected boxes */}
          {showAllBoxes ? 'Show Only Selected' : 'Show All Boxes'}
        </button>
      </div>
    </div>
  );
};

export default DocumentsTable;